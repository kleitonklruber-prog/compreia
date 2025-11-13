// ================================
// src/templates.js
// Templates mais completos para DFD, ETP e TR
// alinhados à Lei 14.133/2021 e Decretos do PI
// ================================

export function preencherTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (_, chaveBruta) => {
    const chave = chaveBruta.trim();
    const valor = data[chave];
    return (valor ?? "").toString();
  });
}

// -------------------------
// DFD - DOCUMENTO DE FORMALIZAÇÃO DA DEMANDA
// -------------------------
export const TEMPLATE_DFD = `MODELO DE DOCUMENTO DE FORMALIZAÇÃO DA DEMANDA – DFD

(Documento elaborado com fundamento na Lei nº 14.133/2021 e no Decreto Estadual nº 21.872/2023.)

1. IDENTIFICAÇÃO DA ÁREA REQUISITANTE

Órgão/Entidade: {{ orgao }}
Unidade Administrativa: {{ unidade }}
Setor/Área Demandante: {{ setor }}
Responsável pela Demanda: {{ responsavel }}
Cargo/Função: {{ cargo }}
E-mail institucional: {{ email }}
Data: {{ data_atual }}

2. DESCRIÇÃO RESUMIDA DO OBJETO

Aquisição de {{ item }}, em quantidade estimada de {{ quantidade }} unidade(s), para atendimento às necessidades da unidade requisitante.

3. DESCRIÇÃO DA NECESSIDADE A SER ATENDIDA

A demanda decorre da necessidade de garantir condições adequadas de funcionamento das atividades da área requisitante, evitando descontinuidade na prestação dos serviços e assegurando o atendimento adequado ao cidadão.

Situação atual: há risco de desabastecimento ou insuficiência de {{ item }}, o que pode comprometer prazos, rotinas internas e a qualidade do atendimento.

Resultados pretendidos com a contratação:
- Garantir a regularidade da execução das atividades;
- Mitigar riscos de paralisação ou queda de desempenho da unidade;
- Otimizar o uso dos recursos públicos, com compra planejada e baseada em dados.

4. ESTIMATIVA DE QUANTITATIVO DO OBJETO

A quantidade estimada foi definida considerando o histórico de consumo, a previsão de demanda e o planejamento da unidade.

Item: {{ item }}
CATMAT/CATSER (quando aplicável): {{ catmat }}
Unidade de fornecimento: {{ unidade_fornecimento }}
Quantidade estimada: {{ quantidade }}

5. JUSTIFICATIVA DA CONTRATAÇÃO

A contratação é necessária para suprir a demanda recorrente de {{ item }}, viabilizando a execução das atividades finalísticas e de apoio da unidade, em observância ao princípio da continuidade do serviço público e às diretrizes de planejamento das contratações.

A não realização da contratação poderá acarretar:
- Interrupção ou atraso na execução de rotinas administrativas;
- Prejuízo à qualidade do atendimento ao cidadão;
- Aumento de custos operacionais em razão de aquisições emergenciais.

6. GRAU DE URGÊNCIA

Grau de urgência da demanda: {{ grau_urgencia }}.

Quando aplicável, justificar a urgência em função de prazos legais, término de contratos vigentes ou risco iminente de desabastecimento.

7. CONCLUSÃO DA ÁREA REQUISITANTE

Diante da necessidade identificada, da estimativa de consumo e dos riscos associados à ausência de contratação, a área requisitante manifesta-se favorável à formalização da demanda para aquisição de {{ item }}, em quantidade estimada de {{ quantidade }} unidade(s), autorizando o prosseguimento das etapas subsequentes do planejamento da contratação.
`;

