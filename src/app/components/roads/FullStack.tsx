export default function IA() {
    return (
        {

            id: '1',
            title: 'FullStack',

            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>O desenvolvimento FullStack abrange tanto o front-end (interface do usuário) quanto o back-end (servidor, banco de dados, lógica de negócio). Um desenvolvedor FullStack é capaz de construir uma aplicação completa, do banco de dados até a interface.</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/learn" target="_blank">FreeCodeCamp - FullStack Developer Path</a></li>
                        <li><a className="text-blue-600 underline" href="https://roadmap.sh/full-stack" target="_blank">Roadmap.sh - FullStack</a></li>
                        <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a></li>
                    </ul>
                </div>
            ),

            children: [
                {
                    id: '1-1',
                    title: 'Início do Front-End',

                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Front-End é a parte visual de uma aplicação. Envolve tudo que o usuário vê e interage. É composto por HTML, CSS e JavaScript, além de frameworks e bibliotecas modernas.</p>
                            <p className='font-bold text-red-500'>É necessário estudar os 3 HTML, CSS e JavaScript</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://frontendmasters.com/learn/front-end-handbook/" target="_blank">Front-End Handbook</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank">The Odin Project</a></li>
                                <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/pt-BR/docs/Web" target="_blank">MDN Web Docs</a></li>
                            </ul>
                        </div>
                    ),

                    children: [
                        {
                            id: '1-1-1',
                            title: 'HTML',

                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>HTML (HyperText Markup Language) é a linguagem de marcação utilizada para estruturar conteúdos na web.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://youtu.be/Ejkb_YpuHWs?si=FAk-H9gH27aiBplS" target="_blank">Curso em Vídeo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.w3schools.com/html/" target="_blank">W3Schools - HTML</a></li>
                                    </ul>
                                </div>
                            ),

                            children: [],
                        },
                        {
                            id: '1-1-2',
                            title: 'CSS',

                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>CSS (Cascading Style Sheets) é a linguagem usada para estilizar elementos HTML, como cores, layouts, fontes, animações e responsividade.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">MDN - CSS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://css-tricks.com/guides/" target="_blank">CSS Tricks - Guias</a></li>
                                    </ul>
                                </div>
                            ),

                            children: [],
                        },
                        {
                            id: '1-1-3',
                            title: 'Javascript',

                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>JavaScript é uma linguagem de programação que permite adicionar interatividade a páginas web. É essencial no desenvolvimento Front-End.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://javascript.info/" target="_blank">JavaScript.info</a></li>
                                        <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">MDN - JavaScript</a></li>
                                    </ul>
                                </div>
                            ),

                            children: [],
                        },
                    ],
                },
                {
                    id: '1-2',
                    title: 'Início do Back-End',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Back-End é a parte do desenvolvimento que lida com a lógica do servidor, banco de dados e processamento de dados. É responsável por garantir que tudo funcione corretamente nos bastidores da aplicação.</p>
                            <p className='font-bold text-red-500'>Inicialmente é necessário escolher um dos 2: NodeJs ou PHP</p>
                            <p className='font-bold text-red-500'>Em seguida API e Banco de Dados</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://roadmap.sh/backend" target="_blank">Roadmap.sh - Back-End</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/news/backend-development-roadmap/" target="_blank">FreeCodeCamp - Back-End Roadmap</a></li>
                                <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/en-US/docs/Learn/Server-side" target="_blank">MDN - Server-side Development</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '1-2-1',
                            title: 'NodeJs',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Node.js é um ambiente de execução JavaScript do lado do servidor, construído sobre o motor V8 do Chrome. Permite desenvolver aplicações escaláveis de rede e servidores web usando JavaScript.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://nodejs.org/en/learn" target="_blank">Documentação Oficial do Node.js</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank">Udemy - Node.js Complete Guide</a></li>
                                        <li><a className="text-blue-600 underline" href="https://nodeschool.io/" target="_blank">Node School</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        },
                        {
                            id: '1-2-2',
                            title: 'PHP',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>PHP é uma linguagem de programação voltada para o desenvolvimento web do lado do servidor. É amplamente utilizada para criar sites dinâmicos e aplicações web, sendo compatível com a maioria dos servidores web e sistemas de banco de dados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.php.net/manual/pt_BR/" target="_blank">Manual Oficial do PHP</a></li>
                                        <li><a className="text-blue-600 underline" href="https://phptherightway.com/" target="_blank">PHP: The Right Way</a></li>
                                        <li><a className="text-blue-600 underline" href="https://laracasts.com/series/php-for-beginners" target="_blank">Laracasts - PHP para Iniciantes</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        },

                        {
                            id: '1-2-4',
                            title: 'API Restful',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>APIs RESTful são interfaces de programação que seguem os princípios da arquitetura REST, utilizando métodos HTTP para operações CRUD (Create, Read, Update, Delete). São fundamentais para a comunicação entre front-end e back-end em aplicações modernas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://restfulapi.net/" target="_blank">RESTful API Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=SLwpqD8n3d0" target="_blank">RESTful API com Node.js e Express</a></li>
                                        <li><a className="text-blue-600 underline" href="https://swagger.io/resources/articles/best-practices-in-api-design/" target="_blank">Melhores Práticas para Design de API</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        }, {
                            id: '1-2-3',
                            title: 'Banco de Dados',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Bancos de dados são sistemas organizados para armazenar, gerenciar e recuperar informações de forma eficiente. Existem bancos relacionais (SQL) como MySQL e PostgreSQL, e não-relacionais (NoSQL) como MongoDB e Redis.</p>
                                    <p className='font-bold text-red-500'>Estude inicialmente para banco relacional o MySQL e para não-relacional MongoDB</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.w3schools.com/sql/" target="_blank">W3Schools - SQL Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://university.mongodb.com/" target="_blank">MongoDB University</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.postgresqltutorial.com/" target="_blank">PostgreSQL Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://dev.mysql.com/doc/refman/8.0/en/" target="_blank">MySQL Documentation</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        }

                    ],
                },
                {
                    id: '1-3',
                    title: 'Versionamento',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Versionamento é o processo de controle de versões de código-fonte durante o desenvolvimento de software. Sistemas como Git permitem que múltiplos desenvolvedores trabalhem em paralelo, mantendo um histórico completo das alterações.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://git-scm.com/book/pt-br/v2" target="_blank">Git Book</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian Git Tutorials</a></li>
                                <li><a className="text-blue-600 underline" href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching (Interativo)</a></li>
                                <li><a className="text-blue-600 underline" href="https://docs.github.com/pt" target="_blank">Documentação do GitHub</a></li>
                            </ul>
                        </div>,

                    children: [],
                },
                {
                    id: '1-4',
                    title: 'Frameworks para o Front-End',

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>Frameworks Front-End são conjuntos de ferramentas que facilitam o desenvolvimento de interfaces de usuário, oferecendo componentes reutilizáveis e estrutura organizada. Exemplos incluem React, Angular e Vue.js.</p>
                        <p className='font-bold text-red-500'>Deve escolher um de cada para prosseguir no mercado.</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://roadmap.sh/frontend" target="_blank">Frontend Framework Roadmap</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/news/complete-guide-for-front-end-developers/" target="_blank">FreeCodeCamp - Guia de Frameworks</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.smashingmagazine.com/2022/02/frontend-frameworks-guide/" target="_blank">Smashing Magazine - Guia de Frameworks</a></li>
                        </ul>
                    </div>,

                    children: [
                        {
                            id: '1-4-1',
                            title: 'Baseado em Javascript',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Frameworks baseados em JavaScript puro incluem React, Vue.js e outros que podem ser utilizados sem a necessidade de TypeScript. São amplamente adotados e possuem comunidades ativas.</p>
                                    <p className='font-bold text-red-500'>Aqui depende de qual o mercado mais busca na atualidade (recomendação: React).</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://reactjs.org/" target="_blank">React - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://vuejs.org/" target="_blank">Vue.js - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://svelte.dev/" target="_blank">Svelte - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" target="_blank">MDN - Frameworks JavaScript</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        },
                        {
                            id: '1-4-2',
                            title: 'Typescript',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>TypeScript é um superset de JavaScript que adiciona tipagem estática. Frameworks como Angular são construídos com TypeScript por padrão, enquanto React e Vue também podem ser utilizados com TypeScript para melhorar a robustez do código.</p>

                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.typescriptlang.org/docs/" target="_blank">TypeScript - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://angular.io/docs" target="_blank">Angular - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.reactjs.org/docs/static-type-checking.html" target="_blank">React com TypeScript</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.nextjs.org" target="_blank">Next.js (React com TypeScript)</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        },
                        {
                            id: '1-4-3',
                            title: 'Estilização',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Estilização no front-end envolve o uso de CSS e suas extensões para criar interfaces atraentes e responsivas. Frameworks como Bootstrap, Tailwind CSS e bibliotecas como Styled Components facilitam o desenvolvimento visual.</p>
                                    <p className='font-bold text-red-500'>Aqui depende de qual o mercado mais busca na atualidade (recomendação: Tailwind).</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS - Documentação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://getbootstrap.com/docs/" target="_blank">Bootstrap - Documentação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://styled-components.com/docs" target="_blank">Styled Components</a></li>
                                        <li><a className="text-blue-600 underline" href="https://sass-lang.com/documentation/" target="_blank">SASS/SCSS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">MDN - CSS Avançado</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        },
                    ],
                },
                {
                    id: '1-5',
                    title: 'Frameworks para o Back-End',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Frameworks back-end facilitam o desenvolvimento do lado do servidor, fornecendo estruturas organizadas, roteamento, integração com banco de dados e outras funcionalidades essenciais. A escolha do framework geralmente depende da linguagem de programação utilizada.</p>
                            <p className='font-bold text-red-500'>Aqui você deve escolher apenas uma das duas dependendo de qual foi a linguagem do back-end escolhido.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://expressjs.com/" target="_blank">Express.js (Node.js)</a></li>
                                <li><a className="text-blue-600 underline" href="https://laravel.com/docs" target="_blank">Laravel (PHP)</a></li>
                                <li><a className="text-blue-600 underline" href="https://spring.io/" target="_blank">Spring Boot (Java)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.djangoproject.com/" target="_blank">Django (Python)</a></li>
                            </ul>
                        </div>,

                    children: [
                        {
                            id: '1-5-1',
                            title: 'Baseado em Javascript',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Frameworks back-end baseados em JavaScript utilizam Node.js como ambiente de execução. São ideais para desenvolvimento full-stack utilizando a mesma linguagem no front-end e back-end.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://expressjs.com/pt-br/" target="_blank">Express.js - Documentação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://nestjs.com/" target="_blank">NestJS (TypeScript)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://adonisjs.com/" target="_blank">AdonisJS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://koajs.com/" target="_blank">Koa.js</a></li>
                                        <li><a className="text-blue-600 underline" href="https://fastify.io/" target="_blank">Fastify</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        },
                        {
                            id: '1-5-2',
                            title: 'Baseado em PHP',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Frameworks PHP são soluções robustas para desenvolvimento web server-side, oferecendo recursos como ORM, sistemas de templates, segurança e gerenciamento de rotas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://laravel.com/docs" target="_blank">Laravel - Documentação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://symfony.com/doc/current/index.html" target="_blank">Symfony</a></li>
                                        <li><a className="text-blue-600 underline" href="https://codeigniter.com/user_guide/index.html" target="_blank">CodeIgniter</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.yiiframework.com/doc/guide/2.0/en" target="_blank">Yii Framework</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.slimframework.com/docs/" target="_blank">Slim Framework</a></li>
                                    </ul>
                                </div>,

                            children: [],
                        },
                    ],
                },
                {
                    id: '1-6',
                    title: 'Autenticação',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Autenticação é o processo de verificar a identidade de um usuário em sistemas digitais. Existem várias estratégias, desde login tradicional com senha até métodos modernos como OAuth, JWT e autenticação biométrica.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://jwt.io/introduction" target="_blank">JSON Web Tokens (JWT)</a></li>
                                <li><a className="text-blue-600 underline" href="https://oauth.net/2/" target="_blank">OAuth 2.0</a></li>
                                <li><a className="text-blue-600 underline" href="https://developers.google.com/identity/sign-in/web/sign-in" target="_blank">Google Authentication</a></li>
                                <li><a className="text-blue-600 underline" href="https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps" target="_blank">GitHub OAuth</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.passportjs.org/" target="_blank">Passport.js (Node.js)</a></li>
                            </ul>
                        </div>,

                    children: [],
                },
                {
                    id: '1-7',
                    title: 'Teste Unitário e Automatizado',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Testes são essenciais para garantir a qualidade do software. Testes unitários verificam componentes individuais, enquanto testes automatizados executam casos de teste predefinidos sem intervenção manual, melhorando a confiabilidade do código.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://jestjs.io/pt-BR/" target="_blank">Jest (JavaScript)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.cypress.io/" target="_blank">Cypress (E2E)</a></li>
                                <li><a className="text-blue-600 underline" href="https://phpunit.de/" target="_blank">PHPUnit (PHP)</a></li>
                                <li><a className="text-blue-600 underline" href="https://docs.pytest.org/" target="_blank">PyTest (Python)</a></li>
                                <li><a className="text-blue-600 underline" href="https://testing-library.com/" target="_blank">Testing Library (React)</a></li>
                            </ul>
                        </div>,

                    children: [],
                },
                {
                    id: '1-8',
                    title: 'Serviços AWS',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Amazon Web Services (AWS) oferece uma vasta gama de serviços em nuvem para desenvolvimento, hospedagem, armazenamento, gerenciamento de bancos de dados, análises e muito mais. É uma das plataformas de cloud computing mais utilizadas.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://aws.amazon.com/pt/getting-started/" target="_blank">AWS - Primeiros Passos</a></li>
                                <li><a className="text-blue-600 underline" href="https://aws.amazon.com/pt/ec2/" target="_blank">EC2 (Elastic Compute Cloud)</a></li>
                                <li><a className="text-blue-600 underline" href="https://aws.amazon.com/pt/s3/" target="_blank">S3 (Simple Storage Service)</a></li>
                                <li><a className="text-blue-600 underline" href="https://aws.amazon.com/pt/lambda/" target="_blank">Lambda (Serverless)</a></li>
                                <li><a className="text-blue-600 underline" href="https://aws.amazon.com/pt/rds/" target="_blank">RDS (Relational Database Service)</a></li>
                                <li><a className="text-blue-600 underline" href="https://aws.amazon.com/pt/cloudfront/" target="_blank">CloudFront (CDN)</a></li>
                            </ul>
                        </div>,

                    children: [],
                },
            ]
        }


    );
}