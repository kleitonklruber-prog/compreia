// src/GeradorDocumentos.jsx
import React from "react";
import { jsPDF } from "jspdf";

// ===== Helpers gerais =====

function addCabecalhoPiaui(doc, titulo) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("GOVERNO DO ESTADO DO PIAUÍ", 105, 18, { align: "center" });
  doc.setFontSize(10);
  doc.text("SECRETARIA DE ADMINISTRAÇÃO – SEAD", 105, 24, {
    align: "center",
  });
  doc.setFontSize(9);
  doc.text("COMPRIA – Assistente inteligente para compras públicas", 105, 30, {
    align: "center",
  });

  doc.setDrawColor(180);
  doc.line(20, 34, 190, 34);

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(titulo, 105, 44, { align: "center" });
  doc.setFont("helvetica", "normal");
}

function addTexto(doc, texto, x, y, largura = 170, tamanho = 11) {
  doc.setFontSize(tamanho);
  const linhas = doc.splitTextToSize(texto, largura);
  doc.text(linhas, x, y);
  return y + linhas.length * (tamanho * 0.45);
}

function slug(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}

// ====== DFD mais completo ======

function gerarDFD(itemSelecionado) {
  const doc = new jsPDF();
  const item = itemSelecionado?.item || "Item não informado";
  const categoria = itemSelecionado?.categoria || "Categoria não informada";

  addCabecalhoPiaui(doc, "DEMONSTRATIVO DE DEMANDA – DFD");

  let y = 58;

  y = addTexto(
    doc,
    "1. IDENTIFICAÇÃO DA UNIDADE DEMANDANTE",
    20,
    y,
    170,
    11
  );
  y = addTexto(
    doc,
    "Órgão: Secretaria de Administração do Estado do Piauí – SEAD.",
    24,
    y + 4
  );
  y = addTexto(
    doc,
    "Unidade demandante: (preencher pela área requisitante).",
    24,
    y + 3
  );

  y = addTexto(
    doc,
    "2. DESCRIÇÃO DA DEMANDA",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    `Objeto: Aquisição de ${item} (${categoria}).`,
    24,
    y + 4
  );
  y = addTexto(
    doc,
    "Descrição sucinta:",
    24,
    y + 4,
    170,
    11
  );
  y = addTexto(
    doc,
    `Trata-se da necessidade de suprimento do item acima indicado, considerado insumo essencial para o desenvolvimento das atividades administrativas da unidade, garantindo condições adequadas de trabalho e atendimento ao cidadão.`,
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "3. FUNDAMENTAÇÃO DA DEMANDA",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "A demanda decorre do planejamento anual de compras e/ou de necessidade identificada em função do aumento de demanda, substituição de materiais obsoletos ou recompra decorrente de consumo regular, em consonância com a Lei nº 14.133/2021.",
    24,
    y + 4
  );
  y = addTexto(
    doc,
    "A não contratação poderá ocasionar atrasos em processos internos, impacto na qualidade do serviço prestado e necessidade de medidas emergenciais, em desacordo com o princípio do planejamento.",
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "4. QUANTIDADE ESTIMADA E PERIODICIDADE",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "A quantidade estimada deverá ser definida com base em histórico de consumo, número de usuários atendidos e projeção de demanda para o período de referência (anual ou plurianual), evitando tanto o desabastecimento quanto a formação de estoques excessivos.",
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "5. IMPACTO ORÇAMENTÁRIO",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "A unidade demandante deverá indicar a dotação orçamentária a ser utilizada, bem como confirmar a existência de saldo suficiente para suportar a estimativa de gastos decorrentes da contratação.",
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "6. CONCLUSÃO",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "Diante do exposto, a unidade demandante confirma a necessidade da contratação e solicita a abertura do processo de contratação, com o prosseguimento das etapas de estudo técnico preliminar, pesquisa de preços e elaboração do Termo de Referência.",
    24,
    y + 4
  );

  const nome = `DFD_${slug(item)}.pdf`;
  doc.save(nome);
}

// ====== ETP mais completo ======

