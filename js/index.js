const cardIdInit = document.getElementById("cardgitInit");
const cardIdClone = document.getElementById("cardgitClone");
const cardIdBranch = document.getElementById("cardgitBranch");
const cardIdCheckout = document.getElementById("cardgitCheckout");
const cardIdTag = document.getElementById("cardgitTag");
const cardIdShow = document.getElementById("cardgitShow");
const cardIdLog = document.getElementById("cardgitLog");
const cardIdFetch = document.getElementById("cardgitFetch");
const cardIdPull = document.getElementById("cardgitPull");
const cardIdPush = document.getElementById("cardgitPush");
const cardIdMerge = document.getElementById("cardgitMerge");
const cardIdReset = document.getElementById("cardgitReset");
const cardIdSSHW = document.getElementById("cardgitSSHW");
const cardIdSSHL = document.getElementById("cardgitSSHL");
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
  cardIdFetch,
  cardIdPull,
  cardIdPush,
  cardIdMerge,
  cardIdReset,
  cardIdSSHW,
  cardIdSSHL,
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
    "git fetch": "cardgitFetch",
    "git pull": "cardgitPull",
    "git push": "cardgitPush",
    "git merge": "cardgitMerge",
    "git reset": "cardgitReset",
    "generar ssh (windows)": "cardgitSSHW",
    "generar ssh (linux)": "cardgitSSHL",
    "welcome":"welcome",
  };

  selectedOption = gitOptions[selectedOption] || "welcome";
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

