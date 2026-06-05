export default function IA() {
    return (
        {
            id: '2',
            title: 'GameDev',

            content: (
                <div className="space-y-2 text-sm text-zinc-100">
                    <p>
                        <strong>Desenvolvimento de jogos (GameDev)</strong> é a área que combina <strong>programação, arte, design e narrativa</strong> para criar experiências interativas. Envolve conhecimento de <strong>engines de jogos, lógica de gameplay, física, animação</strong> e muito mais.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=g4dJ0D9sXkU" target="_blank">Game Development Roadmap 2024</a></li>
                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=U6vAa6vQS_k" target="_blank">Como Começar no GameDev</a></li>
                            </ul>
                        </div>
                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/" target="_blank">Unity Learn</a></li>
                                <li><a className="text-zinc-200 underline" href="https://www.gamedev.net/" target="_blank">GameDev.net</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),

            children: [
                {
                    id: '2-1',
                    title: 'Fundamentos',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os <strong>fundamentos para o desenvolvimento de jogos</strong> incluem conceitos essenciais de <strong>programação, matemática e design</strong> que formam a base para criar experiências interativas. Dominar esses conceitos é crucial antes de avançar para o desenvolvimento prático.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-1-1',
                            title: 'Lógica de Programação',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A <strong>lógica de programação</strong> é a base para criar algoritmos e solucionar problemas computacionais. Para desenvolver jogos, é necessário dominar conceitos como <strong>variáveis, estruturas condicionais, loops, funções e manipulação de dados</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=8mei6uVttho" target="_blank">Lógica de Programação para Iniciantes</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target="_blank">JavaScript Basics</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target="_blank">Curso em Vídeo - Algoritmos</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.codecademy.com/learn/learn-how-to-code" target="_blank">Codecademy - Learn How to Code</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-1-2',
                            title: 'Programação Orientada a Objetos',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A <strong>Programação Orientada a Objetos (POO)</strong> é paradigma fundamental para o desenvolvimento de jogos. Conceitos como <strong>classes, objetos, herança, polimorfismo e encapsulamento</strong> são amplamente utilizados em engines como Unity e Unreal para criar componentes reutilizáveis e organizar o código de forma eficiente.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=pTB0EiLXUC8" target="_blank">POO para Iniciantes</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=-031oTWNW6w&list=PLCPwMcbEISGFu-hmzvTQyvogjAlAbOKQx" target="_blank">POO em C# para Unity</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos" target="_blank">Alura - POO</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://unity.com/pt/learn/get-started" target="_blank">Unity Learn - POO em C#</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-1-3',
                            title: 'Matemática para Jogos',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A <strong>matemática é essencial</strong> para o desenvolvimento de jogos, sendo utilizada para cálculos de <strong>física, movimento de objetos, detecção de colisões, sistemas de partículas e gráficos</strong>. Conceitos importantes incluem vetores, matrizes, trigonometria, álgebra linear e interpolação.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=DPfxjQ6sqrc" target="_blank">Matemática para GameDev</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=4UfWio5N4rY&list=PLQP3EJn4IhNhx0liOprpuKbqd6jzAUozo" target="_blank">Vetores e Física em Jogos</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Khan Academy - Álgebra Linear</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://catlikecoding.com/unity/tutorials/rendering/part-1/" target="_blank">Catlike Coding - Matemática para Shaders</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                    ],
                },
                {
                    id: '2-2',
                    title: 'Ferramentas',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                O desenvolvimento de jogos requer o uso de <strong>diversas ferramentas especializadas</strong>, incluindo <strong>engines de jogos, IDEs para programação, ferramentas de controle de versão e softwares para criação de assets</strong>. Conhecer e dominar estas ferramentas aumenta significativamente a produtividade e a qualidade do projeto.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-2-1',
                            title: 'Unity',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Unity</strong> é uma das engines de jogos mais populares do mundo, utilizada para criar <strong>jogos 2D, 3D, realidade virtual e aumentada</strong>. Com interface visual e programação em C#, oferece recursos como <strong>física, animação, áudio, IA e networking</strong>, além de uma Asset Store com milhares de recursos prontos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=XtQMytORBmM" target="_blank">Unity para Iniciantes</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=IlKaB1etrik" target="_blank">Primeiros Passos na Unity</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/pathway/unity-essentials" target="_blank">Unity Learn - Unity Essentials</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/index.html" target="_blank">Manual Oficial da Unity</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-2-2',
                            title: 'Editores de Código',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Visual Studio e VS Code</strong> são poderosos ambientes de desenvolvimento integrados (IDEs) para programação. O Visual Studio oferece <strong>integração completa com a Unity</strong>, incluindo debug e autocompletar, enquanto o VS Code é uma alternativa mais leve e customizável com extensões para desenvolvimento de jogos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=4SVxARbHU1M&list=PLzjwaizNOg6RQi0lTGRhhTL-yEoHq6Mt6" target="_blank">Visual Studio para Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=hHLCDSrHkN0&list=PLQyxir6TzMSVaH7Ua8Myfx9SUOwjfINrS" target="_blank">VS Code para GameDev</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://visualstudio.microsoft.com/pt-br/vs/unity-tools/" target="_blank">Visual Studio - Ferramentas para Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://code.visualstudio.com/docs/other/unity" target="_blank">VS Code - Documentação para Unity</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                    ],
                },
                {
                    id: '2-3',
                    title: 'Programação com Unity',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                A <strong>programação na Unity</strong> é realizada principalmente com <strong>C#</strong>, uma linguagem orientada a objetos poderosa e versátil. Entender como utilizar os <strong>componentes e APIs da Unity</strong> é essencial para implementar mecânicas de jogo, interações, sistemas de jogo e comportamentos de objetos.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-3-1',
                            title: 'C# com Unity',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>C#</strong> é a linguagem de programação principal utilizada na Unity. Compreender os <strong>fundamentos de C# e como aplicá-los no contexto da Unity</strong> é crucial para o desenvolvimento de jogos, incluindo classes como MonoBehaviour, uso de Coroutines, eventos, delegates e gerenciamento de memória.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=9ZEu_I-ido4" target="_blank">C# para Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=p9UAmas6iuA&list=PLARDsRa4d7UyZF3cf9tbp_6vN3M737DY2" target="_blank">Programação Avançada Unity</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/" target="_blank">Microsoft - Tour pelo C#</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.19/manual/index.html" target="_blank">Unity - Scripts como Componentes</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-3-2',
                            title: 'Input System',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O <strong>Input System da Unity</strong> é um sistema moderno para capturar <strong>entradas do usuário (teclado, mouse, gamepad, touch)</strong> de forma flexível e compatível com múltiplas plataformas. Permite criar controles responsivos, remapeáveis e adaptáveis a diferentes dispositivos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=YHC-6I_LSos" target="_blank">Input System Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Pzd8NhcRzVo" target="_blank">Controles Multiplataforma</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.19/manual/index.html" target="_blank">Unity - Manual do Input System</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/tutorial/working-with-the-new-input-system" target="_blank">Unity Learn - Trabalhando com o Novo Input System</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-3-3',
                            title: 'Física e Colisões',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O <strong>sistema de física da Unity</strong> permite simular <strong>interações físicas realistas</strong> em jogos, incluindo gravidade, colisões e forças. <strong>Colliders</strong> definem a forma para detecção de colisão, enquanto <strong>Rigidbodies</strong> controlam como os objetos reagem às forças físicas, permitindo criar interações complexas e realistas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=JO3eZ2KX-nA&list=PLm07WONRdynz0MNmrft-jAaxycWK5MDQH" target="_blank">Física na Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=_o9kax5F0-k&pp=ygUQRsOtc2ljYSBuYSBVbml0eQ%3D%3D" target="_blank">Física 2D na Unity</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/es/2019.4/Manual/PhysicsSection.html" target="_blank">Unity - Manual de Física</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/tutorial/physics-components" target="_blank">Unity Learn - Componentes de Física</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-3-4',
                            title: 'Instanciação',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Prefabs</strong> são modelos reutilizáveis de objetos de jogo completos que podem ser instanciados múltiplas vezes. A <strong>instanciação</strong> permite criar cópias desses prefabs durante o jogo, sendo essencial para sistemas de spawn de inimigos, projéteis, efeitos e outros elementos dinâmicos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=H1OkG3a1w-o" target="_blank">Prefabs e Instanciação</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=tdSmKaJvCoA&pp=ygUOT2JqZWN0IFBvb2xpbmc%3D" target="_blank">Object Pooling</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/Prefabs.html" target="_blank">Unity - Manual de Prefabs</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/tutorial/introduction-to-prefabs" target="_blank">Unity Learn - Introdução aos Prefabs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-3-5',
                            title: 'Animações',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O <strong>Animator da Unity</strong> é um sistema poderoso para criar e controlar animações em jogos. Com sua <strong>máquina de estados (State Machine)</strong>, permite definir transições entre animações, parâmetros de controle e lógica para criar movimentos fluidos e responsivos para personagens e objetos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Animação 2D na Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Ap8bGol7qBk" target="_blank">Animator Controller</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/AnimationSection.html" target="_blank">Unity - Manual de Animação</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/6000.4/Documentation/Manual/class-AnimatorController.html" target="_blank">Unity Learn - Controlando Animações</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),
                            children: []
                        },
                    ],
                },
                {
                    id: '2-4',
                    title: 'Design para Jogos',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                <strong>Design para jogo</strong> é a disciplina de criar <strong>regras, mecânicas, narrativas e experiências</strong> que tornam um jogo divertido e envolvente. Envolve a concepção de sistemas de gameplay, balanceamento, level design, feedback ao jogador e fluxo de jogo para criar experiências significativas.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-4-1', title: 'Game Loop',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Game Loop</strong> é o ciclo fundamental que executa continuamente durante um jogo, processando <strong>inputs, atualizando o estado do jogo e renderizando resultados</strong>. Na Unity, é implementado através dos métodos Update, FixedUpdate e LateUpdate, cada um com propósitos específicos no ciclo de execução.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=IFayQioG71A" target="_blank">Ciclo de Vida na Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=MfIsp28TYAQ&pp=ygUVVXBkYXRlIHZzIEZpeGVkVXBkYXRl0gcJCSgLAYcqIYzv" target="_blank">Update vs FixedUpdate</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/ExecutionOrder.html" target="_blank">Unity - Ordem de Execução de Eventos</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=IFayQioG71A" target="_blank">Brackeys - Ciclo de Vida na Unity</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-4-2', title: 'Design de Fases',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Design de fases (Level Design)</strong> é a criação de <strong>ambientes, desafios e experiências</strong> dentro de um jogo. Envolve a estruturação de espaços, posicionamento de objetos, inimigos e coletáveis, fluxo de progressão e balanceamento de dificuldade para criar níveis memoráveis e divertidos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=iNEe3KhMvXM" target="_blank">Level Design Workshop</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=xp4iJhNDJpg&pp=ygUbRGVzaWduIGRlIEZhc2VzIG5hIFByw6F0aWNh" target="_blank">Design de Fases na Prática</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.gamasutra.com/view/feature/131767/principles_of_level_design.php" target="_blank">Gamasutra - Princípios de Level Design</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=iNEe3KhMvXM" target="_blank">GDC - Level Design Workshop</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-4-3', title: 'UI/UX para Jogos',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>UI/UX para jogos</strong> abrange o design de <strong>interfaces e experiências do usuário</strong> que são intuitivas, informativas e imersivas. Uma boa interface de usuário comunica informações essenciais sem interromper o fluxo de jogo, enquanto a experiência do usuário foca na sensação geral e usabilidade do sistema de menus, HUDs e feedback visual/sonoro.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HwdweCX5aMI" target="_blank">Sistema de UI na Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=qwpKIMqntkM&pp=ygUNVVggcGFyYSBKb2dvcw%3D%3D" target="_blank">UX para Jogos</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/UIToolkits.html" target="_blank">Unity - UI Toolkits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn-unity-com.translate.goog/tutorial/working-with-ui-in-unity?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true" target="_blank">Unity Learn - Componentes de UI para Jogos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                    ],
                },
                {
                    id: '2-5',
                    title: 'Assets e Arte',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                A <strong>importação de assets na Unity</strong> é fundamental para adicionar recursos ao seu projeto. A Unity suporta uma ampla variedade de formatos de arquivo, incluindo <strong>modelos 3D, texturas, áudio e animações</strong>. O Asset Store também oferece milhares de recursos gratuitos e pagos que podem ser integrados diretamente aos seus projetos.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-5-1',
                            title: 'Importação de Assets',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>A <strong>importação de assets na Unity</strong> é fundamental para adicionar recursos ao seu projeto. A Unity suporta uma ampla variedade de formatos de arquivo, incluindo <strong>modelos 3D, texturas, áudio e animações</strong>. O Asset Store também oferece milhares de recursos gratuitos e pagos que podem ser integrados diretamente aos seus projetos.</p>

                                    <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://unity.com/pt/products/asset-manager" target="_blank">Gerenciamento de Assets</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0fGB2H1AGP8" target="_blank">Importação de Assets</a></li>
                                    </ul>

                                    <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/ImportingAssets.html" target="_blank">Unity - Manual de Importação de Assets</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://assetstore.unity.com/?srsltid=AfmBOooh7yStVppiDVCSL-QdjJY7atLmeCc4MFFGKlKTaNCYMM1pcWmu" target="_blank">Unity Learn - Pacotes da Asset Store</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=YttotvHX_TU&pp=ygUoR2FtZSBEZXYgR3VpZGUgLSBHZXJlbmNpYW1lbnRvIGRlIEFzc2V0cw%3D%3D" target="_blank">Game Dev Guide - Gerenciamento de Assets</a></li>
                                        <li><a className="text-zinc-200 underline" href="https://unity.com/blog/engine-platform/addressables-planning-and-best-practices" target="_blank">Unity Blog - Asset Bundles e Addressables</a></li>
                                    </ul>                                </div>),

                            children: []
                        },
                        {
                            id: '2-5-2',
                            title: 'Sprites e Animações 2D',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Sprites</strong> são imagens 2D utilizadas para representar personagens, objetos e elementos de interface em jogos. A Unity oferece ferramentas robustas para manipular sprites, criar <strong>animações 2D com sprite sheets</strong>, e configurar atlas de texturas para otimização. O sistema de animação 2D permite criar movimentos fluidos e expressivos para personagens e elementos do jogo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=hkaysu1Z-N8" target="_blank">Animação 2D na Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=on9nwbZngyw" target="_blank">Sprite Editor Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/SpriteEditor.html" target="_blank">Unity - Editor de Sprites</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/tutorial/introduction-to-sprite-animations" target="_blank">Unity Learn - Introdução às Animações de Sprites</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-5-3',
                            title: 'Modelos e Materiais 3D',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Modelos 3D e materiais</strong> são elementos essenciais para criar ambientes, personagens e objetos tridimensionais. A Unity suporta a importação de diversos formatos 3D (.fbx, .obj, etc.) e oferece um <strong>sistema de materiais poderoso com shaders personalizáveis</strong> para criar efeitos visuais realistas ou estilizados, adaptáveis a diferentes plataformas e capacidades de hardware.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Ir3eS8t_rXo&pp=ygUUTWF0ZXJpYWlzIGUgVGV4dHVyYXM%3D" target="_blank">Materiais e Texturas</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=VsUK9K6UbY4&list=PLzDRvYVwl53tpvp6CP6e-Mrl6dmxs9uhx" target="_blank">Shader Graph Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/AssetWorkflow.html" target="_blank">Unity - Manual de Assets 3D</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/pathway/creative-core/unit/shaders-and-materials" target="_blank">Unity Learn - Materiais e Standard Shader</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                    ],
                },
                {
                    id: '2-6',
                    title: 'Polimento e Otimização',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                A <strong>otimização de performance</strong> é crucial para garantir que seu jogo rode suavemente em diferentes dispositivos. Isso inclui técnicas como <strong>Level of Detail (LOD), occlusion culling, otimização de draw calls, baking de iluminação, gerenciamento de memória e profiling</strong> para identificar gargalos. Jogos bem otimizados proporcionam melhor experiência e alcançam um público mais amplo.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-6-1',
                            title: 'Performance',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A <strong>otimização de performance</strong> é crucial para garantir que seu jogo rode suavemente em diferentes dispositivos. Isso inclui técnicas como <strong>Level of Detail (LOD), occlusion culling, otimização de draw calls, baking de iluminação, gerenciamento de memória e profiling</strong> para identificar gargalos. Jogos bem otimizados proporcionam melhor experiência e alcançam um público mais amplo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=_wxitgdx-UI" target="_blank">Dicas de Otimização</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://unity.com/pt/how-to/performance-optimization-high-end-graphics" target="_blank">Unity - Otimização de Performance Gráfica</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/tutorial/diagnosing-performance-problems-2019-" target="_blank">Unity Learn - Resolvendo Problemas de Performance</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-6-2',
                            title: 'Efeitos Visuais',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Efeitos visuais (VFX)</strong> adicionam impacto e feedback visual ao seu jogo, desde sistemas de partículas para fogo, fumaça e explosões até pós-processamento para ajustar cores, iluminação e efeitos atmosféricos. A Unity oferece ferramentas como o <strong>Sistema de Partículas, Visual Effect Graph e o pacote de pós-processamento</strong> para criar efeitos visuais impressionantes e responsivos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=FEA1wTMJAR0" target="_blank">Efeitos de Partículas</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=TwWL5IY4Lqs&list=PLQMQNmwN3FvySzk-SdqJeRa6hpH6FYKji" target="_blank">Visual Effect Graph</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/ParticleSystems.html" target="_blank">Unity - Sistema de Partículas</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/pathway/game-development/unit/visual-effects" target="_blank">Unity Learn - Introdução aos Efeitos Visuais</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-6-3',
                            title: 'Áudio e Música',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Áudio</strong> é um componente vital para a imersão em jogos, abrangendo música de fundo, efeitos sonoros e diálogos. A Unity fornece um <strong>mixer de áudio completo com mixagem espacial 3D, efeitos DSP, grupos de mixagem e controle dinâmico de volume</strong>. Um bom design de áudio pode transformar a experiência do jogador, criando atmosfera e fornecendo feedback importante sobre eventos do jogo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=6OT43pvUyfY" target="_blank">Sistema de Áudio na Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=vOaQp2x-io0&pp=ygUaQXVkaW8gTWl4ZXIgVHV0b3JpYWwgdW5pdHnSBwkJKAsBhyohjO8%3D" target="_blank">Audio Mixer Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/AudioOverview.html" target="_blank">Unity - Visão Geral do Sistema de Áudio</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn-unity-com.translate.goog/tutorial/working-with-audio-components-2019-3?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true" target="_blank">Unity Learn - Trabalhando com Áudio</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                    ],
                },
                {
                    id: '2-7',
                    title: 'Build e Publicação',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                O processo de <strong>build para PC e Android</strong> na Unity envolve configurar as plataformas-alvo, otimizar assets e definir configurações específicas para cada plataforma. Para Android, são necessárias etapas adicionais como <strong>configuração do SDK, assinatura digital do APK e adaptações</strong> para diferentes tamanhos de tela e capacidades de hardware. A Unity facilita esse processo com ferramentas de build automatizadas e cross-platform.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-7-1',
                            title: 'Build para PC / Android',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O processo de <strong>build para PC e Android</strong> na Unity envolve configurar as plataformas-alvo, otimizar assets e definir configurações específicas para cada plataforma. Para Android, são necessárias etapas adicionais como <strong>configuração do SDK, assinatura digital do APK e adaptações</strong> para diferentes tamanhos de tela e capacidades de hardware. A Unity facilita esse processo com ferramentas de build automatizadas e cross-platform.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=QFsmKxbzjGw&pp=ugMGCgJwdBABugUEEgJwdMoFGEJ1aWxkIHBhcmEgQW5kcm9pZCB1bml0edgHAQ%3D%3D" target="_blank">Build para Android</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=2ZIY6F3SJ5o&pp=ugMGCgJwdBABugUEEgJwdMoFGEJ1aWxkIHBhcmEgV2luZG93cyB1bml0edgHAQ%3D%3D" target="_blank">Build para Windows</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/PublishingBuilds.html" target="_blank">Unity - Publicando Builds</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/course/mobile-touch/tutorial/mobile-development-techniques" target="_blank">Unity Learn - Build para Mobile</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-7-2',
                            title: 'Publicação',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Publicar seu jogo na <strong>Itch.io ou Google Play Store</strong> envolve preparar builds finalizadas, criar páginas de loja atraentes e seguir os processos específicos de cada plataforma. A <strong>Itch.io</strong> é uma plataforma indie que oferece um processo simples e flexível, enquanto a <strong>Google Play Store</strong> requer conformidade com políticas mais rigorosas, classificações de conteúdo e processo de revisão, mas proporciona acesso a um público mais amplo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=4VOxfN1Vpbo&list=PLfvOpw8k80WotNMAdJ4oMPe39t0FgaBu0" target="_blank">Publicando na Itch.io</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Y6QNfgvh8cA&pp=ygUYUHVibGljYW5kbyBuYSBQbGF5IFN0b3Jl" target="_blank">Publicando na Play Store</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://itch.io/docs/creators/getting-started" target="_blank">Itch.io - Guia para Criadores</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://developer.android.com/distribute/googleplay/start" target="_blank">Google - Publicação na Play Store</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                    ],
                },
                {
                    id: '2-8',
                    title: 'Extras',

                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                <strong>Funcionalidades avançadas</strong> que podem levar seu jogo para o próximo nível, incluindo multiplayer, sistemas de salvamento e integração com serviços web. Esses recursos adicionam profundidade e engajamento à experiência do jogador.
                            </p>
                        </div>
                    ),

                    children: [
                        {
                            id: '2-8-1',
                            title: 'Multiplayer com Photon',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Photon</strong> é uma solução popular para implementar jogos multiplayer na Unity, oferecendo <strong>servidores hospedados na nuvem e SDK robusto</strong>. Com o Photon PUN (Photon Unity Networking), é possível criar jogos multiplayer em tempo real com salas, matchmaking e sincronização de estados entre jogadores. A solução é escalável e funciona bem tanto para jogos casuais quanto para experiências mais complexas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=93SkbMpWCGo" target="_blank">Multiplayer com Photon</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=93SkbMpWCGo&t=5s&pp=ygUUUGhvdG9uIFBVTiBUdXRvcmlhbCA%3D" target="_blank">Photon PUN Tutorial</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://doc.photonengine.com/en-us/pun/current/getting-started/pun-intro" target="_blank">Photon - Introdução ao PUN</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://learn.unity.com/tutorial/setting-up-photon-unity-networking" target="_blank">Unity Learn - Fundamentos de Networking com Photon</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-8-2',
                            title: 'Salvamento e Carregamento de Jogo',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        <strong>Sistemas de salvamento e carregamento</strong> são essenciais para preservar o progresso do jogador. Na Unity, esses sistemas podem ser implementados usando <strong>PlayerPrefs para dados simples, serialização para estruturas de dados complexas, ou sistemas personalizados</strong> para grandes volumes de dados. Um bom sistema deve ser robusto contra corrupção de dados, eficiente em termos de armazenamento e transparente para o jogador.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=XOjd_qU2Ido" target="_blank">Sistema de Save na Unity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=5roZtuqZyuw" target="_blank">Save System Avançado</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/script-Serialization.html" target="_blank">Unity - Serialização de Dados</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://unity.com/pt/blog/games/persistent-data-how-to-save-your-game-states-and-settings" target="_blank">Unity Learn - Implementando Salvamento de Jogo</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                        {
                            id: '2-8-3',
                            title: 'Integração com APIs',

                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A <strong>integração com APIs e serviços web</strong> permite que seu jogo se conecte a sistemas externos para funcionalidades como <strong>autenticação de usuários, tabelas de classificação online, análise de dados, atualizações de conteúdo e microtransações</strong>. A Unity fornece classes como UnityWebRequest para realizar comunicações HTTP e JSON Utility para processamento de dados, facilitando a integração com praticamente qualquer serviço web.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=x_H2GgqjCZI&pp=ygUaQ29tdW5pY2HDp8OjbyBjb20gQVBJcyBXZWI%3D" target="_blank">Comunicação com APIs Web</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=GXvJ1RddsfQ&pp=ugMGCgJwdBABugUEEgJwdMoFElJFU1QgQVBJcyBuYSBVbml0edIHCQkoCwGHKiGM79gHAQ%3D%3D" target="_blank">REST APIs na Unity</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.unity3d.com/Manual/UnityWebRequest.html" target="_blank">Unity - UnityWebRequest</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://unity.com/learn" target="_blank">Unity Learn - Trabalhando com APIs RESTful</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ),

                            children: []
                        },
                    ],
                },
            ],

        }
    );
}