function gerarETP(itemSelecionado) {
  const doc = new jsPDF();
  const item = itemSelecionado?.item || "Item não informado";
  const categoria = itemSelecionado?.categoria || "Categoria não informada";

  addCabecalhoPiaui(doc, "ESTUDO TÉCNICO PRELIMINAR – ETP");

  let y = 58;

  y = addTexto(
    doc,
    "1. CONTEXTUALIZAÇÃO DA NECESSIDADE",
    20,
    y
  );
  y = addTexto(
    doc,
    `A presente contratação tem por objeto a aquisição de ${item} (${categoria}), visando atender às necessidades operacionais da unidade demandante, em alinhamento ao planejamento institucional e às diretrizes da Administração Pública.`,
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "2. DESCRIÇÃO DA SOLUÇÃO PROPOSTA",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    `A solução consiste na aquisição de ${item} com especificações técnicas adequadas ao uso pretendido, observando padrões mínimos de qualidade, desempenho, durabilidade e compatibilidade com os equipamentos e rotinas existentes.`,
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "3. ALTERNATIVAS AVALIADAS",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "Foram consideradas alternativas como: manutenção do estoque atual, remanejamento entre unidades, utilização de item substituto e aquisição em quantidade reduzida. As alternativas mostraram-se insuficientes para atender de forma plena e contínua à necessidade identificada.",
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "4. LEVANTAMENTO DE MERCADO",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "A pesquisa de preços deverá ser realizada em fontes oficiais, como o Portal Nacional de Contratações Públicas (PNCP), painéis de preços, contratações anteriores registradas nos sistemas oficiais e cotações junto a fornecedores, visando à aferição da vantajosidade da futura contratação.",
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "5. AVALIAÇÃO DE RISCOS",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "Os principais riscos identificados em relação à solução proposta estão detalhados em Mapa de Riscos e Matriz de Riscos específicos, contemplando aspectos de especificação inadequada, preços incompatíveis com o mercado, atrasos na entrega e qualidade insatisfatória.",
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "6. ALINHAMENTO COM O PLANEJAMENTO",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "A contratação mostra-se alinhada aos objetivos estratégicos da Administração, contribuindo para a melhoria da eficiência, da transparência e da qualidade dos serviços prestados à sociedade.",
    24,
    y + 4
  );

  y = addTexto(
    doc,
    "7. CONCLUSÃO",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "Diante da análise técnica realizada, conclui-se pela adequação da presente contratação, recomendando-se o prosseguimento do processo com a elaboração do Termo de Referência, observando-se as diretrizes aqui estabelecidas.",
    24,
    y + 4
  );

  const nome = `ETP_${slug(item)}.pdf`;
  doc.save(nome);
}

// ====== TR mais completo ======

function gerarTR(itemSelecionado) {
  const doc = new jsPDF();
  const item = itemSelecionado?.item || "Item não informado";
  const categoria = itemSelecionado?.categoria || "Categoria não informada";

  addCabecalhoPiaui(doc, "TERMO DE REFERÊNCIA");

  let y = 58;

  y = addTexto(doc, "1. OBJETO", 20, y);
  y = addTexto(
    doc,
    `Aquisição de ${item} (${categoria}), conforme condições, quantidades e exigências estabelecidas neste Termo de Referência e demais anexos que o integram.`,
    24,
    y + 4
  );

  y = addTexto(doc, "2. JUSTIFICATIVA", 20, y + 8);
  y = addTexto(
    doc,
    "A contratação é justificada pela necessidade de garantir a continuidade e a qualidade das atividades desenvolvidas pela unidade demandante, evitando desabastecimento de insumos essenciais e assegurando ambiente adequado de trabalho.",
    24,
    y + 4
  );

  y = addTexto(doc, "3. ESPECIFICAÇÕES TÉCNICAS", 20, y + 8);
  y = addTexto(
    doc,
    "As especificações técnicas detalhadas deverão descrever de forma clara e objetiva as características do item, vedadas indicações que possam restringir a competitividade, salvo quando tecnicamente justificadas.",
    24,
    y + 4
  );

  y = addTexto(doc, "4. QUANTIDADES ESTIMADAS", 20, y + 8);
  y = addTexto(
    doc,
    "As quantidades estimadas deverão ser definidas com base em histórico de consumo, projeção de demanda e dimensionamento da necessidade, respeitando os limites orçamentários disponíveis.",
    24,
    y + 4
  );

  y = addTexto(doc, "5. PRAZOS E LOCAIS DE ENTREGA", 20, y + 8);
  y = addTexto(
    doc,
    "Os prazos de entrega deverão ser estabelecidos de forma a compatibilizar a necessidade do órgão e a realidade do mercado, indicando-se os locais de entrega, dias e horários para recebimento dos materiais.",
    24,
    y + 4
  );

  y = addTexto(doc, "6. OBRIGAÇÕES DA CONTRATADA", 20, y + 8);
  y = addTexto(
    doc,
    "A contratada deverá cumprir rigorosamente as condições contratadas, responsabilizando-se pela qualidade dos materiais fornecidos, pelos prazos de entrega e pela substituição de itens que apresentem defeitos ou não atendam às especificações.",
    24,
    y + 4
  );

  y = addTexto(doc, "7. OBRIGAÇÕES DA CONTRATANTE", 20, y + 8);
  y = addTexto(
    doc,
    "Compete à contratante receber, conferir, registrar e atestar o recebimento dos materiais, bem como efetuar os pagamentos devidos, observadas as condições contratuais e a legislação vigente.",
    24,
    y + 4
  );

  y = addTexto(doc, "8. GESTÃO E FISCALIZAÇÃO CONTRATUAL", 20, y + 8);
  y = addTexto(
    doc,
    "Deverão ser designados gestor e fiscal do contrato, responsáveis pelo acompanhamento da execução, registro de ocorrências, solicitação de providências e comunicação de irregularidades, conforme a Lei nº 14.133/2021.",
    24,
    y + 4
  );

  const nome = `TR_${slug(item)}.pdf`;
  doc.save(nome);
}

