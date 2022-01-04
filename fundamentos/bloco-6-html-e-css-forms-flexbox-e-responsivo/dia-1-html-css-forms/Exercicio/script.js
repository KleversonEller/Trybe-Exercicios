window.onload = function () {
  function criaEstados() {
    let estados = document.querySelector("#estados");
    let listaEstados = [
      "Acre (AC)",
      "Alagoas (AL)",
      "Amapá (AP)",
      "Amazonas (AM)",
      "Bahia (BA)",
      "Ceará (CE)",
      "Distrito Federal (DF)",
      "Espírito Santo (ES)",
      "Goiás (GO)",
      "Maranhão (MA)",
      "Mato Grosso (MT)",
      "Mato Grosso do Sul (MS)",
      "Minas Gerais (MG)",
      "Pará (PA)",
      "Paraíba (PB)",
      "Paraná (PR)",
      "Pernambuco (PE)",
      "Piauí (PI)",
      "Rio de Janeiro (RJ)",
      "Rio Grande do Norte (RN)",
      "Rio Grande do Sul (RS)",
      "Rondônia (RO)",
      "Roraima (RR)",
      "Santa Catarina (SC)",
      "São Paulo (SP)",
      "Sergipe (SE)",
      "Tocantins (TO)",
    ];

    let listaSiglas = [
      "ac",
      "al",
      "ap",
      "am",
      "ba",
      "ce",
      "df",
      "es",
      "go",
      "ma",
      "mt",
      "ms",
      "mg",
      "pa",
      "pb",
      "pr",
      "pe",
      "pi",
      "rj",
      "rn",
      "rs",
      "ro",
      "rr",
      "sc",
      "sp",
      "se",
      "to",
    ];

    for (let estado in listaEstados) {
      let cria = document.createElement("option");
      cria.innerHTML = listaEstados[estado];
      cria.value = listaSiglas[estado];

      estados.appendChild(cria);
    }
  }
  criaEstados();

  let botaoEnviar = document.querySelector("#enviar");

  botaoEnviar.addEventListener("click", function (evento) {
    evento.preventDefault();
    let valores = [
      "nome",
      "email",
      "cpf",
      "endereço",
      "cidade",
      "resumo-curriculo",
      "cargo",
      "desc-cargo",
      "data",
    ];
    limpar();
    for (let validador of valores) {
      let resumo = document.querySelector("#resumo");
      let erros = document.querySelector("#erros");
      let cria = document.createElement("p");
      let validarCampo = document.querySelector(`[name=${validador}]`).value;
      if (validarCampo.length > 0) {
        cria.innerHTML = `${validador}: ${validarCampo}`;
        resumo.appendChild(cria);
      } else {
        cria.innerHTML = `Você deve preencher o campo: ${validador}`;
        erros.appendChild(cria);
      }
    }
  });

  function limpar() {
    let resumo = document.querySelector("#resumo");
    let erros = document.querySelector("#erros");
    let limparResumo = document.querySelectorAll("#resumo p");
    let limparErros = document.querySelectorAll("#erros p");
    if (limparErros.length > 0) {
      for (let possicao of limparErros) {
        erros.removeChild(possicao);
      }
    }

    if (limparResumo.length > 0) {
      for (let possicao of limparResumo) {
        resumo.removeChild(possicao);
      }
    }
  }

  let botaoLimpar = document.querySelector("#limpar");

  botaoLimpar.addEventListener("click", limpar);
};
