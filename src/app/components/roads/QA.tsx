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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Fundamentos de teste compreendem os princípios básicos, conceitos e metodologias que formam a base das atividades de Quality Assurance. Um entendimento sólido desses fundamentos permite que profissionais de QA planejem e executem testes eficazes, detectem problemas precocemente e contribuam para o desenvolvimento de software de alta qualidade.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.istqb.org/downloads/syllabi" target="_blank">ISTQB - Syllabus de Fundamentos</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/software-testing-introduction-importance.html" target="_blank">Guru99 - Introdução ao Teste de Software</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/testing-basics" target="_blank">Ministry of Testing - Básicos de Teste</a></li>
                                <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/testing-fundamentals/" target="_blank">Test Automation University - Fundamentos de Teste</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '3-1-1',
                            title: 'Tipos de Testes (Unitário, Integração, Funcional, etc.)',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Diferentes tipos de testes visam verificar aspectos específicos do software. Testes unitários focam em componentes isolados, testes de integração verificam a comunicação entre módulos, testes funcionais avaliam requisitos de negócio, e existem vários outros como testes de sistema, aceitação, regressão, usabilidade e segurança. Cada tipo tem seu propósito na pirâmide de testes e contribui para a qualidade geral do software.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://martinfowler.com/articles/practical-test-pyramid.html" target="_blank">Martin Fowler - Pirâmide de Testes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/types-of-software-testing.html" target="_blank">Guru99 - Tipos de Testes de Software</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/testing-pyramid-for-test-automation" target="_blank">BrowserStack - Guia de Automação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/modern-testing-practices" target="_blank">Ministry of Testing - Práticas Modernas</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '3-1-2',
                            title: 'Ciclo de Vida de Testes (SDLC/STLC)',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Ciclo de Vida de Teste de Software (STLC) acompanha o Ciclo de Vida de Desenvolvimento (SDLC) e inclui fases como planejamento, análise, design, implementação, execução e encerramento dos testes. Metodologias como Agile, Waterfall ou DevOps influenciam como estas fases são aplicadas. Um STLC bem definido garante cobertura adequada, otimização de recursos e melhoria contínua do processo de testes.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/software-testing-life-cycle.html" target="_blank">Guru99 - Ciclo de Vida de Teste</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/software-testing-life-cycle" target="_blank">BrowserStack - STLC Detalhado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/continuous-delivery/software-testing" target="_blank">Atlassian - Testes em Continuous Delivery</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/agile-testing-demystified" target="_blank">Ministry of Testing - Testes Ágeis</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '3-1-3',
                            title: 'Testes Manuais vs Automatizados',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Testes manuais são executados por testadores humanos, sendo ideais para testes exploratórios, usabilidade e cenários complexos. Testes automatizados são programados para execução repetida, perfeitos para regressão, testes de carga e verificações frequentes. Uma estratégia eficaz equilibra ambos: automação para tarefas repetitivas e testes manuais para avaliação criativa e crítica do software.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/manual-testing-vs-automated-testing.html" target="_blank">Guru99 - Manual vs Automatizado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/manual-vs-automated-testing" target="_blank">BrowserStack - Comparação Detalhada</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/automation-in-testing" target="_blank">Ministry of Testing - Automação em Testes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/automating-your-testing/" target="_blank">Test Automation University - Automação</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '3-1-4',
                            title: 'Técnicas de Teste (Caixa-preta, Caixa-branca, Exploratório)',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Técnicas de teste são métodos estruturados para identificar casos de teste. Testes de caixa-preta focam em entradas e saídas sem conhecimento do código interno. Testes de caixa-branca analisam o código-fonte e fluxos internos. Testes exploratórios são mais livres, permitindo que o testador descubra problemas através da experimentação. Cada técnica tem seu valor no arsenal de QA para garantir cobertura abrangente.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/black-box-testing.html" target="_blank">Guru99 - Técnicas de Caixa-preta</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tutorialspoint.com/software_testing/software_testing_methods.htm" target="_blank">TutorialsPoint - Métodos de Teste</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/exploratory-testing-masterclass" target="_blank">Ministry of Testing - Testes Exploratórios</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.istqb.org/downloads/category/14-test-techniques" target="_blank">ISTQB - Técnicas de Teste</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-2',
                    title: 'Ferramentas de Teste Manual',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Ferramentas de teste manual auxiliam testadores a planejar, documentar, executar e reportar testes executados manualmente. Estas incluem gerenciadores de casos de teste, rastreadores de bugs, ferramentas de captura de tela/vídeo e sistemas de documentação. A escolha adequada destas ferramentas pode melhorar significativamente a eficiência da equipe de QA e a qualidade do feedback fornecido para os desenvolvedores.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/test-management-tools.html" target="_blank">Guru99 - Ferramentas de Gerenciamento de Teste</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.softwaretestinghelp.com/test-management-tools/" target="_blank">STH - Principais Ferramentas de Teste</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/tools-of-the-trade" target="_blank">Ministry of Testing - Ferramentas do Ofício</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/top-test-management-tools" target="_blank">BrowserStack - Ferramentas de Gestão de Testes</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-2-1', title: 'TestRail / Zephyr / Xray',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>TestRail, Zephyr e Xray são ferramentas de gerenciamento de testes populares que permitem planejar, organizar, executar e rastrear casos de teste. TestRail é uma plataforma independente com interface intuitiva, enquanto Zephyr e Xray são integrados ao Jira. Essas ferramentas oferecem recursos como dashboards de métricas, relatórios personalizados, execução em lote e rastreabilidade de requisitos a casos de teste.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.gurock.com/testrail/" target="_blank">TestRail - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/software/jira/agile/zephyr" target="_blank">Atlassian - Zephyr para Jira</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.getxray.app/" target="_blank">Xray - Guia de Uso</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.softwaretestinghelp.com/testrail-vs-zephyr/" target="_blank">STH - TestRail vs Zephyr</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-2-2', title: 'Jira / Trello',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Jira e Trello são ferramentas de gerenciamento de projetos amplamente utilizadas em QA. Jira oferece recursos avançados para rastreamento de bugs, fluxos de trabalho personalizáveis e integração com ferramentas de teste, sendo ideal para equipes maiores. Trello, com sua interface Kanban simples, é mais adequado para equipes menores e fluxos menos complexos. Ambas permitem visualizar progresso, atribuir tarefas e integrar-se ao ciclo de desenvolvimento.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/software/jira/guides/getting-started/overview" target="_blank">Atlassian - Introdução ao Jira</a></li>
                                        <li><a className="text-blue-600 underline" href="https://trello.com/guide" target="_blank">Trello - Guia do Usuário</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.softwaretestinghelp.com/jira-for-test-management/" target="_blank">STH - Jira para Gestão de Testes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/jira-for-testers" target="_blank">Ministry of Testing - Jira para Testadores</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-2-3', title: 'Test Case Design',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Design de casos de teste é a arte de criar testes eficazes que maximizam a cobertura com o mínimo de esforço. Isso envolve técnicas como particionamento de equivalência, análise de valor limite, tabelas de decisão e gráficos causa-efeito. Um bom design de teste identifica cenários críticos, evita redundâncias, facilita manutenção e equilibra cobertura e eficiência para detectar defeitos significativos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/test-case-design-technique.html" target="_blank">Guru99 - Técnicas de Design de Casos de Teste</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tutorialspoint.com/software_testing/software_test_design_techniques.htm" target="_blank">TutorialsPoint - Técnicas de Design de Teste</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/test-design-techniques" target="_blank">Ministry of Testing - Técnicas de Design</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.istqb.org/downloads/category/14-test-techniques" target="_blank">ISTQB - Materiais sobre Técnicas de Teste</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-3',
                    title: 'Automação de Testes',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A automação de testes utiliza software para executar testes repetitivos e predefinidos, permitindo detecção rápida de regressões, economia de tempo em execuções frequentes e maior cobertura. Uma estratégia eficaz de automação identifica candidatos ideais à automação, escolhe ferramentas adequadas, cria scripts sustentáveis e estabelece práticas de manutenção. Quando bem implementada, proporciona feedback rápido e confiável sobre a qualidade do software.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/automation-testing.html" target="_blank">Guru99 - Introdução à Automação de Testes</a></li>
                                <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/" target="_blank">Test Automation University - Cursos Gratuitos</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/automation-testing-basics" target="_blank">BrowserStack - Fundamentos de Automação</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/the-evolution-of-test-automation" target="_blank">Ministry of Testing - Evolução da Automação</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-3-1', title: 'Selenium / WebDriver',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Selenium WebDriver é uma das ferramentas mais populares para automação de testes de interface web. Permite controlar navegadores programaticamente para simular interações de usuário, verificar elementos e validar comportamentos. Com suporte a múltiplos navegadores, linguagens de programação (Java, Python, C#, JavaScript) e integração com frameworks de teste, o Selenium é um pilar fundamental na automação de testes web.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.selenium.dev/documentation/en/" target="_blank">Selenium - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/selenium-tutorial.html" target="_blank">Guru99 - Tutorial Completo de Selenium</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/selenium-webdriver-tutorial-java/" target="_blank">Test Automation U - Curso de Selenium com Java</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/selenium-webdriver-tutorial" target="_blank">BrowserStack - Tutorial de WebDriver</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-3-2', title: 'Cypress',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Cypress é um framework moderno de teste end-to-end para aplicações web que executa diretamente no navegador. Diferente do Selenium, Cypress tem arquitetura única que elimina problemas de sincronização, oferece tempos de espera automáticos, debugging visual em tempo real e screenshots/vídeos automáticos. Sua sintaxe JavaScript intuitiva, documentação excelente e setup simples o tornam popular entre desenvolvedores e QAs.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.cypress.io/" target="_blank">Cypress - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/cypress-tutorial/" target="_blank">Test Automation U - Curso de Cypress</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/Cypressio" target="_blank">Canal Oficial Cypress no YouTube</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/cypress-vs-selenium" target="_blank">BrowserStack - Cypress vs Selenium</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-3-3', title: 'Playwright',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Playwright é uma ferramenta de automação de browser desenvolvida pela Microsoft que permite testar aplicações web em múltiplos navegadores (Chromium, Firefox, WebKit). Destaca-se pelo modelo de espera automática, capacidade de teste de múltiplas origens, emulação de dispositivos móveis e suporte nativo a recursos modernos como shadow DOM. Disponível em JavaScript, TypeScript, Python, Java e .NET, Playwright oferece API simples e poderosa para testes confiáveis.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://playwright.dev/" target="_blank">Playwright - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/playwright-tutorial/" target="_blank">Test Automation U - Curso de Playwright</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLYTvJozRuZageMQKQJBsT9XX1K4565zyY" target="_blank">Playlist de Tutoriais Playwright</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/playwright-vs-puppeteer" target="_blank">BrowserStack - Playwright vs Puppeteer</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-3-4', title: 'TestNG / JUnit / Mocha',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>TestNG, JUnit e Mocha são frameworks populares para execução de testes automatizados. TestNG e JUnit são voltados para Java, oferecendo anotações, agrupamento de testes e execução paralela. Mocha é um framework JavaScript flexível compatível com Node.js e navegadores. Esses frameworks fornecem estrutura, relatórios e integração com ferramentas de CI/CD, sendo fundamentais na organização de suítes de teste.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://testng.org/doc/" target="_blank">TestNG - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://junit.org/junit5/docs/current/user-guide/" target="_blank">JUnit - Guia do Usuário</a></li>
                                        <li><a className="text-blue-600 underline" href="https://mochajs.org/" target="_blank">Mocha - Documentação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/test-frameworks-comparison.html" target="_blank">Guru99 - Comparação de Frameworks de Teste</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-4',
                    title: 'Programação para QA',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Conhecimentos de programação são cada vez mais essenciais para profissionais de QA, especialmente na era da automação. Habilidades de programação permitem criar scripts de teste robustos, analisar código para identificar possíveis falhas, desenvolver ferramentas personalizadas e colaborar efetivamente com desenvolvedores. Para QAs modernos, programação não é apenas uma habilidade adicional, mas um diferencial competitivo fundamental.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/learningpaths.html" target="_blank">Test Automation U - Trilhas de Aprendizado</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/programming-for-testers.html" target="_blank">Guru99 - Programação para Testadores</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/programming-skills-for-testers" target="_blank">Ministry of Testing - Habilidades de Programação</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp - Cursos Gratuitos de Programação</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-4-1', title: 'Lógica de Programação',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Lógica de programação é o fundamento para qualquer atividade de desenvolvimento ou automação de testes. Envolve a capacidade de estruturar pensamentos em sequências lógicas, usar estruturas de controle (condicionais, loops), manipular dados e resolver problemas algoritmicamente. Para QAs, dominar lógica de programação é essencial para criar scripts de teste eficientes, compreender o código sendo testado e identificar falhas de lógica no software.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.codecademy.com/learn/learn-how-to-code" target="_blank">Codecademy - Aprenda a Programar</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">FreeCodeCamp - Algoritmos e Estruturas de Dados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/programming-fundamentals" target="_blank">Coursera - Fundamentos de Programação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" target="_blank">HackerRank - Desafios de Programação</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-4-2', title: 'Linguagens comuns (JavaScript, Python, Java)',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>JavaScript, Python e Java são linguagens essenciais para QAs. JavaScript é vital para testes web, suportando frameworks como Cypress e Playwright. Python é valorizada por sua simplicidade e bibliotecas para automação e análise de dados. Java permanece relevante para testes corporativos com ecossistema maduro (Selenium, TestNG). A escolha depende do projeto, tecnologias e preferências da equipe, mas aprender múltiplas linguagens amplia oportunidades e flexibilidade.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.w3schools.com/js/" target="_blank">W3Schools - Tutorial JavaScript</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.python.org/about/gettingstarted/" target="_blank">Python.org - Começando com Python</a></li>
                                        <li><a className="text-blue-600 underline" href="https://dev.java/learn/" target="_blank">Dev.java - Aprendendo Java</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/programming-languages/" target="_blank">TAU - Linguagens para Automação</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-4-3', title: 'Versionamento com Git/GitHub',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Git é um sistema de controle de versão essencial para QAs que trabalham com automação de testes. Permite gerenciar mudanças em scripts de teste, colaborar com a equipe, manter histórico de alterações e reverter a versões anteriores quando necessário. GitHub, GitLab e Bitbucket são plataformas que hospedam repositórios Git e adicionam funcionalidades como pull requests, code reviews e integração com ferramentas de CI/CD.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://git-scm.com/book/en/v2" target="_blank">Git - Livro Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian - Tutoriais Git</a></li>
                                        <li><a className="text-blue-600 underline" href="https://lab.github.com/" target="_blank">GitHub Learning Lab</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/" target="_blank">FreeCodeCamp - Fundamentos do Git</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-5',
                    title: 'Testes de API',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Testes de API verificam a camada de comunicação entre diferentes componentes de software. Eles validam endpoints, contratos de dados, segurança e comportamento das APIs em diferentes cenários. Testes de API são essenciais no desenvolvimento moderno, especialmente em arquiteturas de microsserviços e aplicações distribuídas, pois garantem integridade de dados, conformidade com especificações e resiliência em comunicações entre sistemas.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/api-testing.html" target="_blank">Guru99 - Guia Completo de Testes de API</a></li>
                                <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/api-testing-with-postman/" target="_blank">Test Automation U - Testes de API com Postman</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.baeldung.com/rest-assured-tutorial" target="_blank">Baeldung - Tutorial REST Assured</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/api-testing-basics" target="_blank">Ministry of Testing - Fundamentos de Testes de API</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-5-1', title: 'Postman',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Postman é uma plataforma completa para desenvolvimento e testes de API. Permite criar, compartilhar e testar requisições HTTP, organizar testes em coleções, automatizar verificações com scripts JavaScript, criar ambientes com variáveis e gerar documentação. Sua interface amigável e recursos avançados como testes de pré-requisição, monitores de API e integração com CI/CD tornam o Postman indispensável para testar APIs REST, SOAP e GraphQL.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank">Postman - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/postman-tutorial/" target="_blank">Test Automation U - Curso de Postman</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/postman-tutorial.html" target="_blank">Guru99 - Tutorial de Postman</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLM-7VG-sgbtD8qBnGeQM5nvlpqB_ktaLZ" target="_blank">Canal Postman - Tutoriais em Vídeo</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-5-2', title: 'REST Assured / SuperTest',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Postman é uma plataforma completa para desenvolvimento e testes de API. Permite criar, compartilhar e testar requisições HTTP, organizar testes em coleções, automatizar verificações com scripts JavaScript, criar ambientes com variáveis e gerar documentação. Sua interface amigável e recursos avançados como testes de pré-requisição, monitores de API e integração com CI/CD tornam o Postman indispensável para testar APIs REST, SOAP e GraphQL.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank">Postman - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/postman-tutorial/" target="_blank">Test Automation U - Curso de Postman</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/postman-tutorial.html" target="_blank">Guru99 - Tutorial de Postman</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLM-7VG-sgbtD8qBnGeQM5nvlpqB_ktaLZ" target="_blank">Canal Postman - Tutoriais em Vídeo</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-5-3', title: 'Validação de JSON / HTTP Status',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Validação de respostas JSON e códigos HTTP é fundamental em testes de API. Envolve verificar estrutura, tipos de dados e valores em payloads JSON, além de confirmar que o servidor retorna códigos HTTP apropriados (200 para sucesso, 400 para erros de cliente, 500 para falhas de servidor). Ferramentas como JSONPath, JSONSchema e bibliotecas de asserção ajudam a validar respostas complexas e garantir que a API atenda às especificações e mantenha consistência.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://jsonpath.com/" target="_blank">JSONPath - Ferramenta Online</a></li>
                                        <li><a className="text-blue-600 underline" href="https://json-schema.org/understanding-json-schema/" target="_blank">JSON Schema - Guia de Entendimento</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.baeldung.com/rest-assured-json-schema" target="_blank">Baeldung - Validação JSON Schema com REST Assured</a></li>
                                        <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank">MDN - Códigos de Status HTTP</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-6',
                    title: 'Testes de Performance',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Testes de performance avaliam como um sistema se comporta sob carga, identificando gargalos, limites de escalabilidade e problemas de resposta. Incluem testes de carga (volume normal a alto), estresse (limites extremos), resistência (longos períodos) e pico (aumentos súbitos). Essenciais para aplicações de alto tráfego, garantem que o software mantenha desempenho aceitável, tempos de resposta adequados e estabilidade mesmo em condições adversas.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/performance-testing.html" target="_blank">Guru99 - Introdução a Testes de Performance</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.blazemeter.com/blog/performance-testing-types" target="_blank">BlazeMeter - Tipos de Testes de Performance</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/performance-testing-basics" target="_blank">Ministry of Testing - Fundamentos</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/performance-testing-tutorial" target="_blank">BrowserStack - Tutorial Completo</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-6-1', title: 'JMeter',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Apache JMeter é uma ferramenta open-source para testes de carga e performance. Permite simular milhares de usuários simultâneos, testar diversos protocolos (HTTP, JDBC, SOAP, REST), criar cenários complexos com controllers e timers, e medir métricas como throughput, tempo de resposta e taxas de erro. Com interface gráfica para criação de testes e modo CLI para execução em CI/CD, JMeter é versátil para testar websites, APIs e bancos de dados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://jmeter.apache.org/usermanual/index.html" target="_blank">JMeter - Manual Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/jmeter-tutorials.html" target="_blank">Guru99 - Tutoriais JMeter</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.blazemeter.com/blog/jmeter-tutorial" target="_blank">BlazeMeter - Tutorial Passo a Passo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/performance-testing-with-jmeter/" target="_blank">Test Automation U - Curso de JMeter</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-6-2', title: 'Locust',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Locust é uma ferramenta moderna de testes de carga baseada em Python. Diferente de ferramentas tradicionais, permite definir comportamentos de usuário em código Python puro, facilitando a criação de cenários complexos e realistas. Com arquitetura distribuída, pode simular milhões de usuários simultâneos, oferece interface web em tempo real, e gera relatórios detalhados. Sua abordagem orientada a eventos e código aberto a torna flexível e extensível.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.locust.io/en/stable/" target="_blank">Locust - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.blazemeter.com/blog/locust-python-load-testing" target="_blank">BlazeMeter - Guia Completo de Locust</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.pythonforbeginners.com/opensource/locust-load-testing-tool" target="_blank">Python for Beginners - Tutorial Locust</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/locustio/locust" target="_blank">GitHub - Repositório Oficial Locust</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-6-3', title: 'Análise de métricas',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Análise de métricas de performance envolve interpretar dados coletados durante testes para identificar problemas e oportunidades de otimização. Métricas chave incluem tempo de resposta (médio, mínimo, máximo, percentis), throughput (transações por segundo), taxa de erro, utilização de recursos (CPU, memória, rede, I/O) e concorrência. Ferramentas como Grafana, ELK Stack e APMs ajudam a visualizar tendências, detectar anomalias e correlacionar métricas para diagnósticos precisos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.dynatrace.com/news/blog/what-is-performance-testing-a-guide-to-key-performance-metrics/" target="_blank">Dynatrace - Métricas Chave de Performance</a></li>
                                        <li><a className="text-blue-600 underline" href="https://grafana.com/tutorials/grafana-fundamentals/" target="_blank">Grafana - Fundamentos de Visualização</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.elastic.co/guide/en/kibana/current/dashboard.html" target="_blank">Elastic - Dashboards com Kibana</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.blazemeter.com/blog/interpreting-jmeter-results" target="_blank">BlazeMeter - Interpretando Resultados de Testes</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-7',
                    title: 'Testes Mobile',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Testes mobile abrangem a validação de aplicativos em dispositivos móveis, considerando fatores únicos como tamanhos de tela, orientações, fragmentação de hardware/software, conectividade intermitente e limitações de recursos. Incluem testes funcionais, de compatibilidade, performance, usabilidade e interrupções (chamadas, notificações). A estratégia eficaz equilibra testes em dispositivos reais, emuladores e serviços em nuvem para garantir experiências consistentes em diversos cenários de uso.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/mobile-testing.html" target="_blank">Guru99 - Guia de Testes Mobile</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/mobile-testing-guide" target="_blank">BrowserStack - Guia Completo</a></li>
                                <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/mobile-automation/" target="_blank">Test Automation U - Automação Mobile</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/mobile-testing-pathway" target="_blank">Ministry of Testing - Trilha de Testes Mobile</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-7-1', title: 'Appium',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Appium é um framework open-source para automação de aplicativos nativos, híbridos e web em plataformas iOS e Android. Baseado no protocolo WebDriver, permite escrever testes em várias linguagens (Java, Python, JavaScript) com a mesma API. Appium funciona sem modificar o aplicativo, suporta gestos touch complexos, execução em dispositivos reais e emuladores, e integra-se com ferramentas de CI/CD, tornando-se uma escolha versátil para automação mobile cross-platform.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://appium.io/docs/en/about-appium/intro/" target="_blank">Appium - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/appium-java-tutorial/" target="_blank">Test Automation U - Curso de Appium</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/introduction-to-appium.html" target="_blank">Guru99 - Introdução ao Appium</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/appium-tutorial-for-testing" target="_blank">BrowserStack - Tutorial Prático</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-7-2', title: 'Detox / Espresso',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Detox e Espresso são frameworks especializados para testes end-to-end mobile. Espresso, criado pelo Google, oferece testes rápidos e confiáveis para Android com sincronização automática e API Java intuitiva. Detox, desenvolvido pela Wix, é cross-platform (iOS/Android) e integra-se com React Native e JavaScript. Ambos superam o Appium em velocidade por comunicarem diretamente com os frameworks nativos, sendo ideais para testes rápidos de UI em pipelines de CI/CD.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://github.com/wix/Detox" target="_blank">Detox - Repositório Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://developer.android.com/training/testing/espresso" target="_blank">Android Developers - Guia Espresso</a></li>
                                        <li><a className="text-blue-600 underline" href="https://medium.com/wix-engineering/introducing-detox-gray-box-end-to-end-testing-framework-for-mobile-apps-196ccd9564ce" target="_blank">Wix Engineering - Introdução ao Detox</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/espresso-vs-appium" target="_blank">BrowserStack - Espresso vs Appium</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-8',
                    title: 'CI/CD e Integração de Testes',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Integração de testes em pipelines CI/CD automatiza a verificação de qualidade a cada mudança no código. Esta prática reduz risco de bugs em produção, agiliza feedback aos desenvolvedores e estabelece gates de qualidade. Testes unitários, integração e funcionais são executados em diferentes estágios do pipeline, com resultados visíveis e bloqueio de builds falhos. A automação de testes em CI/CD é fundamental para entregar software confiável com frequência.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://martinfowler.com/articles/continuousIntegration.html" target="_blank">Martin Fowler - Integração Contínua</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment" target="_blank">Atlassian - CI vs CD vs Deployment</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/ci-cd-pipeline" target="_blank">BrowserStack - Pipeline CI/CD</a></li>
                                <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/cicd-102/" target="_blank">TAU - CI/CD para Testers</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-8-1', title: 'GitHub Actions / Jenkins / GitLab CI',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>GitHub Actions, Jenkins e GitLab CI são plataformas populares para implementação de CI/CD. GitHub Actions oferece integração nativa com repositórios GitHub e configuração simples via YAML. Jenkins é altamente personalizável com centenas de plugins e suporte a diversos ambientes. GitLab CI integra-se perfeitamente ao GitLab com pipelines definidos como código. Todas permitem automatizar builds, testes e deploys, diferindo em hospedagem, integração com ferramentas e curva de aprendizado.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.github.com/en/actions" target="_blank">GitHub - Documentação do Actions</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.jenkins.io/doc/" target="_blank">Jenkins - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.gitlab.com/ee/ci/" target="_blank">GitLab - Documentação de CI/CD</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tutorialspoint.com/jenkins/index.htm" target="_blank">TutorialsPoint - Tutorial Jenkins</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-8-2', title: 'Pipeline de Testes Automatizados',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Um pipeline de testes automatizados estrutura a execução de testes em fases estratégicas. Começa com testes unitários rápidos, seguidos por testes de integração e finaliza com testes end-to-end mais complexos. Esta abordagem piramidal fornece feedback rápido sobre problemas simples e validação completa antes do deploy. Pipelines eficientes incluem paralelização, geração de relatórios, notificações e são configurados como código para manutenção e versionamento.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.lambdatest.com/blog/test-automation-pyramid-with-examples/" target="_blank">LambdaTest - Pirâmide de Automação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/continuous-testing" target="_blank">BrowserStack - Testes Contínuos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/continuous-delivery/software-testing/test-automation" target="_blank">Atlassian - Automação em CD</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.gitlab.com/ee/ci/testing/" target="_blank">GitLab - Testes no Pipeline CI</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
                {
                    id: '4-9',
                    title: 'Extras',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Conhecimentos complementares diferenciam profissionais de QA no mercado atual. Familiaridade com ambientes cloud, adoção de boas práticas e desenvolvimento de soft skills são áreas que expandem as capacidades técnicas e interpessoais. Estes tópicos adicionais permitem que QAs contribuam de forma mais abrangente para a qualidade do produto, colaborem efetivamente com times multidisciplinares e adaptem-se rapidamente às mudanças tecnológicas e metodológicas do mercado.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/30-things-every-new-software-tester-should-learn" target="_blank">Ministry of Testing - 30 Coisas para Aprender</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.guru99.com/software-testing-career-complete-guide.html" target="_blank">Guru99 - Guia de Carreira em QA</a></li>
                                <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/learningpaths.html" target="_blank">TAU - Trilhas de Aprendizado</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/qa-testing-best-practices" target="_blank">BrowserStack - Melhores Práticas</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '4-9-1', title: 'Testes em Ambientes Cloud',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Testes em ambientes cloud oferecem escalabilidade, flexibilidade e economia de recursos. Plataformas como AWS, Azure e Google Cloud permitem configurar ambientes sob demanda, simular cargas reais e testar em diferentes regiões. Serviços especializados como BrowserStack, LambdaTest e Sauce Labs fornecem acesso a diversos dispositivos e navegadores na nuvem. A abordagem cloud elimina limitações de infraestrutura local e possibilita testes distribuídos geograficamente para validar performance global.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/what-is-cloud-testing" target="_blank">BrowserStack - Introdução a Cloud Testing</a></li>
                                        <li><a className="text-blue-600 underline" href="https://aws.amazon.com/blogs/devops/test-automation-in-aws/" target="_blank">AWS - Automação de Testes na Nuvem</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/cloud-testing-tutorial.html" target="_blank">Guru99 - Cloud Testing Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.lambdatest.com/blog/why-move-selenium-testing-to-cloud/" target="_blank">LambdaTest - Selenium na Nuvem</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-9-2', title: 'Boas práticas de QA',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Boas práticas de QA são princípios fundamentais que elevam a eficácia do processo de teste. Incluem envolvimento antecipado no ciclo de desenvolvimento, testes baseados em risco, independência de teste, automação estratégica e documentação clara. Também abrangem revisão de requisitos, teste exploratório, combinação de técnicas de teste, comunicação eficaz de bugs e aprendizado contínuo. Seguir estas práticas aumenta a detecção precoce de defeitos e contribui para produtos de alta qualidade.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/software-testing-best-practices.html" target="_blank">Guru99 - Melhores Práticas de Teste</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/modern-testing-principles" target="_blank">Ministry of Testing - Princípios Modernos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.browserstack.com/guide/test-automation-best-practices" target="_blank">BrowserStack - Práticas de Automação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://testautomationu.applitools.com/test-maintainability-patterns/" target="_blank">TAU - Padrões de Manutenibilidade</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                        {
                            id: '4-9-3', title: 'Soft Skills para QA',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Soft skills são competências interpessoais essenciais para profissionais de QA modernos. Comunicação clara é fundamental para reportar bugs efetivamente e articular problemas técnicos para equipes não-técnicas. Pensamento crítico e atenção aos detalhes permitem identificar cenários complexos de teste. Colaboração facilita trabalho com desenvolvedores e product owners. Adaptabilidade é crucial em ambientes ágeis. Curiosidade e aprendizado contínuo mantêm QAs atualizados, enquanto empatia ajuda a entender perspectivas de usuários finais.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.ministryoftesting.com/dojo/lessons/communication-skills-for-testers" target="_blank">Ministry of Testing - Habilidades de Comunicação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.guru99.com/soft-skills-for-software-testers.html" target="_blank">Guru99 - Soft Skills Essenciais para QA</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.techwell.com/techwell-insights/2019/12/six-critical-soft-skills-testers" target="_blank">TechWell - Soft Skills Críticas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.softwaretestinghelp.com/soft-skills-for-software-testers/" target="_blank">STH - Desenvolvendo Soft Skills em QA</a></li>
                                    </ul>
                                </div>,
                            children: []
                        },
                    ],
                },
            ],

        }


    );
}