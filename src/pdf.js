// src/pdf.js
// Geração de PDF com capa + layout oficial SEAD/PI para DFD, ETP e TR

import { jsPDF } from "jspdf";

export function gerarPDFOficial({ titulo, tipoDocumento, conteudo }) {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  const margemEsq = 60;
  const margemDir = 60;
  const larguraUtil = 595.28 - margemEsq - margemDir; // largura útil da página
  const margemTopo = 60;
  const margemRodape = 40;

  // --- CAPA ---

  const desenharCapa = () => {
    // Tenta desenhar o brasão (opcional)
    // Coloque um arquivo "brasao-pi.png" em public/brasao-pi.png
    try {
      const img = new Image();
      img.src = "/brasao-pi.png"; // caminho do brasão (public/)
      // OBS: se o navegador não carregar a tempo, simplesmente não aparece.
      doc.addImage(img, "PNG", 270, 60, 60, 60);
    } catch (e) {
      // Se der erro, só segue sem o brasão
    }

    // Cabeçalho institucional
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12);
    doc.text("GOVERNO DO ESTADO DO PIAUÍ", 297.64, 160, { align: "center" });

    doc.setFontSize(11);
    doc.text("SECRETARIA DE ADMINISTRAÇÃO – SEAD", 297.64, 180, {
      align: "center",
    });
    doc.text("DIRETORIA DE COMPRAS GOVERNAMENTAIS", 297.64, 196, {
      align: "center",
    });

    // Linha separadora
    doc.setLineWidth(0.8);
    doc.line(margemEsq, 215, 595.28 - margemDir, 215);

    // Título grande do documento (TR / ETP / DFD)
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    const tipoLabel = (tipoDocumento || "DOCUMENTO").toUpperCase();
    doc.text(tipoLabel, 297.64, 265, { align: "center" });

    // Subtítulo (ex: "Gerado automaticamente pelo ComprIA")
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(11);
    if (titulo) {
      doc.text(titulo, 297.64, 285, { align: "center" });
    }

    // Informações adicionais (você pode customizar)
    doc.setFontSize(10);
    doc.text(
      "Unidade Requisitante: Diretoria de Compras",
      297.64,
      330,
      { align: "center" }
    );
    doc.text("Ano: 2025", 297.64, 350, { align: "center" });

    // Rodapé discreto da capa
    doc.setFontSize(9);
    doc.text(
      "ComprIA – Protótipo Hackathon Compras Inteligentes 2025",
      297.64,
      800,
      { align: "center" }
    );
  };

  // --- Cabeçalho das páginas internas ---

  const desenharCabecalho = () => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.text("GOVERNO DO ESTADO DO PIAUÍ", 297.64, margemTopo, {
      align: "center",
    });
    doc.setFontSize(10);
    doc.text("SECRETARIA DE ADMINISTRAÇÃO – SEAD", 297.64, margemTopo + 14, {
      align: "center",
    });
    doc.text("DIRETORIA DE COMPRAS GOVERNAMENTAIS", 297.64, margemTopo + 28, {
      align: "center",
    });

    doc.setLineWidth(0.7);
    doc.line(
      margemEsq,
      margemTopo + 40,
      595.28 - margemDir,
      margemTopo + 40
    );
  };

  const desenharTituloInterno = () => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(13);
    const tipoLabel = (tipoDocumento || "DOCUMENTO").toUpperCase();
    doc.text(tipoLabel, 297.64, margemTopo + 65, { align: "center" });

    if (titulo) {
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(11);
      doc.text(titulo, 297.64, margemTopo + 82, { align: "center" });
    }
  };

  // Desenha capa (página 1)
  desenharCapa();

  // Adiciona nova página para o corpo do documento
  doc.addPage();

  // Páginas internas com cabeçalho + texto
  desenharCabecalho();
  desenharTituloInterno();

  let y = margemTopo + 110;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);

  const linhas = doc.splitTextToSize(conteudo, larguraUtil);

  linhas.forEach((linha) => {
    if (y > 842 - margemRodape) {
      doc.addPage();
      desenharCabecalho();
      desenharTituloInterno();
      y = margemTopo + 110;
    }
    doc.text(linha, margemEsq, y);
    y += 16;
  });

  // Rodapé nas páginas internas (exceto capa)
  const totalPaginas = doc.getNumberOfPages();
  for (let i = 2; i <= totalPaginas; i++) {
    doc.setPage(i);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);

    doc.text(
      "ComprIA – Protótipo Hackathon Compras Inteligentes 2025",
      margemEsq,
      842 - 20
    );

    doc.text(`Página ${i - 1}/${totalPaginas - 1}`, 595.28 - margemDir, 842 - 20, {
      align: "right",
    });
  }

  const nomeArquivo = tipoDocumento
    ? `${tipoDocumento.toUpperCase()}.pdf`
    : "documento.pdf";

  doc.save(nomeArquivo);
}
