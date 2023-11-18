import { Posto } from "./posto.js";
import { Combustivel } from "./combustivel.js";

document.getElementById("enviar").addEventListener("click", function () {
  const gasolinaA = new Combustivel(
    "Gasolina",
    parseFloat(document.getElementById("gasolinaA").value)
  );
  const etanolA = new Combustivel(
    "Etanol",
    parseFloat(document.getElementById("etanolA").value)
  );

  const gasolinaB = new Combustivel(
    "Gasolina",
    parseFloat(document.getElementById("gasolinaB").value)
  );
  const etanolB = new Combustivel(
    "Etanol",
    parseFloat(document.getElementById("etanolB").value)
  );

  const gasolinaC = new Combustivel(
    "Gasolina",
    parseFloat(document.getElementById("gasolinaC").value)
  );
  const etanolC = new Combustivel(
    "Etanol",
    parseFloat(document.getElementById("etanolC").value)
  );

  const postoA = new Posto("Posto A", gasolinaA, etanolA);
  const postoB = new Posto("Posto B", gasolinaB, etanolB);
  const postoC = new Posto("Posto C", gasolinaC, etanolC);

  const sugestaoA = postoA.sugereCombustivel(gasolinaA, etanolA);
  const sugestaoB = postoB.sugereCombustivel(gasolinaB, etanolB);
  const sugestaoC = postoC.sugereCombustivel(gasolinaC, etanolC);

  document.getElementById("saidaA").textContent = sugestaoA;
  document.getElementById("saidaB").textContent = sugestaoB;
  document.getElementById("saidaC").textContent = sugestaoC;
});
