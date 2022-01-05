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

  botaoEnviar.addEventListener("click", function () {
    let forms = document.querySelectorAll(".needs-validation");

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  });

  let botaoLimpar = document.querySelector("#limpar");

  botaoLimpar.addEventListener("click", function () {
    location.reload();
  });
};
