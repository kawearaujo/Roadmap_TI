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
            id: '1-2-3',
            title: 'Banco de Dados',
            content: 
            <div className="space-y-2 text-sm text-gray-700">
      <p>Bancos de dados são sistemas organizados para armazenar, gerenciar e recuperar informações de forma eficiente. Existem bancos relacionais (SQL) como MySQL e PostgreSQL, e não-relacionais (NoSQL) como MongoDB e Redis.</p>
      <ul className="list-disc list-inside">
        <li><a className="text-blue-600 underline" href="https://www.w3schools.com/sql/" target="_blank">W3Schools - SQL Tutorial</a></li>
        <li><a className="text-blue-600 underline" href="https://university.mongodb.com/" target="_blank">MongoDB University</a></li>
        <li><a className="text-blue-600 underline" href="https://www.postgresqltutorial.com/" target="_blank">PostgreSQL Tutorial</a></li>
        <li><a className="text-blue-600 underline" href="https://dev.mysql.com/doc/refman/8.0/en/" target="_blank">MySQL Documentation</a></li>
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
        <p>Frameworks Front-End são conjuntos de ferramentas que facilitam o desenvolvimento de interfaces de usuário, oferecendo componentes reutilizáveis e estrutura organizada. Exemplos incluem React, Angular, Vue.js e Svelte.</p>
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
            title: 'Baseado em Typescript',
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
        content: <div> </div>,
        children: [
          { id: '2-1-1', title: 'Lógica de Programação',content: <div> </div>, children: [] },
          { id: '2-1-2', title: 'POO (Programação Orientada a Objetos)',content: <div> </div>, children: [] },
          { id: '2-1-3', title: 'Matemática Básica para Jogos',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '2-2',
        title: 'Ferramentas',
        content: <div> </div>,
        children: [
          { id: '2-2-1', title: 'Unity',content: <div> </div>, children: [] },
          { id: '2-2-2', title: 'Visual Studio / VS Code',content: <div> </div>, children: [] },
          { id: '2-2-3', title: 'Git e GitHub',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '2-3',
        title: 'Programação com Unity',
        content: <div> </div>,
        children: [
          { id: '2-3-1', title: 'C# com Unity',content: <div> </div>, children: [] },
          { id: '2-3-2', title: 'Input System',content: <div> </div>, children: [] },
          { id: '2-3-3', title: 'Physics & Colliders',content: <div> </div>, children: [] },
          { id: '2-3-4', title: 'Instanciação e Prefabs',content: <div> </div>, children: [] },
          { id: '2-3-5', title: 'Animações com Animator',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '2-4',
        title: 'Design de Jogo',
        content: <div> </div>,
        children: [
          { id: '2-4-1', title: 'Game Loop',content: <div> </div>, children: [] },
          { id: '2-4-2', title: 'Design de Fases',content: <div> </div>, children: [] },
          { id: '2-4-3', title: 'UI/UX para Jogos',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '2-5',
        title: 'Assets e Arte',
        content: <div> </div>,
        children: [
          { id: '2-5-1', title: 'Importação de Assets',content: <div> </div>, children: [] },
          { id: '2-5-2', title: 'Sprites e Animações 2D',content: <div> </div>, children: [] },
          { id: '2-5-3', title: 'Modelos e Materiais 3D',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '2-6',
        title: 'Polimento e Otimização',
        content: <div> </div>,
        children: [
          { id: '2-6-1', title: 'Otimização de Performance',content: <div> </div>, children: [] },
          { id: '2-6-2', title: 'Efeitos Visuais (VFX)',content: <div> </div>, children: [] },
          { id: '2-6-3', title: 'Áudio e Música',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '2-7',
        title: 'Build e Publicação',
        content: <div> </div>,
        children: [
          { id: '2-7-1', title: 'Build para PC / Android',content: <div> </div>, children: [] },
          { id: '2-7-2', title: 'Publicação na Itch.io / Play Store',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '2-8',
        title: 'Extras',
        content: <div> </div>,
        children: [
          { id: '2-8-1', title: 'Multiplayer com Photon',content: <div> </div>, children: [] },
          { id: '2-8-2', title: 'Salvamento e Carregamento de Jogo',content: <div> </div>, children: [] },
          { id: '2-8-3', title: 'Integração com APIs / Web',content: <div> </div>, children: [] },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Robótica',
    content: <div className="space-y-2 text-sm text-gray-700">
    <p>A robótica é a área que integra engenharia mecânica, eletrônica, ciência da computação e inteligência artificial para projetar, construir e programar robôs. Varia desde simples robôs educacionais até complexos sistemas industriais e de pesquisa.</p>
    <ul className="list-disc list-inside">
      <li><a className="text-blue-600 underline" href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank">Arduino Tutorials</a></li>
      <li><a className="text-blue-600 underline" href="https://www.ros.org/is-ros-for-me/" target="_blank">Robot Operating System (ROS)</a></li>
      <li><a className="text-blue-600 underline" href="https://robotics.stackexchange.com/" target="_blank">Robotics Stack Exchange</a></li>
      <li><a className="text-blue-600 underline" href="https://www.edx.org/learn/robotics" target="_blank">Cursos de Robótica - edX</a></li>
    </ul>
  </div>,
    children: [
      {
        id: '3-1',
        title: 'Fundamentos',
        content: <div> </div>,
        children: [
          { id: '3-1-1', title: 'Matemática para Robótica',content: <div> </div>, children: [] },
          { id: '3-1-2', title: 'Física Elétrica e Mecânica',content: <div> </div>, children: [] },
          { id: '3-1-3', title: 'Lógica de Programação',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '3-2',
        title: 'Eletrônica',
        content: <div> </div>,
        children: [
          { id: '3-2-1', title: 'Corrente, Tensão e Resistência',content: <div> </div>, children: [] },
          { id: '3-2-2', title: 'Protoboard, Multímetro, Solda',content: <div> </div>, children: [] },
          { id: '3-2-3', title: 'Sensores e Atuadores',content: <div> </div>, children: [] },
          { id: '3-2-4', title: 'Microcontroladores (Arduino, ESP32)',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '3-3',
        title: 'Programação',
        content: <div> </div>,
        children: [
          { id: '3-3-1', title: 'C/C++ com Arduino',content: <div> </div>, children: [] },
          { id: '3-3-2', title: 'Python para Robótica',content: <div> </div>, children: [] },
          { id: '3-3-3', title: 'ROS (Robot Operating System)',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '3-4',
        title: 'Mecânica',
        content: <div> </div>,
        children: [
          { id: '3-4-1', title: 'Motores (Servo, DC, Passo)',content: <div> </div>, children: [] },
          { id: '3-4-2', title: 'Chassis e Engrenagens',content: <div> </div>, children: [] },
          { id: '3-4-3', title: 'Modelagem 3D (Fusion, Tinkercad)',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '3-5',
        title: 'Projetos Práticos',
        content: <div> </div>,
        children: [
          { id: '3-5-1', title: 'Robô Seguidor de Linha',content: <div> </div>, children: [] },
          { id: '3-5-2', title: 'Robô com Controle por Bluetooth',content: <div> </div>, children: [] },
          { id: '3-5-3', title: 'Automação com Sensores',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '3-6',
        title: 'Avançado',
        content: <div> </div>,
        children: [
          { id: '3-6-1', title: 'Visão Computacional com OpenCV',content: <div> </div>, children: [] },
          { id: '3-6-2', title: 'Navegação e SLAM',content: <div> </div>, children: [] },
          { id: '3-6-3', title: 'Integração com IA e Machine Learning',content: <div> </div>, children: [] },
        ],
      },
    ],
  }
    ,{
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
        content: <div> </div>,
        children: [
          { id: '3-1-1', title: 'Tipos de Testes (Unitário, Integração, Funcional, etc.)',content: <div> </div>, children: [] },
          { id: '3-1-2', title: 'Ciclo de Vida de Testes (SDLC/STLC)',content: <div> </div>, children: [] },
          { id: '3-1-3', title: 'Testes Manuais vs Automatizados',content: <div> </div>, children: [] },
          { id: '3-1-4', title: 'Técnicas de Teste (Caixa-preta, Caixa-branca, Exploratório)',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-2',
        title: 'Ferramentas de Teste Manual',
        content: <div> </div>,
        children: [
          { id: '4-2-1', title: 'TestRail / Zephyr / Xray',content: <div> </div>, children: [] },
          { id: '4-2-2', title: 'Jira / Trello',content: <div> </div>, children: [] },
          { id: '4-2-3', title: 'Test Case Design',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-3',
        title: 'Automação de Testes',
        content: <div> </div>,
        children: [
          { id: '4-3-1', title: 'Selenium / WebDriver',content: <div> </div>, children: [] },
          { id: '4-3-2', title: 'Cypress',content: <div> </div>, children: [] },
          { id: '4-3-3', title: 'Playwright',content: <div> </div>, children: [] },
          { id: '4-3-4', title: 'TestNG / JUnit / Mocha',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-4',
        title: 'Programação para QA',
        content: <div> </div>,
        children: [
          { id: '4-4-1', title: 'Lógica de Programação',content: <div> </div>, children: [] },
          { id: '4-4-2', title: 'Linguagens comuns (JavaScript, Python, Java)',content: <div> </div>, children: [] },
          { id: '4-4-3', title: 'Versionamento com Git/GitHub',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-5',
        title: 'Testes de API',
        content: <div> </div>,
        children: [
          { id: '4-5-1', title: 'Postman',content: <div> </div>, children: [] },
          { id: '4-5-2', title: 'REST Assured / SuperTest',content: <div> </div>, children: [] },
          { id: '4-5-3', title: 'Validação de JSON / HTTP Status',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-6',
        title: 'Testes de Performance',
        content: <div> </div>,
        children: [
          { id: '4-6-1', title: 'JMeter',content: <div> </div>, children: [] },
          { id: '4-6-2', title: 'Locust',content: <div> </div>, children: [] },
          { id: '4-6-3', title: 'Análise de métricas',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-7',
        title: 'Testes Mobile',
        content: <div> </div>,
        children: [
          { id: '4-7-1', title: 'Appium',content: <div> </div>, children: [] },
          { id: '4-7-2', title: 'Detox / Espresso',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-8',
        title: 'CI/CD e Integração de Testes',
        content: <div> </div>,
        children: [
          { id: '4-8-1', title: 'GitHub Actions / Jenkins / GitLab CI',content: <div> </div>, children: [] },
          { id: '4-8-2', title: 'Pipeline de Testes Automatizados',content: <div> </div>, children: [] },
        ],
      },
      {
        id: '4-9',
        title: 'Extras',
        content: <div> </div>,
        children: [
          { id: '4-9-1', title: 'Testes em Ambientes Cloud',content: <div> </div>, children: [] },
          { id: '4-9-2', title: 'Boas práticas de QA',content: <div> </div>, children: [] },
          { id: '4-9-3', title: 'Soft Skills para QA',content: <div> </div>, children: [] },
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
  const isThirdLevelParent = node.children.every(child => child.id.split('-').length === 3);
  const isSecLevelParent = node.children.every(child => child.id.split('-').length === 2);
  const isFirsLevelParent = node.children.every(child => child.id.split('-').length === 1);

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
        }, []) ;
 
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
    <div className={`flex items-start relative ml-4  ${isThirdLevelParent ?'':'flex-col '}`}>
      <div
        onClick={handleClick}
        className={`cursor-pointer rounded  ${completed.includes(node.id) ?'bg-green-100':'bg-blue-100'} px-4 py-2 hover:bg-slate-200 transition-all duration-300 whitespace-nowrap z-10`}
      >
        {node.title}
      </div>

      {node.children.length > 0 && (
        <div 
          className={`relative  ml-4  flex items-center ${isThirdLevelParent ? 'flex-row items-center' : 'mt-6 flex-col items-start gap-8 '}`}
        >
          <svg
            className={`absolute top-0 left-0 z-0 `}
            width="2"
            height={node.children.length * 64 + 20}
            viewBox={`0 0 2 ${node.children.length * 64 + 20}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`M1 0 V${node.children.length * 64 + 20}`}
              stroke="#94a3b8"
              strokeWidth={` ${isThirdLevelParent ?'0':'2'}`}
              
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
          
          
          {node.children.map((child, index) => (
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
                  strokeWidth={` ${isThirdLevelParent ?'0':'2'}`}
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
          </svg> :"" }
              <RoadmapNode key={child.id} node={child} />
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 " >
          <div className="w-96 rounded bg-white p-6 shadow-lg animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{node.title}</h2>
              <button onClick={() => setShowModal(false)}>
                <span className="h-5 w-5 text-gray-500 hover:text-red-500">✕</span>
              </button>
            </div>
            {/* <p className="mb-4 text-sm text-gray-600"> */}
              {node.content}
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
        .filter((node)=>(node.title==area))
        .map((node) => (
          <RoadmapNode key={node.id} node={node} />
        ))}
      </div>
    </main>
  );
}
