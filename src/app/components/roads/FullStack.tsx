export default function IA() {
    return (
        {
            id: '1',
            title: 'FullStack',

            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>O desenvolvimento <strong>FullStack</strong> abrange tanto o <strong>front-end (interface do usuário)</strong> quanto o <strong>back-end (servidor, banco de dados, lógica de negócio)</strong>. Um desenvolvedor FullStack é capaz de construir uma aplicação completa, do banco de dados até a interface.</p>

                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=7t2alSnE2-I" target="_blank">FullStack Development Roadmap 2024</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=3sKdYYpx5I0" target="_blank">Como se tornar FullStack Developer</a></li>
                    </ul>

                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/learn" target="_blank">FreeCodeCamp - FullStack Developer Path</a></li>
                        <li><a className="text-blue-600 underline" href="https://roadmap.sh/full-stack" target="_blank">Roadmap.sh - FullStack</a></li>
                        <li><a className="text-blue-600 underline" href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a></li>
                    </ul>

                    <p className="font-semibold text-purple-800">💡 Dica: Comece pelo front-end para ver resultados visuais rápidos, depois avance para back-end.</p>
                </div>
            ),

            children: [
                {
                    id: '1-1',
                    title: '🟢 Front-End',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                <strong>Front-End</strong> é a parte visual de uma aplicação. Envolve tudo que o usuário vê e interage. É composto por <strong>HTML, CSS e JavaScript</strong>, além de frameworks e bibliotecas modernas.
                            </p>
                            <p className='font-bold text-red-500'>É necessário estudar os 3 HTML, CSS e JavaScript</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '1-1-1',
                            title: 'HTML',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>HTML (HyperText Markup Language)</strong> é a linguagem de marcação utilizada para estruturar conteúdos na web. Define a <strong>estrutura semântica</strong> das páginas web.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://youtu.be/Ejkb_YpuHWs?si=FAk-H9gH27aiBplS" target="_blank">Curso em Vídeo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=pQN-pnXPaVg" target="_blank">HTML Full Course for Beginners</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.w3schools.com/html/" target="_blank">W3Schools - HTML</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">MDN - HTML</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://html.com/" target="_blank">HTML.com - Guia Completo</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Aprenda HTML semântico para melhor acessibilidade e SEO.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-1-2',
                            title: 'CSS',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>CSS (Cascading Style Sheets)</strong> é a linguagem usada para <strong>estilizar elementos HTML</strong>, como cores, layouts, fontes, animações e responsividade. Controla a <strong>apresentação visual</strong> das páginas web.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=1Rs2ND1ryYc" target="_blank">CSS Full Course for Beginners</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=wYWf2m_yzBQ" target="_blank">CSS Grid e Flexbox</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">MDN - CSS</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://css-tricks.com/guides/" target="_blank">CSS Tricks - Guias</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.w3schools.com/css/" target="_blank">W3Schools - CSS</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Domine Flexbox e Grid para criar layouts responsivos facilmente.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-1-3',
                            title: 'Javascript',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>JavaScript</strong> é uma linguagem de programação que permite <strong>adicionar interatividade a páginas web</strong>. É essencial no desenvolvimento Front-End para criar <strong>experiências dinâmicas e responsivas</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=PkZNo7MFNFg" target="_blank">JavaScript Full Course for Beginners</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=hdI2bqOjy3c" target="_blank">JavaScript Crash Course</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://javascript.info/" target="_blank">JavaScript.info</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">MDN - JavaScript</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.w3schools.com/js/" target="_blank">W3Schools - JavaScript</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Pratique manipulação do DOM e eventos para criar interatividade.</p>
                                </div>
                            ),
                            children: [],
                        },
                    ],
                },
                {
                    id: '1-2',
                    title: '🟡 Back-End',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                <strong>Back-End</strong> é a parte do desenvolvimento que lida com a <strong>lógica do servidor, banco de dados e processamento de dados</strong>. É responsável por garantir que tudo funcione corretamente nos bastidores da aplicação.
                            </p>
                            <p className='font-bold text-red-500'>Inicialmente é necessário escolher um dos 2: NodeJs ou PHP</p>
                            <p className='font-bold text-red-500'>Em seguida API e Banco de Dados</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '1-2-1',
                            title: 'NodeJs',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Node.js</strong> é um ambiente de execução JavaScript do lado do servidor, construído sobre o motor V8 do Chrome. Permite desenvolver <strong>aplicações escaláveis de rede e servidores web</strong> usando JavaScript.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=TlB_eWDSMt4" target="_blank">Node.js Crash Course</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=zb3Qk8SG5Ms" target="_blank">Node.js Tutorial for Beginners</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://nodejs.org/en/learn" target="_blank">Documentação Oficial do Node.js</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank">Udemy - Node.js Complete Guide</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://nodeschool.io/" target="_blank">Node School</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Use Express.js como framework para criar APIs rapidamente.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-2-2',
                            title: 'PHP',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>PHP</strong> é uma linguagem de programação voltada para o <strong>desenvolvimento web do lado do servidor</strong>. É amplamente utilizada para criar sites dinâmicos e aplicações web, sendo compatível com a maioria dos servidores web e sistemas de banco de dados.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=OK_JCtrrv-c" target="_blank">PHP Programming Language Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=BUCiSSyIGGU" target="_blank">PHP Crash Course</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.php.net/manual/pt_BR/" target="_blank">Manual Oficial do PHP</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://phptherightway.com/" target="_blank">PHP: The Right Way</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://laracasts.com/series/php-for-beginners" target="_blank">Laracasts - PHP para Iniciantes</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Aprenda Laravel como framework principal para desenvolvimento profissional.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-2-4',
                            title: 'API Restful',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>APIs RESTful</strong> são interfaces de programação que seguem os princípios da arquitetura REST, utilizando <strong>métodos HTTP para operações CRUD</strong> (Create, Read, Update, Delete). São fundamentais para a <strong>comunicação entre front-end e back-end</strong> em aplicações modernas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=SLwpqD8n3d0" target="_blank">RESTful API com Node.js e Express</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Q-BpqyOT3a8" target="_blank">REST API Concepts and Examples</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://restfulapi.net/" target="_blank">RESTful API Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://swagger.io/resources/articles/best-practices-in-api-design/" target="_blank">Melhores Práticas para Design de API</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.postman.com/api-documentation-tool/" target="_blank">Postman - Teste de APIs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Use Postman para testar suas APIs durante o desenvolvimento.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-2-3',
                            title: 'Banco de Dados',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Bancos de dados</strong> são sistemas organizados para <strong>armazenar, gerenciar e recuperar informações</strong> de forma eficiente. Existem bancos relacionais (SQL) como MySQL e PostgreSQL, e não-relacionais (NoSQL) como MongoDB e Redis.
                                    </p>
                                    <p className='font-bold text-red-500'>Estude inicialmente para banco relacional o MySQL e para não-relacional MongoDB</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HXV3zeQKqGY" target="_blank">SQL Tutorial for Beginners</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=-bt_y4Loofg" target="_blank">MongoDB Crash Course</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.w3schools.com/sql/" target="_blank">W3Schools - SQL Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://university.mongodb.com/" target="_blank">MongoDB University</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.postgresqltutorial.com/" target="_blank">PostgreSQL Tutorial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://dev.mysql.com/doc/refman/8.0/en/" target="_blank">MySQL Documentation</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Comece com SQL para entender conceitos fundamentais de bancos de dados.</p>
                                </div>
                            ),
                            children: [],
                        }
                    ],
                },
                {
                    id: '1-3',
                    title: '🟠 Versionamento',
                    content: (
                        <div className="space-y-2 text-sm text-zinc-100">
                            <p>
                                <strong>Versionamento</strong> é o processo de controle de versões de código-fonte durante o desenvolvimento de software. Sistemas como <strong>Git</strong> permitem que múltiplos desenvolvedores trabalhem em paralelo, mantendo um histórico completo das alterações.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=USjZcfj8yxE" target="_blank">Git Tutorial for Beginners</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=3fUbBnN_H2c" target="_blank">Git e GitHub Crash Course</a></li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://git-scm.com/book/pt-br/v2" target="_blank">Git Book</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian Git Tutorials</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching (Interativo)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://docs.github.com/pt" target="_blank">Documentação do GitHub</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="font-semibold text-zinc-100">💡 Dica: Pratique comandos básicos como commit, push, pull e branch diariamente.</p>
                        </div>
                    ),
                    children: [],
                },
                {
                    id: '1-4',
                    title: '🔵 Frameworks Front-End',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                <strong>Frameworks Front-End</strong> são conjuntos de ferramentas que facilitam o desenvolvimento de interfaces de usuário, oferecendo <strong>componentes reutilizáveis e estrutura organizada</strong>. Exemplos incluem React, Angular e Vue.js.
                            </p>
                            <p className='font-bold text-red-500'>Deve escolher um de cada para prosseguir no mercado.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '1-4-1',
                            title: 'Baseado em Js',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Frameworks baseados em JavaScript</strong> puro incluem React, Vue.js e outros que podem ser utilizados sem a necessidade de TypeScript. São <strong>amplamente adotados e possuem comunidades ativas</strong>.
                                    </p>
                                    <p className='font-bold text-red-500'>Aqui depende de qual o mercado mais busca na atualidade (recomendação: React).</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Ke90Tje7VS0" target="_blank">React.js Full Course</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=4deVCNJq3qc" target="_blank">Vue.js Crash Course</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://reactjs.org/" target="_blank">React - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://vuejs.org/" target="_blank">Vue.js - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://svelte.dev/" target="_blank">Svelte - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" target="_blank">MDN - Frameworks JavaScript</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: React tem mais oportunidades de emprego, Vue é mais fácil de aprender.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-4-2',
                            title: 'Typescript',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>TypeScript</strong> é um superset de JavaScript que adiciona <strong>tipagem estática</strong>. Frameworks como Angular são construídos com TypeScript por padrão, enquanto React e Vue também podem ser utilizados com TypeScript para <strong>melhorar a robustez do código</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=WBPrJSw7yQA" target="_blank">TypeScript Crash Course</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=BwuLxPH8IDs" target="_blank">React with TypeScript</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.typescriptlang.org/docs/" target="_blank">TypeScript - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://angular.io/docs" target="_blank">Angular - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.reactjs.org/docs/static-type-checking.html" target="_blank">React com TypeScript</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.nextjs.org" target="_blank">Next.js (React com TypeScript)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Use TypeScript em projetos grandes para evitar erros em tempo de execução.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-4-3',
                            title: 'Estilização',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Estilização no front-end</strong> envolve o uso de CSS e suas extensões para criar <strong>interfaces atraentes e responsivas</strong>. Frameworks como Bootstrap, Tailwind CSS e bibliotecas como Styled Components facilitam o desenvolvimento visual.
                                    </p>
                                    <p className='font-bold text-red-500'>Aqui depende de qual o mercado mais busca na atualidade (recomendação: Tailwind).</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=UBOj6rqRUME" target="_blank">Tailwind CSS Crash Course</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=O_9u1P5YjVc&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR" target="_blank">Bootstrap 5 Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS - Documentação</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://getbootstrap.com/docs/" target="_blank">Bootstrap - Documentação</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://styled-components.com/docs" target="_blank">Styled Components</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://sass-lang.com/documentation/" target="_blank">SASS/SCSS</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">MDN - CSS Avançado</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Tailwind é mais flexível, Bootstrap é mais rápido para protótipos.</p>
                                </div>
                            ),
                            children: [],
                        },
                    ],
                },
                {
                    id: '1-5',
                    title: '🟣 Frameworks Back-End',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                <strong>Frameworks back-end</strong> facilitam o desenvolvimento do lado do servidor, fornecendo <strong>estruturas organizadas, roteamento, integração com banco de dados</strong> e outras funcionalidades essenciais. A escolha do framework geralmente depende da linguagem de programação utilizada.
                            </p>
                            <p className='font-bold text-red-500'>Aqui você deve escolher apenas uma das duas dependendo de qual foi a linguagem do back-end escolhido.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '1-5-1',
                            title: 'Baseado em Js',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Frameworks back-end baseados em JavaScript</strong> utilizam Node.js como ambiente de execução. São ideais para <strong>desenvolvimento full-stack utilizando a mesma linguagem</strong> no front-end e back-end.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=SccSCuHhOw0" target="_blank">Express.js Crash Course</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ju983eSUw-8&list=PLR8JXremim5AdjhggWtqzgSXPYZ_V9x2b" target="_blank">NestJS Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://expressjs.com/pt-br/" target="_blank">Express.js - Documentação</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://nestjs.com/" target="_blank">NestJS (TypeScript)</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://adonisjs.com/" target="_blank">AdonisJS</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://koajs.com/" target="_blank">Koa.js</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://fastify.io/" target="_blank">Fastify</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Express.js é o mais simples, NestJS é mais estruturado para projetos complexos.</p>
                                </div>
                            ),
                            children: [],
                        },
                        {
                            id: '1-5-2',
                            title: 'Baseado em PHP',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Frameworks PHP</strong> são soluções robustas para desenvolvimento web server-side, oferecendo recursos como <strong>ORM, sistemas de templates, segurança e gerenciamento de rotas</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ImtZ5yENzgE" target="_blank">Laravel PHP Framework</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Bo0guUbL5uo" target="_blank">Symfony Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://laravel.com/docs" target="_blank">Laravel - Documentação</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://symfony.com/doc/current/index.html" target="_blank">Symfony</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://codeigniter.com/user_guide/index.html" target="_blank">CodeIgniter</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.yiiframework.com/doc/guide/2.0/en" target="_blank">Yii Framework</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-zinc-100">💡 Dica: Laravel é o framework PHP mais popular e completo do mercado.</p>
                                </div>
                            ),
                            children: [],
                        },
                    ],
                },
                {
                    id: '1-6',
                    title: '🔴 Autenticação',
                    content: (
                        <div className="space-y-2 text-sm text-zinc-100">
                            <p>
                                <strong>Autenticação</strong> é o processo de verificar a identidade de um usuário em sistemas digitais. Existem várias estratégias, desde <strong>login tradicional com senha até métodos modernos como OAuth, JWT e autenticação biométrica</strong>.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=UBUNrFtufWo" target="_blank">JWT Authentication Tutorial</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=996OiexHze0" target="_blank">OAuth 2.0 and OpenID Connect</a></li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://jwt.io/introduction" target="_blank">JSON Web Tokens (JWT)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://oauth.net/2/" target="_blank">OAuth 2.0</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://developers.google.com/identity/sign-in/web/sign-in" target="_blank">Google Authentication</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps" target="_blank">GitHub OAuth</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.passportjs.org/" target="_blank">Passport.js (Node.js)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="font-semibold text-zinc-100">💡 Dica: Comece com JWT para autenticação simples, depois avance para OAuth.</p>
                        </div>
                    ),
                    children: [],
                },
                {
                    id: '1-7',
                    title: '⚫ Tipos de Testes',
                    content: (
                        <div className="space-y-2 text-sm text-zinc-100">
                            <p>
                                <strong>Testes</strong> são essenciais para garantir a qualidade do software. <strong>Testes unitários</strong> verificam componentes individuais, enquanto <strong>testes automatizados</strong> executam casos de teste predefinidos sem intervenção manual, melhorando a confiabilidade do código.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=CZDMt9MkX3w" target="_blank">Jest Testing Tutorial</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=7N63cMKosIE" target="_blank">Cypress End-to-End Testing</a></li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://jestjs.io/pt-BR/" target="_blank">Jest (JavaScript)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.cypress.io/" target="_blank">Cypress (E2E)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://phpunit.de/" target="_blank">PHPUnit (PHP)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://docs.pytest.org/" target="_blank">PyTest (Python)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://testing-library.com/" target="_blank">Testing Library (React)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="font-semibold text-zinc-100">💡 Dica: Escreva testes para funcionalidades críticas primeiro.</p>
                        </div>
                    ),
                    children: [],
                },
                {
                    id: '1-8',
                    title: '🌐 Serviços AWS',
                    content: (
                        <div className="space-y-2 text-sm text-zinc-100">
                            <p>
                                <strong>Amazon Web Services (AWS)</strong> oferece uma vasta gama de serviços em nuvem para <strong>desenvolvimento, hospedagem, armazenamento, gerenciamento de bancos de dados, análises</strong> e muito mais. É uma das plataformas de cloud computing mais utilizadas.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ubCNZRNjhyo" target="_blank">AWS Tutorial for Beginners</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Ia-UEYYR44s" target="_blank">AWS EC2 Tutorial</a></li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                    <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://aws.amazon.com/pt/getting-started/" target="_blank">AWS - Primeiros Passos</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://aws.amazon.com/pt/ec2/" target="_blank">EC2 (Elastic Compute Cloud)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://aws.amazon.com/pt/s3/" target="_blank">S3 (Simple Storage Service)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://aws.amazon.com/pt/lambda/" target="_blank">Lambda (Serverless)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://aws.amazon.com/pt/rds/" target="_blank">RDS (Relational Database Service)</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://aws.amazon.com/pt/cloudfront/" target="_blank">CloudFront (CDN)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="font-semibold text-zinc-100">💡 Dica: Comece com EC2 para servidores e S3 para armazenamento.</p>
                        </div>
                    ),
                    children: [],
                },
            ]
        }
    );
}
