import React, { useMemo, useState } from "react";

/* =========================
   Dados mock – 50 itens
   ========================= */
const MOCK = [
  // Limpeza
  { item: "Detergente neutro 500ml", fornecedor: "Higiclean", preco: 4.9, fonte: "ComprasGov", data: "2025-09-10" },
  { item: "Desinfetante pinho 1L", fornecedor: "Limpex", preco: 8.5, fonte: "LicitaNet", data: "2025-09-11" },
  { item: "Álcool 70% 1L", fornecedor: "HigieneSul", preco: 11.9, fonte: "ComprasNet", data: "2025-09-12" },
  { item: "Sabão em pó 1kg", fornecedor: "BrilhoMais", preco: 14.7, fonte: "PNCP", data: "2025-09-13" },
  { item: "Água sanitária 2L", fornecedor: "Clorlar", preco: 6.3, fonte: "ComprasNet", data: "2025-09-14" },
  { item: "Limpador multiuso 500ml", fornecedor: "MultiClean", preco: 7.2, fonte: "LicitaNet", data: "2025-09-15" },
  { item: "Saco de lixo 50L (100 un)", fornecedor: "EcoBag", preco: 59.9, fonte: "ComprasGov", data: "2025-09-16" },
  { item: "Saco de lixo 100L (100 un)", fornecedor: "EcoBag", preco: 89.9, fonte: "ComprasGov", data: "2025-09-16" },
  { item: "Esponja dupla face (10 un)", fornecedor: "EsponjaFácil", preco: 12.9, fonte: "ComprasNet", data: "2025-09-17" },
  { item: "Pano microfibra (kit 5)", fornecedor: "LimpezaPro", preco: 15.5, fonte: "PNCP", data: "2025-09-18" },

  // Escritório
  { item: "Papel A4 75g (resma 500)", fornecedor: "PapelMais", preco: 23.9, fonte: "ComprasNet", data: "2025-09-08" },
  { item: "Caneta esferográfica azul (cx 50)", fornecedor: "BIC Supply", preco: 49.0, fonte: "LicitaNet", data: "2025-09-09" },
  { item: "Lápis HB nº2 (dz)", fornecedor: "EscolarTop", preco: 9.8, fonte: "ComprasGov", data: "2025-09-10" },
  { item: "Borracha branca (dz)", fornecedor: "EscolarTop", preco: 7.6, fonte: "PNCP", data: "2025-09-11" },
  { item: "Grampeador metálico", fornecedor: "OfficePro", preco: 32.9, fonte: "LicitaNet", data: "2025-09-12" },
  { item: "Grampo 26/6 (cx 5000)", fornecedor: "OfficePro", preco: 14.4, fonte: "ComprasNet", data: "2025-09-12" },
  { item: "Clips nº 2 (cx 100)", fornecedor: "Papelaria Brasil", preco: 6.5, fonte: "ComprasNet", data: "2025-09-13" },
  { item: "Pasta catálogo 50 plásticos", fornecedor: "Arquiva Já", preco: 28.4, fonte: "PNCP", data: "2025-09-14" },
  { item: "Envelope pardo A4 (100 un)", fornecedor: "PostalPack", preco: 36.9, fonte: "LicitaNet", data: "2025-09-15" },
  { item: "Caderno universitário 200 fls", fornecedor: "MegaOffice", preco: 19.7, fonte: "ComprasGov", data: "2025-09-16" },

  // Informática
  { item: "Mouse óptico USB", fornecedor: "TechView", preco: 38.9, fonte: "ComprasNet", data: "2025-09-07" },
  { item: "Teclado USB ABNT2", fornecedor: "TechView", preco: 64.9, fonte: "LicitaNet", data: "2025-09-07" },
  { item: "Monitor 24\" Full HD", fornecedor: "VisionLed", preco: 799.0, fonte: "PNCP", data: "2025-09-05" },
  { item: "SSD 480GB SATA", fornecedor: "DataFast", preco: 219.9, fonte: "ComprasGov", data: "2025-09-06" },
  { item: "HD Externo 1TB USB 3.0", fornecedor: "DataFast", preco: 349.0, fonte: "ComprasNet", data: "2025-09-10" },
  { item: "Pendrive 32GB USB 3.0", fornecedor: "FlashMax", preco: 29.9, fonte: "LicitaNet", data: "2025-09-12" },
  { item: "Roteador Wi-Fi AC1200", fornecedor: "NetHome", preco: 189.0, fonte: "ComprasGov", data: "2025-09-08" },
  { item: "Nobreak 1200VA", fornecedor: "EnerPro", preco: 679.0, fonte: "PNCP", data: "2025-09-09" },
  { item: "Cabo HDMI 2.0 2m", fornecedor: "CaboFlex", preco: 24.9, fonte: "ComprasNet", data: "2025-09-11" },
  { item: "Suporte para monitor articulado", fornecedor: "ErgoWork", preco: 139.0, fonte: "LicitaNet", data: "2025-09-13" },

  // Copa / descartáveis
  { item: "Copo descartável 200ml (1000 un)", fornecedor: "EcoCopo", preco: 59.9, fonte: "ComprasGov", data: "2025-09-06" },
  { item: "Guardanapo 23x23 (1000 un)", fornecedor: "PaperClean", preco: 28.5, fonte: "PNCP", data: "2025-09-07" },
  { item: "Filtro de café 103 (100 un)", fornecedor: "Café&Co", preco: 12.4, fonte: "ComprasNet", data: "2025-09-08" },
  { item: "Café torrado e moído 500g", fornecedor: "TorraReal", preco: 18.9, fonte: "LicitaNet", data: "2025-09-09" },
  { item: "Açúcar refinado 1kg", fornecedor: "Docesul", preco: 5.9, fonte: "ComprasGov", data: "2025-09-10" },
  { item: "Achocolatado 1kg", fornecedor: "ChocoBom", preco: 19.9, fonte: "ComprasNet", data: "2025-09-12" },
  { item: "Leite em pó 400g", fornecedor: "LactBr", preco: 14.9, fonte: "PNCP", data: "2025-09-11" },
  { item: "Copo térmico 180ml (25 un)", fornecedor: "EcoCopo", preco: 16.9, fonte: "LicitaNet", data: "2025-09-13" },
  { item: "Prato descartável 18cm (100 un)", fornecedor: "DescartaBem", preco: 21.9, fonte: "ComprasGov", data: "2025-09-14" },
  { item: "Talheres descartáveis (kit 100)", fornecedor: "DescartaBem", preco: 22.9, fonte: "ComprasNet", data: "2025-09-14" },

  // Manutenção/Patrimônio
  { item: "Lâmpada LED 9W bivolt", fornecedor: "Luz&Vida", preco: 9.9, fonte: "ComprasNet", data: "2025-09-05" },
  { item: "Extensão elétrica 5m 3 tomadas", fornecedor: "EletroPlus", preco: 39.9, fonte: "LicitaNet", data: "2025-09-07" },
  { item: "Filtro de linha 6 tomadas", fornecedor: "EletroPlus", preco: 49.9, fonte: "ComprasGov", data: "2025-09-08" },
  { item: "Cadeado aço 50mm", fornecedor: "SeguraBem", preco: 24.5, fonte: "PNCP", data: "2025-09-10" },
  { item: "Etiquetas patrimônio (rolo 1000)", fornecedor: "PatriMark", preco: 129.0, fonte: "ComprasNet", data: "2025-09-11" },
  { item: "Fita crepe 18mm x 50m", fornecedor: "Adesiva", preco: 6.2, fonte: "LicitaNet", data: "2025-09-12" },
  { item: "Fita dupla face 24mm x 2m", fornecedor: "Adesiva", preco: 14.9, fonte: "ComprasGov", data: "2025-09-13" },
  { item: "Bomba de ar manual", fornecedor: "MultiUso", preco: 34.9, fonte: "PNCP", data: "2025-09-14" },
  { item: "Chave de fenda 5mm", fornecedor: "FerraTools", preco: 12.9, fonte: "ComprasNet", data: "2025-09-15" },
  { item: "Chave Philips 5mm", fornecedor: "FerraTools", preco: 12.9, fonte: "LicitaNet", data: "2025-09-15" },

  // EPIs / Higiene pessoal
  { item: "Máscara descartável (cx 50)", fornecedor: "SafeMed", preco: 19.9, fonte: "ComprasGov", data: "2025-09-06" },
  { item: "Luvas nitrílicas (cx 100) M", fornecedor: "SafeMed", preco: 49.9, fonte: "ComprasNet", data: "2025-09-07" },
  { item: "Álcool gel 500ml", fornecedor: "Higiclean", preco: 9.5, fonte: "LicitaNet", data: "2025-09-08" },
  { item: "Papel higiênico folha dupla (16 rolos)", fornecedor: "PaperClean", preco: 29.9, fonte: "PNCP", data: "2025-09-09" },
  { item: "Toalha de papel interfolhas (3000 fls)", fornecedor: "PaperClean", preco: 54.9, fonte: "ComprasGov", data: "2025-09-10" },
];

