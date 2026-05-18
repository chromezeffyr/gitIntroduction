const commands = [
  {
    value: "git",
    id: "git",
    label: "Qué es Git",
    category: "Fundamentos",
    description: "Conceptos base de control de versiones distribuido.",
    keywords: "introducción versionado repositorio commit branch merge aprender básico"
  },
  {
    value: "git init",
    id: "cardgitInit",
    label: "git init",
    category: "Fundamentos",
    description: "Crea un repositorio Git nuevo en una carpeta local.",
    keywords: "iniciar crear repositorio nuevo proyecto local"
  },
  {
    value: "git clone",
    id: "cardgitClone",
    label: "git clone",
    category: "Fundamentos",
    description: "Descarga una copia local de un repositorio remoto.",
    keywords: "clonar descargar copiar repositorio remoto github"
  },
  {
    value: "git status",
    id: "cardgitStatus",
    label: "git status",
    category: "Fundamentos",
    description: "Muestra archivos modificados, preparados y pendientes.",
    keywords: "estado cambios staged unstaged revisar pendiente"
  },
  {
    value: "git add",
    id: "cardgitAdd",
    label: "git add",
    category: "Fundamentos",
    description: "Prepara archivos para incluirlos en el siguiente commit.",
    keywords: "agregar preparar stage staged archivo cambios"
  },
  {
    value: "git commit",
    id: "cardgitCommit",
    label: "git commit",
    category: "Fundamentos",
    description: "Guarda cambios preparados en el historial del repositorio.",
    keywords: "guardar confirmar mensaje historial snapshot cambios"
  },
  {
    value: "git branch",
    id: "cardgitBranch",
    label: "git branch",
    category: "Ramas e historial",
    description: "Lista, crea o elimina ramas de trabajo.",
    keywords: "rama ramas crear eliminar listar branch desarrollo"
  },
  {
    value: "git checkout",
    id: "cardgitCheckout",
    label: "git checkout",
    category: "Ramas e historial",
    description: "Cambia de rama o restaura versiones de archivos.",
    keywords: "cambiar rama restaurar moverse version archivo"
  },
  {
    value: "git tag",
    id: "cardgitTag",
    label: "git tag",
    category: "Ramas e historial",
    description: "Marca versiones importantes del historial.",
    keywords: "etiqueta release versión marcar tag"
  },
  {
    value: "git show",
    id: "cardgitShow",
    label: "git show",
    category: "Ramas e historial",
    description: "Inspecciona detalles de un commit u objeto Git.",
    keywords: "mostrar detalle commit objeto inspeccionar"
  },
  {
    value: "git log",
    id: "cardgitLog",
    label: "git log",
    category: "Ramas e historial",
    description: "Consulta el historial de commits del proyecto.",
    keywords: "historial commits registro revisar versiones"
  },
  {
    value: "git diff",
    id: "cardgitDiff",
    label: "git diff",
    category: "Ramas e historial",
    description: "Compara cambios entre archivos, commits o ramas.",
    keywords: "comparar diferencias cambios archivo commit rama"
  },
  {
    value: "git merge",
    id: "cardgitMerge",
    label: "git merge",
    category: "Ramas e historial",
    description: "Integra cambios de una rama en otra.",
    keywords: "fusionar unir rama cambios integrar conflicto"
  },
  {
    value: "git rebase",
    id: "cardgitRebase",
    label: "git rebase",
    category: "Ramas e historial",
    description: "Reaplica commits sobre otra base para ordenar historial.",
    keywords: "rebase reorganizar historial commits base rama"
  },
  {
    value: "git remote add",
    id: "cardgitRemoteAdd",
    label: "git remote add",
    category: "Remotos",
    description: "Conecta el repositorio local con un origen remoto.",
    keywords: "remoto origin github agregar conectar url"
  },
  {
    value: "git remote remove",
    id: "cardgitRemoteRemove",
    label: "git remote remove",
    category: "Remotos",
    description: "Elimina una referencia remota del repositorio local.",
    keywords: "remoto eliminar quitar origin url"
  },
  {
    value: "git fetch",
    id: "cardgitFetch",
    label: "git fetch",
    category: "Remotos",
    description: "Descarga referencias remotas sin mezclar cambios.",
    keywords: "descargar remoto traer cambios seguro actualizar referencias"
  },
  {
    value: "git pull",
    id: "cardgitPull",
    label: "git pull",
    category: "Remotos",
    description: "Descarga y fusiona cambios remotos en la rama actual.",
    keywords: "bajar actualizar descargar fusionar remoto cambios"
  },
  {
    value: "git push",
    id: "cardgitPush",
    label: "git push",
    category: "Remotos",
    description: "Sube commits locales a un repositorio remoto.",
    keywords: "subir enviar publicar cambios remoto github"
  },
  {
    value: "git revert",
    id: "cardgitRevert",
    label: "git revert",
    category: "Deshacer cambios",
    description: "Crea un nuevo commit que revierte cambios anteriores.",
    keywords: "deshacer revertir seguro commit anterior"
  },
  {
    value: "git stash",
    id: "cardgitStash",
    label: "git stash",
    category: "Deshacer cambios",
    description: "Guarda cambios temporalmente sin crear commit.",
    keywords: "guardar temporal cambios limpiar trabajo pendiente"
  },
  {
    value: "git reset",
    id: "cardgitReset",
    label: "git reset",
    category: "Deshacer cambios",
    description: "Mueve HEAD y puede deshacer cambios preparados o commits.",
    keywords: "reset deshacer peligro hard soft mixed head"
  },
  {
    value: "git config",
    id: "cardgitConfig",
    label: "git config",
    category: "Configuración",
    description: "Configura usuario, correo, alias y preferencias de Git.",
    keywords: "configurar usuario email correo alias editor"
  },
  {
    value: "generar ssh (windows)",
    id: "cardgitSSHW",
    label: "Generar SSH en Windows",
    category: "Seguridad SSH",
    description: "Crea una llave SSH para autenticarte desde Windows.",
    keywords: "ssh windows llave clave keygen autenticación github"
  },
  {
    value: "generar ssh (linux)",
    id: "cardgitSSHL",
    label: "Generar SSH en Linux",
    category: "Seguridad SSH",
    description: "Crea y registra una llave SSH en Linux o macOS.",
    keywords: "ssh linux macos llave clave keygen agent autenticación"
  }
];

