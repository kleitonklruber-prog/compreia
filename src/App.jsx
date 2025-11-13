import React from "react";
import { GeradorDocumentos } from "./GeradorDocumentos";

// ===== Dados simulados de itens =====

const ITENS_SIMULADOS = [
  {
    id: 1,
    item: "Papel A4 75g (500 folhas)",
    categoria: "Material de Escritório",
    unidade: "Resma",
  },
  {
    id: 2,
    item: "Caneta esferográfica azul 1.0mm",
    categoria: "Material de Escritório",
    unidade: "Unidade",
  },
  {
    id: 3,
    item: "Álcool 70% líquido 1L",
    categoria: "Material de Limpeza",
    unidade: "Frasco",
  },
  {
    id: 4,
    item: "Detergente neutro 500ml",
    categoria: "Material de Limpeza",
    unidade: "Frasco",
  },
  {
    id: 5,
    item: "Copo descartável 200ml",
    categoria: "Descartáveis",
    unidade: "Pacote",
  },
  {
    id: 6,
    item: "Pano de limpeza multiuso",
    categoria: "Material de Limpeza",
    unidade: "Unidade",
  },
  {
    id: 7,
    item: "Toner para impressora laser",
    categoria: "Informática",
    unidade: "Unidade",
  },
  {
    id: 8,
    item: "Mouse óptico USB",
    categoria: "Informática",
    unidade: "Unidade",
  },
  {
    id: 9,
    item: "Cadeira giratória ergonômica",
    categoria: "Mobiliário",
    unidade: "Unidade",
  },
  {
    id: 10,
    item: "Monitor LED 21.5\"",
    categoria: "Informática",
    unidade: "Unidade",
  },
];

// ===== Componentes auxiliares =====