// -------------------------
// ETP - ESTUDO TÉCNICO PRELIMINAR
// -------------------------
export const TEMPLATE_ETP = `ESTUDO TÉCNICO PRELIMINAR – BENS

(Elaborado em atenção à Lei nº 14.133/2021, ao Decreto Estadual nº 21.872/2023 e às boas práticas de planejamento de contratações públicas.)

1. IDENTIFICAÇÃO

Órgão/Entidade: {{ orgao }}
Unidade: {{ unidade }}
Responsável pela elaboração: {{ responsavel }} – {{ cargo }}
Data: {{ data_atual }}

2. INTRODUÇÃO

Este Estudo Técnico Preliminar tem por finalidade avaliar a contratação de {{ item }}, buscando identificar a solução mais adequada para atender à necessidade administrativa, com observância aos princípios da eficiência, economicidade, transparência e planejamento.

3. DESCRIÇÃO DA NECESSIDADE DA CONTRATAÇÃO

A unidade requisitante necessita de {{ item }} para assegurar a continuidade e a qualidade dos serviços prestados, considerando:

- A demanda recorrente de insumos para o funcionamento regular das atividades;
- Riscos de desabastecimento e impacto negativo sobre o atendimento ao público;
- Alinhamento com os objetivos institucionais e com o planejamento estratégico do órgão.

A ausência de contratação adequada implica maior risco operacional, aumento de retrabalho e possível comprometimento de metas e indicadores institucionais.

4. DESCRIÇÃO DOS REQUISITOS DA CONTRATAÇÃO

Requisitos técnicos mínimos da solução:

- Objeto: {{ item }}
- Unidade de fornecimento: {{ unidade_fornecimento }}
- Características técnicas mínimas: {{ caracteristicas_minimas }}
- Garantia mínima recomendada: {{ garantia }} meses
- Local de entrega: {{ local_entrega }}
- Prazo de entrega pretendido: {{ prazo_entrega }} dias

Requisitos de desempenho e qualidade:
- Produto compatível com o uso intensivo em ambiente administrativo;
- Padrão de qualidade em conformidade com normas técnicas aplicáveis, quando houver;
- Adequação às práticas de sustentabilidade sempre que possível.

5. ANÁLISE DE ALTERNATIVAS DE SOLUÇÃO

Foram analisadas, em nível preliminar, as seguintes alternativas:

a) Manutenção da situação atual (não contratar):
   - Não elimina o risco de desabastecimento;
   - Potencializa a necessidade de aquisições emergenciais, com perda de economicidade.

b) Aquisições pontuais e fragmentadas:
   - Dificulta o planejamento;
   - Aumenta o esforço administrativo na condução de vários processos;
   - Pode resultar em preços menos vantajosos.

c) Contratação planejada com base em estimativa anual de consumo:
   - Permite melhor negociação de preços;
   - Proporciona previsibilidade orçamentária;
   - Reduz risco de interrupção dos serviços.

À luz da análise, a alternativa “c” se apresenta como a mais adequada.

6. ESTIMATIVA DE CUSTO E PESQUISA DE PREÇOS

Com base em pesquisa de mercado e em consultas a bases institucionais, obtiveram-se, para {{ item }}, os seguintes valores de referência:

- Menor preço: {{ menor_preco }}
- Preço médio: {{ preco_medio }}
- Maior preço: {{ maior_preco }}
- Valor total estimado da contratação: {{ valor_total_estimado }}

A estimativa servirá de parâmetro para definição do valor de referência da futura licitação, não constituindo, por si, limite máximo absoluto, mas sim referência para análise de vantajosidade.

7. ANÁLISE DE RISCOS

Principais riscos identificados:

- Atrasos na entrega dos bens, com impacto na continuidade das atividades;
- Fornecimento de itens em desacordo com as especificações técnicas;
- Eventual oscilação significativa de preços, afetando o orçamento previsto.

Medidas de mitigação sugeridas:

- Definição clara das especificações técnicas no Termo de Referência;
- Previsão de prazos e penalidades contratuais proporcionais;
- Acompanhamento próximo do mercado para ajustes em futuras contratações.

8. CONCLUSÃO

Diante das informações levantadas, conclui-se pela viabilidade e conveniência da contratação de {{ item }}, em quantidade estimada de {{ quantidade }} unidade(s), com base nas necessidades da Administração, nas alternativas analisadas e na pesquisa de preços realizada.

Recomenda-se o prosseguimento da contratação, com elaboração do Termo de Referência e demais documentos necessários, em conformidade com a legislação aplicável.
`;

