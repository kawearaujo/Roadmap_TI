export default function IA() {
    return (
        {
            id: '2',
            title: 'GameDev',

            content:
                <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Desenvolvimento de jogos (GameDev)</strong> é a área que combina <strong>programação, arte, design e narrativa</strong> para criar experiências interativas. Envolve conhecimento de <strong>engines de jogos, lógica de gameplay, física, animação</strong> e muito mais.</p>

                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=g4dJ0D9sXkU" target="_blank">Game Development Roadmap 2024</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=U6vAa6vQS_k" target="_blank">Como Começar no GameDev</a></li>
                    </ul>

                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/" target="_blank">Unity Learn</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.gamedev.net/" target="_blank">GameDev.net</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.gamasutra.com/" target="_blank">Gamasutra</a></li>
                        <li><a className="text-blue-600 underline" href="https://docs.unrealengine.com/" target="_blank">Unreal Engine Docs</a></li>
                    </ul>

                    <p className="font-semibold text-purple-800">💡 Dica: Comece com projetos pequenos e simples antes de tentar jogos complexos.</p>
                </div>,

            children: [
                {
                    id: '2-1',
                    title: 'Fundamentos',

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>Os <strong>fundamentos para o desenvolvimento de jogos</strong> incluem conceitos essenciais de <strong>programação, matemática e design</strong> que formam a base para criar experiências interativas. Dominar esses conceitos é crucial antes de avançar para o desenvolvimento prático.</p>

                        <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=U6vAa6vQS_k" target="_blank">Fundamentos do GameDev</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=H2pCb-QRVqQ" target="_blank">Matemática para Jogos</a></li>
                        </ul>

                        <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://www.edx.org/course/cs50s-introduction-to-game-development" target="_blank">CS50 - Introdução ao Desenvolvimento de Jogos</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLhQjrBD2T382mHvZB-hSYWvoLzYQzT_Pb" target="_blank">CS50 Game Dev - Harvard</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.udemy.com/course/fundamentos-de-programacao-para-jogos/" target="_blank">Fundamentos de Programação para Jogos</a></li>
                        </ul>

                        <p className="font-semibold text-purple-800">💡 Dica: Pratique lógica de programação antes de entrar nas engines.</p>
                    </div>,

                    children: [
                        {
                            id: '2-1-1',
                            title: 'Lógica de Programação',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A <strong>lógica de programação</strong> é a base para criar algoritmos e solucionar problemas computacionais. Para desenvolver jogos, é necessário dominar conceitos como <strong>variáveis, estruturas condicionais, loops, funções e manipulação de dados</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=8mei6uVttho" target="_blank">Lógica de Programação para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target="_blank">JavaScript Basics</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target="_blank">Curso em Vídeo - Algoritmos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.codecademy.com/learn/learn-how-to-code" target="_blank">Codecademy - Learn How to Code</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">FreeCodeCamp - Algoritmos e Estruturas de Dados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.hackerrank.com/domains/algorithms" target="_blank">HackerRank - Desafios de Algoritmos</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Resolva problemas no HackerRank para praticar lógica.</p>
                                </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-1-2',
                            title: 'Programação Orientada a Objetos',

                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A <strong>Programação Orientada a Objetos (POO)</strong> é paradigma fundamental para o desenvolvimento de jogos. Conceitos como <strong>classes, objetos, herança, polimorfismo e encapsulamento</strong> são amplamente utilizados em engines como Unity e Unreal para criar componentes reutilizáveis e organizar o código de forma eficiente.</p>

                                <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=pTB0EiLXUC8" target="_blank">POO para Iniciantes</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=M7-bKMnE6-4" target="_blank">POO em C# para Unity</a></li>
                                </ul>

                                <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos" target="_blank">Alura - POO</a></li>
                                    <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/interfaces-scriptable-objects" target="_blank">Unity Learn - POO em C#</a></li>
                                    <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/concepts/object-oriented-programming" target="_blank">Microsoft - Conceitos de POO em C#</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/orientacao-a-objetos-com-java" target="_blank">Coursera - Orientação a Objetos</a></li>
                                </ul>

                                <p className="font-semibold text-purple-800">💡 Dica: Use POO para criar sistemas modulares e reutilizáveis.</p>
                            </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-1-3',
                            title: 'Matemática para Jogos',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A <strong>matemática é essencial</strong> para o desenvolvimento de jogos, sendo utilizada para cálculos de <strong>física, movimento de objetos, detecção de colisões, sistemas de partículas e gráficos</strong>. Conceitos importantes incluem vetores, matrizes, trigonometria, álgebra linear e interpolação.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=DPfxjQ6sqrc" target="_blank">Matemática para GameDev</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=7L8gLV_P39M" target="_blank">Vetores e Física em Jogos</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Khan Academy - Álgebra Linear</a></li>
                                        <li><a className="text-blue-600 underline" href="https://catlikecoding.com/unity/tutorials/rendering/part-1/" target="_blank">Catlike Coding - Matemática para Shaders</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/VectorCookbook.html" target="_blank">Unity - Guia de Vetores</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My" target="_blank">Freya Holmér - Matemática para GameDev</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Foque em vetores e trigonometria para movimentação e colisões.</p>
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
                            <p>O desenvolvimento de jogos requer o uso de <strong>diversas ferramentas especializadas</strong>, incluindo <strong>engines de jogos, IDEs para programação, ferramentas de controle de versão e softwares para criação de assets</strong>. Conhecer e dominar estas ferramentas aumenta significativamente a produtividade e a qualidade do projeto.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=IlKaB1etrik" target="_blank">Ferramentas Essenciais para GameDev</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=j48LtUkZRjU" target="_blank">Unity vs Unreal Engine</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://unity.com/pt/products/unity-platform" target="_blank">Unity - Engine de Jogos</a></li>
                                <li><a className="text-blue-600 underline" href="https://visualstudio.microsoft.com/pt-br/" target="_blank">Visual Studio - IDE</a></li>
                                <li><a className="text-blue-600 underline" href="https://github.com/" target="_blank">GitHub - Controle de Versão</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.blender.org/" target="_blank">Blender - Modelagem 3D</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Comece com Unity + Visual Studio + GitHub para projetos indie.</p>
                        </div>
                    ,

                    children: [
                        {
                            id: '2-2-1',
                            title: 'Unity',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Unity</strong> é uma das engines de jogos mais populares do mundo, utilizada para criar <strong>jogos 2D, 3D, realidade virtual e aumentada</strong>. Com interface visual e programação em C#, oferece recursos como <strong>física, animação, áudio, IA e networking</strong>, além de uma Asset Store com milhares de recursos prontos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XtQMytORBmM" target="_blank">Unity para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=IlKaB1etrik" target="_blank">Primeiros Passos na Unity</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/pathway/unity-essentials" target="_blank">Unity Learn - Unity Essentials</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/index.html" target="_blank">Manual Oficial da Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/Brackeys/playlists" target="_blank">Brackeys - Tutoriais de Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://assetstore.unity.com/" target="_blank">Unity Asset Store</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Faça os tutoriais oficiais da Unity Learn para começar bem.</p>
                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '2-2-2',
                            title: 'Editores de Código',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Visual Studio e VS Code</strong> são poderosos ambientes de desenvolvimento integrados (IDEs) para programação. O Visual Studio oferece <strong>integração completa com a Unity</strong>, incluindo debug e autocompletar, enquanto o VS Code é uma alternativa mais leve e customizável com extensões para desenvolvimento de jogos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=ON9c_5lyT2c" target="_blank">Visual Studio para Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Y-CHs3x8rRY" target="_blank">VS Code para GameDev</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://visualstudio.microsoft.com/pt-br/vs/unity-tools/" target="_blank">Visual Studio - Ferramentas para Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://code.visualstudio.com/docs/other/unity" target="_blank">VS Code - Documentação para Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit" target="_blank">C# Dev Kit para VS Code</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/pt-br/visualstudio/get-started/csharp/?view=vs-2022" target="_blank">Microsoft - Primeiros Passos com C#</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use Visual Studio para melhor integração com Unity.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-2-3',
                            title: 'Versionamento',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Git</strong> é um sistema de controle de versão essencial para projetos de desenvolvimento de jogos, permitindo <strong>rastrear mudanças, trabalhar em equipe e gerenciar diferentes versões do código</strong>. GitHub é uma plataforma que hospeda repositórios Git, facilitando a colaboração, revisão de código e integração contínua.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=USjZcfj8yxE" target="_blank">Git Tutorial for Beginners</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=3fUbBnN_H2c" target="_blank">Git e GitHub Crash Course</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://git-scm.com/book/pt-br/v2" target="_blank">Pro Git Book</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.github.com/pt/get-started" target="_blank">GitHub - Primeiros Passos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian - Tutoriais de Git</a></li>
                                        <li><a className="text-blue-600 underline" href="https://unity.github.com/" target="_blank">GitHub for Unity - Extensão</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.gitkraken.com/" target="_blank">GitKraken - Cliente Git Visual</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use Git desde o primeiro projeto para criar bons hábitos.</p>
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
                            <p>A <strong>programação na Unity</strong> é realizada principalmente com <strong>C#</strong>, uma linguagem orientada a objetos poderosa e versátil. Entender como utilizar os <strong>componentes e APIs da Unity</strong> é essencial para implementar mecânicas de jogo, interações, sistemas de jogo e comportamentos de objetos.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XtQMytORBmM" target="_blank">Programação Unity para Iniciantes</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=9ZEu_I-ido4" target="_blank">C# para Unity</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/ScriptReference/" target="_blank">Unity - Referência de Script</a></li>
                                <li><a className="text-blue-600 underline" href="https://learn.unity.com/course/beginner-scripting" target="_blank">Unity Learn - Scripting para Iniciantes</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/CodeMonkeyUnity/videos" target="_blank">Code Monkey - Tutoriais de C# com Unity</a></li>
                                <li><a className="text-blue-600 underline" href="https://unity.com/how-to/learning-c-sharp-unity-beginners" target="_blank">Unity - Aprendendo C# para Iniciantes</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Estude MonoBehaviour e os eventos principais como Start e Update.</p>
                        </div>
                    ,

                    children: [
                        {
                            id: '2-3-1',
                            title: 'C# com Unity',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>C#</strong> é a linguagem de programação principal utilizada na Unity. Compreender os <strong>fundamentos de C# e como aplicá-los no contexto da Unity</strong> é crucial para o desenvolvimento de jogos, incluindo classes como MonoBehaviour, uso de Coroutines, eventos, delegates e gerenciamento de memória.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=9ZEu_I-ido4" target="_blank">C# para Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=qpow5aDn9_w" target="_blank">Programação Avançada Unity</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/" target="_blank">Microsoft - Tour pelo C#</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/scritps-as-behaviour-components" target="_blank">Unity - Scripts como Componentes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLzDRvYVwl53t2GGC4rV_AmH7vSvSqjVmz" target="_blank">Jason Weimann - C# para Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.gamedev.tv/p/complete-c-unity-game-developer-2d" target="_blank">GameDev.tv - C# e Unity para Desenvolvimento de Jogos</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Aprenda sobre ScriptableObjects para dados reutilizáveis.</p>
                                </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-3-2',
                            title: 'Input System',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O <strong>Input System da Unity</strong> é um sistema moderno para capturar <strong>entradas do usuário (teclado, mouse, gamepad, touch)</strong> de forma flexível e compatível com múltiplas plataformas. Permite criar controles responsivos, remapeáveis e adaptáveis a diferentes dispositivos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=YHC-6I_LSos" target="_blank">Input System Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Pzd8NhcRzVo" target="_blank">Controles Multiplataforma</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/index.html" target="_blank">Unity - Manual do Input System</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/working-with-the-new-input-system" target="_blank">Unity Learn - Trabalhando com o Novo Input System</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Pzd8NhcRzVo" target="_blank">Brackeys - Input System Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/introducing-the-new-input-system" target="_blank">Unity Blog - Introdução ao Novo Input System</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use Input Actions para organizar diferentes esquemas de controle.</p>
                                </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-3-3',
                            title: 'Física e Colisões',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O <strong>sistema de física da Unity</strong> permite simular <strong>interações físicas realistas</strong> em jogos, incluindo gravidade, colisões e forças. <strong>Colliders</strong> definem a forma para detecção de colisão, enquanto <strong>Rigidbodies</strong> controlam como os objetos reagem às forças físicas, permitindo criar interações complexas e realistas.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=0w6rS1hopAo" target="_blank">Física na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=b7C1V8FL6SU" target="_blank">Física 2D na Unity</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/PhysicsSection.html" target="_blank">Unity - Manual de Física</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/physics-components" target="_blank">Unity Learn - Componentes de Física</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.raywenderlich.com/206-introduction-to-unity-physics" target="_blank">RayWenderlich - Introdução à Física na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=b7C1V8FL6SU" target="_blank">Game Dev Guide - Física 2D na Unity</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use layers de física para otimizar detecção de colisões.</p>
                                </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-3-4',
                            title: 'Instanciação',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Prefabs</strong> são modelos reutilizáveis de objetos de jogo completos que podem ser instanciados múltiplas vezes. A <strong>instanciação</strong> permite criar cópias desses prefabs durante o jogo, sendo essencial para sistemas de spawn de inimigos, projéteis, efeitos e outros elementos dinâmicos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=H1OkG3a1w-o" target="_blank">Prefabs e Instanciação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=7T4dFqT62yU" target="_blank">Object Pooling</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/Prefabs.html" target="_blank">Unity - Manual de Prefabs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/introduction-to-prefabs" target="_blank">Unity Learn - Introdução aos Prefabs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=H1OkG3a1w-o" target="_blank">Brackeys - Sistema de Spawn com Prefabs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/how-to-build-a-simple-spawner-with-object-pooling-in-unity" target="_blank">Unity Blog - Object Pooling com Prefabs</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use object pooling para melhor performance com muitos objetos.</p>
                                </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-3-5',
                            title: 'Animações',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O <strong>Animator da Unity</strong> é um sistema poderoso para criar e controlar animações em jogos. Com sua <strong>máquina de estados (State Machine)</strong>, permite definir transições entre animações, parâmetros de controle e lógica para criar movimentos fluidos e responsivos para personagens e objetos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Animação 2D na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Ap8bGol7qBk" target="_blank">Animator Controller</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/AnimationSection.html" target="_blank">Unity - Manual de Animação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/controlling-animation" target="_blank">Unity Learn - Controlando Animações</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Brackeys - Animação 2D na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/mecanim-animation-debugging" target="_blank">Unity Blog - Debug de Animações</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use blend trees para transições suaves entre animações.</p>
                                </div>
                            ,

                            children: []
                        },
                    ],
                },
                {
                    id: '2-4',
                    title: 'Design para Jogos',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Design para jogo</strong> é a disciplina de criar <strong>regras, mecânicas, narrativas e experiências</strong> que tornam um jogo divertido e envolvente. Envolve a concepção de sistemas de gameplay, balanceamento, level design, feedback ao jogador e fluxo de jogo para criar experiências significativas.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=z06QR-tz1_o" target="_blank">Design de Jogos para Iniciantes</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=U4U2sdtO4UY" target="_blank">Princípios de Game Design</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.gamasutra.com/view/feature/131474/the_designers_notebook_.php" target="_blank">Gamasutra - Designer&apos;s Notebook</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/game-design" target="_blank">Coursera - Introdução ao Design de Jogos</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.amazon.com.br/Art-Game-Design-Book-Lenses/dp/0123694965" target="_blank">Livro: The Art of Game Design</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/c/GameMakersToolkit/videos" target="_blank">Game Maker&apos;s Toolkit - Análises de Design</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Jogue muitos jogos e analise suas mecânicas para aprender.</p>
                        </div>
                    ,

                    children: [
                        {
                            id: '2-4-1', title: 'Game Loop',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Game Loop</strong> é o ciclo fundamental que executa continuamente durante um jogo, processando <strong>inputs, atualizando o estado do jogo e renderizando resultados</strong>. Na Unity, é implementado através dos métodos Update, FixedUpdate e LateUpdate, cada um com propósitos específicos no ciclo de execução.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=IFayQioG71A" target="_blank">Ciclo de Vida na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=YMDXuHWNg4c" target="_blank">Update vs FixedUpdate</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ExecutionOrder.html" target="_blank">Unity - Ordem de Execução de Eventos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=IFayQioG71A" target="_blank">Brackeys - Ciclo de Vida na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://gameprogrammingpatterns.com/game-loop.html" target="_blank">Game Programming Patterns - Game Loop</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/awake-and-start" target="_blank">Unity Learn - Awake e Start</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use FixedUpdate para física e Update para lógica de jogo.</p>
                                </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-4-2', title: 'Design de Fases',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Design de fases (Level Design)</strong> é a criação de <strong>ambientes, desafios e experiências</strong> dentro de um jogo. Envolve a estruturação de espaços, posicionamento de objetos, inimigos e coletáveis, fluxo de progressão e balanceamento de dificuldade para criar níveis memoráveis e divertidos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=iNEe3KhMvXM" target="_blank">Level Design Workshop</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Y2q7dgM0Lv4" target="_blank">Design de Fases na Prática</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.gamasutra.com/view/feature/131767/principles_of_level_design.php" target="_blank">Gamasutra - Princípios de Level Design</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=iNEe3KhMvXM" target="_blank">GDC - Level Design Workshop</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/level-design-processes" target="_blank">Unity Learn - Processos de Level Design</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.amazon.com.br/Level-Design-Games-Creating-Compelling/dp/0134997824" target="_blank">Livro: Level Up! O Guia para Design de Grandes Jogos</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Prototipe fases rapidamente com primitivos antes de fazer arte.</p>
                                </div>
                            ,

                            children: []
                        },
                        {
                            id: '2-4-3', title: 'UI/UX para Jogos',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>UI/UX para jogos</strong> abrange o design de <strong>interfaces e experiências do usuário</strong> que são intuitivas, informativas e imersivas. Uma boa interface de usuário comunica informações essenciais sem interromper o fluxo de jogo, enquanto a experiência do usuário foca na sensação geral e usabilidade do sistema de menus, HUDs e feedback visual/sonoro.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=HwdweCX5aMI" target="_blank">Sistema de UI na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=CG8KJ1p6Y1A" target="_blank">UX para Jogos</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/UIToolkits.html" target="_blank">Unity - UI Toolkits</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/ui-components-for-games" target="_blank">Unity Learn - Componentes de UI para Jogos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=HwdweCX5aMI" target="_blank">Brackeys - Sistema de UI na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://gamedevelopment.tutsplus.com/tutorials/game-ui-by-example-a-crash-course-in-unity-ui--cms-22695" target="_blank">Game Development - Curso de UI na Unity</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Mantenha a UI minimalista e não intrusiva.</p>
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
                            <p>A <strong>importação de assets na Unity</strong> é fundamental para adicionar recursos ao seu projeto. A Unity suporta uma ampla variedade de formatos de arquivo, incluindo <strong>modelos 3D, texturas, áudio e animações</strong>. O Asset Store também oferece milhares de recursos gratuitos e pagos que podem ser integrados diretamente aos seus projetos.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=rBHCnRXYcde" target="_blank">Gerenciamento de Assets</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=0fGB2H1AGP8" target="_blank">Asset Store Tutorial</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ImportingAssets.html" target="_blank">Unity - Manual de Importação de Assets</a></li>
                                <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/asset-store-packages" target="_blank">Unity Learn - Pacotes da Asset Store</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=rBHCnRXYcde" target="_blank">Game Dev Guide - Gerenciamento de Assets</a></li>
                                <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/asset-bundles-and-addressables" target="_blank">Unity Blog - Asset Bundles e Addressables</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Organize seus assets em pastas lógicas desde o início.</p>
                        </div>
                    ,

                    children: [
                        {
                            id: '2-5-1',
                            title: 'Importação de Assets',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A <strong>importação de assets na Unity</strong> é fundamental para adicionar recursos ao seu projeto. A Unity suporta uma ampla variedade de formatos de arquivo, incluindo <strong>modelos 3D, texturas, áudio e animações</strong>. O Asset Store também oferece milhares de recursos gratuitos e pagos que podem ser integrados diretamente aos seus projetos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=rBHCnRXYcde" target="_blank">Gerenciamento de Assets</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=0fGB2H1AGP8" target="_blank">Importação de Assets</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ImportingAssets.html" target="_blank">Unity - Manual de Importação de Assets</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/asset-store-packages" target="_blank">Unity Learn - Pacotes da Asset Store</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=rBHCnRXYcde" target="_blank">Game Dev Guide - Gerenciamento de Assets</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/asset-bundles-and-addressables" target="_blank">Unity Blog - Asset Bundles e Addressables</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Configure import settings adequadas para cada tipo de asset.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-5-2',
                            title: 'Sprites e Animações 2D',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Sprites</strong> são imagens 2D utilizadas para representar personagens, objetos e elementos de interface em jogos. A Unity oferece ferramentas robustas para manipular sprites, criar <strong>animações 2D com sprite sheets</strong>, e configurar atlas de texturas para otimização. O sistema de animação 2D permite criar movimentos fluidos e expressivos para personagens e elementos do jogo.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Animação 2D na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=on9nwbZngyw" target="_blank">Sprite Editor Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/SpriteEditor.html" target="_blank">Unity - Editor de Sprites</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/introduction-to-sprite-animations" target="_blank">Unity Learn - Introdução às Animações de Sprites</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Brackeys - Animação 2D na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/2d-animation-tips-and-tricks" target="_blank">Unity Blog - Dicas de Animação 2D</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use sprite atlases para reduzir draw calls.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-5-3',
                            title: 'Modelos e Materiais 3D',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Modelos 3D e materiais</strong> são elementos essenciais para criar ambientes, personagens e objetos tridimensionais. A Unity suporta a importação de diversos formatos 3D (.fbx, .obj, etc.) e oferece um <strong>sistema de materiais poderoso com shaders personalizáveis</strong> para criar efeitos visuais realistas ou estilizados, adaptáveis a diferentes plataformas e capacidades de hardware.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=n69LxG2tzYw" target="_blank">Materiais e Texturas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=T8wO_w6YQvE" target="_blank">Shader Graph Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/3DAssets.html" target="_blank">Unity - Manual de Assets 3D</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/materials-standard-shader" target="_blank">Unity Learn - Materiais e Standard Shader</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=n69LxG2tzYw" target="_blank">Brackeys - Materiais e Texturas na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/custom-shader-graph-nodes" target="_blank">Unity Blog - Shader Graph para Materiais</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Aprenda Shader Graph para criar materiais customizados.</p>
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
                            <p>A <strong>otimização de performance</strong> é crucial para garantir que seu jogo rode suavemente em diferentes dispositivos. Isso inclui técnicas como <strong>Level of Detail (LOD), occlusion culling, otimização de draw calls, baking de iluminação, gerenciamento de memória e profiling</strong> para identificar gargalos. Jogos bem otimizados proporcionam melhor experiência e alcançam um público mais amplo.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_wxitgdx-UI" target="_blank">Otimização na Unity</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=9h-y7mQ1QpU" target="_blank">Profiler Tutorial</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/OptimisingGraphicsPerformance.html" target="_blank">Unity - Otimização de Performance Gráfica</a></li>
                                <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/fixing-performance-problems" target="_blank">Unity Learn - Resolvendo Problemas de Performance</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_wxitgdx-UI" target="_blank">Brackeys - Dicas de Otimização na Unity</a></li>
                                <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/profiler-improvements" target="_blank">Unity Blog - Melhorias no Profiler</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Use o Profiler para identificar gargalos de performance.</p>
                        </div>,

                    children: [
                        {
                            id: '2-6-1',
                            title: 'Performance',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A <strong>otimização de performance</strong> é crucial para garantir que seu jogo rode suavemente em diferentes dispositivos. Isso inclui técnicas como <strong>Level of Detail (LOD), occlusion culling, otimização de draw calls, baking de iluminação, gerenciamento de memória e profiling</strong> para identificar gargalos. Jogos bem otimizados proporcionam melhor experiência e alcançam um público mais amplo.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_wxitgdx-UI" target="_blank">Dicas de Otimização</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=9h-y7mQ1QpU" target="_blank">Usando o Profiler</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/OptimisingGraphicsPerformance.html" target="_blank">Unity - Otimização de Performance Gráfica</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/fixing-performance-problems" target="_blank">Unity Learn - Resolvendo Problemas de Performance</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_wxitgdx-UI" target="_blank">Brackeys - Dicas de Otimização na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/profiler-improvements" target="_blank">Unity Blog - Melhorias no Profiler</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Otimize textures e meshes para a plataforma alvo.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-6-2',
                            title: 'Efeitos Visuais',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Efeitos visuais (VFX)</strong> adicionam impacto e feedback visual ao seu jogo, desde sistemas de partículas para fogo, fumaça e explosões até pós-processamento para ajustar cores, iluminação e efeitos atmosféricos. A Unity oferece ferramentas como o <strong>Sistema de Partículas, Visual Effect Graph e o pacote de pós-processamento</strong> para criar efeitos visuais impressionantes e responsivos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=FEA1wTMJAR0" target="_blank">Efeitos de Partículas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6dP6aM_i2bM" target="_blank">Visual Effect Graph</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/ParticleSystems.html" target="_blank">Unity - Sistema de Partículas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/introduction-to-visual-effects" target="_blank">Unity Learn - Introdução aos Efeitos Visuais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=FEA1wTMJAR0" target="_blank">Brackeys - Efeitos de Partículas na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/advanced-visual-effects-with-urp" target="_blank">Unity Blog - VFX Avançados com URP</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use particle systems com moderação para não impactar performance.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-6-3',
                            title: 'Áudio e Música',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Áudio</strong> é um componente vital para a imersão em jogos, abrangendo música de fundo, efeitos sonoros e diálogos. A Unity fornece um <strong>mixer de áudio completo com mixagem espacial 3D, efeitos DSP, grupos de mixagem e controle dinâmico de volume</strong>. Um bom design de áudio pode transformar a experiência do jogador, criando atmosfera e fornecendo feedback importante sobre eventos do jogo.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6OT43pvUyfY" target="_blank">Sistema de Áudio na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=JnbD7PwQr2c" target="_blank">Audio Mixer Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/AudioOverview.html" target="_blank">Unity - Visão Geral do Sistema de Áudio</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/working-with-audio" target="_blank">Unity Learn - Trabalhando com Áudio</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6OT43pvUyfY" target="_blank">Brackeys - Sistema de Áudio na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/procedural-audio-in-games" target="_blank">Unity Blog - Áudio Procedural em Jogos</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use audio mixers para controlar volumes de diferentes grupos de som.</p>
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
                            <p>O processo de <strong>build para PC e Android</strong> na Unity envolve configurar as plataformas-alvo, otimizar assets e definir configurações específicas para cada plataforma. Para Android, são necessárias etapas adicionais como <strong>configuração do SDK, assinatura digital do APK e adaptações</strong> para diferentes tamanhos de tela e capacidades de hardware. A Unity facilita esse processo com ferramentas de build automatizadas e cross-platform.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4oTluGK-NFw" target="_blank">Build para Android</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4jFerT3M5tM" target="_blank">Build para PC</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/PublishingBuilds.html" target="_blank">Unity - Publicando Builds</a></li>
                                <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/building-for-mobile" target="_blank">Unity Learn - Build para Mobile</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4oTluGK-NFw" target="_blank">Brackeys - Build para Android</a></li>
                                <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/optimizing-for-android-devices" target="_blank">Unity Blog - Otimizando para Dispositivos Android</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Teste builds frequentemente durante o desenvolvimento.</p>
                        </div>,

                    children: [
                        {
                            id: '2-7-1',
                            title: 'Build para PC / Android',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O processo de <strong>build para PC e Android</strong> na Unity envolve configurar as plataformas-alvo, otimizar assets e definir configurações específicas para cada plataforma. Para Android, são necessárias etapas adicionais como <strong>configuração do SDK, assinatura digital do APK e adaptações</strong> para diferentes tamanhos de tela e capacidades de hardware. A Unity facilita esse processo com ferramentas de build automatizadas e cross-platform.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4oTluGK-NFw" target="_blank">Build para Android</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4jFerT3M5tM" target="_blank">Build para Windows</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/PublishingBuilds.html" target="_blank">Unity - Publicando Builds</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/building-for-mobile" target="_blank">Unity Learn - Build para Mobile</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4oTluGK-NFw" target="_blank">Brackeys - Build para Android</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/optimizing-for-android-devices" target="_blank">Unity Blog - Otimizando para Dispositivos Android</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Configure Player Settings adequadas para cada plataforma.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-7-2',
                            title: 'Publicação',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Publicar seu jogo na <strong>Itch.io ou Google Play Store</strong> envolve preparar builds finalizadas, criar páginas de loja atraentes e seguir os processos específicos de cada plataforma. A <strong>Itch.io</strong> é uma plataforma indie que oferece um processo simples e flexível, enquanto a <strong>Google Play Store</strong> requer conformidade com políticas mais rigorosas, classificações de conteúdo e processo de revisão, mas proporciona acesso a um público mais amplo.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=dGwAGe9aWG8" target="_blank">Publicando na Itch.io</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=lE8NdaX97m0" target="_blank">Publicando na Play Store</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://itch.io/docs/creators/getting-started" target="_blank">Itch.io - Guia para Criadores</a></li>
                                        <li><a className="text-blue-600 underline" href="https://developer.android.com/distribute/googleplay/start" target="_blank">Google - Publicação na Play Store</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=dGwAGe9aWG8" target="_blank">Game Dev Guide - Publicando na Itch.io</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/launching-your-game-on-the-google-play-store" target="_blank">Unity Blog - Lançando seu Jogo na Play Store</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Comece com Itch.io para feedback rápido, depois migre para Play Store.</p>
                                </div>,

                            children: []
                        },
                    ],
                },
                {
                    id: '2-8',
                    title: 'Extras',

                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Funcionalidades avançadas</strong> que podem levar seu jogo para o próximo nível, incluindo multiplayer, sistemas de salvamento e integração com serviços web. Esses recursos adicionam profundidade e engajamento à experiência do jogador.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=93SkbMpWCGo" target="_blank">Multiplayer com Photon</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XOjd_qU2Ido" target="_blank">Sistema de Save</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Implemente esses recursos depois que o jogo principal estiver funcionando.</p>
                        </div>,

                    children: [
                        {
                            id: '2-8-1',
                            title: 'Multiplayer com Photon',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Photon</strong> é uma solução popular para implementar jogos multiplayer na Unity, oferecendo <strong>servidores hospedados na nuvem e SDK robusto</strong>. Com o Photon PUN (Photon Unity Networking), é possível criar jogos multiplayer em tempo real com salas, matchmaking e sincronização de estados entre jogadores. A solução é escalável e funciona bem tanto para jogos casuais quanto para experiências mais complexas.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=93SkbMpWCGo" target="_blank">Multiplayer com Photon</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6z6nK1t7+8" target="_blank">Photon PUN Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://doc.photonengine.com/en-us/pun/current/getting-started/pun-intro" target="_blank">Photon - Introdução ao PUN</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/photon-networking-fundamentals" target="_blank">Unity Learn - Fundamentos de Networking com Photon</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=93SkbMpWCGo" target="_blank">Brackeys - Multiplayer com Photon</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.photonengine.com/multiplayer-best-practices" target="_blank">Photon Blog - Melhores Práticas para Multiplayer</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Comece com multiplayer local antes de tentar online.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-8-2',
                            title: 'Salvamento e Carregamento de Jogo',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Sistemas de salvamento e carregamento</strong> são essenciais para preservar o progresso do jogador. Na Unity, esses sistemas podem ser implementados usando <strong>PlayerPrefs para dados simples, serialização para estruturas de dados complexas, ou sistemas personalizados</strong> para grandes volumes de dados. Um bom sistema deve ser robusto contra corrupção de dados, eficiente em termos de armazenamento e transparente para o jogador.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XOjd_qU2Ido" target="_blank">Sistema de Save na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=5roZtuqZyuw" target="_blank">Save System Avançado</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/script-Serialization.html" target="_blank">Unity - Serialização de Dados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/implementing-game-saving" target="_blank">Unity Learn - Implementando Salvamento de Jogo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XOjd_qU2Ido" target="_blank">Brackeys - Sistema de Save na Unity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/persistent-data-solutions-for-games" target="_blank">Unity Blog - Soluções para Dados Persistentes</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use JSON ou binary serialization para dados complexos.</p>
                                </div>,

                            children: []
                        },
                        {
                            id: '2-8-3',
                            title: 'Integração com APIs',

                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A <strong>integração com APIs e serviços web</strong> permite que seu jogo se conecte a sistemas externos para funcionalidades como <strong>autenticação de usuários, tabelas de classificação online, análise de dados, atualizações de conteúdo e microtransações</strong>. A Unity fornece classes como UnityWebRequest para realizar comunicações HTTP e JSON Utility para processamento de dados, facilitando a integração com praticamente qualquer serviço web.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Oza5PbkY7fI" target="_blank">Comunicação com APIs Web</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=7XFY0X1aBcU" target="_blank">REST APIs na Unity</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.unity3d.com/Manual/UnityWebRequest.html" target="_blank">Unity - UnityWebRequest</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.unity.com/tutorial/working-with-restful-apis" target="_blank">Unity Learn - Trabalhando com APIs RESTful</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Oza5PbkY7fI" target="_blank">Brackeys - Comunicação com APIs Web</a></li>
                                        <li><a className="text-blue-600 underline" href="https://blog.unity.com/technology/implementing-cloud-services-for-your-game" target="_blank">Unity Blog - Implementando Serviços na Nuvem</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Trate erros de conexão para melhor experiência do usuário.</p>
                                </div>,

                            children: []
                        },
                    ],
                },
            ],

        }
    );
}