/* Helpers */
const toBRL = (n) =>
  Number.isFinite(n) ? n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "-";

export default function App() {
  const [busca, setBusca] = useState("");
  const [ordem, setOrdem] = useState(null); // 'asc' | 'desc' | null
  const SEM_BUSCA_LIMITE = 10;

  // filtro
  const filtrados = useMemo(() => {
    if (!busca) return MOCK;
    const q = busca.toLowerCase();
    return MOCK.filter(
      (r) =>
        r.item.toLowerCase().includes(q) ||
        r.fornecedor.toLowerCase().includes(q) ||
        r.fonte.toLowerCase().includes(q)
    );
  }, [busca]);

  // stats (sobre o conjunto exibido)
  const statsBase = useMemo(() => {
    // se não há busca, calcule stats sobre os 10 mostrados
    const base = !busca ? filtrados.slice(0, SEM_BUSCA_LIMITE) : filtrados;
    const valores = base.map((r) => r.preco).filter(Number.isFinite);
    if (!valores.length) return { min: NaN, avg: NaN, max: NaN };
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const avg = valores.reduce((a, b) => a + b, 0) / valores.length;
    return { min, avg, max, count: valores.length };
  }, [filtrados, busca]);

  // ordenação e corte de 10 itens por padrão
  const exibidos = useMemo(() => {
    const base = [...filtrados];
    // corte quando não há busca
    if (!busca) base.splice(SEM_BUSCA_LIMITE);
    // ordenação
    if (ordem === "asc") base.sort((a, b) => a.preco - b.preco);
    if (ordem === "desc") base.sort((a, b) => b.preco - a.preco);
    return base;
  }, [filtrados, ordem, busca]);

  const total = MOCK.length;
  const mostrando = exibidos.length;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 text-white grid place-items-center font-bold">C</div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">ComprIA</h1>
              <p className="text-xs text-slate-300 -mt-0.5">Assistente inteligente para compras públicas</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <input
              className="w-64 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/10"
              placeholder="Pesquisar em tudo..."
            />
            <button className="rounded-xl bg-white/10 hover:bg-white/15 text-sm px-3 py-2">Entrar</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Hero / CTA */}
        <section className="mb-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">De dias para minutos</h2>
                <p className="text-sm text-slate-300 mt-1">
                  Pesquise preços rapidamente, gere TR/ETP e acompanhe vigência – tudo no modo escuro 👀.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-xl bg-white text-slate-900 text-sm px-4 py-2 hover:bg-slate-100">
                  + Nova consulta
                </button>
                <button className="rounded-xl border border-slate-700 text-sm px-4 py-2 hover:bg-white/5">
                  Importar CSV
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-400">Consultas de preço</p>
            <p className="text-2xl font-semibold mt-1 text-white">48</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-400">Economia estimada</p>
            <p className="text-2xl font-semibold mt-1 text-white">R$ 37.240</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-400">Documentos gerados</p>
            <p className="text-2xl font-semibold mt-1 text-white">22</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-400">Alertas ativos</p>
            <p className="text-2xl font-semibold mt-1 text-white">6</p>
          </div>
        </section>

        {/* Busca + Stats + Ordenação */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="w-full md:w-1/2">
              <label className="text-sm font-medium text-white">Item / Categoria</label>
              <div className="mt-1 flex gap-2">
                <input
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/10"
                  placeholder="Ex.: Papel A4 75g (500 folhas)"
                />
                <button
                  className="rounded-xl border border-slate-700 text-sm px-4 py-2 hover:bg-white/5"
                  onClick={() => setBusca("")}
                >
                  Limpar
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {busca
                  ? `Resultados: ${filtrados.length}`
                  : `Mostrando ${mostrando} de ${total} (sem busca)`}
              </p>
            </div>

            <div className="flex gap-2">
              <div className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                <span className="text-slate-400">Mín.</span>{" "}
                <span className="font-semibold text-white">{toBRL(statsBase.min)}</span>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                <span className="text-slate-400">Média</span>{" "}
                <span className="font-semibold text-white">{toBRL(statsBase.avg)}</span>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
                <span className="text-slate-400">Máx.</span>{" "}
                <span className="font-semibold text-white">{toBRL(statsBase.max)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setOrdem("asc")}
                className={`rounded-xl border px-3 py-2 text-sm border-slate-700 hover:bg-white/5 ${
                  ordem === "asc" ? "bg-white text-slate-900" : ""
                }`}
              >
                Menor preço
              </button>
              <button
                onClick={() => setOrdem("desc")}
                className={`rounded-xl border px-3 py-2 text-sm border-slate-700 hover:bg-white/5 ${
                  ordem === "desc" ? "bg-white text-slate-900" : ""
                }`}
              >
                Maior preço
              </button>
              <button
                onClick={() => setOrdem(null)}
                className="rounded-xl border px-3 py-2 text-sm border-slate-700 hover:bg-white/5"
              >
                Sem ordem
              </button>
            </div>
          </div>
        </section>

        {/* Tabela */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm mb-6">
          <div className="-mx-5 md:mx-0 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-300 border-b border-slate-800">
                  {["Item", "Fornecedor", "Valor", "Fonte", "Data"].map((h) => (
                    <th key={h} className="py-2 px-5 md:px-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exibidos.length === 0 && (
                  <tr>
                    <td className="py-3 px-5 md:px-3 text-slate-400" colSpan={5}>
                      Nenhum resultado
                    </td>
                  </tr>
                )}
                {exibidos.map((r, i) => (
                  <tr key={i} className="border-b border-slate-800 last:border-0">
                    <td className="py-3 px-5 md:px-3 whitespace-nowrap text-white">{r.item}</td>
                    <td className="py-3 px-5 md:px-3 text-slate-200">{r.fornecedor}</td>
                    <td className="py-3 px-5 md:px-3 font-medium text-white">{toBRL(r.preco)}</td>
                    <td className="py-3 px-5 md:px-3 text-slate-300">{r.fonte}</td>
                    <td className="py-3 px-5 md:px-3 text-slate-300">{r.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Documentos & Alertas (mock) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm lg:col-span-2">
            <h3 className="font-semibold text-white">Documentos recentes</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { tipo: "TR",  nome: "TR – Material de Escritório – 2025/09", status: "Rascunho", data: "21/09/2025" },
                { tipo: "ETP", nome: "ETP – Insumos de Limpeza – 2025/09",    status: "Revisão", data: "20/09/2025" },
                { tipo: "TR",  nome: "TR – Equipamentos de TI – 2025/09",      status: "Aprovado", data: "18/09/2025" },
              ].map((d, i) => (
                <li key={i} className="flex items-center justify-between rounded-xl border border-slate-800 p-3">
                  <div>
                    <p className="font-medium text-white">{d.nome}</p>
                    <p className="text-xs text-slate-400">{d.tipo} • {d.data}</p>
                  </div>
                  <span
                    className={
                      "text-xs px-2 py-1 rounded-lg " +
                      (d.status === "Aprovado"
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-700/30"
                        : d.status === "Revisão"
                        ? "bg-amber-500/15 text-amber-300 border border-amber-700/30"
                        : "bg-slate-700/40 text-slate-200 border border-slate-600/40")
                    }
                  >
                    {d.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
            <h3 className="font-semibold text-white">Alertas de vigência</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { titulo: "Contrato ARP 12/2024 – Papel A4",       prazo: "Vence em 14 dias", critico: true },
                { titulo: "Contrato Limpeza 07/2024 – Álcool 70%", prazo: "Vence em 32 dias", critico: false },
                { titulo: "Registro de Preços – Canetas",          prazo: "Vence em 58 dias", critico: false },
              ].map((a, i) => (
                <li
                  key={i}
                  className={`flex items-center justify-between rounded-xl border p-3 ${
                    a.critico
                      ? "border-red-700/40 bg-red-500/10"
                      : "border-slate-800 bg-slate-900/40"
                  }`}
                >
                  <div>
                    <p className="font-medium text-white">{a.titulo}</p>
                    <p className="text-xs text-slate-400">{a.prazo}</p>
                  </div>
                  <button className="text-xs rounded-lg border border-slate-700 px-2 py-1 hover:bg-white/5">
                    Ver
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="mt-6 text-xs text-slate-400">
          Protótipo • Modo escuro • Lei 14.133/2021
        </footer>
      </main>
    </div>
  );
}