const commandByValue = new Map(commands.map((command) => [command.value, command]));
const commandById = new Map(commands.map((command) => [command.id, command]));
const categoryNames = ["Todos", ...new Set(commands.map((command) => command.category))];
let activeCategory = "Todos";

const listCards = Array.from(document.querySelectorAll("#git, #welcome, [id^='cardgit']"));
const selectTema = document.getElementById("select_tema");
const commandSearch = document.getElementById("command_search");
const categoryFilters = document.getElementById("category_filters");
const commandResults = document.getElementById("command_results");
const contentPanel = document.querySelector(".cajaCentral");

const initialOption = "git";
muestraCard(initialOption);
renderCategoryFilters();
renderCommandResults();

if (selectTema) {
  selectTema.addEventListener("change", () => {
    const selectedCommand = commandByValue.get(selectTema.value) || commandById.get("git");
    selectCommand(selectedCommand.id, { shouldScroll: true });
  });
}

if (commandSearch) {
  commandSearch.addEventListener("input", renderCommandResults);
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getFilteredCommands() {
  const query = normalizeText(commandSearch?.value.trim() || "");

  return commands.filter((command) => {
    const matchesCategory = activeCategory === "Todos" || command.category === activeCategory;
    const searchableText = normalizeText([
      command.label,
      command.value,
      command.category,
      command.description,
      command.keywords
    ].join(" "));
    const matchesQuery = !query || searchableText.includes(query);

    return matchesCategory && matchesQuery;
  });
}

function renderCategoryFilters() {
  if (!categoryFilters) return;

  categoryFilters.innerHTML = categoryNames.map((category) => `
    <button
      class="category-chip${category === activeCategory ? " is-active" : ""}"
      type="button"
      data-category="${category}"
      aria-pressed="${category === activeCategory}"
    >
      ${category}
    </button>
  `).join("");

  categoryFilters.querySelectorAll(".category-chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategoryFilters();
      renderCommandResults();
    });
  });
}

function renderCommandResults() {
  if (!commandResults) return;

  const filteredCommands = getFilteredCommands();

  if (!filteredCommands.length) {
    commandResults.innerHTML = `
      <p class="empty-results">No encontramos comandos con ese filtro. Intenta con palabras como rama, remoto, deshacer o commit.</p>
    `;
    return;
  }

  commandResults.innerHTML = filteredCommands.map((command) => `
    <button class="command-result" type="button" data-command-id="${command.id}">
      <span class="command-result__category">${command.category}</span>
      <strong>${command.label}</strong>
      <span>${command.description}</span>
    </button>
  `).join("");

  commandResults.querySelectorAll(".command-result").forEach((button) => {
    button.addEventListener("click", () => {
      selectCommand(button.dataset.commandId, { shouldScroll: true });
    });
  });
}

function selectCommand(commandId, options = {}) {
  const command = commandById.get(commandId) || commandById.get("git");

  muestraCard(command.id);

  if (selectTema) {
    selectTema.value = command.value;
  }

  if (options.shouldScroll && contentPanel) {
    contentPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  updateActiveResult(command.id);
}

function updateActiveResult(commandId) {
  if (!commandResults) return;

  commandResults.querySelectorAll(".command-result").forEach((button) => {
    const isActive = button.dataset.commandId === commandId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function limpiarInput() {
  if (selectTema) {
    selectTema.value = "git";
  }

  if (commandSearch) {
    commandSearch.value = "";
  }

  activeCategory = "Todos";
  renderCategoryFilters();
  renderCommandResults();
  selectCommand("git", { shouldScroll: true });
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
