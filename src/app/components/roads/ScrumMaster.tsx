export default function IA() {
    return (
        {

            id: '8',
            title: 'Scrum Master',
            content: (
                <div className="space-y-4 text-md text-zinc-100">
                    <p>O papel de <strong>Scrum Master</strong> é apoiar o time a entregar valor de forma consistente, criando condições para que o trabalho ágil aconteça com clareza, autonomia e foco. Ele facilita eventos, remove impedimentos, fortalece a colaboração e ajuda a organização a evoluir com práticas sustentáveis.</p>
                    <p>Para atuar bem nessa função, o ideal é aprender os princípios ágeis, entender o framework Scrum e desenvolver habilidades de <strong>facilitação, coaching e comunicação</strong>. Assim, o Scrum Master torna o time mais eficiente e mais preparado para responder às mudanças.</p>
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
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os fundamentos ágeis são a base para entender como times entregam valor com mais velocidade e qualidade. Isso inclui o <strong>Manifesto Ágil</strong>, seus princípios e a ideia de construir uma cultura que valorize <strong>colaboração, adaptação e melhoria contínua</strong>.
                            </p>
                            <p>Os passos iniciais são: <strong>estudar os valores e princípios ágeis</strong>, <strong>entender diferentes frameworks</strong> e <strong>aplicar essa mentalidade no cotidiano do time</strong>. Quando a base está bem construída, as cerimônias do Scrum passam a ter sentido real e prático.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-1-1',
                            title: 'Manifesto Ágil',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O Manifesto Ágil, criado em 2001, estabelece quatro valores: indivíduos sobre processos, software funcionando sobre documentação extensa, colaboração com o cliente sobre negociação de contratos e resposta a mudanças sobre seguir um plano. Entender o contexto histórico e a intenção por trás de cada valor é fundamental para aplicá-los com profundidade.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Z9QbYZh1YX" target="_blank">Manifesto Ágil Explicado</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HZyRQ8Uhhmk" target="_blank">O que é Agilidade</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.agilealliance.org/agile101/the-agile-manifesto/" target="_blank">Agile Manifesto</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.linkedin.com/learning/agile-foundations" target="_blank">Agile Foundations</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-1-2',
                            title: 'Princípios Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Os 12 princípios ágeis detalham como os valores se traduzem em comportamentos práticos: entregar software funcionando frequentemente, colaboração diária entre negócio e desenvolvimento, times motivados, comunicação face a face, ritmo sustentável e reflexão regular para melhorar. Cada princípio guia decisões do Scrum Master no dia a dia.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=xnRiLhIJbFc" target="_blank">12 Princípios Ágeis</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=502ILHjX9EE" target="_blank">Agile Principles in Practice</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrumalliance.org/learn-about-scrum" target="_blank">Agile Principles - Scrum Alliance</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/uva-darden-agile-development" target="_blank">Principles of Lean and Agile - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-1-3',
                            title: 'Frameworks Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Além do Scrum, existem outros frameworks ágeis como Kanban, XP (Extreme Programming) e Lean. Kanban foca em fluxo contínuo e limitação de WIP sem iterações fixas. XP enfatiza práticas técnicas como TDD e pair programming. Conhecer as diferenças ajuda o Scrum Master a recomendar a abordagem mais adequada ao contexto.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=rIaz-l1Kf8w" target="_blank">Scrum vs Kanban vs XP</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HZyRQ8Uhhmk" target="_blank">Frameworks Ágeis</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Agile Frameworks - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://kanban.university/kanban-development-path/" target="_blank">Kanban Fundamentals - Kanban University</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-1-4',
                            title: 'Cultura de Times Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Cultura ágil vai além de cerimônias e ferramentas: envolve psychological safety, melhoria contínua, autonomia e ownership. Times ágeis de alta performance têm clareza de objetivos, confiança mútua e capacidade de se auto-organizar. O Scrum Master é o guardião dessa cultura, removendo impedimentos estruturais e comportamentais que a inibem.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Yvfz4HGtoPc" target="_blank">Cultura Ágil - Spotify Engineering</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=LhoLuui9gX8" target="_blank">Psychological Safety in Teams</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/uva-darden-agile-development" target="_blank">Agile Team Culture - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/teamwork" target="_blank">Building High-Performance Teams - edX</a></li>
                                            </ul>
                                        </div>
                                    </div>

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
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                O Scrum é um framework simples, mas muito poderoso, porque organiza o trabalho em ciclos curtos e incentiva melhoria contínua. Para atuar como Scrum Master, é fundamental compreender os <strong>papéis, eventos e artefatos</strong> que dão estrutura ao processo.
                            </p>
                            <p>O caminho mais prático é: <strong>entender a dinâmica de cada papel</strong>, <strong>acompanhar os eventos com clareza</strong> e <strong>usar os artefatos para fomentar transparência e evolução</strong>. Isso ajuda a facilitar a entrega contínua de valor e a evolução do time.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-2-1',
                            title: 'Papéis',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O Scrum define três responsabilidades: o Product Owner maximiza o valor do produto gerenciando o backlog, os Developers criam o Incremento a cada Sprint e o Scrum Master serve o time facilitando eventos, removendo impedimentos e coaching o processo. Papéis são responsabilidades, não cargos; uma pessoa pode assumir múltiplos papéis em times menores.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=XMHBc3fOJXk" target="_blank">Scrum Roles Explained</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=TRcReyRYIMg" target="_blank">Papéis do Scrum</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/scrum-guide" target="_blank">Scrum Guide - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" target="_blank">Scrum Master Training - Scrum Alliance</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-2-2',
                            title: 'Eventos Scrum',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Os cinco eventos Scrum criam ritmo e oportunidades de inspeção e adaptação. Sprint Planning define o objetivo e o backlog da Sprint. Daily Scrum sincroniza o time em 15 minutos. Sprint Review demonstra o Incremento para stakeholders. Retrospectiva inspeciona o processo. Cada evento tem timeboxes definidos que devem ser respeitados.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0Rvv18qJEpE" target="_blank">Scrum Events Explained</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=RJ9XakD-pBQ" target="_blank">Eventos Scrum na Prática</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/what-is-a-sprint-retrospective" target="_blank">Scrum Events - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Agile Scrum Mastery - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-2-3',
                            title: 'Artefatos',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O Product Backlog é a lista ordenada de tudo que pode ser feito no produto. O Sprint Backlog contém os itens selecionados para a Sprint e o plano para entregá-los. O Incremento é a soma de todos os itens concluídos que atendem à Definition of Done. Cada artefato tem um compromisso associado que garante transparência e foco.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=8mFSyEOIDFg" target="_blank">Scrum Artifacts</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=1rjMFGXFV1s" target="_blank">Product e Sprint Backlog</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/scrum-guide" target="_blank">Scrum Artifacts - Scrum Guide</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/blog/product-backlog-management" target="_blank">Product Backlog Management</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-2-4',
                            title: 'Definição do Pronto & Preparado',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A Definition of Done (DoD) é um acordo compartilhado sobre o que significa um item estar concluído, incluindo critérios de qualidade, testes e documentação. A Definition of Ready define quando um item do backlog está suficientemente refinado para entrar em uma Sprint. Ambas as definições reduzem ambiguidade e melhoram a previsibilidade do time.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=y9MYd6CCDwM" target="_blank">Definition of Done - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=MFTGDDuAVgk" target="_blank">DoD vs DoR</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/blog/done-understanding-definition-done" target="_blank">Definition of Done - Scrum.org Blog</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Agile Quality - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

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
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                As habilidades do Scrum Master vão muito além de facilitar cerimônias. Facilitar reuniões de forma que todos contribuam, resolver conflitos de forma construtiva, fazer coaching da mentalidade ágil e exercer liderança servidora são competências que se desenvolvem com prática e reflexão. O Scrum Master eficaz transforma não apenas o processo, mas a cultura e o desempenho do time.
                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-3-1',
                            title: 'Facilitação de Reuniões',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Facilitar reuniões Scrum significa criar as condições para que o time alcance seus objetivos de forma participativa. Técnicas como timeboxing, dot voting, 1-2-4-All e liberating structures tornam reuniões mais produtivas. O facilitador não participa do conteúdo, mas cuida do processo para que todas as vozes sejam ouvidas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=a0bWpVHHZkM" target="_blank">Facilitação Ágil</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=nqJj5tLwFig" target="_blank">Meeting Facilitation Techniques</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/everyday-leadership-new" target="_blank">Facilitation Skills - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.liberatingstructures.com" target="_blank">Liberating Structures</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-3-2',
                            title: 'Resolução de Conflitos',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Conflitos em times Scrum são naturais e, quando bem gerenciados, levam à inovação. O modelo de Thomas-Kilmann classifica cinco estilos de resposta ao conflito. Técnicas de mediação, escuta ativa e comunicação não-violenta ajudam o Scrum Master a transformar tensões em conversas produtivas que fortalecem o time e a colaboração.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=C7RCLGBnMPk" target="_blank">Conflict in Agile Teams</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Z-7Iq6N2XkM" target="_blank">Resolução de Conflitos para SMs</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/conflict-management" target="_blank">Conflict Management - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://nvcacademy.com" target="_blank">Nonviolent Communication - NVC Academy</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-3-3',
                            title: 'Coaching e Mentoria Ágil',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Coaching ágil ajuda indivíduos e times a desenvolverem autonomia e maturidade ágil. O Scrum Master usa perguntas poderosas para desafiar crenças limitantes, ao invés de dar respostas diretas. A distinção entre coaching, mentoring, teaching e facilitating ajuda o SM a escolher a abordagem certa para cada situação.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=sNfI2Nh3YEg" target="_blank">Agile Coaching Explained</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=a0bWpVHHZkM" target="_blank">Coaching para Scrum Masters</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.icagile.com/certification/ica-acc" target="_blank">Agile Coaching - ICAgile</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/coaching-skills" target="_blank">Coaching Skills - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-3-4',
                            title: 'Liderança Servidora',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Liderança servidora, conceito de Robert Greenleaf, inverte a pirâmide hierárquica: o líder serve o time, removendo obstáculos e criando as condições para que as pessoas prosperem. Para o Scrum Master, isso significa colocar o crescimento e a autonomia do time acima da própria visibilidade, medindo sucesso pela independência que o time desenvolve.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=oDsMl6fewgI" target="_blank">Servant Leadership - Simon Sinek</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=EiIFNjGFZBE" target="_blank">Liderança Servidora para SMs</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/inspirational-leadership" target="_blank">Servant Leadership - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/leadership" target="_blank">Leadership Principles - edX</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ,
                            children: []
                        }
                    ]
                },
                {
                    id: '8-4',
                    title: '🔵 Métricas Ágeis e Ferramentas',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Métricas ágeis fornecem visibilidade sobre o progresso, desempenho e saúde do time, mas devem ser usadas para aprendizado, não para punição. Burnup e Burndown mostram progresso em relação ao objetivo da Sprint. Velocity indica capacidade histórica. CFD e métricas de fluxo ajudam a identificar gargalos. Ferramentas como Jira e Trello operacionalizam esses dados visualmente.
                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-4-1',
                            title: 'Burnup, Burndown, Velocity',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Burndown chart mostra o trabalho restante ao longo do tempo na Sprint. Burnup mostra o trabalho concluído acumulado, tornando mudanças de escopo visíveis. Velocity é a quantidade média de story points entregues por Sprint, usada para previsão. Nenhuma dessas métricas deve ser usada como meta ou para comparar times diferentes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HV76WzqpSI0" target="_blank">Burndown Chart Explained</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=RJ9XakD-pBQ" target="_blank">Velocity em Scrum</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/blog/agile-metrics" target="_blank">Agile Metrics - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Scrum Metrics - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-2',
                            title: 'Diagrama de Fluxo Cumulativo',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O CFD (Cumulative Flow Diagram) visualiza o fluxo de trabalho através das colunas do Kanban ao longo do tempo. Bandas paralelas indicam fluxo saudável; expansão de uma banda sinaliza acúmulo de trabalho naquela etapa, revelando um gargalo. É a métrica mais poderosa para identificar onde o processo está travado e orientar melhorias.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=AEtBVJYJ-KU" target="_blank">Cumulative Flow Diagram</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=nCy4CHVF-n4" target="_blank">CFD para Scrum Masters</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://kanban.university" target="_blank">Kanban Metrics - Kanban University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/uva-darden-agile-development" target="_blank">Flow Metrics - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-3',
                            title: 'Ferramentas Ágeis',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Jira é a ferramenta de gestão ágil mais usada em times de tecnologia, com suporte completo a Scrum e Kanban, incluindo backlogs, sprints, boards e relatórios automáticos. Trello oferece simplicidade com quadros visuais. Azure DevOps é preferido em ambientes Microsoft. Miro e MURAL facilitam cerimônias ágeis remotas com canvas interativos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=GWxMTvRGIpc" target="_blank">Jira para Scrum Masters</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=4o6TasRmFT8" target="_blank">Miro para Retrospectivas</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://university.atlassian.com/student/path/815443-jira-fundamentals" target="_blank">Jira Fundamentals - Atlassian University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-project-management" target="_blank">Agile Project Management - Google/Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-4-4',
                            title: 'Métricas de Time de Fluxo',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Lead time mede o tempo total desde a solicitação até a entrega. Cycle time mede apenas o tempo em que o item está sendo ativamente trabalhado. Throughput conta itens entregues por período. Essas métricas de fluxo são mais confiáveis que story points para previsão e identificação de gargalos em sistemas Kanban e Scrum maduros.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=FkFnYdYj9dM" target="_blank">Lead Time vs Cycle Time</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=JiJ_VFqhFIg" target="_blank">Flow Metrics for Scrum Teams</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/blog/flow-metrics-scrum" target="_blank">Flow Metrics - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/uva-darden-agile-development" target="_blank">Agile Metrics that Matter - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

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
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Quando múltiplos times Scrum trabalham no mesmo produto, surgem desafios de coordenação, dependências e alinhamento estratégico. Frameworks de escala como SAFe, LeSS e Nexus oferecem estruturas diferentes para lidar com essa complexidade. Cada abordagem tem trade-offs de overhead burocrático versus coordenação, e a escolha depende do contexto e cultura organizacional.
                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-5-1',
                            title: 'Escalabilidade',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Escalar Scrum significa coordenar múltiplos times ágeis trabalhando num produto comum sem perder os benefícios da agilidade. Desafios incluem integração contínua entre times, dependências técnicas, alinhamento de backlogs e comunicação entre POs. A solução certa depende do número de times, distribuição geográfica e maturidade ágil da organização.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=rIaz-l1Kf8w" target="_blank">Scaling Agile - Dave Farley</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HZyRQ8Uhhmk" target="_blank">Desafios de Escalabilidade</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Scaling Agile - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://scaledagileframework.com" target="_blank">Agile at Scale - SAFe</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-2',
                            title: 'Scaled Agile Framework',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        SAFe (Scaled Agile Framework) é o framework de escala mais adotado em grandes corporações. Organiza times em Agile Release Trains (ARTs) que planejam juntos em PI Planning trimestrais. Oferece estrutura robusta para alinhamento estratégico mas é frequentemente criticado por introduzir burocracia que contradiz a essência ágil.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=MZy7RRbGYP8" target="_blank">SAFe Overview</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Z9QbYZh1YXY" target="_blank">SAFe vs LeSS</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://scaledagile.com/training/safe-foundations/" target="_blank">SAFe Foundations - Scaled Agile</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Leading SAFe - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-3',
                            title: 'LeSS (Large Scale Scrum)',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        LeSS (Large Scale Scrum) aplica os princípios do Scrum com mínimas regras adicionais para múltiplos times. Um único Product Backlog, um Product Owner para todos os times e retrospectivas de toda a organização caracterizam o framework. LeSS Huge adiciona estrutura para mais de oito times com Areas de Produto.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=1X9kjuedF74" target="_blank">LeSS Framework Overview</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=gNME2TFzOZQ" target="_blank">LeSS vs SAFe</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://less.works/less/framework" target="_blank">LeSS Framework - less.works</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Large Scale Scrum - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-5-4',
                            title: 'Nexus Framework',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Nexus é o framework de escala criado pelo co-criador do Scrum, Ken Schwaber, pela Scrum.org. Adiciona um Nexus Integration Team responsável por coordenar e integrar o trabalho de três a nove times Scrum. É mais leve que SAFe e mantém a essência do Scrum original, sendo ideal para organizações com até 9 times.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=MDgqTbjJhA0" target="_blank">Nexus Framework - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=RJ9XakD-pBQ" target="_blank">Nexus Guide Overview</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/online-nexus-guide" target="_blank">Nexus Guide - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/resources/scaling-scrum" target="_blank">Scaling Scrum with Nexus</a></li>
                                            </ul>
                                        </div>
                                    </div>

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
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Certificações validam o conhecimento formal em Scrum e aumentam a empregabilidade. PSM I e CSM são as mais reconhecidas mundialmente. Níveis avançados como PSM II e CSP demonstram profundidade técnica e experiência prática. Networking em comunidades ágeis, participação em meetups e conexões com outros SMs aceleram o desenvolvimento e a carreira na área.
                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '8-6-1',
                            title: 'PSM I/II (Scrum.org)',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O PSM I da Scrum.org avalia conhecimento do Scrum Guide com prova online de 80 questões em 60 minutos. É rigoroso, reconhecido globalmente e não expira. O PSM II é avançado, com questões de múltiplos cenários que exigem aplicação prática do Scrum. Estudar o Scrum Guide profundamente e fazer os open assessments gratuitos da Scrum.org é a melhor preparação.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=XU0llRltyFM" target="_blank">PSM I Preparation Guide</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=tRcReyRYIMg" target="_blank">Como passar no PSM I</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrum.org/open-assessments" target="_blank">Scrum Open Assessment - Scrum.org</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://mlapshin.com/index.php/scrum-quizzes/" target="_blank">PSM I Preparation - Mikhail Lapshin</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '8-6-2',
                            title: 'CSM (Scrum Alliance)',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O CSM (Certified ScrumMaster) da Scrum Alliance requer participação obrigatória em curso de dois dias com instrutor certificado (CST). A certificação expira após dois anos e requer renovação com SEUs (Scrum Education Units). É amplamente reconhecida no mercado, especialmente em empresas que adotam formalmente o ecossistema Scrum Alliance.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=qDl3KUvmT6M" target="_blank">CSM vs PSM - Differences</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=XMHBc3fOJXk" target="_blank">Scrum Alliance CSM Overview</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.scrumalliance.org/learn-about-scrum" target="_blank">Scrum Alliance Learning Path</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.scrumstudy.com/freeresources/scrum-fundamentals-certified" target="_blank">Scrum Fundamentals Certified - SCRUMstudy</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },

                        // Agile Coach e Product Owner (níveis avançados)
                        {
                            id: '8-6-3',
                            title: 'Níveis Avançados',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Certificações avançadas como PSM III, A-CSM e CSP-SM exigem anos de experiência prática, portfólio de intervenções e aprovação em provas complexas. O caminho para coach ágil inclui certificações como ICP-ACC (ICAgile) e CEC (Certified Enterprise Coach). Cada nível amplia o escopo de atuação do profissional, de facilitador de time a transformador organizacional.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=sNfI2Nh3YEg" target="_blank">Agile Career Path - ICAgile</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=a0bWpVHHZkM" target="_blank">Scrum Master Career Levels</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.icagile.com" target="_blank">ICAgile Learning Paths</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.scrumalliance.org/get-certified/scrum-master-track/advanced-certified-scrummaster" target="_blank">Advanced Scrum Master - Scrum Alliance</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
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
                                        Comunidades como Agile Brasil, Scrum Alliance Community e grupos locais de Agile conectam profissionais para troca de experiências. Participar de eventos como Agile Day e conferências da Scrum Alliance amplia a visão e abre oportunidades. LinkedIn com conteúdo sobre agilidade, podcasts como Agile for Humans e grupos no Slack são recursos valiosos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=nqJj5tLwFig" target="_blank">Building Your Agile Network</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HZyRQ8Uhhmk" target="_blank">Comunidade Ágil no Brasil</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.agilealliance.org/community/" target="_blank">Agile Alliance Community</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.mindtheproduct.com/community/" target="_blank">Mind the Product Community</a></li>
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