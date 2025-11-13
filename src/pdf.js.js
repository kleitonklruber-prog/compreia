// src/pdf.js
// Geração de PDF com layout oficial SEAD/PI para DFD, ETP e TR

import { jsPDF } from "jspdf";

export function gerarPDFOficial({ titulo, tipoDocumento, conteudo }) {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  const margemEsq = 60;
  const margemDir = 60;
  const larguraUtil = 595.28 - margemEsq - margemDir; // largura A4 em pt
  const margemTopo = 60;
  const margemRodape = 40;

  // Cabeçalho oficial
  const desenharCabecalho = () => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.text("GOVERNO DO ESTADO DO PIAUÍ", 297.64, margemTopo, { align: "center" });
    doc.setFontSize(10);
    doc.text("SECRETARIA DE ADMINISTRAÇÃO – SEAD", 297.64, margemTopo + 14, {
      align: "center",
    });
    doc.text("DIRETORIA DE COMPRAS GOVERNAMENTAIS", 297.64, margemTopo + 28, {
      align: "center",
    });

    doc.setLineWidth(0.7);
    doc.line(margemEsq, margemTopo + 40, 595.28 - margemDir, margemTopo + 40);
  };

  // Título do documento
  const desenharTitulo = () => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text(
      tipoDocumento?.toUpperCase() || "DOCUMENTO",
      297.64,
      margemTopo + 70,
      { align: "center" }
    );

    if (titulo) {
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(11);
      doc.text(titulo, 297.64, margemTopo + 88, { align: "center" });
    }
  };

  desenharCabecalho();
  desenharTitulo();

  let y = margemTopo + 115;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);

  const linhas = doc.splitTextToSize(conteudo, larguraUtil);

  linhas.forEach((linha) => {
    if (y > 842 - margemRodape) {
      doc.addPage();
      desenharCabecalho();
      desenharTitulo();
      y = margemTopo + 115;
    }
    doc.text(linha, margemEsq, y);
    y += 16;
  });

  // Rodapé
  const totalPaginas = doc.getNumberOfPages();
  for (let i = 1; i <= totalPaginas; i++) {
    doc.setPage(i);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);

    doc.text(
      "ComprIA – Protótipo Hackathon Compras Inteligentes 2025",
      margemEsq,
      842 - 20
    );

    doc.text(`Página ${i}/${totalPaginas}`, 595.28 - margemDir, 842 - 20, {
      align: "right",
    });
  }

  const nomeArquivo = tipoDocumento
    ? `${tipoDocumento.toUpperCase()}.pdf`
    : "documento.pdf";

  doc.save(nomeArquivo);
}
