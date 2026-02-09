const i18n = {
  pt: {
    appTitle: "Orçamento pessoal",
    navRegister: "Cadastro",
    navSearch: "Consulta",
    newExpense: "Registro de nova despesa",
    year: "Ano",
    month: "Mês",
    day: "Dia",
    type: "Tipo",
    description: "Descrição",
    value: "Valor",
    back: "Voltar",

    food: "Alimentação",
    education: "Educação",
    leisure: "Lazer",
    health: "Saúde",
    transport: "Transporte"
  },
  en: {
    appTitle: "Personal Budget",
    navRegister: "Register",
    navSearch: "Search",
    newExpense: "New Expense",
    year: "Year",
    month: "Month",
    day: "Day",
    type: "Type",
    description: "Description",
    value: "Amount",
    back: "Back",

    food: "Food",
    education: "Education",
    leisure: "Leisure",
    health: "Health",
    transport: "Transport"
  }
};

let lang = "en"; // muda pra "pt" se quiser

function t(key) {
  return i18n[lang][key];
}

function applyLanguage() {
  // Title da página
  if (document.getElementById("pageTitle")) {
    document.getElementById("pageTitle").innerText = t("appTitle");
  }
  document.title = t("appTitle");

  // Menu
  const navRegister = document.getElementById("navRegister");
  if (navRegister) navRegister.innerText = t("navRegister");

  const navSearch = document.getElementById("navSearch");
  if (navSearch) navSearch.innerText = t("navSearch");

  // Títulos das páginas
  const titleNew = document.getElementById("titleNewExpense");
  if (titleNew) titleNew.innerText = t("newExpense");

  const titleSearch = document.getElementById("titleSearchExpenses");
  if (titleSearch) titleSearch.innerText = t("navSearch") + " " + t("description"); // ou ajuste se quiser

  // Selects: Ano / Mês / Tipo (labels)
  const optYear = document.getElementById("optYear");
  if (optYear) optYear.innerText = t("year");

  const optMonth = document.getElementById("optMonth");
  if (optMonth) optMonth.innerText = t("month");

  const optType = document.getElementById("optType");
  if (optType) optType.innerText = t("type");

  // Meses
  const months = [
    null,
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  for (let i = 1; i <= 12; i++) {
    const el = document.getElementById("month" + i);
    if (el) {
      if (lang === "pt") {
        const ptMonths = [null,
          "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
          "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
        ];
        el.innerText = ptMonths[i];
      } else {
        el.innerText = months[i];
      }
    }
  }

  // Tipos
  const typeFood = document.getElementById("typeFood");
  if (typeFood) typeFood.innerText = t("food");

  const typeEducation = document.getElementById("typeEducation");
  if (typeEducation) typeEducation.innerText = t("education");

  const typeLeisure = document.getElementById("typeLeisure");
  if (typeLeisure) typeLeisure.innerText = t("leisure");

  const typeHealth = document.getElementById("typeHealth");
  if (typeHealth) typeHealth.innerText = t("health");

  const typeTransport = document.getElementById("typeTransport");
  if (typeTransport) typeTransport.innerText = t("transport");

  // Placeholders
  const dia = document.getElementById("dia");
  if (dia) dia.placeholder = t("day");

  const descricao = document.getElementById("descricao");
  if (descricao) descricao.placeholder = t("description");

  const valor = document.getElementById("valor");
  if (valor) valor.placeholder = t("value");

  // Botão do modal
  const btnBack = document.getElementById("botaoModal");
  if (btnBack) btnBack.innerText = t("back");

  // Cabeçalho da tabela (consulta.html)
  const thDate = document.getElementById("thDate");
  if (thDate) thDate.innerText = t("day");

  const thType = document.getElementById("thType");
  if (thType) thType.innerText = t("type");

  const thDescription = document.getElementById("thDescription");
  if (thDescription) thDescription.innerText = t("description");

  const thValue = document.getElementById("thValue");
  if (thValue) thValue.innerText = t("value");
}
