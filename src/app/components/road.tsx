"Use Client"
import { JSX, useEffect, useState } from 'react';
import { userDataStore } from '../utils/indexedDB';

const roadmapData = [
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
    ],
  },
  {
    id: '2',
    title: 'GameDev',

    content:
      <div className="space-y-2 text-sm text-gray-700">
        <p>Desenvolvimento de jogos (GameDev) é a área que combina programação, arte, design e narrativa para criar experiências interativas. Envolve conhecimento de engines de jogos, lógica de gameplay, física, animação e muito mais.</p>
        <ul className="list-disc list-inside">
          <li><a className="text-blue-600 underline" href="https://learn.unity.com/" target="_blank">Unity Learn</a></li>
          <li><a className="text-blue-600 underline" href="https://www.gamedev.net/" target="_blank">GameDev.net</a></li>
          <li><a className="text-blue-600 underline" href="https://www.gamasutra.com/" target="_blank">Gamasutra</a></li>
          <li><a className="text-blue-600 underline" href="https://docs.unrealengine.com/" target="_blank">Unreal Engine Docs</a></li>
        </ul>
      </div>,

    children: [
      {
        id: '2-1',
        title: 'Fundamentos',

        content: <div className="space-y-2 text-sm text-gray-700">
          <p>Os fundamentos para o desenvolvimento de jogos incluem conceitos essenciais de programação, matemática e design que formam a base para criar experiências interativas. Dominar esses conceitos é crucial antes de avançar para o desenvolvimento prático.</p>
          <ul className="list-disc list-inside">
            <li><a className="text-blue-600 underline" href="https://www.edx.org/course/cs50s-introduction-to-game-development" target="_blank">CS50 - Introdução ao Desenvolvimento de Jogos</a></li>
            <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLhQjrBD2T382mHvZB-hSYWvoLzYQzT_Pb" target="_blank">CS50 Game Dev - Harvard</a></li>
            <li><a className="text-blue-600 underline" href="https://www.udemy.com/course/fundamentos-de-programacao-para-jogos/" target="_blank">Fundamentos de Programação para Jogos</a></li>
          </ul>
        </div>,

        children: [
          {
            id: '2-1-1',
            title: 'Lógica de Programação',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>A lógica de programação é a base para criar algoritmos e solucionar problemas computacionais. Para desenvolver jogos, é necessário dominar conceitos como variáveis, estruturas condicionais, loops, funções e manipulação de dados.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target="_blank">Curso em Vídeo - Algoritmos</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.codecademy.com/learn/learn-how-to-code" target="_blank">Codecademy - Learn How to Code</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">FreeCodeCamp - Algoritmos e Estruturas de Dados</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.hackerrank.com/domains/algorithms" target="_blank">HackerRank - Desafios de Algoritmos</a></li>
                </ul>
              </div>
            ,

            children: []
          },
          {
            id: '2-1-2',
            title: 'POO (Programação Orientada a Objetos)',

            content: <div className="space-y-2 text-sm text-gray-700">
              <p>A Programação Orientada a Objetos (POO) é paradigma fundamental para o desenvolvimento de jogos. Conceitos como classes, objetos, herança, polimorfismo e encapsulamento são amplamente utilizados em engines como Unity e Unreal para criar componentes reutilizáveis e organizar o código de forma eficiente.</p>
              <ul className="list-disc list-inside">
                <li><a className="text-blue-600 underline" href="https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos" target="_blank">Alura - POO</a></li>
                <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/interfaces-scriptable-objects" target="_blank">Unity Learn - POO em C#</a></li>
                <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/concepts/object-oriented-programming" target="_blank">Microsoft - Conceitos de POO em C#</a></li>
                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/orientacao-a-objetos-com-java" target="_blank">Coursera - Orientação a Objetos</a></li>
              </ul>
            </div>
            ,

            children: []
          },
          {
            id: '2-1-3',
            title: 'Matemática Básica para Jogos',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>A matemática é essencial para o desenvolvimento de jogos, sendo utilizada para cálculos de física, movimento de objetos, detecção de colisões, sistemas de partículas e gráficos. Conceitos importantes incluem vetores, matrizes, trigonometria, álgebra linear e interpolação.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Khan Academy - Álgebra Linear</a></li>
                  <li><a className="text-blue-600 underline" href="https://catlikecoding.com/unity/tutorials/rendering/part-1/" target="_blank">Catlike Coding - Matemática para Shaders</a></li>
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/VectorCookbook.html" target="_blank">Unity - Guia de Vetores</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My" target="_blank">Freya Holmér - Matemática para GameDev</a></li>
                </ul>
              </div>
            ,
            children: []
          },
        ],
      },
      {
        id: '2-2',
        title: 'Ferramentas',

        content:
          <div className="space-y-2 text-sm text-gray-700">
            <p>O desenvolvimento de jogos requer o uso de diversas ferramentas especializadas, incluindo engines de jogos, IDEs para programação, ferramentas de controle de versão e softwares para criação de assets. Conhecer e dominar estas ferramentas aumenta significativamente a produtividade e a qualidade do projeto.</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-600 underline" href="https://unity.com/pt/products/unity-platform" target="_blank">Unity - Engine de Jogos</a></li>
              <li><a className="text-blue-600 underline" href="https://visualstudio.microsoft.com/pt-br/" target="_blank">Visual Studio - IDE</a></li>
              <li><a className="text-blue-600 underline" href="https://github.com/" target="_blank">GitHub - Controle de Versão</a></li>
              <li><a className="text-blue-600 underline" href="https://www.blender.org/" target="_blank">Blender - Modelagem 3D</a></li>
            </ul>
          </div>
        ,

        children: [
          {
            id: '2-2-1',
            title: 'Unity',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Unity é uma das engines de jogos mais populares do mundo, utilizada para criar jogos 2D, 3D, realidade virtual e aumentada. Com interface visual e programação em C#, oferece recursos como física, animação, áudio, IA e networking, além de uma Asset Store com milhares de recursos prontos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/pathway/unity-essentials" target="_blank">Unity Learn - Unity Essentials</a></li>
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/index.html" target="_blank">Manual Oficial da Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/Brackeys/playlists" target="_blank">Brackeys - Tutoriais de Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://assetstore.unity.com/" target="_blank">Unity Asset Store</a></li>
                </ul>
              </div>
            ,
            children: []
          },
          {
            id: '2-2-2',
            title: 'Visual Studio / VS Code',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Visual Studio e VS Code são poderosos ambientes de desenvolvimento integrados (IDEs) para programação. O Visual Studio oferece integração completa com a Unity, incluindo debug e autocompletar, enquanto o VS Code é uma alternativa mais leve e customizável com extensões para desenvolvimento de jogos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://visualstudio.microsoft.com/pt-br/vs/unity-tools/" target="_blank">Visual Studio - Ferramentas para Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://code.visualstudio.com/docs/other/unity" target="_blank">VS Code - Documentação para Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit" target="_blank">C# Dev Kit para VS Code</a></li>
                  <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/pt-br/visualstudio/get-started/csharp/?view=vs-2022" target="_blank">Microsoft - Primeiros Passos com C#</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-2-3',
            title: 'Git e GitHub',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Git é um sistema de controle de versão essencial para projetos de desenvolvimento de jogos, permitindo rastrear mudanças, trabalhar em equipe e gerenciar diferentes versões do código. GitHub é uma plataforma que hospeda repositórios Git, facilitando a colaboração, revisão de código e integração contínua.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://git-scm.com/book/pt-br/v2" target="_blank">Pro Git Book</a></li>
                  <li><a className="text-blue-600 underline" href="https://docs.github.com/pt/get-started" target="_blank">GitHub - Primeiros Passos</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian - Tutoriais de Git</a></li>
                  <li><a className="text-blue-600 underline" href="https://unity.github.com/" target="_blank">GitHub for Unity - Extensão</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.gitkraken.com/" target="_blank">GitKraken - Cliente Git Visual</a></li>
                </ul>
              </div>
            ,
            children: []
          },
        ],
      },
      {
        id: '2-3',
        title: 'Programação com Unity',

        content:
          <div className="space-y-2 text-sm text-gray-700">
            <p>A programação na Unity é realizada principalmente com C#, uma linguagem orientada a objetos poderosa e versátil. Entender como utilizar os componentes e APIs da Unity é essencial para implementar mecânicas de jogo, interações, sistemas de jogo e comportamentos de objetos.</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/ScriptReference/" target="_blank">Unity - Referência de Script</a></li>
              <li><a className="text-blue-600 underline" href="https://learn.unity.com/course/beginner-scripting" target="_blank">Unity Learn - Scripting para Iniciantes</a></li>
              <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/CodeMonkeyUnity/videos" target="_blank">Code Monkey - Tutoriais de C# com Unity</a></li>
              <li><a className="text-blue-600 underline" href="https://unity.com/how-to/learning-c-sharp-unity-beginners" target="_blank">Unity - Aprendendo C# para Iniciantes</a></li>
            </ul>
          </div>
        ,

        children: [
          {
            id: '2-3-1',
            title: 'C# com Unity',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>C# é a linguagem de programação principal utilizada na Unity. Compreender os fundamentos de C# e como aplicá-los no contexto da Unity é crucial para o desenvolvimento de jogos, incluindo classes como MonoBehaviour, uso de Coroutines, eventos, delegates e gerenciamento de memória.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/" target="_blank">Microsoft - Tour pelo C#</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/scritps-as-behaviour-components" target="_blank">Unity - Scripts como Componentes</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLzDRvYVwl53t2GGC4rV_AmH7vSvSqjVmz" target="_blank">Jason Weimann - C# para Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.gamedev.tv/p/complete-c-unity-game-developer-2d" target="_blank">GameDev.tv - C# e Unity para Desenvolvimento de Jogos</a></li>
                </ul>
              </div>
            ,

            children: []
          },
          {
            id: '2-3-2',
            title: 'Input System',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>O Input System da Unity é uma sistema moderno para capturar entradas do usuário (teclado, mouse, gamepad, touch) de forma flexível e compatível com múltiplas plataformas. Permite criar controles responsivos, remapeáveis e adaptáveis a diferentes dispositivos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/index.html" target="_blank">Unity - Manual do Input System</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/working-with-the-new-input-system" target="_blank">Unity Learn - Trabalhando com o Novo Input System</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Pzd8NhcRzVo" target="_blank">Brackeys - Input System Tutorial</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/introducing-the-new-input-system" target="_blank">Unity Blog - Introdução ao Novo Input System</a></li>
                </ul>
              </div>
            ,

            children: []
          },
          {
            id: '2-3-3',
            title: 'Physics & Colliders',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>O sistema de física da Unity permite simular interações físicas realistas em jogos, incluindo gravidade, colisões e forças. Colliders definem a forma para detecção de colisão, enquanto Rigidbodies controlam como os objetos reagem às forças físicas, permitindo criar interações complexas e realistas.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/PhysicsSection.html" target="_blank">Unity - Manual de Física</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/physics-components" target="_blank">Unity Learn - Componentes de Física</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.raywenderlich.com/206-introduction-to-unity-physics" target="_blank">RayWenderlich - Introdução à Física na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=b7C1V8FL6SU" target="_blank">Game Dev Guide - Física 2D na Unity</a></li>
                </ul>
              </div>
            ,

            children: []
          },
          {
            id: '2-3-4',
            title: 'Instanciação e Prefabs',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Prefabs são modelos reutilizáveis de objetos de jogo completos que podem ser instanciados múltiplas vezes. A instanciação permite criar cópias desses prefabs durante o jogo, sendo essencial para sistemas de spawn de inimigos, projéteis, efeitos e outros elementos dinâmicos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/Prefabs.html" target="_blank">Unity - Manual de Prefabs</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/introduction-to-prefabs" target="_blank">Unity Learn - Introdução aos Prefabs</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=H1OkG3a1w-o" target="_blank">Brackeys - Sistema de Spawn com Prefabs</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/how-to-build-a-simple-spawner-with-object-pooling-in-unity" target="_blank">Unity Blog - Object Pooling com Prefabs</a></li>
                </ul>
              </div>
            ,

            children: []
          },
          {
            id: '2-3-5',
            title: 'Animações com Animator',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>O Animator da Unity é um sistema poderoso para criar e controlar animações em jogos. Com sua máquina de estados (State Machine), permite definir transições entre animações, parâmetros de controle e lógica para criar movimentos fluidos e responsivos para personagens e objetos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/AnimationSection.html" target="_blank">Unity - Manual de Animação</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/controlling-animation" target="_blank">Unity Learn - Controlando Animações</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Brackeys - Animação 2D na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/mecanim-animation-debugging" target="_blank">Unity Blog - Debug de Animações</a></li>
                </ul>
              </div>
            ,

            children: []
          },
        ],
      },
      {
        id: '2-4',
        title: 'Design de Jogo',

        content:
          <div className="space-y-2 text-sm text-gray-700">
            <p>Design de jogo é a disciplina de criar regras, mecânicas, narrativas e experiências que tornam um jogo divertido e envolvente. Envolve a concepção de sistemas de gameplay, balanceamento, level design, feedback ao jogador e fluxo de jogo para criar experiências significativas.</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-600 underline" href="https://www.gamasutra.com/view/feature/131474/the_designers_notebook_.php" target="_blank">Gamasutra - Designer's Notebook</a></li>
              <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/game-design" target="_blank">Coursera - Introdução ao Design de Jogos</a></li>
              <li><a className="text-blue-600 underline" href="https://www.amazon.com.br/Art-Game-Design-Book-Lenses/dp/0123694965" target="_blank">Livro: The Art of Game Design</a></li>
              <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/GameMakersToolkit/videos" target="_blank">Game Maker's Toolkit - Análises de Design</a></li>
            </ul>
          </div>
        ,

        children: [
          {
            id: '2-4-1', title: 'Game Loop',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Game Loop é o ciclo fundamental que executa continuamente durante um jogo, processando inputs, atualizando o estado do jogo e renderizando resultados. Na Unity, é implementado através dos métodos Update, FixedUpdate e LateUpdate, cada um com propósitos específicos no ciclo de execução.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ExecutionOrder.html" target="_blank">Unity - Ordem de Execução de Eventos</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=IFayQioG71A" target="_blank">Brackeys - Ciclo de Vida na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://gameprogrammingpatterns.com/game-loop.html" target="_blank">Game Programming Patterns - Game Loop</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/awake-and-start" target="_blank">Unity Learn - Awake e Start</a></li>
                </ul>
              </div>
            ,

            children: []
          },
          {
            id: '2-4-2', title: 'Design de Fases',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Design de fases (Level Design) é a criação de ambientes, desafios e experiências dentro de um jogo. Envolve a estruturação de espaços, posicionamento de objetos, inimigos e coletáveis, fluxo de progressão e balanceamento de dificuldade para criar níveis memoráveis e divertidos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://www.gamasutra.com/view/feature/131767/principles_of_level_design.php" target="_blank">Gamasutra - Princípios de Level Design</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=iNEe3KhMvXM" target="_blank">GDC - Level Design Workshop</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/level-design-processes" target="_blank">Unity Learn - Processos de Level Design</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.amazon.com.br/Level-Design-Games-Creating-Compelling/dp/0134997824" target="_blank">Livro: Level Up! O Guia para Design de Grandes Jogos</a></li>
                </ul>
              </div>
            ,

            children: []
          },
          {
            id: '2-4-3', title: 'UI/UX para Jogos',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>UI/UX para jogos abrange o design de interfaces e experiências do usuário que são intuitivas, informativas e imersivas. Uma boa interface de usuário comunica informações essenciais sem interromper o fluxo de jogo, enquanto a experiência do usuário foca na sensação geral e usabilidade do sistema de menus, HUDs e feedback visual/sonoro.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/UIToolkits.html" target="_blank">Unity - UI Toolkits</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/ui-components-for-games" target="_blank">Unity Learn - Componentes de UI para Jogos</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=HwdweCX5aMI" target="_blank">Brackeys - Sistema de UI na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://gamedevelopment.tutsplus.com/tutorials/game-ui-by-example-a-crash-course-in-unity-ui--cms-22695" target="_blank">Game Development - Curso de UI na Unity</a></li>
                </ul>
              </div>
            ,

            children: []
          },
        ],
      },
      {
        id: '2-5',
        title: 'Assets e Arte',

        content:
          <div className="space-y-2 text-sm text-gray-700">
            <p>A importação de assets na Unity é fundamental para adicionar recursos ao seu projeto. A Unity suporta uma ampla variedade de formatos de arquivo, incluindo modelos 3D, texturas, áudio e animações. O Asset Store também oferece milhares de recursos gratuitos e pagos que podem ser integrados diretamente aos seus projetos.</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ImportingAssets.html" target="_blank">Unity - Manual de Importação de Assets</a></li>
              <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/asset-store-packages" target="_blank">Unity Learn - Pacotes da Asset Store</a></li>
              <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=rBHCnRXYcde" target="_blank">Game Dev Guide - Gerenciamento de Assets</a></li>
              <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/asset-bundles-and-addressables" target="_blank">Unity Blog - Asset Bundles e Addressables</a></li>
            </ul>
          </div>
        ,

        children: [
          {
            id: '2-5-1',
            title: 'Importação de Assets',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>A importação de assets na Unity é fundamental para adicionar recursos ao seu projeto. A Unity suporta uma ampla variedade de formatos de arquivo, incluindo modelos 3D, texturas, áudio e animações. O Asset Store também oferece milhares de recursos gratuitos e pagos que podem ser integrados diretamente aos seus projetos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ImportingAssets.html" target="_blank">Unity - Manual de Importação de Assets</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/asset-store-packages" target="_blank">Unity Learn - Pacotes da Asset Store</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=rBHCnRXYcde" target="_blank">Game Dev Guide - Gerenciamento de Assets</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/asset-bundles-and-addressables" target="_blank">Unity Blog - Asset Bundles e Addressables</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-5-2',
            title: 'Sprites e Animações 2D',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Sprites são imagens 2D utilizadas para representar personagens, objetos e elementos de interface em jogos. A Unity oferece ferramentas robustas para manipular sprites, criar animações 2D com sprite sheets, e configurar atlas de texturas para otimização. O sistema de animação 2D permite criar movimentos fluidos e expressivos para personagens e elementos do jogo.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/SpriteEditor.html" target="_blank">Unity - Editor de Sprites</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/introduction-to-sprite-animations" target="_blank">Unity Learn - Introdução às Animações de Sprites</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Brackeys - Animação 2D na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/2d-animation-tips-and-tricks" target="_blank">Unity Blog - Dicas de Animação 2D</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-5-3',
            title: 'Modelos e Materiais 3D',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Modelos 3D e materiais são elementos essenciais para criar ambientes, personagens e objetos tridimensionais. A Unity suporta a importação de diversos formatos 3D (.fbx, .obj, etc.) e oferece um sistema de materiais poderoso com shaders personalizáveis para criar efeitos visuais realistas ou estilizados, adaptáveis a diferentes plataformas e capacidades de hardware.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/3DAssets.html" target="_blank">Unity - Manual de Assets 3D</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/materials-standard-shader" target="_blank">Unity Learn - Materiais e Standard Shader</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=n69LxG2tzYw" target="_blank">Brackeys - Materiais e Texturas na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/custom-shader-graph-nodes" target="_blank">Unity Blog - Shader Graph para Materiais</a></li>
                </ul>
              </div>,

            children: []
          },
        ],
      },
      {
        id: '2-6',
        title: 'Polimento e Otimização',

        content:
          <div className="space-y-2 text-sm text-gray-700">
            <p>A otimização de performance é crucial para garantir que seu jogo rode suavemente em diferentes dispositivos. Isso inclui técnicas como Level of Detail (LOD), occlusion culling, otimização de draw calls, baking de iluminação, gerenciamento de memória e profiling para identificar gargalos. Jogos bem otimizados proporcionam melhor experiência e alcançam um público mais amplo.</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/OptimisingGraphicsPerformance.html" target="_blank">Unity - Otimização de Performance Gráfica</a></li>
              <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/fixing-performance-problems" target="_blank">Unity Learn - Resolvendo Problemas de Performance</a></li>
              <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_wxitgdx-UI" target="_blank">Brackeys - Dicas de Otimização na Unity</a></li>
              <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/profiler-improvements" target="_blank">Unity Blog - Melhorias no Profiler</a></li>
            </ul>
          </div>,

        children: [
          {
            id: '2-6-1',
            title: 'Otimização de Performance',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>A otimização de performance é crucial para garantir que seu jogo rode suavemente em diferentes dispositivos. Isso inclui técnicas como Level of Detail (LOD), occlusion culling, otimização de draw calls, baking de iluminação, gerenciamento de memória e profiling para identificar gargalos. Jogos bem otimizados proporcionam melhor experiência e alcançam um público mais amplo.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/OptimisingGraphicsPerformance.html" target="_blank">Unity - Otimização de Performance Gráfica</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/fixing-performance-problems" target="_blank">Unity Learn - Resolvendo Problemas de Performance</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_wxitgdx-UI" target="_blank">Brackeys - Dicas de Otimização na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/profiler-improvements" target="_blank">Unity Blog - Melhorias no Profiler</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-6-2',
            title: 'Efeitos Visuais (VFX)',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Efeitos visuais (VFX) adicionam impacto e feedback visual ao seu jogo, desde sistemas de partículas para fogo, fumaça e explosões até pós-processamento para ajustar cores, iluminação e efeitos atmosféricos. A Unity oferece ferramentas como o Sistema de Partículas, Visual Effect Graph e o pacote de pós-processamento para criar efeitos visuais impressionantes e responsivos.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ParticleSystems.html" target="_blank">Unity - Sistema de Partículas</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/introduction-to-visual-effects" target="_blank">Unity Learn - Introdução aos Efeitos Visuais</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=FEA1wTMJAR0" target="_blank">Brackeys - Efeitos de Partículas na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/advanced-visual-effects-with-urp" target="_blank">Unity Blog - VFX Avançados com URP</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-6-3',
            title: 'Áudio e Música',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Áudio é um componente vital para a imersão em jogos, abrangendo música de fundo, efeitos sonoros e diálogos. A Unity fornece um mixer de áudio completo com mixagem espacial 3D, efeitos DSP, grupos de mixagem e controle dinâmico de volume. Um bom design de áudio pode transformar a experiência do jogador, criando atmosfera e fornecendo feedback importante sobre eventos do jogo.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/AudioOverview.html" target="_blank">Unity - Visão Geral do Sistema de Áudio</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/working-with-audio" target="_blank">Unity Learn - Trabalhando com Áudio</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6OT43pvUyfY" target="_blank">Brackeys - Sistema de Áudio na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/procedural-audio-in-games" target="_blank">Unity Blog - Áudio Procedural em Jogos</a></li>
                </ul>
              </div>,

            children: []
          },
        ],
      },
      {
        id: '2-7',
        title: 'Build e Publicação',

        content:
          <div className="space-y-2 text-sm text-gray-700">
            <p>O processo de build para PC e Android na Unity envolve configurar as plataformas-alvo, otimizar assets e definir configurações específicas para cada plataforma. Para Android, são necessárias etapas adicionais como configuração do SDK, assinatura digital do APK e adaptações para diferentes tamanhos de tela e capacidades de hardware. A Unity facilita esse processo com ferramentas de build automatizadas e cross-platform.</p>
            <ul className="list-disc list-inside">
              <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/PublishingBuilds.html" target="_blank">Unity - Publicando Builds</a></li>
              <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/building-for-mobile" target="_blank">Unity Learn - Build para Mobile</a></li>
              <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4oTluGK-NFw" target="_blank">Brackeys - Build para Android</a></li>
              <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/optimizing-for-android-devices" target="_blank">Unity Blog - Otimizando para Dispositivos Android</a></li>
            </ul>
          </div>,

        children: [
          {
            id: '2-7-1',
            title: 'Build para PC / Android',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>O processo de build para PC e Android na Unity envolve configurar as plataformas-alvo, otimizar assets e definir configurações específicas para cada plataforma. Para Android, são necessárias etapas adicionais como configuração do SDK, assinatura digital do APK e adaptações para diferentes tamanhos de tela e capacidades de hardware. A Unity facilita esse processo com ferramentas de build automatizadas e cross-platform.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/PublishingBuilds.html" target="_blank">Unity - Publicando Builds</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/building-for-mobile" target="_blank">Unity Learn - Build para Mobile</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4oTluGK-NFw" target="_blank">Brackeys - Build para Android</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/optimizing-for-android-devices" target="_blank">Unity Blog - Otimizando para Dispositivos Android</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-7-2',
            title: 'Publicação na Itch.io / Play Store',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Publicar seu jogo na Itch.io ou Google Play Store envolve preparar builds finalizadas, criar páginas de loja atraentes e seguir os processos específicos de cada plataforma. A Itch.io é uma plataforma indie que oferece um processo simples e flexível, enquanto a Google Play Store requer conformidade com políticas mais rigorosas, classificações de conteúdo e processo de revisão, mas proporciona acesso a um público mais amplo.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://itch.io/docs/creators/getting-started" target="_blank">Itch.io - Guia para Criadores</a></li>
                  <li><a className="text-blue-600 underline" href="https://developer.android.com/distribute/googleplay/start" target="_blank">Google - Publicação na Play Store</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=dGwAGe9aWG8" target="_blank">Game Dev Guide - Publicando na Itch.io</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/launching-your-game-on-the-google-play-store" target="_blank">Unity Blog - Lançando seu Jogo na Play Store</a></li>
                </ul>
              </div>,

            children: []
          },
        ],
      },
      {
        id: '2-8',
        title: 'Extras',

        content:
          <div></div>,

        children: [
          {
            id: '2-8-1',
            title: 'Multiplayer com Photon',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Photon é uma solução popular para implementar jogos multiplayer na Unity, oferecendo servidores hospedados na nuvem e SDK robusto. Com o Photon PUN (Photon Unity Networking), é possível criar jogos multiplayer em tempo real com salas, matchmaking e sincronização de estados entre jogadores. A solução é escalável e funciona bem tanto para jogos casuais quanto para experiências mais complexas.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://doc.photonengine.com/en-us/pun/current/getting-started/pun-intro" target="_blank">Photon - Introdução ao PUN</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/photon-networking-fundamentals" target="_blank">Unity Learn - Fundamentos de Networking com Photon</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=93SkbMpWCGo" target="_blank">Brackeys - Multiplayer com Photon</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.photonengine.com/multiplayer-best-practices" target="_blank">Photon Blog - Melhores Práticas para Multiplayer</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-8-2',
            title: 'Salvamento e Carregamento de Jogo',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>Sistemas de salvamento e carregamento são essenciais para preservar o progresso do jogador. Na Unity, esses sistemas podem ser implementados usando PlayerPrefs para dados simples, serialização para estruturas de dados complexas, ou sistemas personalizados para grandes volumes de dados. Um bom sistema deve ser robusto contra corrupção de dados, eficiente em termos de armazenamento e transparente para o jogador.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/script-Serialization.html" target="_blank">Unity - Serialização de Dados</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/implementing-game-saving" target="_blank">Unity Learn - Implementando Salvamento de Jogo</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XOjd_qU2Ido" target="_blank">Brackeys - Sistema de Save na Unity</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/persistent-data-solutions-for-games" target="_blank">Unity Blog - Soluções para Dados Persistentes</a></li>
                </ul>
              </div>,

            children: []
          },
          {
            id: '2-8-3',
            title: 'Integração com APIs / Web',

            content:
              <div className="space-y-2 text-sm text-gray-700">
                <p>A integração com APIs e serviços web permite que seu jogo se conecte a sistemas externos para funcionalidades como autenticação de usuários, tabelas de classificação online, análise de dados, atualizações de conteúdo e microtransações. A Unity fornece classes como UnityWebRequest para realizar comunicações HTTP e JSON Utility para processamento de dados, facilitando a integração com praticamente qualquer serviço web.</p>
                <ul className="list-disc list-inside">
                  <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/UnityWebRequest.html" target="_blank">Unity - UnityWebRequest</a></li>
                  <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/working-with-restful-apis" target="_blank">Unity Learn - Trabalhando com APIs RESTful</a></li>
                  <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Oza5PbkY7fI" target="_blank">Brackeys - Comunicação com APIs Web</a></li>
                  <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/implementing-cloud-services-for-your-game" target="_blank">Unity Blog - Implementando Serviços na Nuvem</a></li>
                </ul>
              </div>,

            children: []
          },
        ],
      },
    ],
  }
  // ,
  // {
  //   id: '3',
  //   title: 'Robótica',

  //   content: <div className="space-y-2 text-sm text-gray-700">
  //     <p>A robótica é a área que integra engenharia mecânica, eletrônica, ciência da computação e inteligência artificial para projetar, construir e programar robôs. Varia desde simples robôs educacionais até complexos sistemas industriais e de pesquisa.</p>
  //     <ul className="list-disc list-inside">
  //       <li><a className="text-blue-600 underline" href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank">Arduino Tutorials</a></li>
  //       <li><a className="text-blue-600 underline" href="https://www.ros.org/is-ros-for-me/" target="_blank">Robot Operating System (ROS)</a></li>
  //       <li><a className="text-blue-600 underline" href="https://robotics.stackexchange.com/" target="_blank">Robotics Stack Exchange</a></li>
  //       <li><a className="text-blue-600 underline" href="https://www.edx.org/learn/robotics" target="_blank">Cursos de Robótica - edX</a></li>
  //     </ul>
  //   </div>,

  //   children: [
  //     {
  //       id: '3-1',
  //       title: 'Fundamentos',

  //       content:
  //          ,

  //       children: [
  //         {
  //           id: '3-1-1', title: 'Matemática para Robótica',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-1-2', title: 'Física Elétrica e Mecânica',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-1-3', title: 'Lógica de Programação',
  //           content:
  //              ,
  //           children: []
  //         },
  //       ],
  //     },
  //     {
  //       id: '3-2',
  //       title: 'Eletrônica',

  //       content:
  //          ,

  //       children: [
  //         {
  //           id: '3-2-1', title: 'Corrente, Tensão e Resistência',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-2-2', title: 'Protoboard, Multímetro, Solda',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-2-3', title: 'Sensores e Atuadores',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-2-4', title: 'Microcontroladores (Arduino, ESP32)',
  //           content:
  //              ,
  //           children: []
  //         },
  //       ],
  //     },
  //     {
  //       id: '3-3',
  //       title: 'Programação',

  //       content:
  //          ,

  //       children: [
  //         {
  //           id: '3-3-1', title: 'C/C++ com Arduino',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-3-2', title: 'Python para Robótica',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-3-3', title: 'ROS (Robot Operating System)',
  //           content:
  //              ,
  //           children: []
  //         },
  //       ],
  //     },
  //     {
  //       id: '3-4',
  //       title: 'Mecânica',

  //       content:
  //          ,

  //       children: [
  //         {
  //           id: '3-4-1', title: 'Motores (Servo, DC, Passo)',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-4-2', title: 'Chassis e Engrenagens',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-4-3', title: 'Modelagem 3D (Fusion, Tinkercad)',
  //           content:
  //              ,
  //           children: []
  //         },
  //       ],
  //     },
  //     {
  //       id: '3-5',
  //       title: 'Projetos Práticos',

  //       content:
  //          ,

  //       children: [
  //         {
  //           id: '3-5-1', title: 'Robô Seguidor de Linha',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-5-2', title: 'Robô com Controle por Bluetooth',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-5-3', title: 'Automação com Sensores',
  //           content:
  //              ,
  //           children: []
  //         },
  //       ],
  //     },
  //     {
  //       id: '3-6',
  //       title: 'Avançado',

  //       content:
  //          ,

  //       children: [
  //         {
  //           id: '3-6-1', title: 'Visão Computacional com OpenCV',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-6-2', title: 'Navegação e SLAM',
  //           content:
  //              ,
  //           children: []
  //         },
  //         {
  //           id: '3-6-3', title: 'Integração com IA e Machine Learning',
  //           content:
  //              ,
  //           children: []
  //         },
  //       ],
  //     },
  //   ],
  // }
  , {
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
];

