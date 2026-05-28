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

function toHashSlug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const commandByHash = new Map(commands.map((command) => [toHashSlug(command.value), command]));

const categoryNames = ["Todos", ...new Set(commands.map((command) => command.category))];
let activeCategory = "Todos";

const listCards = Array.from(document.querySelectorAll("#git, #welcome, [id^='cardgit']"));
const selectTema = document.getElementById("select_tema");
const commandSearch = document.getElementById("command_search");
const categoryFilters = document.getElementById("category_filters");
const commandResults = document.getElementById("command_results");
const contentPanel = document.querySelector(".cajaCentral");


const commandInsights = {
  git: {
    what: "Explica el propósito de Git como sistema distribuido para registrar versiones y colaborar.",
    when: "Úsalo como punto de partida antes de practicar comandos específicos.",
    caution: "Antes de comandos avanzados, asegúrate de entender commit, rama y repositorio.",
    related: ["git init", "git clone", "git status"]
  },
  cardgitInit: {
    what: "Inicializa una carpeta como repositorio Git y crea su historial local.",
    when: "Úsalo cuando empiezas un proyecto nuevo desde cero.",
    caution: "Ejecutarlo en la carpeta incorrecta puede crear repositorios anidados difíciles de mantener.",
    related: ["git status", "git add", "git commit"]
  },
  cardgitClone: {
    what: "Crea una copia local completa de un repositorio remoto.",
    when: "Úsalo para empezar a trabajar sobre un proyecto existente de GitHub u otro servidor.",
    caution: "Verifica la URL y permisos del repositorio antes de clonar.",
    related: ["git remote add", "git fetch", "git pull"]
  },
  cardgitBranch: {
    what: "Gestiona líneas de trabajo independientes para desarrollar sin afectar la rama principal.",
    when: "Úsalo para nuevas funcionalidades, experimentos o correcciones aisladas.",
    caution: "Elimina ramas solo cuando confirmes que sus cambios ya fueron integrados o no se necesitan.",
    related: ["git checkout", "git merge", "git rebase"]
  },
  cardgitCheckout: {
    what: "Cambia entre ramas o restaura archivos a una versión específica.",
    when: "Úsalo para moverte a otra rama o descartar cambios de un archivo concreto.",
    caution: "Restaurar archivos puede sobrescribir trabajo local no guardado.",
    related: ["git branch", "git status", "git stash"]
  },
  cardgitReset: {
    what: "Mueve referencias del historial y puede deshacer cambios preparados o commits.",
    when: "Úsalo para corregir commits locales antes de compartirlos.",
    caution: "git reset --hard borra cambios locales; úsalo solo si estás seguro.",
    related: ["git revert", "git status", "git diff"]
  }
};

const categoryInsights = {
  "Fundamentos": {
    what: "Forma parte del flujo base para crear, revisar y guardar cambios en Git.",
    when: "Úsalo durante el ciclo diario de trabajo: revisar, preparar y confirmar cambios.",
    caution: "Revisa siempre el estado antes de confirmar para evitar incluir archivos no deseados."
  },
  "Ramas e historial": {
    what: "Ayuda a explorar historial, comparar cambios o trabajar con ramas.",
    when: "Úsalo cuando necesitas entender evolución del proyecto o aislar trabajo.",
    caution: "Confirma o guarda tus cambios antes de cambiar de rama o reescribir historial."
  },
  "Remotos": {
    what: "Permite sincronizar tu repositorio local con servidores remotos.",
    when: "Úsalo para colaborar, descargar avances del equipo o publicar commits.",
    caution: "Antes de mezclar cambios remotos, revisa tu estado local para reducir conflictos."
  },
  "Deshacer cambios": {
    what: "Sirve para guardar temporalmente, revertir o descartar cambios.",
    when: "Úsalo para corregir errores o limpiar tu área de trabajo.",
    caution: "Prefiere opciones reversibles como revert o stash antes de comandos destructivos."
  },
  "Configuración": {
    what: "Personaliza identidad, preferencias y comportamiento de Git.",
    when: "Úsalo al configurar un equipo nuevo o ajustar tu flujo de trabajo.",
    caution: "Distingue entre configuración global y local para no afectar otros proyectos."
  },
  "Seguridad SSH": {
    what: "Configura autenticación segura mediante llaves SSH.",
    when: "Úsalo para conectarte a repositorios remotos sin escribir contraseña cada vez.",
    caution: "Nunca compartas tu llave privada; solo registra la llave pública."
  }
};


