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
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Como coach, o Scrum Master ajuda indivíduos e times a desenvolverem autonomia e competência em práticas ágeis:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Coaching situacional:</strong> Adaptando o estilo de coaching às necessidades do time (dirigir, guiar, apoiar, delegar)</li>
                                        <li><strong>Técnicas de questionamento:</strong> Perguntas poderosas que levam à reflexão</li>
                                        <li><strong>Feedback construtivo:</strong> Fornecer feedback específico e acionável</li>
                                        <li><strong>Mentoria:</strong> Compartilhar experiências e conhecimentos de forma estruturada</li>
                                        <li><strong>Desenvolvimento de competências ágeis:</strong> Ajudar o time a aprender e aplicar práticas ágeis</li>
                                    </ul>
                                    <p className="mt-2">Áreas comuns para coaching ágil:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Auto-organização e tomada de decisão</li>
                                        <li>Refinamento de backlog eficaz</li>
                                        <li>Estimativas colaborativas</li>
                                        <li>Engajamento em retrospectivas</li>
                                        <li>Melhoria contínua como mindset</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.agilecoachinginstitute.com/" target="_blank">Agile Coaching Institute</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/7-qualities-truly-effective-agile-coach" target="_blank">7 Qualidades de um Coach Ágil Eficaz</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.icoachingacademy.com/blog/powerful-coaching-questions" target="_blank">Perguntas Poderosas para Coaching</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-3-4',
                            title: 'Liderança Servidora',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A liderança servidora é um estilo de liderança fundamental para Scrum Masters, enfatizando o serviço aos outros acima da auto-promoção:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Princípios da liderança servidora:</strong> Colocar as necessidades dos outros em primeiro lugar, empoderar o time, cultivar crescimento</li>
                                        <li><strong>Comportamentos chave:</strong> Escuta ativa, empatia, persuasão em vez de autoridade, desenvolvimento dos outros</li>
                                        <li><strong>Aplicação no Scrum:</strong> Remover impedimentos, criar ambiente seguro, proteger o time, facilitar auto-organização</li>
                                    </ul>
                                    <p className="mt-2">Como o Scrum Master pratica liderança servidora:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Apoiando o Product Owner na gestão eficaz do Product Backlog</li>
                                        <li>Ajudando o time a melhorar práticas de desenvolvimento</li>
                                        <li>Removendo obstáculos que impedem o progresso do time</li>
                                        <li>Educando a organização sobre os benefícios do Scrum</li>
                                        <li>Protegendo o time de interferências externas</li>
                                        <li>Facilitando eventos de forma produtiva</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/articles/servant-leadership-in-scrum" target="_blank">Liderança Servidora no Scrum</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.greenleaf.org/what-is-servant-leadership/" target="_blank">O que é Liderança Servidora</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/servant-leadership-key-ingredient-scrum-mastery" target="_blank">Liderança Servidora como Ingrediente Chave para Maestria em Scrum</a></li>
                                    </ul>
                                </div>,
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
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Estas são métricas fundamentais que ajudam a visualizar o progresso e a capacidade do time:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Burndown Chart:</strong> Mostra o trabalho restante vs. tempo disponível na Sprint, ajudando a identificar desvios do planejado</li>
                                        <li><strong>Burnup Chart:</strong> Mostra trabalho concluído vs. escopo total, sendo útil especialmente quando o escopo muda</li>
                                        <li><strong>Velocity:</strong> Média de pontos de história ou unidades de trabalho que um time completa por Sprint, usada para planejamento de capacidade</li>
                                    </ul>
                                    <p className="mt-2">Considerações importantes sobre essas métricas:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Devem ser usadas pelo time para auto-melhorias, não como ferramenta de controle gerencial</li>
                                        <li>A velocity é específica para cada time e não deve ser comparada entre times diferentes</li>
                                        <li>Variações na velocity são normais e devem ser analisadas em retrospectiva</li>
                                        <li>Estas métricas são indicadores, não objetivos em si mesmos</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/project-management/metrics/burndown-chart" target="_blank">Guia do Burndown Chart</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/project-management/metrics/velocity" target="_blank">Entendendo Velocity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mountaingoatsoftware.com/blog/burn-up-charts-vs-burn-down-charts" target="_blank">Burnup vs Burndown Charts</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-2',
                            title: 'Diagrama de Fluxo Cumulativo',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Diagrama de Fluxo Cumulativo (CFD) é uma ferramenta visual poderosa que mostra o status de itens de trabalho ao longo do tempo:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>O que mostra:</strong> Quantidade de trabalho em cada estado (ex: A fazer, Em progresso, Revisão, Concluído)</li>
                                        <li><strong>Como interpretar:</strong> Áreas coloridas mostram acúmulo de trabalho, inclinação mostra taxa de entrada/saída</li>
                                        <li><strong>O que procurar:</strong> Gargalos (área expandindo), trabalho em progresso excessivo, previsibilidade</li>
                                    </ul>
                                    <p className="mt-2">Benefícios do CFD:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Visualiza todo o fluxo de trabalho, não apenas itens concluídos</li>
                                        <li>Identifica gargalos e problemas de fluxo</li>
                                        <li>Permite calcular métricas como Lead Time e Cycle Time</li>
                                        <li>Ajuda a prever quando itens serão concluídos</li>
                                        <li>Mostra tendências de produtividade e variabilidade</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://kanbanize.com/kanban-resources/analyze-flow/cumulative-flow-diagram" target="_blank">Guia Completo do CFD</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/kanban/cumulative-flow-diagram" target="_blank">CFD na Atlassian</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.digite.com/blog/cumulative-flow-diagram/" target="_blank">Como Usar CFD para Melhorar o Processo</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-3',
                            title: 'Ferramentas Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Diversas ferramentas auxiliam na implementação de práticas ágeis e Scrum. Scrum Masters precisam conhecer as principais:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Jira:</strong> Ferramenta robusta para gerenciamento ágil de projetos, com recursos avançados para Scrum e Kanban</li>
                                        <li><strong>Trello:</strong> Solução visual baseada em Kanban, simples e flexível para organização de tarefas</li>
                                        <li><strong>Azure DevOps:</strong> Suite completa da Microsoft que integra planejamento ágil, repositórios de código e CI/CD</li>
                                        <li><strong>ClickUp:</strong> Plataforma de produtividade com visualizações customizáveis para diferentes metodologias</li>
                                        <li><strong>Monday.com:</strong> Ferramenta de gestão de trabalho visual e customizável</li>
                                        <li><strong>Asana:</strong> Plataforma de gerenciamento de trabalho com foco em clareza e colaboração</li>
                                        <li><strong>Miro/Mural:</strong> Quadros digitais colaborativos ideais para planejamento remoto, retrospectivas e cerimônias</li>
                                    </ul>
                                    <p className="mt-2">Critérios para escolha de ferramentas:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Facilidade de uso e curva de aprendizado</li>
                                        <li>Suporte a práticas Scrum específicas</li>
                                        <li>Recursos de relatórios e métricas</li>
                                        <li>Integração com outras ferramentas (Git, CI/CD)</li>
                                        <li>Escalabilidade para múltiplos times</li>
                                        <li>Suporte a trabalho remoto/distribuído</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/software/jira/guides/getting-started/basics" target="_blank">Introdução ao Jira</a></li>
                                        <li><a className="text-blue-600 underline" href="https://trello.com/guide" target="_blank">Guia do Trello</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.microsoft.com/en-us/azure/devops/boards/sprints/scrum-overview" target="_blank">Azure DevOps para Scrum</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-4',
                            title: 'Métricas de Time de Fluxo',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Estas métricas ajudam a entender a eficiência do fluxo de trabalho e identificar oportunidades de melhoria:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Lead Time:</strong> Tempo total desde que um item é criado até ser entregue (perspectiva do cliente)</li>
                                        <li><strong>Cycle Time:</strong> Tempo desde que o trabalho é iniciado até ser concluído (perspectiva do time)</li>
                                        <li><strong>Throughput:</strong> Número de itens completados por unidade de tempo</li>
                                        <li><strong>Work Item Age:</strong> Idade dos itens que ainda não foram completados</li>
                                        <li><strong>Flow Efficiency:</strong> Proporção de tempo em que um item está realmente sendo trabalhado vs. tempo total</li>
                                    </ul>
                                    <p className="mt-2">Como utilizar estas métricas:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Criar previsibilidade com histogramas de Lead Time</li>
                                        <li>Identificar e eliminar gargalos no fluxo</li>
                                        <li>Estabelecer acordos de nível de serviço (SLAs) realistas</li>
                                        <li>Monitorar tendências de melhoria contínua</li>
                                        <li>Limitar trabalho em progresso para reduzir cycle time</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://kanbanize.com/kanban-resources/workflow-management/cycle-time" target="_blank">Entendendo Cycle Time</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/project-management/metrics/agile-metrics-guide" target="_blank">Guia Completo de Métricas Ágeis</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.actionableagile.com/metrics/" target="_blank">Métricas de Fluxo Acionáveis</a></li>
                                    </ul>
                                </div>
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
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Scrum of Scrums (SoS) é uma técnica de escalabilidade relativamente simples para coordenar múltiplos times Scrum:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Conceito básico:</strong> Representantes de cada time Scrum se reúnem regularmente para coordenar trabalho e resolver dependências</li>
                                        <li><strong>Estrutura:</strong> Similar a uma Daily Scrum, mas entre representantes dos times (geralmente Scrum Masters)</li>
                                        <li><strong>Frequência:</strong> Tipicamente 2-3 vezes por semana, dependendo do nível de interdependência</li>
                                    </ul>
                                    <p className="mt-2">Formato típico das reuniões SoS:</p>
                                    <ul className="list-disc list-inside">
                                        <li>O que meu time completou que afeta outros times?</li>
                                        <li>O que meu time fará até a próxima reunião que afetará outros times?</li>
                                        <li>Quais impedimentos meu time está enfrentando que outros times poderiam ajudar a resolver?</li>
                                        <li>Estamos prestes a colocar algo no caminho de outro time?</li>
                                    </ul>
                                    <p className="mt-2">Benefícios e limitações:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Benefícios:</strong> Simples de implementar, mínima estrutura adicional, mantém autonomia dos times</li>
                                        <li><strong>Limitações:</strong> Pode se tornar insuficiente para organizações muito grandes, foco principalmente em coordenação tática</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/articles/449-scrum-of-scrums-in-action" target="_blank">Scrum of Scrums em Ação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.agilealliance.org/glossary/scrum-of-scrums" target="_blank">Definição de Scrum of Scrums</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/blog/scaled-scrum-nexus-framework" target="_blank">Evolução do SoS para Nexus</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-2',
                            title: 'Scaled Agile Framework',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Scaled Agile Framework (SAFe) é uma das abordagens mais detalhadas e amplamente adotadas para escalar práticas ágeis em grandes organizações:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Níveis:</strong> Team, Program, Large Solution e Portfolio</li>
                                        <li><strong>Estrutura:</strong> Agile Release Trains (ARTs) como unidades de entrega, Program Increment (PI) como incremento de planejamento</li>
                                        <li><strong>Roles chave:</strong> RTE (Release Train Engineer), System Architect, Product Management</li>
                                        <li><strong>Eventos:</strong> PI Planning, ART Sync, System Demo, Inspect & Adapt</li>
                                    </ul>
                                    <p className="mt-2">Principais características do SAFe:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Abordagem prescritiva com processos bem definidos</li>
                                        <li>Foco em alinhamento estratégico e entrega de valor</li>
                                        <li>Integração de práticas Lean, Agile e DevOps</li>
                                        <li>Framework configurável com diferentes níveis (Essential, Large Solution, Portfolio, Full)</li>
                                        <li>Incorpora conceitos de Lean Portfolio Management</li>
                                        <li>Programa de certificação robusto (SA, SP, SPC, etc.)</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scaledagileframework.com/about/" target="_blank">Sobre o SAFe</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scaledagileframework.com/safe-for-scrum-masters/" target="_blank">SAFe para Scrum Masters</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/agile-at-scale/what-is-safe" target="_blank">O que é SAFe (Atlassian)</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-3',
                            title: 'LeSS (Large Scale Scrum)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Large-Scale Scrum (LeSS) é um framework para escalar Scrum que mantém o máximo possível da simplicidade e princípios originais do Scrum:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Filosofia:</strong> &quot;LeSS é mais&quot; - manter-se o mais próximo possível do Scrum original</li>
                                        <li><strong>Variantes:</strong> LeSS Básico (2-8 times) e LeSS Huge (8+ times)</li>
                                        <li><strong>Princípios:</strong> Transparência, empirismo, melhoria contínua, one Product Backlog para todos os times</li>
                                    </ul>
                                    <p className="mt-2">Características do LeSS:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Um único Product Owner e Product Backlog para todos os times</li>
                                        <li>Sprints sincronizadas entre todos os times</li>
                                        <li>Refinamento de Product Backlog entre times</li>
                                        <li>Sprint Planning dividida em duas partes (objetivos e planejamento específico)</li>
                                        <li>Eventos de coordenação como Overall Retrospective</li>
                                        <li>Forte ênfase em comunidades de prática técnica</li>
                                        <li>Foco em entrega de produto integrado ao final de cada Sprint</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://less.works/less/framework/introduction" target="_blank">Introdução ao LeSS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/articles/less-large-scale-scrum" target="_blank">LeSS - Explicado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://less.works/less/framework/scrum-master" target="_blank">Papel do Scrum Master no LeSS</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-4',
                            title: 'Nexus Framework',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Nexus é um framework de escalabilidade desenvolvido pela Scrum.org para ajudar 3-9 times a trabalharem juntos em um único produto:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Estrutura:</strong> Adiciona uma camada de integração sobre múltiplos times Scrum</li>
                                        <li><strong>Nexus Integration Team (NIT):</strong> Time responsável por garantir que um Incremento Integrado seja produzido</li>
                                        <li><strong>Eventos adicionais:</strong> Refinamento de Nexus, Planning de Nexus, Daily Nexus, Review de Nexus, Retrospectiva de Nexus</li>
                                    </ul>
                                    <p className="mt-2">Características do Nexus:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Minimiza dependências entre times</li>
                                        <li>Gerencia integração contínua de trabalho</li>
                                        <li>Identifica e resolve dependências e problemas de integração</li>
                                        <li>Aderência estrita aos princípios Scrum</li>
                                        <li>Fornece uma evolução natural do Scrum of Scrums</li>
                                        <li>Mantém um único Product Backlog e Product Owner</li>
                                    </ul>
                                    <p className="mt-2">O Nexus Integration Team geralmente inclui:</p>
                                    <ul className="list-disc list-inside">
                                        <li>O Product Owner</li>
                                        <li>Um Scrum Master (podendo ser um Scrum Master de um dos times)</li>
                                        <li>Membros dos times de desenvolvimento com expertise específica</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/nexus-guide" target="_blank">Guia Nexus</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/scaling-scrum-nexus-framework" target="_blank">Escalando Scrum com Nexus</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/comparing-scaling-frameworks" target="_blank">Comparação de Frameworks de Escalabilidade</a></li>
                                    </ul>
                                </div>
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
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>As certificações Professional Scrum Master (PSM) da Scrum.org são reconhecidas por seu rigor e foco em conhecimento aplicável:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>PSM I:</strong> Conhecimento fundamental de Scrum e como aplicá-lo (85% para aprovação)</li>
                                        <li><strong>PSM II:</strong> Conhecimento avançado, enfatizando a aplicação do Scrum em situações complexas (85% para aprovação)</li>
                                        <li><strong>PSM III:</strong> Nível expert, profundo entendimento do Scrum e habilidade de aplicá-lo em qualquer contexto (85% para aprovação)</li>
                                    </ul>
                                    <p className="mt-2">Características das certificações PSM:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Baseadas em avaliação de conhecimento, não em treinamento obrigatório</li>
                                        <li>Sem necessidade de renovação (válidas por toda a vida)</li>
                                        <li>Exames online, sem supervisão (baseados em confiança)</li>
                                        <li>Material de estudo disponível gratuitamente (Scrum Guide)</li>
                                        <li>Avaliações rigorosas com limite de tempo</li>
                                    </ul>
                                    <p className="mt-2">Recursos para preparação:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Scrum Guide (documento fundamental)</li>
                                        <li>Open Assessments gratuitos na Scrum.org</li>
                                        <li>Livro &quot;Scrum: A Arte de Fazer o Dobro do Trabalho na Metade do Tempo&quot; de Jeff Sutherland</li>
                                        <li>Simulados online de terceiros</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/professional-scrum-master-i-certification" target="_blank">Certificação PSM I</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/resources/suggested-reading-professional-scrum-master" target="_blank">Leitura Sugerida para PSM</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/open-assessments" target="_blank">Avaliações Abertas</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-6-2',
                            title: 'CSM (Scrum Alliance)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>As certificações da Scrum Alliance, começando pelo Certified Scrum Master (CSM), são amplamente reconhecidas e seguem uma abordagem baseada em treinamento:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>CSM:</strong> Certificação inicial que valida compreensão dos fundamentos do Scrum, obtida após curso presencial</li>
                                        <li><strong>A-CSM (Advanced CSM):</strong> Nível intermediário, requer CSM + 1 ano de experiência + treinamento adicional</li>
                                        <li><strong>CSP-SM (Certified Scrum Professional):</strong> Nível avançado que requer A-CSM + 2 anos de experiência + treinamento específico</li>
                                    </ul>
                                    <p className="mt-2">Características das certificações Scrum Alliance:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Requerem treinamento presencial com um Certified Scrum Trainer (CST)</li>
                                        <li>Maior foco em aspectos práticos e interação durante o treinamento</li>
                                        <li>Necessitam renovação a cada 2 anos via Unidades de Educação (SEUs)</li>
                                        <li>Comunidade global ativa com eventos e recursos exclusivos</li>
                                        <li>Caminho de progressão claro para desenvolvimento profissional</li>
                                    </ul>
                                    <p className="mt-2">Processo para obtenção:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Participar de curso presencial (16 horas) com um CST</li>
                                        <li>Passar em avaliação online após o curso</li>
                                        <li>Aceitar termos de licença e código de ética</li>
                                        <li>Manter certificação ativa através de SEUs (educação continuada)</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" target="_blank">Certificação CSM</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/get-certified/scrum-master-track" target="_blank">Trilha completa de Scrum Master</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/certification-renewal" target="_blank">Processo de Renovação de Certificação</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },

                        // Agile Coach e Product Owner (níveis avançados)
                        {
                            id: '8-6-3',
                            title: 'Níveis Avançados',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Para Scrum Masters experientes, existem caminhos naturais de evolução para papéis como Agile Coach e Product Owner, ou aprofundamento em áreas de especialização:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Agile Coach:</strong> Foco em transformação organizacional e coaching além do nível do time</li>
                                        <li><strong>Product Owner:</strong> Especialização na gestão estratégica de produto e maximização de valor</li>
                                        <li><strong>Enterprise Agile Coach:</strong> Aplicação de agilidade em escala e transformação organizacional</li>
                                        <li><strong>Technical Coach:</strong> Especialização em práticas ágeis técnicas como TDD, CI/CD e DevOps</li>
                                    </ul>
                                    <p className="mt-2">Certificações avançadas relevantes:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>ICP-ACC/ICP-ENT (ICAgile):</strong> Professional e Enterprise Agile Coaching</li>
                                        <li><strong>CTC/CEC (Scrum Alliance):</strong> Certified Team Coach e Certified Enterprise Coach</li>
                                        <li><strong>CSPO/A-CSPO/CSP-PO (Scrum Alliance):</strong> Trilha de Product Owner</li>
                                        <li><strong>PAL (SAFe):</strong> Product Owner/Product Manager na escala SAFe</li>
                                        <li><strong>LeSS Practitioner:</strong> Especializações em adoção LeSS</li>
                                    </ul>
                                    <p className="mt-2">Habilidades adicionais importantes:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Mentalidade sistêmica e pensamento estratégico</li>
                                        <li>Transformação organizacional e gestão de mudanças</li>
                                        <li>Métricas avançadas de produto e entrega de valor</li>
                                        <li>Facilitação de workshops de alinhamento estratégico</li>
                                        <li>Design organizacional e criação de estruturas ágeis</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/get-certified/coaching-certification" target="_blank">Certificações de Coaching (Scrum Alliance)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://icagile.com/Learning-Roadmap/Agile-Coaching" target="_blank">Roadmap de Agile Coaching (ICAgile)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.scrum.org/professional-scrum-product-owner-certifications" target="_blank">Certificações de Product Owner (Scrum.org)</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },

                        // Comunidades, Eventos e Networking
                        {
                            id: '8-6-4',
                            title: 'Networking',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O desenvolvimento contínuo como Scrum Master se beneficia significativamente da participação em comunidades, eventos e networking profissional:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Comunidades de prática:</strong> Grupos locais ou online de profissionais ágeis para compartilhamento de experiências</li>
                                        <li><strong>Conferências ágeis:</strong> Eventos presenciais ou virtuais com palestras e workshops de especialistas</li>
                                        <li><strong>Meetups:</strong> Encontros informais locais para networking e discussões técnicas</li>
                                        <li><strong>Grupos de estudo:</strong> Comunidades focadas em aprendizado colaborativo e preparação para certificações</li>
                                    </ul>
                                    <p className="mt-2">Principais eventos globais para Scrum Masters:</p>
                                    <ul className="list-disc list-inside">
                                        <li><strong>Global Scrum Gathering:</strong> Conferência da Scrum Alliance realizada em diferentes regiões</li>
                                        <li><strong>Agile20XX:</strong> Maior conferência ágil, organizada pela Agile Alliance</li>
                                        <li><strong>Regional Scrum Gatherings:</strong> Versões locais do Scrum Gathering global</li>
                                        <li><strong>LeSS Conference:</strong> Evento focado em Large-Scale Scrum</li>
                                        <li><strong>SAFe Summit:</strong> Conferência principal para praticantes do Scaled Agile Framework</li>
                                    </ul>
                                    <p className="mt-2">Comunidades online e recursos:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Grupos LinkedIn de Agilidade e Scrum</li>
                                        <li>Comunidades Discord e Slack para Scrum Masters</li>
                                        <li>Fóruns da Scrum.org e Scrum Alliance</li>
                                        <li>Podcasts como &quot;Agile for Humans&quot; e &quot;Scrum Master Toolbox&quot;</li>
                                        <li>Blogs e newsletters de especialistas em agilidade</li>
                                    </ul>
                                    <ul className="list-disc list-inside mt-2">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/community/events" target="_blank">Eventos da Scrum Alliance</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.agilealliance.org/events/" target="_blank">Eventos da Agile Alliance</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.meetup.com/topics/scrum/" target="_blank">Meetups de Scrum</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                }
            ]


        }


    );
}