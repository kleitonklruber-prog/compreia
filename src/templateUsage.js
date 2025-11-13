
// ==================================
// src/templateUsage.js
// Como usar os templates
// ==================================

import { TEMPLATE_TR, TEMPLATE_ETP, TEMPLATE_DFD, preencherTemplate } from "./templates";

export function gerarDocumento(tipo, dados) {
  const mapas = {
    tr: TEMPLATE_TR,
    etp: TEMPLATE_ETP,
    dfd: TEMPLATE_DFD,
  };

  const template = mapas[tipo];
  if (!template) throw new Error("Tipo de documento inválido.");

  return preencherTemplate(template, dados);
}

// Exemplo de uso:
// const texto = gerarDocumento("tr", { item: "Papel A4", quantidade: 50 });
