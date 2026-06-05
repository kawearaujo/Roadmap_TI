export default function IA() {
    return (
        {

            id: '8',
            title: 'Scrum Master',
            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>Scrum Master é um papel crucial no framework Scrum, atuando como facilitador, coach e guardião das práticas ágeis. Esta pessoa remove impedimentos, facilita eventos, protege o time de interferências externas e ajuda a organização a adotar práticas ágeis efetivas.</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/what-is-a-scrum-master" target="_blank">O que é um Scrum Master (Scrum.org)</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/scrum/scrum-master" target="_blank">Guia Atlassian sobre Scrum Master</a></li>
                        <li><a className="text-blue-600 underline" href="https://scrumguides.org/scrum-guide.html" target="_blank">Guia Scrum Oficial</a></li>
                    </ul>
                </div>
            ),
            children: [
                {
                    id: '8-1',
                    title: '🟢 Fundamentos Ágeis',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Os fundamentos ágeis formam a base filosófica para todas as metodologias ágeis, incluindo Scrum. Estes princípios enfatizam colaboração, adaptabilidade, entrega incremental de valor e foco no cliente.</p>
                            <p className="font-bold text-green-600">Essencial para qualquer profissional que deseja trabalhar com metodologias ágeis.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://agilemanifesto.org/" target="_blank">Manifesto Ágil Original</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile" target="_blank">Guia Atlassian sobre Agilidade</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/learn-about-scrum" target="_blank">Scrum Alliance - Recursos de Aprendizado</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-1-1',
                            title: 'Manifesto Ágil',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Manifesto Ágil é um documento criado em 2001 por 17 profissionais de desenvolvimento de software que estabeleceu os valores fundamentais do movimento ágil:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Indivíduos e interações mais que processos e ferramentas</li>
                                        <li>Software em funcionamento mais que documentação abrangente</li>
                                        <li>Colaboração com o cliente mais que negociação de contratos</li>
                                        <li>Responder a mudanças mais que seguir um plano</li>
                                    </ul>
                                    <p className="mt-2">Recursos para aprofundamento:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://agilemanifesto.org/" target="_blank">Manifesto Ágil Original</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/manifesto" target="_blank">Guia do Manifesto Ágil</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mountaingoatsoftware.com/agile/manifesto" target="_blank">Mountain Goat Software - Explicação do Manifesto</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-1-2',
                            title: 'Princípios Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Além dos 4 valores, o Manifesto Ágil é complementado por 12 princípios que guiam as práticas ágeis no dia a dia. Estes princípios enfatizam:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Satisfação do cliente através de entregas contínuas de valor</li>
                                        <li>Adaptação a mudanças, mesmo em fases avançadas</li>
                                        <li>Entregas frequentes de software funcionando</li>
                                        <li>Colaboração diária entre negócios e desenvolvedores</li>
                                        <li>Construção de projetos com pessoas motivadas</li>
                                        <li>Comunicação face a face como método mais eficiente</li>
                                        <li>Software funcionando como principal medida de progresso</li>
                                        <li>Desenvolvimento sustentável e ritmo constante</li>
                                        <li>Excelência técnica e bom design</li>
                                        <li>Simplicidade como arte de maximizar trabalho não realizado</li>
                                        <li>Times auto-organizáveis</li>
                                        <li>Reflexão regular sobre como se tornar mais eficaz</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://agilemanifesto.org/principles.html" target="_blank">12 Princípios do Manifesto Ágil</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/resources/agile-values-and-principles" target="_blank">Valores e Princípios Ágeis (ScrumAlliance)</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-1-3',
                            title: 'Frameworks Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Existem diversos frameworks que implementam os valores e princípios ágeis, cada um com seu foco e características:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Scrum:</strong> Framework iterativo e incremental com papéis, eventos e artefatos bem definidos</li>
                                        <li><strong>Kanban:</strong> Sistema visual que limita trabalho em progresso e otimiza fluxo</li>
                                        <li><strong>XP (eXtreme Programming):</strong> Foco em práticas técnicas como TDD, pair programming e integração contínua</li>
                                        <li><strong>Lean:</strong> Foco na eliminação de desperdícios e otimização do fluxo de valor</li>
                                        <li><strong>Scrumban:</strong> Hibridização entre Scrum e Kanban</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/kanban/kanban-vs-scrum" target="_blank">Kanban vs. Scrum</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.agilealliance.org/glossary/xp" target="_blank">XP - Extreme Programming</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/about-scrum/overview" target="_blank">Visão Geral do Scrum</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-1-4',
                            title: 'Cultura de Times Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A cultura é um componente essencial para times ágeis eficazes. Elementos de uma cultura ágil saudável incluem:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Confiança e transparência entre membros do time</li>
                                        <li>Colaboração ativa e comunicação aberta</li>
                                        <li>Feedback contínuo e melhoria iterativa</li>
                                        <li>Autorganização e empoderamento</li>
                                        <li>Experimentação e aprendizado com falhas</li>
                                        <li>&quot;Fail fast&quot; - falhar rápido para aprender rápido</li>
                                        <li>Orientação a valor para o cliente</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/developing-agile-culture" target="_blank">Desenvolvendo uma Cultura Ágil</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/team-playbook/plays/retrospective" target="_blank">Guia de Retrospectivas Atlassian</a></li>
                                        <li><a className="text-blue-600 underline" href="https://management30.com/" target="_blank">Management 3.0</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '8-2',
                    title: '🟡 Fundamentos do Scrum',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>O Scrum é um framework ágil que ajuda equipes a trabalhar juntas de forma colaborativa, entregar valor de forma incremental e lidar com complexidade. É baseado em empirismo (decisões baseadas no que é observado) e pensamento lean (redução de desperdícios).</p>
                            <p className="font-bold text-yellow-600">Conhecer profundamente os elementos do Scrum é fundamental para qualquer Scrum Master.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://scrumguides.org/" target="_blank">Guia Scrum Oficial</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/what-is-scrum" target="_blank">O que é Scrum (Scrum.org)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scruminc.com/scrum-framework/" target="_blank">Framework Scrum (Scrum Inc)</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-2-1',
                            title: 'Papéis',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Scrum define três papéis principais que formam o Scrum Team:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Scrum Master:</strong> Facilita o processo, remove impedimentos, ajuda o time a seguir práticas Scrum eficazes e promove a auto-organização</li>
                                        <li><strong>Product Owner (PO):</strong> Responsável por maximizar o valor do produto, gerenciar o Product Backlog e garantir visão clara do produto</li>
                                        <li><strong>Developers (Time de Desenvolvimento):</strong> Profissionais que transformam itens do Product Backlog em incrementos de produto utilizáveis a cada Sprint</li>
                                    </ul>
                                    <p className="mt-2">No Scrum Guide 2020, houve uma mudança de nomenclatura - agora temos apenas &quot;Developers&quot; ao invés de &quot;Development Team&quot;.</p>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/scrum-team-roles-responsibilities" target="_blank">Papéis e Responsabilidades no Scrum</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mountaingoatsoftware.com/agile/scrum/roles" target="_blank">Papéis do Scrum (Mountain Goat Software)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scrumguides.org/scrum-guide.html#scrum-team" target="_blank">Scrum Team no Guia Scrum</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-2-2',
                            title: 'Eventos Scrum',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Scrum define eventos específicos para criar regularidade e minimizar reuniões não previstas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Sprint:</strong> Contêiner para todos os outros eventos, tipicamente de 1-4 semanas, onde um incremento utilizável é criado</li>
                                        <li><strong>Sprint Planning:</strong> Evento onde o trabalho a ser realizado na Sprint é planejado colaborativamente pelo Scrum Team</li>
                                        <li><strong>Daily Scrum:</strong> Reunião diária de 15 minutos para sincronizar atividades e criar um plano para as próximas 24 horas</li>
                                        <li><strong>Sprint Review:</strong> Inspeção do incremento criado e adaptação do Product Backlog se necessário</li>
                                        <li><strong>Sprint Retrospective:</strong> Oportunidade para o Scrum Team inspecionar a si mesmo e criar um plano de melhorias</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/what-is-sprint-planning" target="_blank">O que é Sprint Planning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/scrum/sprint-reviews" target="_blank">Guia de Sprint Reviews</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.retrium.com/ultimate-guide-to-sprint-retrospectives" target="_blank">Guia de Retrospectivas</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-2-3',
                            title: 'Artefatos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Os artefatos do Scrum representam trabalho ou valor e são projetados para maximizar a transparência:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Product Backlog:</strong> Lista ordenada de tudo necessário no produto, única fonte de requisitos</li>
                                        <li><strong>Sprint Backlog:</strong> Conjunto de itens do Product Backlog selecionados para a Sprint, mais um plano para entregá-los</li>
                                        <li><strong>Increment:</strong> Soma de todos os itens do Product Backlog concluídos durante uma Sprint e o valor dos incrementos anteriores</li>
                                    </ul>
                                    <p className="mt-2">Cada artefato tem um &quot;compromisso&quot; associado para garantir transparência e foco:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Product Backlog → Product Goal (Meta do Produto)</li>
                                        <li>Sprint Backlog → Sprint Goal (Meta da Sprint)</li>
                                        <li>Increment → Definition of Done (Definição de Pronto)</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/what-is-a-product-backlog" target="_blank">O que é Product Backlog</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/scrum/sprint-backlog" target="_blank">Sprint Backlog (Atlassian)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/walking-through-definition-done" target="_blank">Definition of Done</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-2-4',
                            title: 'Definição do Pronto & Preparado',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Definições claras de &quot;pronto&quot; e &quot;preparado&quot; são essenciais para garantir qualidade e clareza no Scrum:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Definition of Done (DoD):</strong> Acordo formal sobre as condições que um incremento deve atender para ser considerado completo - é um compromisso oficial do framework Scrum</li>
                                        <li><strong>Definition of Ready (DoR):</strong> Conjunto de critérios que um item do Product Backlog deve atender antes de ser considerado &quot;pronto para entrar numa Sprint&quot; - é uma prática comum mas não faz parte do framework oficial</li>
                                    </ul>
                                    <p className="mt-2">Exemplos de critérios para DoD:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Código revisado</li>
                                        <li>Testes automatizados escritos e passando</li>
                                        <li>Documentação atualizada</li>
                                        <li>Critérios de aceitação atendidos</li>
                                        <li>Aprovação do Product Owner</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/resources/definition-of-done" target="_blank">Definition of Done (Scrum Alliance)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/definition-ready" target="_blank">Definition of Ready (Scrum.org)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.agilealliance.org/glossary/definition-of-done" target="_blank">Definition of Done (Agile Alliance)</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '8-3',
                    title: '🟠 Habilidades do Scrum Master',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Um Scrum Master eficaz possui um conjunto diversificado de habilidades que vão além do conhecimento técnico sobre o framework. Estas competências incluem facilitação, coaching, liderança servidora e resolução de conflitos.</p>
                            <p className="font-bold text-orange-600">Estas habilidades são o que diferencia um Scrum Master certificado de um Scrum Master realmente eficaz.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/what-makes-great-scrum-master" target="_blank">O que faz um grande Scrum Master</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/articles/scrum-master-skills" target="_blank">Habilidades essenciais do Scrum Master</a></li>
                                <li><a className="text-blue-600 underline" href="https://agilethought.com/blog/skills-every-scrum-master-needs/" target="_blank">Habilidades para todo Scrum Master</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-3-1',
                            title: 'Facilitação de Reuniões',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A facilitação de reuniões é uma habilidade central para o Scrum Master, que precisa garantir que os eventos Scrum sejam produtivos e eficazes:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Preparação adequada do ambiente e materiais</li>
                                        <li>Definição clara de objetivos para cada reunião</li>
                                        <li>Gerenciamento do tempo e foco nas discussões</li>
                                        <li>Técnicas para envolver todos os participantes</li>
                                        <li>Uso de ferramentas visuais e dinâmicas participativas</li>
                                        <li>Habilidade para resumir decisões e próximos passos</li>
                                        <li>Documentação apropriada dos resultados</li>
                                    </ul>
                                    <p className="mt-2">Técnicas de facilitação populares:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Dot voting para priorização</li>
                                        <li>Timebox para controle de tempo</li>
                                        <li>Liberating Structures para colaboração efetiva</li>
                                        <li>Starfish, 4Ls, Sailing Boat para retrospectivas</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/articles/402-agile-facilitation" target="_blank">Facilitação Ágil</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.liberatingstructures.com/" target="_blank">Liberating Structures</a></li>
                                        <li><a className="text-blue-600 underline" href="https://retromat.org/" target="_blank">Retromat - Técnicas para Retrospectivas</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-3-2',
                            title: 'Resolução de Conflitos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Scrum Master frequentemente precisa atuar como mediador em situações de conflito, utilizando técnicas como:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Escuta ativa:</strong> Ouvir atentamente todas as partes envolvidas</li>
                                        <li><strong>Comunicação não-violenta:</strong> Técnica de Marshall Rosenberg focada em empatia</li>
                                        <li><strong>Modelo GROW:</strong> Goals, Reality, Options, Way Forward - estrutura para coaching</li>
                                        <li><strong>Feedback construtivo:</strong> Usando técnicas como SBI (Situation, Behavior, Impact)</li>
                                        <li><strong>Mediação:</strong> Facilitação neutra para resolução de disputas</li>
                                    </ul>
                                    <p className="mt-2">Tipos comuns de conflitos em times Scrum:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Disputas técnicas sobre abordagens de desenvolvimento</li>
                                        <li>Priorização de backlog e requisitos</li>
                                        <li>Definição de pronto e qualidade do produto</li>
                                        <li>Estimativas e comprometimento com prazos</li>
                                        <li>Conflitos de personalidade e estilos de trabalho</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/articles/managing-conflict-in-agile-teams" target="_blank">Gerenciando Conflitos em Times Ágeis</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.cnvc.org/" target="_blank">Centro de Comunicação Não-Violenta</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mindtools.com/pages/article/newLDR_89.htm" target="_blank">Modelo GROW para Coaching</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-3-3',
                            title: 'Coaching e Mentoria Ágil',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-3-4',
                            title: 'Liderança Servidora',
                            content:
                                <></>
                            ,
                            children: []
                        }
                    ]
                },
                {
                    id: '8-4',
                    title: '🔵 Métricas Ágeis e Ferramentas',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Métricas e ferramentas apropriadas são fundamentais para monitorar o progresso, identificar problemas e ajudar o time a melhorar continuamente. Scrum Masters precisam entender como usar dados para tomar decisões informadas sem criar uma cultura de controle.</p>
                            <p className="font-bold text-blue-600">As métricas devem servir ao time, não o contrário. Um bom Scrum Master sabe quais métricas são relevantes e como interpretá-las corretamente.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/project-management/metrics" target="_blank">Métricas Ágeis (Atlassian)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/agile-metrics-scrum-master-should-watch" target="_blank">Métricas que um Scrum Master Deve Observar</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/community/articles/2014/november/best-agile-tools-for-scrum-masters" target="_blank">Melhores Ferramentas para Scrum Masters</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-4-1',
                            title: 'Burnup, Burndown, Velocity',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-2',
                            title: 'Diagrama de Fluxo Cumulativo',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-3',
                            title: 'Ferramentas Ágeis',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-4',
                            title: 'Métricas de Time de Fluxo',
                            content: (
                                <></>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '8-5',
                    title: '🟣 Escalando o Scrum',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Quando organizações crescem, surge a necessidade de escalar práticas ágeis para coordenar múltiplos times. Vários frameworks foram desenvolvidos para abordar os desafios de escalar o Scrum enquanto se mantém a agilidade e eficácia.</p>
                            <p className="font-bold text-purple-600">Scrum Masters experientes frequentemente precisam entender como o Scrum funciona em escala e como diferentes frameworks de escalabilidade podem ser aplicados.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.scaledagileframework.com/" target="_blank">SAFe - Scaled Agile Framework</a></li>
                                <li><a className="text-blue-600 underline" href="https://less.works/" target="_blank">LeSS - Large Scale Scrum</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/scaling-scrum" target="_blank">Guia para Escalar o Scrum</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-5-1',
                            title: 'Escalabilidade',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-2',
                            title: 'Scaled Agile Framework',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-3',
                            title: 'LeSS (Large Scale Scrum)',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-4',
                            title: 'Nexus Framework',
                            content: (
                                <></>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '8-6',
                    title: '🔴 Certificações e Carreira',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>O mercado para Scrum Masters continua em crescimento, e as certificações podem ajudar a validar conhecimento e abrir portas para oportunidades de carreira. Existem diversos caminhos para desenvolvimento profissional nesta área.</p>
                            <p className="font-bold text-red-600">Para crescer na carreira, combine certificações com experiência prática e desenvolvimento contínuo de habilidades.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.scrum.org/professional-scrum-certifications" target="_blank">Certificações Scrum.org</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/get-certified" target="_blank">Certificações Scrum Alliance</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.mountaingoatsoftware.com/blog/deciding-between-the-csm-and-psm-i" target="_blank">Escolhendo entre CSM e PSM</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-6-1',
                            title: 'PSM I/II (Scrum.org)',
                            content: (
                                <></>
                            ),
                            children: []
                        },
                        {
                            id: '8-6-2',
                            title: 'CSM (Scrum Alliance)',
                            content: (
                                <></>
                            ),
                            children: []
                        },

                        // Agile Coach e Product Owner (níveis avançados)
                        {
                            id: '8-6-3',
                            title: 'Níveis Avançados',
                            content: (
                                <></>
                            ),
                            children: []
                        },

                        // Comunidades, Eventos e Networking
                        {
                            id: '8-6-4',
                            title: 'Networking',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        QAs eficazes combinam mentalidade crítica com comunicação empática ao reportar bugs. Questionar requisitos ambíguos, colaborar com devs sem criar adversariedade e adaptar comunicação para diferentes audiências são diferenciais. Pensamento sistêmico para antecipar como funcionalidades se interagem e curiosidade constante completam o perfil do QA moderno.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=SNKpDCM_J1M" target="_blank">Soft Skills para QA</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=WKnDMeFG01A" target="_blank">QA Mindset - Ministry of Testing</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/wharton-communication-skills" target="_blank">Communication Skills - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/critical-thinking-skills" target="_blank">Critical Thinking - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ,
                            children: []
                        }
                    ]
                }
            ]


        }


    );
}