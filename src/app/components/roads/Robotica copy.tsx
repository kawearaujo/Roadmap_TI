export default function IA() {
    return (
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

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os fundamentos de robótica integram três pilares indispensáveis: matemática, física e lógica de programação. Sem compreender vetores, trigonometria e leis do movimento, é impossível controlar um robô com precisão. A lógica de programação estrutura o raciocínio para resolver problemas mecatrônicos complexos. Essa base sólida sustenta todo o aprendizado posterior em eletrônica, programação embarcada e projetos práticos.
                            </p>
                        </div>

                    ,

                    children: [
                        {
                            id: '3-1-1', title: 'Matemática para Robótica',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Vetores e matrizes controlam posição e orientação no espaço. Trigonometria calcula ângulos de juntas e trajetórias. Cinemática direta e inversa determinam a posição do efetuador a partir das juntas. Esses conceitos são aplicados diretamente em simuladores como ROS e em cálculos de movimento de qualquer robô articulado.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My" target="_blank">Math for Robotics</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=SiI6c0GIRkA" target="_blank">Robótica: Fundamentos Matemáticos</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/robotics" target="_blank">Robotics: Kinematics and Mathematical</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Linear Algebra - Khan Academy</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-1-2', title: 'Física Elétrica e Mecânica',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-1-3', title: 'Lógica de Programação',
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

                                </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-2',
                    title: 'Eletrônica',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-2-1', title: 'Conceitos da Eletricidade',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-2-2', title: 'Ferramentas Básicas',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-2-3', title: 'Sensores e Atuadores',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-2-4', title: 'Microcontroladores',
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

                                </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-3',
                    title: 'Programação',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-3-1', title: 'C/C++ com Arduino',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-3-2', title: 'Python para Robótica',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-3-3', title: 'Framework',
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

                                </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-4',
                    title: 'Mecânica',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-4-1', title: 'Motores (Servo, DC, Passo)',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-4-2', title: 'Chassis e Engrenagens',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-4-3', title: 'Modelagem 3D',
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

                                </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-5',
                    title: 'Projetos Práticos',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-5-1', title: 'Robô Seguidor de Linha',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-5-2', title: 'Robô com Controle por Bluetooth',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-5-3', title: 'Automação com Sensores',
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

                                </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-6',
                    title: 'Avançado',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-6-1', title: 'Visão Computacional com OpenCV',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-6-2', title: 'Navegação e SLAM',
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

                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-6-3', title: 'Integração com IA e Machine Learning',
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

                                </div>
                            ,
                            children: []
                        },
                    ],
                },
            ],

        }


    );
}