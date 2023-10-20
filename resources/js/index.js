const cardIdInit = document.getElementById("cardgitInit");
const cardIdClone = document.getElementById("cardgitClone");
const cardIdBranch = document.getElementById("cardgitBranch");
const cardIdCheckout = document.getElementById("cardgitCheckout");
const cardIdTag = document.getElementById("cardgitTag");
const cardIdShow = document.getElementById("cardgitShow");
const cardIdLog = document.getElementById("cardgitLog");
const cardIdStatus = document.getElementById("cardgitStatus");
const cardIdFetch = document.getElementById("cardgitFetch");
const cardIdPull = document.getElementById("cardgitPull");
const cardIdPush = document.getElementById("cardgitPush");
const cardIdMerge = document.getElementById("cardgitMerge");
const cardIdReset = document.getElementById("cardgitReset");
const cardIdSSHW = document.getElementById("cardgitSSHW");
const cardIdSSHL = document.getElementById("cardgitSSHL");
const cardIdConfig = document.getElementById("cardgitConfig");
const cardIdRemoteAdd = document.getElementById("cardgitRemoteAdd");
const cardIdRemoteRemove = document.getElementById("cardgitRemoteRemove");
const cardIdRebase = document.getElementById("cardgitRebase");
const cardIdRevert = document.getElementById("cardgitRevert");
const cardIdDiff = document.getElementById("cardgitDiff");
const cardIdStash = document.getElementById("cardgitStash");
const cardIdCommit = document.getElementById("cardgitCommit");
const cardIdAdd = document.getElementById("cardgitAdd");
const git = document.getElementById("git");
const welcome = document.getElementById("welcome");

const listCards = [
  cardIdInit,
  cardIdClone,
  cardIdBranch,
  cardIdCheckout,
  cardIdTag,
  cardIdShow,
  cardIdLog,
  cardIdStatus,
  cardIdFetch,
  cardIdPull,
  cardIdPush,
  cardIdMerge,
  cardIdReset,
  cardIdSSHW,
  cardIdSSHL,
  cardIdConfig,
  cardIdRemoteAdd,
  cardIdRemoteRemove,
  cardIdRebase,
  cardIdRevert,
  cardIdDiff,
  cardIdStash,
  cardIdCommit,
  cardIdAdd,
  git,
  welcome
];

const selectTema = document.getElementById("select_tema");

const initialOption = "git";
muestraCard(initialOption);



selectTema.addEventListener("change", () => {
  let selectedOption = selectTema.value;

  const gitOptions = {
    "git":"git",
    "git init": "cardgitInit",
    "git clone": "cardgitClone",
    "git branch": "cardgitBranch",
    "git checkout": "cardgitCheckout",
    "git tag": "cardgitTag",
    "git show": "cardgitShow",
    "git log": "cardgitLog",
    "git status": "cardgitStatus",
    "git fetch": "cardgitFetch",
    "git pull": "cardgitPull",
    "git push": "cardgitPush",
    "git merge": "cardgitMerge",
    "git reset": "cardgitReset",
    "generar ssh (windows)": "cardgitSSHW",
    "generar ssh (linux)": "cardgitSSHL",
    "git config": "cardgitConfig",
    "git remote add": "cardgitRemoteAdd",
    "git remote remove": "cardgitRemoteRemove",
    "git rebase": "cardgitRebase",
    "git revert": "cardgitRevert",
    "git diff": "cardgitDiff",
    "git stash": "cardgitStash",
    "git commit": "cardgitCommit",
    "git add": "cardgitAdd",
    "welcome":"welcome",
  };

  selectedOption = gitOptions[selectedOption] || "git";
  muestraCard(selectedOption);
});


function limpiarInput() {
  document.getElementById("select_tema").value = "";
  let seleccionDefault = "git";
  muestraCard(seleccionDefault);
}


function muestraCard(select) {
  listCards.forEach((element) => {
    if (element.id === select) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", true);
    }
  });
}


function copyCode(elementId, button) {
  var code = document.getElementById(elementId);
  if (code) {
      var range = document.createRange();
      window.getSelection().removeAllRanges();
      range.selectNode(code);
      window.getSelection().addRange(range);
      navigator.clipboard.writeText(code.innerText || code.textContent)
          .then(() => {
              // Cambia el ícono a '✅' cuando la copia es exitosa
              button.textContent = '✅';
          })
          .catch(err => {
              console.error('Error al copiar:', err);
          });
      window.getSelection().removeAllRanges();
  } else {
      console.error('Elemento no encontrado:', elementId);
  }
}
