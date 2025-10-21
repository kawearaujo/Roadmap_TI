export default function IA() {
    return (
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
                                <li><a className="text-blue-600 underline" href="https://www.gamasutra.com/view/feature/131474/the_designers_notebook_.php" target="_blank">Gamasutra - Designer&apos;s Notebook</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/game-design" target="_blank">Coursera - Introdução ao Design de Jogos</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.amazon.com.br/Art-Game-Design-Book-Lenses/dp/0123694965" target="_blank">Livro: The Art of Game Design</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/GameMakersToolkit/videos" target="_blank">Game Maker&apos;s Toolkit - Análises de Design</a></li>
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
                        <div>Alguns Extras</div>,

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


    );
}