const initialOption = "git";
muestraCard(initialOption);
renderCategoryFilters();
renderCommandResults();
renderCommandInsights();
bindCopyButtons();
initCommandFromHash();

window.addEventListener("hashchange", () => {
  const hashCommand = getCommandFromHash();
  if (hashCommand) {
    selectCommand(hashCommand.id, { shouldScroll: false, updateHash: false });
  }
});

if (selectTema) {
  selectTema.addEventListener("change", () => {
    const selectedCommand = commandByValue.get(selectTema.value) || commandById.get("git");
    selectCommand(selectedCommand.id, { shouldScroll: true });
  });
}

if (commandSearch) {
  commandSearch.addEventListener("input", renderCommandResults);
}

const resetButton = document.getElementById("limpiar");
if (resetButton) {
  resetButton.addEventListener("click", limpiarInput);
}

function getCommandFromHash() {
  const rawHash = window.location.hash.replace(/^#/, "").trim();
  if (!rawHash) return null;
  return commandByHash.get(rawHash) || null;
}

function initCommandFromHash() {
  const hashCommand = getCommandFromHash();
  if (hashCommand) {
    selectCommand(hashCommand.id, { shouldScroll: false, updateHash: false });
  }
}

function getCommandInsight(command) {
  return commandInsights[command.id] || {
    ...categoryInsights[command.category],
    related: getRelatedCommands(command)
  };
}

function getRelatedCommands(command) {
  return commands
    .filter((candidate) => candidate.category === command.category && candidate.id !== command.id)
    .slice(0, 3)
    .map((candidate) => candidate.label);
}

function renderCommandInsights() {
  commands.forEach((command) => {
    const section = document.getElementById(command.id);
    if (!section || section.querySelector(".learning-blocks")) return;

    const insight = getCommandInsight(command);
    const related = insight.related?.length ? insight.related : getRelatedCommands(command);
    const title = section.querySelector(".titulo");
    const referenceNode = title?.nextElementSibling?.tagName === "P" ? title.nextElementSibling : title;
    const blocks = document.createElement("div");

    blocks.className = "learning-blocks";
    blocks.innerHTML = `
      <article class="learning-block">
        <span>Qué hace</span>
        <p>${insight.what}</p>
      </article>
      <article class="learning-block">
        <span>Cuándo usarlo</span>
        <p>${insight.when}</p>
      </article>
      <article class="learning-block learning-block--warning">
        <span>Precaución</span>
        <p>${insight.caution}</p>
      </article>
      <article class="learning-block">
        <span>Relacionados</span>
        <p>${related.join(" · ")}</p>
      </article>
    `;

    referenceNode?.insertAdjacentElement("afterend", blocks);
  });
}

function bindCopyButtons() {
  document.querySelectorAll(".copy-button[data-copy-target]").forEach((button) => {
    button.addEventListener("click", () => copyCode(button.dataset.copyTarget, button));
  });
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

  const shouldUpdateHash = options.updateHash !== false;
  if (shouldUpdateHash) {
    const nextHash = toHashSlug(command.value);
    if (window.location.hash !== `#${nextHash}`) {
      history.replaceState(null, "", `#${nextHash}`);
    }
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
  selectCommand("git", { shouldScroll: true, updateHash: true });
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
  const code = document.getElementById(elementId);
  const originalText = button?.textContent || "📃";

  if (!code) {
    console.error("Elemento no encontrado:", elementId);
    return;
  }

  navigator.clipboard.writeText(code.innerText || code.textContent)
    .then(() => {
      if (button) {
        button.textContent = "✅";
        button.setAttribute("aria-label", "Comando copiado");

        window.setTimeout(() => {
          button.textContent = originalText;
          button.setAttribute("aria-label", `Copiar comando ${elementId.replaceAll("_", " ")}`);
        }, 1600);
      }
    })
    .catch((err) => {
      console.error("Error al copiar:", err);
    });
}

async function askOpenAI(question) {
  const response = await fetch("/api/git-assistant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "No se pudo completar la consulta.");
  }

  if (data?.answer) {
    return data.answer;
  }

  throw new Error("No se pudo obtener respuesta");
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
    ansElem.textContent = err?.message || 'Error al consultar IA';
    console.error(err);
  }
});

// commit echo desde el editor de codigo incorporado en github