function LembretesLicitacoes() {
  const lembretes = [
    {
      titulo: "Dispensa em andamento – Material de limpeza",
      status: "Em análise",
      prazo: "Prazo interno: 7 dias",
    },
    {
      titulo: "Pregão eletrônico – Equipamentos de TI",
      status: "Planejamento",
      prazo: "Previsto para abrir em 30 dias",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4 shadow-md shadow-black/30">
      <h3 className="font-semibold text-xs text-gray-100">
        Lembretes de licitações
      </h3>
      <p className="text-[10px] text-gray-400 mb-2">
        Visão rápida de processos em planejamento ou execução.
      </p>
      <ul className="space-y-2 text-[11px]">
        {lembretes.map((l, i) => (
          <li
            key={i}
            className="rounded-xl border border-gray-800 bg-gray-950/70 px-3 py-2"
          >
            <p className="font-medium text-gray-100">{l.titulo}</p>
            <p className="text-[10px] text-gray-400">{l.status}</p>
            <p className="text-[10px] text-emerald-300">{l.prazo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AlertaVigencia() {
  const alertas = [
    {
      titulo: "Contrato ARP 12/2024 – Papel A4",
      prazo: "Vence em 14 dias",
      critico: true,
    },
    {
      titulo: "Registro de preços – Álcool 70%",
      prazo: "Vence em 32 dias",
      critico: false,
    },
    {
      titulo: "Contrato – Limpeza predial",
      prazo: "Vence em 58 dias",
      critico: false,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4 shadow-md shadow-black/30">
      <h3 className="font-semibold text-xs text-gray-100">
        Alertas de vigência
      </h3>
      <p className="text-[10px] text-gray-400 mb-2">
        Contratos próximos do vencimento para evitar perda de prazo.
      </p>
      <ul className="space-y-2 text-[11px]">
        {alertas.map((a, i) => (
          <li
            key={i}
            className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
              a.critico
                ? "border-red-500/40 bg-red-950/40"
                : "border-gray-800 bg-gray-950/60"
            }`}
          >
            <div>
              <p className="font-medium text-gray-100">{a.titulo}</p>
              <p className="text-[10px] text-gray-300">{a.prazo}</p>
            </div>
            <span
              className={
                "text-[10px] px-2 py-1 rounded-lg " +
                (a.critico
                  ? "bg-red-600/20 text-red-200 border border-red-500/50"
                  : "bg-amber-500/10 text-amber-200 border border-amber-500/40")
              }
            >
              {a.critico ? "Crítico" : "Planejar"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatAjudaLicitacoes() {
  const [mensagem, setMensagem] = React.useState("");
  const [mensagens, setMensagens] = React.useState([
    {
      de: "bot",
      texto:
        "Olá! 👋 Sou o assistente de dúvidas sobre licitações (protótipo). Pergunte sobre Lei 14.133, DFD, ETP, TR, dispensa, inexigibilidade...",
    },
  ]);

  const responder = (textoUsuario) => {
    const t = textoUsuario.toLowerCase();

    let resposta =
      "Sou um protótipo de IA para apoiar dúvidas sobre licitações. Tente perguntar, por exemplo, sobre: Lei 14.133, DFD, ETP, TR, dispensa ou inexigibilidade.";

    if (t.includes("14.133") || t.includes("lei nova") || t.includes("nova lei")) {
      resposta =
        "A Lei 14.133/2021 é a nova Lei de Licitações e Contratos. Ela substitui gradualmente a 8.666, o pregão e o RDC, com foco em planejamento (DFD, ETP), gestão de riscos e governança. No ComprIA, usamos essa lógica para estruturar DFD, ETP, TR e matriz de riscos automaticamente.";
    } else if (t.includes("dfd")) {
      resposta =
        "O DFD (Documento de Formalização da Demanda) registra a necessidade da unidade, a justificativa, a estimativa de quantidade e o impacto da não contratação. É a porta de entrada do planejamento da contratação na Lei 14.133/2021.";
    } else if (t.includes("etp") || t.includes("estudo tecnico")) {
      resposta =
        "O ETP (Estudo Técnico Preliminar) demonstra que a solução faz sentido: avalia alternativas, analisa o mercado, riscos e alinhamento com o planejamento. No ComprIA, ele é gerado a partir do item e dos parâmetros de demanda.";
    } else if (t.includes("tr") || t.includes("termo de referencia")) {
      resposta =
        "O Termo de Referência descreve o objeto, especificações técnicas, quantitativos, forma de execução, prazos, obrigações das partes e critérios de medição/pagamento. Ele é a base do edital na Lei 14.133/2021.";
    } else if (t.includes("dispensa")) {
      resposta =
        "A dispensa de licitação é a hipótese em que a lei autoriza contratar sem o rito competitivo, em situações específicas (pequenos valores, emergência etc.). Mesmo na dispensa, a Lei 14.133/2021 exige planejamento, pesquisa de preços e justificativas bem estruturadas.";
    } else if (t.includes("inexig") || t.includes("inexigibilidade")) {
      resposta =
        "A inexigibilidade ocorre quando não há possibilidade de competição, por exemplo, fornecedor exclusivo ou serviço técnico especializado de natureza singular. É preciso comprovar a inviabilidade de competição e justificar a escolha do fornecedor.";
    } else if (
      t.includes("pesquisa de preço") ||
      t.includes("preço") ||
      t.includes("painel")
    ) {
      resposta =
        "A pesquisa de preços na Lei 14.133/2021 pode usar fontes como PNCP, painéis de preços, contratos anteriores e cotações. A ideia do ComprIA é automatizar essa etapa, trazendo histórico de contratações para apoiar o servidor.";
    }

    setMensagens((msgs) => [
      ...msgs,
      { de: "user", texto: textoUsuario },
      { de: "bot", texto: resposta },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mensagem.trim()) return;
    responder(mensagem.trim());
    setMensagem("");
  };

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4 shadow-md shadow-black/30 flex flex-col h-64">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-xs text-gray-100">
          Assistente de dúvidas (IA)
        </h3>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
          Protótipo local
        </span>
      </div>
      <p className="text-[10px] text-gray-400 mb-2">
        Pergunte conceitos básicos de licitações. As respostas são simuladas
        apenas para demonstração no hackathon.
      </p>

      <div className="flex-1 border border-gray-800 rounded-lg bg-gray-950/60 px-2 py-1.5 mb-2 overflow-y-auto text-[10px] space-y-1.5">
        {mensagens.map((m, i) => (
          <div
            key={i}
            className={
              "max-w-[90%] px-2 py-1 rounded-lg " +
              (m.de === "bot"
                ? "bg-gray-800 text-gray-100 self-start"
                : "bg-emerald-500/20 text-emerald-100 self-end ml-auto")
            }
          >
            {m.texto}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-1 mt-1">
        <input
          className="flex-1 rounded-lg border border-gray-800 bg-gray-950 px-2 py-1 text-[10px] focus:outline-none focus:ring-1 focus:ring-emerald-500/60"
          placeholder="Ex.: diferença entre DFD e ETP?"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-lg px-2 py-1 text-[10px] border border-emerald-500/60 text-emerald-200 hover:bg-emerald-500/10"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

// ===== Integração fake com TCE / PNCP =====

function FontesDadosSimuladas() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4 shadow-md shadow-black/30">
      <h3 className="font-semibold text-xs text-gray-100 mb-1">
        Fontes de dados (integração prevista)
      </h3>
      <p className="text-[10px] text-gray-400 mb-3">
        Protótipo conectado apenas a dados locais. Integração real com TCE-PI,
        PNCP e Painel de Preços prevista para a próxima fase.
      </p>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 px-2 py-2">
          <p className="font-semibold text-gray-100">TCE-PI</p>
          <p className="text-[9px] text-gray-400">
            Simulação de leitura de contratos e atas de registro de preços.
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/40 text-[9px]">
            Integração planejada
          </span>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 px-2 py-2">
          <p className="font-semibold text-gray-100">PNCP</p>
          <p className="text-[9px] text-gray-400">
            Consulta simulada a registros nacionais de contratações públicas.
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/40 text-[9px]">
            Integração planejada
          </span>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 px-2 py-2">
          <p className="font-semibold text-gray-100">Painel de Preços</p>
          <p className="text-[9px] text-gray-400">
            Base para comparação de preços médios e mínimos.
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-500/40 text-[9px]">
            Simulado
          </span>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 px-2 py-2">
          <p className="font-semibold text-gray-100">Dados locais</p>
          <p className="text-[9px] text-gray-400">
            Este protótipo usa apenas dados em memória, sem envio externo.
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-gray-700/40 text-gray-200 border border-gray-600 text-[9px]">
            100% local
          </span>
        </div>
      </div>
    </div>
  );
}

// ===== Dashboard de economia estimada =====

function DashboardEconomia({ docsGerados }) {
  const processosSimulados = 18;
  const economiaTotal = 237420; // R$ simulados
  const economiaMedia = Math.round(economiaTotal / processosSimulados);
  const economiaPorDoc = docsGerados > 0 ? Math.round(economiaTotal / (docsGerados || 1)) : null;

  return (
    <section className="rounded-2xl border border-gray-850 bg-gray-900/80 p-4 shadow-md shadow-black/30">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold text-gray-100">
          Economia estimada (simulação)
        </h3>
        <span className="text-[9px] text-gray-400">
          Baseado em preços mínimo x médio
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 text-[11px] mb-3">
        <div>
          <p className="text-[10px] text-gray-400">Economia total</p>
          <p className="text-lg font-semibold text-emerald-300">
            R$ {economiaTotal.toLocaleString("pt-BR")}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400">Por processo</p>
          <p className="text-lg font-semibold text-gray-100">
            R$ {economiaMedia.toLocaleString("pt-BR")}
          </p>
          <p className="text-[9px] text-gray-500">
            {processosSimulados} processos simulados
          </p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400">Por documento</p>
          <p className="text-lg font-semibold text-gray-100">
            {economiaPorDoc
              ? `R$ ${economiaPorDoc.toLocaleString("pt-BR")}`
              : "—"}
          </p>
          <p className="text-[9px] text-gray-500">
            Calculado sobre docs gerados
          </p>
        </div>
      </div>

      <div className="mt-1">
        <p className="text-[10px] text-gray-400 mb-1">
          Simulação: uso de preços mínimos em vez de médias de mercado.
        </p>
        <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden">
          <div
            className="h-2 bg-emerald-500/80"
            style={{ width: "68%" }}
          />
        </div>
        <p className="text-[9px] text-gray-500 mt-1">
          Barra ilustrativa da economia potencial em relação ao cenário base.
        </p>
      </div>
    </section>
  );
}

// ===== App principal =====

export default function App() {
  const [busca, setBusca] = React.useState("");
  const [itemSelecionado, setItemSelecionado] = React.useState(null);
  const [docsGerados, setDocsGerados] = React.useState(0);
  const [usuario, setUsuario] = React.useState(null);

  const itensFiltrados = ITENS_SIMULADOS.filter((i) => {
    if (!busca.trim()) return true;
    const t = busca.toLowerCase();
    return (
      i.item.toLowerCase().includes(t) ||
      i.categoria.toLowerCase().includes(t)
    );
  }).slice(0, 10);

  const handleLoginClick = () => {
    if (usuario) {
      setUsuario(null);
    } else {
      setUsuario({
        nome: "Servidor(a) Maria",
        orgao: "SEAD / Governo do Piauí",
        perfil: "Gestora de Compras",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Topbar */}
      <header className="border-b border-gray-900 bg-gray-950/95 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-gray-900">
              C
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-tight">ComprIA</h1>
              <p className="text-[10px] text-gray-400 -mt-0.5">
                De dias para minutos no planejamento da contratação
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {usuario && (
              <div className="hidden md:flex flex-col items-end mr-2">
                <span className="text-[10px] text-emerald-300">
                  {usuario.nome}
                </span>
                <span className="text-[9px] text-gray-400">
                  {usuario.perfil} • {usuario.orgao}
                </span>
              </div>
            )}
            <button
              onClick={handleLoginClick}
              className="rounded-xl bg-emerald-500 text-gray-900 text-[11px] px-3 py-1.5 font-medium"
            >
              {usuario ? "Sair do perfil" : "Login servidor (simulado)"}
            </button>
          </div>
        </div>
        {usuario && (
          <div className="max-w-6xl mx-auto px-4 pb-2">
            <p className="text-[9px] text-gray-500">
              Sessão simulada para demonstração em hackathon. Nenhum dado real é
              enviado ou armazenado.
            </p>
          </div>
        )}
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-4">
        {/* Coluna esquerda: itens + indicadores + economia */}
        <div className="space-y-4">
          {/* Busca + lista de itens */}
          <section className="rounded-2xl border border-gray-850 bg-gray-900/80 p-4 shadow-md shadow-black/30">
            <h2 className="text-xs font-semibold text-gray-100 mb-2">
              Itens simulados
            </h2>
            <p className="text-[10px] text-gray-400 mb-2">
              Digite um termo e selecione um item para gerar documentos da
              contratação.
            </p>
            <div className="flex gap-2 mb-3">
              <input
                className="flex-1 rounded-lg border border-gray-800 bg-gray-950 px-3 py-1.5 text-[11px] focus:outline-none focus:ring-1 focus:ring-emerald-500/60"
                placeholder="Ex.: papel, caneta, álcool..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="border border-gray-850 rounded-xl bg-gray-950/60 max-h-60 overflow-y-auto">
              {itensFiltrados.length === 0 ? (
                <p className="text-[10px] text-gray-500 px-3 py-2">
                  Nenhum item encontrado.
                </p>
              ) : (
                <ul className="divide-y divide-gray-850 text-[11px]">
                  {itensFiltrados.map((i) => (
                    <li
                      key={i.id}
                      className={
                        "px-3 py-2 cursor-pointer hover:bg-gray-800/70 " +
                        (itemSelecionado?.id === i.id
                          ? "bg-emerald-500/10 border-l-2 border-emerald-400"
                          : "")
                      }
                      onClick={() => setItemSelecionado(i)}
                    >
                      <p className="font-medium text-gray-100">{i.item}</p>
                      <p className="text-[10px] text-gray-400">
                        {i.categoria} • Unidade: {i.unidade}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* Indicadores */}
          <section className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-gray-850 bg-gray-900/80 p-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                Itens simulados
              </p>
              <p className="text-lg font-semibold mt-1">
                {ITENS_SIMULADOS.length}
              </p>
            </div>
            <div className="rounded-xl border border-gray-850 bg-gray-900/80 p-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                Planejamento em minutos
              </p>
              <p className="text-lg font-semibold mt-1">DFD • ETP • TR</p>
            </div>
            <div className="rounded-xl border border-gray-850 bg-gray-900/80 p-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                Documentos gerados
              </p>
              <p className="text-lg font-semibold mt-1">{docsGerados}</p>
            </div>
          </section>

          {/* Dashboard economia estimada */}
          <DashboardEconomia docsGerados={docsGerados} />
        </div>

        {/* Coluna direita: seleção + lembretes + integração + IA + documentos */}
        <div className="space-y-3">
          {itemSelecionado && (
            <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4 shadow-md shadow-black/30">
              <h3 className="text-xs font-semibold text-gray-100 mb-1">
                Item selecionado
              </h3>
              <p className="text-[11px] text-gray-100 font-medium">
                {itemSelecionado.item}
              </p>
              <p className="text-[10px] text-gray-400">
                {itemSelecionado.categoria} • Unidade: {itemSelecionado.unidade}
              </p>
            </div>
          )}

          <LembretesLicitacoes />
          <AlertaVigencia />
          <FontesDadosSimuladas />
          <ChatAjudaLicitacoes />

          <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4 shadow-md shadow-black/30">
            <h3 className="font-semibold mb-2 text-xs uppercase tracking-wide text-gray-100">
              Documentos da contratação
            </h3>
            <p className="text-[10px] text-gray-400 mb-3">
              Gere automaticamente DFD, ETP, Termo de Referência, Mapa de
              Riscos, Matriz de Riscos e Justificativas a partir do item
              selecionado.
            </p>
            <GeradorDocumentos
              itemSelecionado={itemSelecionado}
              onDocumentoGerado={() => setDocsGerados((v) => v + 1)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
