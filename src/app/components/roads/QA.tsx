export default function IA() {
    return (
        {

            id: '4',
            title: 'QA',

            content:
                <div className="space-y-4 text-md text-zinc-100">
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
                                        TestNG e JUnit são frameworks de teste para Java que organizam suítes, anotações de ciclo de vida e relatórios. TestNG é mais flexível com suporte a grupos e dependências entre testes. JUnit 5 é o padrão moderno em projetos Spring. Mocha é o framework equivalente no ecossistema JavaScript, frequentemente combinado com Chai para asserções.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLqq-6Pq4lTTa4ad5JISViSb2FVG8Vwa4o" target="_blank">JUnit 5 Tutorial - Java Brains</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=MLTRHc5dk6s" target="_blank">Mocha e Chai - Traversy Media</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/junit5-tutorial/" target="_blank">JUnit 5 - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/testng-tutorial.html" target="_blank">TestNG - Guru99</a></li>
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
                                QA moderno exige habilidades de programação para escrever scripts de automação, manipular dados de teste e integrar pipelines de CI/CD. Lógica de programação é o ponto de partida, seguida da escolha de uma linguagem como Java ou Python. Git é indispensável para versionar scripts de automação e colaborar com o time de desenvolvimento.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-4-1', title: 'Lógica de Programação',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Lógica de programação para QA envolve entender variáveis, condicionais, loops, funções e estruturas de dados. Esses conceitos são aplicados na escrita de scripts de automação, manipulação de massa de dados de teste e criação de utilitários de suporte. Sem essa base, a automação de testes torna-se memorização de sintaxe sem compreensão.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=8mei6uVttho" target="_blank">Lógica de Programação para QA</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=zOjov-2OZ0E" target="_blank">Programming Basics</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.cursoemvideo.com/curso/logica-de-programacao/" target="_blank">Lógica de Programação - Curso em Vídeo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/computing/intro-to-programming" target="_blank">Intro to Programming - Khan Academy</a></li>
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
                                        Java é a linguagem mais usada em QA enterprise com Selenium e TestNG. Python é popular pela simplicidade e velocidade de escrita de scripts. JavaScript é essencial para automação com Cypress e Playwright. A escolha da linguagem deve considerar o stack tecnológico da empresa e o framework de automação adotado pelo time.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLf8x7B3nFTl17WeqVrcymVMHCBNEQJCIT" target="_blank">Java para QA</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=7eh4d6sabA0" target="_blank">Python para QA</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/java-programming-course/" target="_blank">Java for Testers - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/python-tutorial/" target="_blank">Python for QA - Test Automation University</a></li>
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
                                        Git é indispensável para versionar scripts de automação e colaborar com desenvolvedores. Manter os testes no mesmo repositório do código garante que ambos evoluam juntos. Boas práticas incluem commits descritivos, branches para novas suítes e integração com pipelines de CI para execução automática a cada pull request.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=UBAX-13g8OM" target="_blank">Git para QA Engineers</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx" target="_blank">Git Tutorial - Corey Schafer</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.cursoemvideo.com/curso/git-e-github/" target="_blank">Git e GitHub - Curso em Vídeo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/version-control-with-git" target="_blank">Version Control with Git - Coursera</a></li>
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
                                Com arquiteturas modernas baseadas em microsserviços e SPAs, os testes de API tornaram-se centrais na estratégia de QA. Testar a camada de API antes da interface garante cobertura mais rápida e estável. Postman facilita testes exploratórios e automatizados de APIs REST. Validar contratos de resposta, status HTTP e comportamento de erros são práticas fundamentais.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-5-1', title: 'Postman',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Postman é a ferramenta mais popular para testar APIs REST e GraphQL. Permite criar requisições, organizar collections, escrever scripts de asserção em JavaScript e rodar suítes de testes via CLI com Newman. Postman Flows e o recurso de Mock Server permitem testar APIs mesmo antes da implementação do backend.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=VywxIQ2ZXw4" target="_blank">Postman para QA</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=VywxIQ2ZXw4" target="_blank">Postman Beginner's Course</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/exploring-service-apis-through-test-automation/" target="_blank">Postman API Testing - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.postman.com/postman-student-programs/" target="_blank">Postman Student Expert</a></li>
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
                                        REST Assured é uma biblioteca Java que facilita testes de APIs REST com sintaxe fluente e legível. SuperTest é o equivalente no ecossistema Node.js, usada com Mocha ou Jest. Ambas permitem escrever testes de API como código, integrá-los ao pipeline de CI e gerar relatórios de cobertura automaticamente.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=RMJ9m9sRfew" target="_blank">REST Assured Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=r5l4XnjFKR8" target="_blank">SuperTest com Node.js</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/automating-your-api-tests-with-rest-assured/" target="_blank">REST Assured - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/rest-assured.html" target="_blank">API Testing with REST Assured - Guru99</a></li>
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
                                        Validar respostas de API envolve verificar status HTTP (200, 201, 400, 401, 404, 500), estrutura do JSON retornado e valores de campos específicos. JSON Schema permite validar contratos de forma automatizada. Testar cenários de erro e edge cases é tão importante quanto testar o fluxo feliz da API.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=QMzZCEdMwPU" target="_blank">HTTP Status Codes for Testers</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=XDgUFZ2bS7A" target="_blank">JSON Schema Validation</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/exploring-service-apis-through-test-automation/" target="_blank">API Testing Foundations - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.freecodecamp.org/learn/back-end-development-and-apis/" target="_blank">HTTP and APIs - freeCodeCamp</a></li>
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
                                Testes de performance garantem que o sistema suporte a carga esperada de usuários sem degradação. Identificam gargalos antes que afetem usuários em produção. JMeter é a ferramenta open source mais usada em empresas, Locust oferece scripts Python mais legíveis e as métricas coletadas orientam otimizações de infraestrutura e código.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-6-1', title: 'JMeter',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Apache JMeter é a ferramenta de teste de performance mais utilizada em ambiente enterprise. Permite simular milhares de usuários simultâneos em APIs, serviços web e bancos de dados. Sua interface gráfica facilita a criação de planos de teste, e o modo CLI permite integração com pipelines de CI/CD.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=M-iAXz8vs48" target="_blank">JMeter Tutorial - Automation Step by Step</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=M-iAXz8vs48" target="_blank">JMeter para Iniciantes</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/jmeter-tutorials.html" target="_blank">JMeter - Guru99</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/performance-testing-tutorial/" target="_blank">Performance Testing - Test Automation University</a></li>
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
                                        Locust é uma ferramenta open source de teste de carga escrita em Python que define comportamento de usuários como código. Sua interface web mostra métricas em tempo real durante a execução. Por ser Python puro, é mais fácil de versionar, revisar e integrar com stacks que já usam a linguagem.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=NFNQ7A1byd4" target="_blank">Locust Load Testing - Tech With Tim</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Vgwv35VZZCE" target="_blank">Performance Testing com Locust</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.locust.io/en/stable/quickstart.html" target="_blank">Locust Documentation</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.freecodecamp.org/news/load-testing-with-locust/" target="_blank">Load Testing with Locust - freeCodeCamp</a></li>
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
                                        Após executar testes de performance, analisar métricas como tempo de resposta (médio, p95, p99), throughput (requisições por segundo), taxa de erros e utilização de recursos (CPU, memória) determina se o sistema está dentro dos SLOs definidos. Grafana e InfluxDB são usados para visualização em tempo real durante os testes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=WNbvLlsxYwk" target="_blank">Performance Metrics Analysis</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=nCy4CHVF-n4" target="_blank">Grafana para Performance Testing</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/performance-testing.html" target="_blank">Performance Testing Metrics - Guru99</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/performance-testing-tutorial/" target="_blank">Load Testing Analysis - Test Automation University</a></li>
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
                                Aplicações mobile exigem estratégias de teste específicas considerando fragmentação de dispositivos, versões de SO, gestos touch e conectividade variável. Appium é a ferramenta de automação mobile mais usada, suportando iOS e Android com o mesmo script. Detox e Espresso são alternativas nativas com maior performance para seus respectivos ecossistemas.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-7-1', title: 'Appium',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Appium é um framework de automação mobile open source que usa o protocolo WebDriver para controlar apps iOS e Android nativos, híbridos e web mobile. Suporta Java, Python e JavaScript. Integra-se com Selenium Grid para execução paralela em múltiplos dispositivos reais ou simuladores na nuvem.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=oLc9gVM8FBM" target="_blank">Appium Tutorial - Automation Step by Step</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=zL7UGXdFb-8" target="_blank">Appium para Iniciantes</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/appium-java-tutorial/" target="_blank">Appium - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.guru99.com/introduction-to-appium.html" target="_blank">Mobile Testing with Appium - Guru99</a></li>
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
                                        Detox é um framework de testes E2E para React Native que roda em cima do dispositivo, oferecendo sincronização automática com a UI. Espresso é o framework nativo do Android integrado ao Android Studio, oferecendo alta confiabilidade para apps Android nativos. Ambos são mais rápidos que Appium por interagirem diretamente com o runtime do app.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=tWHmFBXRqts" target="_blank">Detox React Native Testing</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=7L2XAcMHHPY" target="_blank">Espresso Android Testing</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://wix.github.io/Detox/docs/introduction/getting-started" target="_blank">Detox Documentation</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://developer.android.com/training/testing/espresso" target="_blank">Espresso Testing - Android Developers</a></li>
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
                                Integrar testes ao pipeline de CI/CD garante que qualidade seja verificada automaticamente a cada mudança de código. Falhas nos testes bloqueiam o merge ou deploy, prevenindo regressões em produção. GitHub Actions, Jenkins e GitLab CI são as plataformas mais usadas para orquestrar execução de testes, geração de relatórios e notificações de falha.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-8-1', title: 'GitHub Actions / Jenkins / GitLab CI',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        GitHub Actions permite definir workflows de CI com YAML diretamente no repositório, executando testes a cada push ou pull request. Jenkins é uma plataforma open source flexível e amplamente usada em empresas com infraestrutura própria. GitLab CI é integrado nativamente ao GitLab, com configuração via arquivo .gitlab-ci.yml.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=R8_veQiYBjI" target="_blank">GitHub Actions para QA</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=7KCS70sCoK0" target="_blank">Jenkins Pipeline Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://skills.github.com" target="_blank">GitHub Actions - GitHub Skills</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.freecodecamp.org/news/learn-jenkins-by-building-a-ci-cd-pipeline/" target="_blank">Jenkins - freeCodeCamp</a></li>
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
                                        Um pipeline de testes eficiente executa testes unitários, de integração e E2E em sequência, bloqueando o deploy se qualquer nível falhar. Paralelismo de testes reduz tempo de feedback. Relatórios como Allure e Extent Reports tornam resultados visíveis. Estratégias como smoke tests em produção após deploy garantem qualidade contínua.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=R8_veQiYBjI" target="_blank">CI Pipeline com Cypress</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=R8_veQiYBjI" target="_blank">Test Pipeline com GitHub Actions</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/setting-a-foundation-for-successful-test-automation/" target="_blank">CI/CD for QA - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/devops-culture-and-mindset" target="_blank">DevOps for QA - Coursera</a></li>
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
                                Os tópicos extras de QA expandem a atuação do profissional para ambientes cloud, boas práticas de qualidade como cultura e as soft skills que diferenciam QAs consultivos de executores. Com cloud computing, testar em ambientes distribuídos e usar plataformas de dispositivos reais como BrowserStack tornou-se padrão no mercado.
                            </p>
                        </div>,

                    children: [
                        {
                            id: '4-9-1', title: 'Testes em Ambientes Cloud',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Plataformas como BrowserStack, Sauce Labs e LambdaTest oferecem acesso a centenas de combinações de browser e dispositivo real ou simulado na nuvem. Isso resolve o problema de fragmentação sem necessidade de manter um lab de dispositivos físicos. AWS Device Farm é a alternativa da Amazon para testes mobile em escala.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=xR_RFiDjVf4" target="_blank">BrowserStack Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=5j3OGE8bTDk" target="_blank">Cloud Testing Overview</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.browserstack.com/guide/learn-about-automation-testing" target="_blank">BrowserStack - Getting Started</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/software-testing" target="_blank">Cloud Testing - Coursera</a></li>
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
                                        Boas práticas em QA incluem Shift Left (testar mais cedo no ciclo), Test Pyramid (base de unitários, meio de integração, topo de E2E), Definition of Done com critérios de qualidade e colaboração com devs desde o refinamento. Quality Engineering vai além do teste: o QA como parceiro que eleva a qualidade de todo o processo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=DQmHCEuH2qM" target="_blank">QA Best Practices</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0GypdsJulKE" target="_blank">Test Pyramid - Martin Fowler</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://testautomationu.applitools.com/setting-a-foundation-for-successful-test-automation/" target="_blank">Quality Engineering - Test Automation University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/agile-development" target="_blank">Agile Testing - Coursera</a></li>
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

                                </div>,
                            children: []
                        },
                    ],
                },
            ],

        }


    );
}