// ====== Mapa de Riscos (já estava ok) ======

function gerarMapaRiscos(itemSelecionado) {
  const doc = new jsPDF();
  const item = itemSelecionado?.item || "Item não informado";
  const categoria = itemSelecionado?.categoria || "Categoria não informada";

  addCabecalhoPiaui(doc, "MAPA DE RISCOS – Lei nº 14.133/2021");

  let y = 58;

  y = addTexto(
    doc,
    `Objeto: Aquisição de ${item} (${categoria}).`,
    20,
    y
  );

  y = addTexto(
    doc,
    "1. PRINCIPAIS RISCOS IDENTIFICADOS",
    20,
    y + 8
  );
  y = addTexto(
    doc,
    "• Especificação inadequada do objeto.\n" +
      "• Pesquisa de preços insuficiente ou desatualizada.\n" +
      "• Quantidades superestimadas ou subestimadas.\n" +
      "• Fornecimento com qualidade inferior à exigida.\n" +
      "• Atrasos na entrega.\n" +
      "• Falta de competitividade ou propostas inexequíveis.\n" +
      "• Execução contratual irregular.\n" +
      "• Descumprimento de prazos e condições contratuais.",
    24,
    y + 4
  );

  y = addTexto(doc, "2. MEDIDAS DE MITIGAÇÃO", 20, y + 8);
  y = addTexto(
    doc,
    "• Descrever o objeto de forma clara e padronizada.\n" +
      "• Realizar pesquisa de preços em fontes oficiais e múltiplos fornecedores.\n" +
      "• Utilizar histórico de consumo para dimensionar quantitativos.\n" +
      "• Estabelecer critérios objetivos de recebimento e qualidade.\n" +
      "• Prever prazos de entrega compatíveis com a necessidade.\n" +
      "• Incluir critérios de habilitação e julgamento que reduzam risco de inexequibilidade.\n" +
      "• Acompanhar sistematicamente a execução contratual.",
    24,
    y + 4
  );

  const nome = `Mapa_Riscos_${slug(item)}.pdf`;
  doc.save(nome);
}

// ====== Matriz de Riscos (já estruturada) ======

function gerarMatrizRiscos(itemSelecionado) {
  const doc = new jsPDF();
  const item = itemSelecionado?.item || "Item não informado";

  addCabecalhoPiaui(doc, "MATRIZ DE RISCOS – Lei nº 14.133/2021");

  let y = 58;

  y = addTexto(
    doc,
    `Objeto: Aquisição de ${item}.`,
    20,
    y
  );

  y = addTexto(
    doc,
    "Legenda: P = Probabilidade (B, M, A) | I = Impacto (B, M, A)",
    20,
    y + 6,
    170,
    9
  );

  y = y + 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("Risco", 22, y);
  doc.text("P", 110, y);
  doc.text("I", 120, y);
  doc.text("Nível", 130, y);
  doc.text("Responsável", 148, y);
  doc.setFont("helvetica", "normal");

  const linhas = [
    {
      risco: "Especificação inadequada",
      p: "M",
      i: "A",
      nivel: "Alto",
      resp: "Unidade demandante",
    },
    {
      risco: "Pesquisa de preços insuficiente",
      p: "M",
      i: "M",
      nivel: "Médio",
      resp: "Setor de compras",
    },
    {
      risco: "Atrasos na entrega",
      p: "A",
      i: "M",
      nivel: "Alto",
      resp: "Fornecedor",
    },
    {
      risco: "Fornecimento com qualidade inferior",
      p: "M",
      i: "A",
      nivel: "Alto",
      resp: "Fornecedor / Fiscalização",
    },
  ];

  y += 4;

  linhas.forEach((l) => {
    doc.setFontSize(9);
    const r = doc.splitTextToSize(l.risco, 80);
    doc.text(r, 22, y);
    doc.text(l.p, 110, y);
    doc.text(l.i, 120, y);
    doc.text(l.nivel, 130, y);
    doc.text(doc.splitTextToSize(l.resp, 40), 148, y);
    y += r.length * 4 + 2;
  });

  const nome = `Matriz_Riscos_${slug(item)}.pdf`;
  doc.save(nome);
}

// ====== Justificativas (já mais robustas) ======