// -------------------------
// TR - TERMO DE REFERÊNCIA
// -------------------------
export const TEMPLATE_TR = `TERMO DE REFERÊNCIA – BENS

(Instrumento elaborado nos termos da Lei nº 14.133/2021 e do Decreto Estadual nº 21.872/2023.)

1. IDENTIFICAÇÃO

Órgão/Entidade: {{ orgao }}
Unidade Requisitante: {{ unidade }}
Responsável pela demanda: {{ responsavel }} – {{ cargo }}
Data: {{ data_atual }}

2. OBJETO

Constitui objeto deste Termo de Referência a futura aquisição de {{ item }}, conforme especificações técnicas, quantidades e demais condições estabelecidas neste documento, destinada a suprir as necessidades da unidade requisitante.

3. FUNDAMENTAÇÃO DA CONTRATAÇÃO

A contratação fundamenta-se na necessidade de garantir condições adequadas para a execução das atividades administrativas e/ou finalísticas da unidade, assegurando:

- Disponibilidade contínua de {{ item }};
- Manutenção da qualidade e regularidade dos serviços prestados;
- Observância ao planejamento das contratações e ao interesse público.

O presente Termo de Referência está alinhado ao Estudo Técnico Preliminar e ao Documento de Formalização da Demanda, que caracterizam o problema a ser solucionado, a solução escolhida e os parâmetros de viabilidade.

4. DESCRIÇÃO DA SOLUÇÃO COMO UM TODO

A solução proposta consiste na aquisição programada de {{ item }}, com entrega no {{ local_entrega }}, em conformidade com as especificações técnicas mínimas e as exigências de qualidade definidas pela área técnica.

A contratação deverá observar:

- Especificações completas do objeto;
- Prazos de entrega compatíveis com a necessidade;
- Condições de garantia e assistência técnica adequadas;
- Regras de recebimento provisório e definitivo, quando aplicáveis.

5. ESPECIFICAÇÕES TÉCNICAS DO OBJETO

Descrição técnica do objeto:
{{ descricao_tecnica }}

Parâmetros mínimos recomendados:
- Unidade de fornecimento: {{ unidade_fornecimento }}
- Características técnicas mínimas: {{ caracteristicas_minimas }}
- Garantia mínima: {{ garantia }} meses
- Padrão de qualidade condizente com uso em ambiente institucional.

6. QUANTITATIVOS

Quantidade estimada:
- {{ quantidade }} unidade(s) de {{ item }}.

Os quantitativos foram definidos com base no histórico de consumo, na previsão de demanda e no planejamento da unidade, em consonância com o Estudo Técnico Preliminar.

7. PREÇOS DE REFERÊNCIA E VALOR ESTIMADO

Com base na pesquisa de preços, foram considerados, para o bem em questão:

- Menor preço obtido: {{ menor_preco }}
- Preço médio de referência: {{ preco_medio }}
- Maior preço observado: {{ maior_preco }}

Valor total estimado da contratação: {{ valor_total_estimado }}.

8. PRAZO E LOCAL DE ENTREGA

Prazo máximo para entrega: {{ prazo_entrega }} dias, contados da assinatura do contrato ou da emissão da nota de empenho, conforme definido no instrumento convocatório.

Local de entrega: {{ local_entrega }}, ou outro endereço que venha a ser indicado pela Administração em ato próprio, observado o interesse público.

9. OBRIGAÇÕES DA CONTRATADA (SÍNTESE)

Sem prejuízo das obrigações constantes do contrato e demais normas aplicáveis, são obrigações da contratada, entre outras:

- Entregar os bens em conformidade com as especificações técnicas e prazos estabelecidos;
- Substituir, às suas expensas, eventuais itens rejeitados em razão de defeito, avaria ou não conformidade;
- Responder pela garantia dos bens durante o período contratual e pelo prazo de garantia estabelecido.

10. FISCALIZAÇÃO E GESTÃO DO CONTRATO

A fiscalização da execução será exercida por representante designado pela Administração.

Fiscal do contrato: {{ nome_fiscal }} – {{ cargo_fiscal }}.

Compete ao fiscal acompanhar a entrega dos bens, registrar ocorrências, atestar o cumprimento das obrigações e subsidiar a autoridade competente na adoção de providências necessárias.

11. DISPOSIÇÕES FINAIS

Este Termo de Referência servirá de base para a elaboração do edital, da minuta de contrato e demais documentos da fase externa da licitação, devendo ser observado pelas áreas envolvidas na condução do processo.

As situações não previstas neste documento serão resolvidas pela Administração, em observância à legislação vigente e aos princípios que regem as contratações públicas.
`;
