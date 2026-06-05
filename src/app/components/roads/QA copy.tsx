export default function IA() {
    return (
        {

            id: '4',
            title: 'QA',

            content:
                <div className="space-y-2 text-sm text-gray-700">
                    <p>Quality Assurance (QA) é responsável por garantir que produtos e serviços atendam aos requisitos especificados. No desenvolvimento de software, QA envolve testes, automação, identificação de bugs e melhoria contínua de processos.</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/software-testing.html" target="_blank">Guru99 - Software Testing</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/" target="_blank">Ministry of Testing</a></li>
                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/" target="_blank">Test Automation University</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.istqb.org/" target="_blank">ISTQB - International Software Testing Qualifications Board</a></li>
                    </ul>
                </div>,

            children: [
                {
                    id: '4-1',
                    title: 'Fundamentos de Teste',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os fundamentos de QA estabelecem a base teórica para garantir qualidade em software. Compreender os tipos de teste, o ciclo de vida do processo de qualidade, as diferenças entre abordagens manuais e automatizadas e as técnicas de design de casos de teste é essencial antes de usar qualquer ferramenta. Profissionais com fundamentos sólidos tomam decisões mais assertivas sobre quando e como testar.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '3-1-1',
                            title: 'Tipos de Testes',

                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Testes de software classificam-se em unitários (funções isoladas), integração (comunicação entre módulos), sistema (aplicação completa) e aceitação (critérios de negócio). Testes funcionais verificam comportamento esperado; não funcionais avaliam performance, segurança e usabilidade. Conhecer cada tipo ajuda a montar uma estratégia de qualidade abrangente.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=cacivLcx4YI" target="_blank">Tipos de Testes de Software</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=u6QfIXgjwGQ" target="_blank">Software Testing Types</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/software-testing" target="_blank">Software Testing Fundamentals</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/software-testing" target="_blank">Introduction to Software Testing</a></li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '3-1-2',
                            title: 'Ciclo de Vida de Testes',

                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O ciclo de vida de testes (STLC) define fases: análise de requisitos, planejamento, design de casos, configuração de ambiente, execução e encerramento. Cada fase produz entregáveis específicos. Em contextos ágeis, o STLC é comprimido por sprint, exigindo que QAs participem desde o refinamento das histórias de usuário.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Dq_D_T6TCWM" target="_blank">Software Testing Mentor</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=TGqwE5N7gA4" target="_blank">Ciclo de Vida de Testes</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/software-testing" target="_blank">Software Testing Lifecycle</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/software-testing-life-cycle.html" target="_blank">STLC Tutorial</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '3-1-3',
                            title: 'Manuais vs Automatizados',

                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Testes manuais são executados por humanos e são essenciais para testes exploratórios e de usabilidade. Automação é eficiente para regressão e testes repetitivos, mas exige investimento inicial. A decisão de automatizar deve considerar frequência de execução, estabilidade da funcionalidade e ROI esperado da automação.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=oLc9gVM8FBM" target="_blank">Manual vs Automated Testing</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=DQmHCEuH2qM" target="_blank">Quando Automatizar</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com" target="_blank">Test Automation Fundamentals</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/software-testing" target="_blank">Software Testing</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '3-1-4',
                            title: 'Técnicas de Teste',

                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Técnicas de design de testes guiam a criação de casos eficientes. Partição de equivalência e análise de valor limite reduzem o número de testes sem perder cobertura. Tabelas de decisão testam combinações de condições. Testes exploratórios usam experiência do QA para encontrar bugs não cobertos por scripts formais.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=f59r5lZ63ZA" target="_blank">Test Design Techniques</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=SNKpDCM_J1M" target="_blank">Técnicas de Teste</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/software-testing" target="_blank">Software Testing Techniques</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.istqb.org/certifications/certified-tester-foundation-level" target="_blank">Test Design Techniques</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-2',
                    title: 'Teste Manual',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Testes manuais continuam sendo indispensáveis em QA, especialmente para testes exploratórios, de usabilidade e cenários complexos difíceis de automatizar. Ferramentas de gerenciamento de casos de teste como TestRail, Zephyr e Xray organizam e rastreiam a execução dos testes. Jira integra o ciclo de vida de bugs e histórias de usuário com o processo de QA.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-2-1', title: 'TestRail / Zephyr / Xray',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        TestRail é uma plataforma de gerenciamento de casos de teste que organiza suítes, planos e execuções. Zephyr e Xray são plugins nativos do Jira que integram casos de teste diretamente ao fluxo ágil. Essas ferramentas fornecem relatórios de cobertura, progresso de execução e rastreabilidade entre requisitos e testes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=PCsxiCWN2Kg" target="_blank">TestRail Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=MdZ5C9FQMFY" target="_blank">Zephyr Scale no Jira</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.testrail.com/getting-started/" target="_blank">TestRail Getting Started</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://academy.getxray.app" target="_blank">Xray for Jira - Xray Academy</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-2-2', title: 'Jira / Trello',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Jira é a ferramenta de rastreamento de bugs e gestão ágil mais utilizada em times de QA. Permite criar issues de bug com severidade, prioridade e reprodução detalhada, além de vincular defeitos a histórias de usuário. Trello é uma alternativa visual e mais simples para times menores que adotam Kanban.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=GWxMTvRGIpc" target="_blank">Jira para QA</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ZBzuBIwi-xU" target="_blank">Bug Report no Jira</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://university.atlassian.com/student/path/815443-jira-fundamentals" target="_blank">Jira Fundamentals</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-project-management" target="_blank">Agile Testing with Jira</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-2-3', title: 'Test Case Design',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Um bom caso de teste tem objetivo claro, pré-condições definidas, passos reproduzíveis e resultado esperado explícito. Casos bem escritos permitem que qualquer QA execute o teste com o mesmo resultado. BDD (Behavior-Driven Development) com sintaxe Gherkin (Given/When/Then) aproxima casos de teste da linguagem de negócio.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=SNKpDCM_J1M" target="_blank">Como Escrever Casos de Teste</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=lC0jzd8sGIA" target="_blank">BDD with Gherkin</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/test-case.html" target="_blank">Writing Test Cases</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/bdd-with-cucumber-javascript/" target="_blank">BDD Testing</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-3',
                    title: 'Automação de Testes',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Automação de testes é a habilidade mais demandada em QA moderno. Frameworks como Selenium, Cypress e Playwright permitem simular interações de usuário em browsers de forma programática. TestNG e JUnit estruturam suítes de testes em Java, enquanto Mocha é a referência no ecossistema Node.js. Automação bem implementada aumenta velocidade, cobertura e confiabilidade das entregas.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-3-1', title: 'Selenium / WebDriver',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Selenium é o framework de automação web mais longevo e amplamente suportado, compatível com Java, Python e JavaScript. O WebDriver controla browsers reais simulando cliques, digitação e navegação. Apesar de mais verboso que alternativas modernas, ainda é referência em sistemas legados e empresas de grande porte.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLf8x7B3nFTl17WeqVrcymVMHCBNEQJCIT" target="_blank">Selenium com Java</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=j7VZsCCnptM" target="_blank">Selenium Python</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/selenium-webdriver-tutorial-java/" target="_blank">Selenium WebDriver</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/selenium-python.html" target="_blank">Selenium com Python</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-3-2', title: 'Cypress',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Cypress é um framework moderno de testes end-to-end que roda diretamente no browser, sem dependências externas. Oferece recarregamento automático, time-travel debugging com screenshots e relatórios detalhados. É altamente produtivo para times JavaScript e tem adoção crescente como alternativa ao Selenium em aplicações web modernas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLf8x7B3nFTl1JVPZ8yagYVgTB7FMN3TaD" target="_blank">Cypress do Zero</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=7N63cMKosIE" target="_blank">Cypress Full</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/cypress-tutorial/" target="_blank">Cypress - Test</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://docs.cypress.io/guides/getting-started/installing-cypress" target="_blank">Cypress Documentation</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-3-3', title: 'Playwright',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Playwright da Microsoft é o framework de automação mais moderno, suportando Chromium, Firefox e Safari nativamente. Oferece auto-wait inteligente, paralelismo, geração de código por gravação e suporte a múltiplas linguagens. Está rapidamente superando Cypress em adoção por sua confiabilidade e suporte cross-browser robusto.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=wGr5rz8WKNE" target="_blank">Playwright Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=hRQbKkGKG_g" target="_blank">Playwright com TypeScript</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/playwright-intro/" target="_blank">Playwright - Test</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://playwright.dev/docs/intro" target="_blank">Playwright Documentation</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-3-4', title: 'TestNG / JUnit / Mocha',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-4',
                    title: 'Programação para QA',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-4-1', title: 'Lógica de Programação',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-4-2', title: 'Linguagens comuns',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-4-3', title: 'Versionamento',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-5',
                    title: 'Testes de API',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-5-1', title: 'Postman',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-5-2', title: 'REST Assured / SuperTest',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-5-3', title: 'Validação de JSON / HTTP Status',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-6',
                    title: 'Testes de Performance',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-6-1', title: 'JMeter',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-6-2', title: 'Locust',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-6-3', title: 'Análise de métricas',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-7',
                    title: 'Testes Mobile',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-7-1', title: 'Appium',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-7-2', title: 'Detox / Espresso',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-8',
                    title: 'CI/CD e Integração de Testes',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-8-1', title: 'GitHub Actions / Jenkins / GitLab CI',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-8-2', title: 'Pipeline de Testes Automatizados',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-9',
                    title: 'Extras',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-9-1', title: 'Testes em Ambientes Cloud',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-9-2', title: 'Boas práticas de QA',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                        {
                            id: '4-9-3', title: 'Soft Skills para QA',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>

                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                                <li><a className="text-zinc-200 underline" href="" target="_blank"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>,
                            children: []
                        },
                    ],
                },
            ],

        }


    );
}