function gerarJustificativas(itemSelecionado) {
  const doc = new jsPDF();
  const item = itemSelecionado?.item || "Item não informado";
  const categoria = itemSelecionado?.categoria || "Categoria não informada";

  addCabecalhoPiaui(doc, "JUSTIFICATIVAS – Lei nº 14.133/2021");

  let y = 58;

  y = addTexto(doc, "1. JUSTIFICATIVA DA CONTRATAÇÃO", 20, y);
  y = addTexto(
    doc,
    `A contratação do item ${item} (${categoria}) é necessária para garantir a continuidade das atividades administrativas da unidade, sendo insumo essencial para o adequado funcionamento dos serviços e para o atendimento à população.`,
    24,
    y + 4
  );

  y = addTexto(doc, "2. JUSTIFICATIVA DO PREÇO", 20, y + 8);
  y = addTexto(
    doc,
    "O valor estimado deverá ser definido com base em pesquisa de preços realizada em fontes oficiais (PNCP, painéis de preços e contratações anteriores), buscando assegurar a vantajosidade da proposta e a compatibilidade com o mercado.",
    24,
    y + 4
  );

  y = addTexto(doc, "3. JUSTIFICATIVA DA ESCOLHA DA SOLUÇÃO", 20, y + 8);
  y = addTexto(
    doc,
    "A solução proposta mostra-se adequada às necessidades da unidade, considerando aspectos de qualidade, desempenho, disponibilidade no mercado e alinhamento às especificações técnicas estabelecidas.",
    24,
    y + 4
  );

  y = addTexto(doc, "4. JUSTIFICATIVA DO MODO DE FORNECIMENTO", 20, y + 8);
  y = addTexto(
    doc,
    "O modo de fornecimento deverá ser definido de forma a garantir o abastecimento contínuo, compatibilizando prazos de entrega, volumes de aquisição e capacidade de armazenamento, evitando desabastecimento ou formação de estoques excessivos.",
    24,
    y + 4
  );

  const nome = `Justificativas_${slug(item)}.pdf`;
  doc.save(nome);
}

// ====== Componente principal ======

export function GeradorDocumentos({ itemSelecionado, onDocumentoGerado }) {
  const desabilitado = !itemSelecionado;

  const handle = (tipo) => {
    if (!itemSelecionado) return;
    if (tipo === "DFD") gerarDFD(itemSelecionado);
    if (tipo === "ETP") gerarETP(itemSelecionado);
    if (tipo === "TR") gerarTR(itemSelecionado);
    if (tipo === "MAPA") gerarMapaRiscos(itemSelecionado);
    if (tipo === "MATRIZ") gerarMatrizRiscos(itemSelecionado);
    if (tipo === "JUST") gerarJustificativas(itemSelecionado);
    if (onDocumentoGerado) onDocumentoGerado();
  };

  const baseBtn =
    "rounded-lg px-2 py-1.5 border text-[11px] transition-colors";
  const estiloAtivo =
    "border-emerald-500/60 text-emerald-200 hover:bg-emerald-500/10";
  const estiloDesabilitado =
    "border-gray-700 text-gray-600 cursor-not-allowed";

  return (
    <div className="space-y-2 text-xs">
      <p className="text-[10px] text-gray-400 mb-1">
        Selecione um item na lista à esquerda para habilitar a geração dos
        documentos.
      </p>

      <div className="grid grid-cols-2 gap-2">
        <button
          disabled={desabilitado}
          onClick={() => handle("DFD")}
          className={`${baseBtn} ${
            desabilitado ? estiloDesabilitado : estiloAtivo
          }`}
        >
          Gerar DFD
        </button>

        <button
          disabled={desabilitado}
          onClick={() => handle("ETP")}
          className={`${baseBtn} ${
            desabilitado ? estiloDesabilitado : estiloAtivo
          }`}
        >
          Gerar ETP
        </button>

        <button
          disabled={desabilitado}
          onClick={() => handle("TR")}
          className={`${baseBtn} ${
            desabilitado ? estiloDesabilitado : estiloAtivo
          }`}
        >
          Gerar TR
        </button>

        <button
          disabled={desabilitado}
          onClick={() => handle("MAPA")}
          className={`${baseBtn} ${
            desabilitado ? estiloDesabilitado : estiloAtivo
          }`}
        >
          Mapa de Riscos
        </button>

        <button
          disabled={desabilitado}
          onClick={() => handle("MATRIZ")}
          className={`${baseBtn} ${
            desabilitado ? estiloDesabilitado : estiloAtivo
          }`}
        >
          Matriz de Riscos
        </button>

        <button
          disabled={desabilitado}
          onClick={() => handle("JUST")}
          className={`${baseBtn} ${
            desabilitado ? estiloDesabilitado : estiloAtivo
          }`}
        >
          Justificativas
        </button>
      </div>
    </div>
  );
}