type NodeType = {
  id: string;
  title: string;

  content: JSX.Element;

  children: NodeType[];
};

const RoadmapNode = ({ node }: { node: NodeType }) => {
  // const [selected, setSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const isLeaf = node.children.length === 0;
  const level = node.id.split('-').length;
  const isThirdLevelParent = node.
    children.every(child => child.id.split('-').length === 3);
  const isSecLevelParent = node.
    children.every(child => child.id.split('-').length === 2);
  const isFirsLevelParent = node.
    children.every(child => child.id.split('-').length === 1);

  const handleClick = () => {
    setShowModal(true);
  };
  const [completed, setCompleted] = useState<string[]>([]);
  const totalAchievements = roadmapData.length;
  useEffect(() => {
    const loadUserData = async () => {
      const userData = await userDataStore.getUserData();
      if (userData) {

        setCompleted(userData?.roadmap || []);
      }
    };
    loadUserData();
  }, []);

  const handleCheckboxChange = async (id: string) => {
    let newCompleted = [...completed];
    if (newCompleted.includes(id)) {
      newCompleted = newCompleted.filter(achId => achId !== id);
    } else {
      newCompleted.push(id);
    }
    setCompleted(newCompleted);
    await userDataStore.saveUserAttribute("roadmap", newCompleted);
  };


  return (
    <div className={`flex items-start relative ml-4  ${isThirdLevelParent ? '' : 'flex-col '}`}>
      <div
        onClick={handleClick}
        className={`cursor-pointer rounded  ${completed.includes(node.id) ? 'bg-green-100' : 'bg-blue-100'} px-4 py-2 hover:bg-slate-200 transition-all duration-300 whitespace-nowrap z-10`}
      >
        {node.title}
      </div>

      {node.
        children.length > 0 && (
          <div
            className={`relative  ml-4  flex items-center ${isThirdLevelParent ? 'flex-row items-center' : 'mt-6 flex-col items-start gap-8 '}`}
          >
            <svg
              className={`absolute top-0 left-0 z-0 `}
              width="2"
              height={node.
                children.length * 64 + 20}
              viewBox={`0 0 2 ${node.
                children.length * 64 + 20}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={`M1 0 V${node.
                  children.length * 64 + 20}`}
                stroke="#94a3b8"
                strokeWidth={` ${isThirdLevelParent ? '0' : '2'}`}

                fill="none"
              />
            </svg>
            {isThirdLevelParent ?
              <svg
                className="w-6 h-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              :
              ""
            }


            {node.
              children.map((child, index) => (
                <div className="relative flex items-center">
                  <svg
                    className="absolute -top-8 left-0 z-0"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0 C0 20, 0 20, 0 40"
                      stroke="#94a3b8"
                      strokeWidth={` ${isThirdLevelParent ? '0' : '2'}`}
                      fill="none"
                    />
                  </svg>
                  {isSecLevelParent ?
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg> : ""}
                  <RoadmapNode key={child.id} node={child} />
                </div>
              ))}
          </div>
        )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 " >
          <div className="w-96 rounded bg-white p-6 shadow-lg animate-scale-in w-[90vw] min-h-[50vh] md:w-[70vw]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{node.title}</h2>
              <button onClick={() => setShowModal(false)}>
                <span className="h-5 w-5 text-gray-500 hover:text-red-500">✕</span>
              </button>
            </div>
            {/* <p className="mb-4 text-sm text-gray-600"> */}
            {node.
              content}
            {/* </p> */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                // checked={selected}
                checked={completed.includes(node.id)}
                // onChange={(e) => setSelected(e.target.checked)}
                onChange={() => handleCheckboxChange(node.id)}
              />
              Marcar como concluído
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default function RoadmapPage() {
  const [area, setArea] = useState("N/A");
  useEffect(() => {
    const loadUserData = async () => {
      const userData = await userDataStore.getUserData();
      if (userData) {
        setArea(userData?.area);
      }
    };
    loadUserData();
  }, []);
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6 flex ">
        Roadmap
        <p className="text-blue-400 ml-4"> {"{"} </p>
        {area}
        <p className="text-blue-400"> {"}"} </p>
      </h1>
      <div className="flex flex-col gap-16 items-start">
        {/* {roadmapData.map((node) => (
          <RoadmapNode key={node.id} node={node} />
        ))} */}
        {roadmapData
          .filter((node) => (node.title == area))
          .map((node) => (
            <RoadmapNode key={node.id} node={node} />
          ))}
      </div>
    </main>
  );
}
