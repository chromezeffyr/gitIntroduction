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

function getOpenAIApiKey() {
  // Para entornos Node (por ejemplo durante la construcción o pruebas)
  if (typeof process !== "undefined" && process?.env?.OPENAI_API_KEY) {
    return { key: String(process.env.OPENAI_API_KEY).trim(), source: "env" };
  }

  if (typeof document !== "undefined") {
    // Para la web: se puede inyectar mediante una etiqueta <meta>
    const metaToken = document.querySelector('meta[name="openai-api-key"]');
    if (metaToken?.content) {
      return { key: metaToken.content.trim(), source: "dom" };
    }

    // O mediante un input oculto (útil si se carga dinámicamente)
    const hiddenInput = document.querySelector('input[type="hidden"][name="openai-api-key"], input[type="hidden"]#openai-api-key');
    if (hiddenInput?.value) {
      return { key: hiddenInput.value.trim(), source: "dom" };
    }
  }

  return { key: "", source: "none" };
}

function assertOpenAISafety(apiKeySource) {
  // Cuando se expone la clave desde el DOM, impedir su uso en contextos no seguros
  if (apiKeySource === "dom" && typeof window !== "undefined") {
    const isLocalhost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
    const isSecure = window.isSecureContext === true;

    if (!isSecure && !isLocalhost) {
      throw new Error(
        "La clave de OpenAI solo debe inyectarse en contextos seguros (HTTPS o localhost). Considera usar un backend proxy."
      );
    }

    console.warn(
      "Advertencia: la clave de OpenAI está disponible en el cliente. Evita exponerla en producción; usa un servicio backend para firmar las solicitudes."
    );
  }
}

const { key: OPENAI_API_KEY, source: OPENAI_API_KEY_SOURCE } = getOpenAIApiKey();

async function askOpenAI(question) {
  if (!OPENAI_API_KEY) {
    throw new Error('Falta la clave de API de OpenAI.');
  }

  assertOpenAISafety(OPENAI_API_KEY_SOURCE);

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + OPENAI_API_KEY
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Eres un asistente que responde preguntas sobre Git en español.' },
        { role: 'user', content: question }
      ],
      temperature: 0.2
    })
  });

  const data = await response.json();
  if (data.choices && data.choices.length > 0) {
    return data.choices[0].message.content.trim();
  }
  throw new Error('No se pudo obtener respuesta');
}

document.getElementById('ai_ask').addEventListener('click', async () => {
  const question = document.getElementById('ai_question').value;
  if (!question) return;
  const ansElem = document.getElementById('ai_answer');
  ansElem.textContent = 'Consultando...';
  try {
    const answer = await askOpenAI(question);
    ansElem.textContent = answer;
  } catch (err) {
    ansElem.textContent = 'Error al consultar IA';
    console.error(err);
  }
});

// commit echo desde el editor de codigo incorporado en github
