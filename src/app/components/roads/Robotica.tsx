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
                    title: '🟢 Fundamentos',

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
                                        Lei de Ohm, circuitos em série e paralelo, tensão e corrente são conceitos elétricos essenciais para trabalhar com componentes eletrônicos. Na parte mecânica, força, torque, atrito e transmissão de potência determinam o comportamento físico dos robôs. Compreender ambas as disciplinas evita danos a componentes e permite dimensionar corretamente os sistemas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLxI8Can9yAHevRkQnSgviIgnzCH3Nss_Y" target="_blank">Eletricidade Básica - Professor Marcelo Wanderley</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=gNME2TFzOZQ" target="_blank">Física Mecânica para Robótica - Khan Academy</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/science/electrical-engineering" target="_blank">Física Elétrica - Khan Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/modernrobotics" target="_blank">Mechanics for Robotics - Coursera</a></li>
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
                                        Lógica de programação aplicada à robótica envolve criar algoritmos para tomada de decisão, controle de movimento e resposta a sensores. Máquinas de estado finitas são amplamente usadas para gerenciar comportamentos como seguir linha, desviar de obstáculos e executar sequências de ações com base em condições do ambiente.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=8mei6uVttho" target="_blank">Lógica de Programação para Robótica - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=AwBBkvhQ4s0" target="_blank">State Machines for Robotics - Articulated Robotics</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.cursoemvideo.com/curso/logica-de-programacao/" target="_blank">Lógica de Programação - Curso em Vídeo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/robotics/eth-zurich-programming-for-robotics-introduction-to-ros" target="_blank">Programming for Robotics - ETH Zürich</a></li>
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
                    title: '🟡 Eletrônica',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Eletrônica é o coração físico dos robôs. Compreender os conceitos básicos da eletricidade, usar instrumentos de medição corretamente, integrar sensores e atuadores e programar microcontroladores como Arduino são habilidades práticas fundamentais. Sem eletrônica, um robô é apenas código sem interface com o mundo físico, incapaz de perceber o ambiente ou agir sobre ele.
                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-2-1', title: 'Conceitos da Eletricidade',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Tensão, corrente, resistência e potência são os quatro conceitos básicos da eletricidade. A Lei de Ohm relaciona essas grandezas em circuitos. Entender como calcular resistores, filtros capacitivos e reguladores de tensão é essencial para proteger componentes e garantir que sensores e atuadores recebam a alimentação correta.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLxI8Can9yAHevRkQnSgviIgnzCH3Nss_Y" target="_blank">Eletricidade para Robótica - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=nb4ovfwqup8" target="_blank">Electronics Basics - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/science/electrical-engineering" target="_blank">Electrical Engineering - Khan Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/interface-with-arduino" target="_blank">Electronics for Makers - Coursera</a></li>
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
                                        Multímetro mede tensão, corrente e resistência em circuitos. Osciloscópio visualiza sinais elétricos no tempo, essencial para debugar comunicação serial e PWM. Ferro de solda conecta componentes permanentemente em placas. Protoboard permite montar circuitos temporários sem solda durante o desenvolvimento e prototipagem rápida.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ybaVbp1rKBM" target="_blank">Como Usar Multímetro - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=VQxgM7hx-u4" target="_blank">Ferramentas de Eletrônica - FilipeFlop</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/c/WRKits" target="_blank">Eletrônica Básica - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.instructables.com/class/Electronics-Class/" target="_blank">Electronics Tools - Instructables</a></li>
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
                                        Sensores permitem ao robô perceber o ambiente: ultrassônico mede distância, infravermelho detecta obstáculos e linha, temperatura monitora condições. Atuadores executam ações: servomotores controlam posição angular, motores DC geram movimento contínuo e LEDs fornecem feedback visual. A integração correta entre sensores e atuadores é o núcleo dos sistemas robóticos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0Rvv18qJEpE" target="_blank">Sensores e Atuadores com Arduino - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLGs0VKk2DiYx6CMdOQg_HXkquTPQ2la8t" target="_blank">Arduino Sensors Tutorial - Paul McWhorter</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub" target="_blank">Arduino Sensors - Arduino Project Hub</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/interface-with-arduino" target="_blank">Electronics and Sensors - Coursera</a></li>
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
                                        Microcontroladores são processadores compactos com memória e pinos de I/O integrados para controle de sistemas embarcados. Arduino é o mais popular para prototipagem por sua facilidade. ESP32 adiciona Wi-Fi e Bluetooth. STM32 e PIC são usados em aplicações industriais com maior performance e recursos avançados de tempo real.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=37R4-CsC6Wc" target="_blank">Introdução a Microcontroladores - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=jKT4H0bstH8" target="_blank">Microcontrollers Explained - ByteMe</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/microcontrollers-c" target="_blank">Microcontrollers and the C Programming Language - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://docs.arduino.cc/learn/starting-guide/getting-started-arduino" target="_blank">Introduction to Arduino - Arduino</a></li>
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
                    title: '🟠 Programação',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                A programação de robôs combina linguagens de baixo nível para controle preciso de hardware com frameworks de alto nível para comportamentos complexos. C/C++ com Arduino é o ponto de entrada mais acessível. Python com suas bibliotecas de robótica oferece prototipagem rápida. ROS (Robot Operating System) é o framework padrão da indústria para robôs autônomos e de pesquisa.
                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-3-1', title: 'C/C++ com Arduino',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A linguagem Arduino é baseada em C/C++ com abstrações para facilitar o controle de hardware. Funções como pinMode, digitalWrite, analogRead e delay são os blocos fundamentais. Para robótica mais sofisticada, é necessário avançar para interrupções, timers, comunicação serial e controle PID de motores.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLxI8Can9yAHeTSERpJFAolM9OsVuHgzGX" target="_blank">Arduino para Iniciantes - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLGs0VKk2DiYx6CMdOQg_HXkquTPQ2la8t" target="_blank">Arduino C++ Programming - Paul McWhorter</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.arduino.cc" target="_blank">Arduino - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/arduino" target="_blank">Arduino Programming - Coursera</a></li>
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
                                        Python é amplamente usado em robótica de alto nível, especialmente com ROS2 e bibliotecas como OpenCV para visão e NumPy para cálculos. Sua sintaxe simples acelera prototipagem de algoritmos complexos. Em plataformas como Raspberry Pi, Python é a linguagem principal para integrar percepção, planejamento e controle.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=M_F9bC8oBbA" target="_blank">Python for Robotics - Sentdex</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=V28-H2ZPsQQ" target="_blank">Python com Raspberry Pi - Curso em Vídeo</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.theconstructsim.com/robotigniteacademy_learnros/ros-courses-library/python-robotics/" target="_blank">Python for Robotics - The Construct</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.freecodecamp.org/news/python-robotics/" target="_blank">Robotics with Python - freeCodeCamp</a></li>
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
                                        ROS (Robot Operating System) é o framework padrão para robótica avançada, fornecendo comunicação entre nós, simulação com Gazebo, visualização com RViz e centenas de pacotes prontos. ROS2 é a versão moderna com suporte a tempo real e sistemas distribuídos. É amplamente usado em pesquisa acadêmica e robótica industrial.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLunhqkrRNRhYAffV8JDiFOatQXuU-NnxT" target="_blank">ROS2 para Iniciantes - Articulated Robotics</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=OEBn1ii5osk" target="_blank">ROS Tutorial - The Construct</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.theconstructsim.com/robotigniteacademy_learnros/ros-courses-library/" target="_blank">ROS for Beginners - The Construct</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/robotics/eth-zurich-programming-for-robotics-introduction-to-ros" target="_blank">Programming for Robotics ROS - ETH Zürich</a></li>
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
                    title: '🔵 Mecânica',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                A parte mecânica é a estrutura física que dá forma e capacidade de movimento ao robô. Motores convertem energia elétrica em movimento, chassis e engrenagens transmitem e suportam forças, e modelagem 3D permite projetar peças customizadas para impressão. Compreender a mecânica garante que o robô seja robusto, eficiente e capaz de realizar as tarefas para as quais foi projetado.
                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-4-1', title: 'Motores (Servo, DC, Passo)',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Servomotores controlam posição angular precisa, usados em braços robóticos. Motores DC oferecem rotação contínua controlada por PWM, ideais para rodas. Motores de passo movem-se em incrementos fixos sem necessidade de encoder, usados em impressoras 3D e CNC. Escolher o motor certo é fundamental para cada aplicação robótica.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=CgQKbxEtzNM" target="_blank">Motores para Robótica - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=dn9bITAFMoY" target="_blank">Servo vs DC vs Stepper - DroneBot Workshop</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub/topics/motors" target="_blank">Motors for Robotics - Arduino Project Hub</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/mobile-robot" target="_blank">Control of Mobile Robots - Coursera</a></li>
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
                                        O chassis é a estrutura que suporta todos os componentes do robô. Engrenagens transmitem torque e ajustam velocidade entre motor e roda. Relação de transmissão determina o compromisso entre velocidade e força. Materiais como alumínio, acrílico e PLA impresso em 3D cada um têm vantagens de peso, resistência e custo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=J0lGJMpC5kQ" target="_blank">Chassis para Robôs - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0Rvv18qJEpE" target="_blank">Gears and Transmission - Engineer Guy</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/modernrobotics-course1" target="_blank">Mechanical Design for Robotics - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/robotics" target="_blank">Robot Mechanics - edX</a></li>
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
                                        Modelagem 3D permite criar peças customizadas para impressão em FDM, tornando o robô único e adaptado às necessidades do projeto. Fusion 360 e FreeCAD são ferramentas populares para design de peças mecânicas. Conhecer tolerâncias de impressão e como projetar encaixes e furos para fixação é essencial para peças funcionais.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLmA_xUT-8UlKTnMsMgXCqyBnxqFUqfM_V" target="_blank">Fusion 360 para Robótica - Lars Christensen</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=_HEvhclR4-o" target="_blank">FreeCAD para Iniciantes</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.autodesk.com/certification/learn/catalog/product/fusion-360" target="_blank">Fusion 360 - Autodesk Learning</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.instructables.com/class/3D-Printing-Class/" target="_blank">3D Modeling for Robotics - Instructables</a></li>
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
                    title: '🟣 Projetos Práticos',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Projetos práticos são onde teoria e habilidades se consolidam em experiência real. Construir um robô seguidor de linha ensina controle PID e leitura de sensores. Um robô controlado por Bluetooth integra comunicação wireless e controle remoto. Projetos de automação com sensores aplicam tudo em contextos do mundo real, formando o portfólio prático do roboticista.
                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-5-1', title: 'Robô Seguidor de Linha',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        O robô seguidor de linha usa sensores infravermelhos para detectar a linha no chão e ajusta a velocidade dos motores para segui-la. É um projeto clássico que ensina leitura de sensores analógicos, controle diferencial de velocidade e algoritmos PID para suavizar o movimento e corrigir desvios em tempo real.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=nAoTFprIGc0" target="_blank">Robô Seguidor de Linha com Arduino - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=8gHQhHQkCgc" target="_blank">Line Following Robot - Paul McWhorter</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub/projects/tags/line-follower" target="_blank">Line Follower Robot - Arduino Project Hub</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.instructables.com/robots/" target="_blank">Robotics Projects - Instructables</a></li>
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
                                        Controlar um robô via Bluetooth usando o módulo HC-05 e um app no smartphone integra comunicação serial, parsing de comandos e controle de motores. Ensina a estrutura de protocolo de comunicação entre dispositivos, tratamento de dados recebidos e como criar apps simples para Android com MIT App Inventor.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=aM2ktMKAunw" target="_blank">Robô Bluetooth com Arduino - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=fQCBVKbSNOc" target="_blank">Bluetooth Robot Car - Paul McWhorter</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub/projects/tags/bluetooth" target="_blank">Bluetooth Projects - Arduino Project Hub</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://appinventor.mit.edu" target="_blank">MIT App Inventor - MIT</a></li>
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
                                        Projetos de automação como irrigação inteligente, monitoramento de temperatura e controle de acesso com RFID aplicam sensores em contextos práticos do cotidiano. Integrar múltiplos sensores, gerenciar prioridades de leitura e tomar decisões baseadas em múltiplas variáveis são desafios que simulam projetos industriais reais.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0Rvv18qJEpE" target="_blank">Automação com Arduino - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=TKN9QkBmODQ" target="_blank">Home Automation Project - Dronebot Workshop</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/iot" target="_blank">IoT and Automation - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub" target="_blank">Arduino Projects - Arduino Project Hub</a></li>
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
                    title: '⚫ Avançado',

                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os tópicos avançados de robótica levam o profissional para a fronteira da área. Visão computacional com OpenCV permite que robôs percebam e interpretem o ambiente visualmente. Navegação autônoma e SLAM resolvem o problema de localização e mapeamento simultâneos. A integração com IA e machine learning cria robôs capazes de aprender e se adaptar a ambientes desconhecidos.
                            </p>
                        </div>
                    ,

                    children: [
                        {
                            id: '3-6-1', title: 'Visão Computacional com OpenCV',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        OpenCV integrado a plataformas como Raspberry Pi permite ao robô detectar objetos, reconhecer cores, rastrear movimento e identificar faces em tempo real. Com Python e uma câmera USB, é possível criar robôs que seguem objetos coloridos, evitam obstáculos visualmente e realizam inspeção automatizada em linhas de produção.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLQVvvaa0QuDdttJXlLtAJxJetJcqmqlQq" target="_blank">OpenCV com Raspberry Pi - sentdex</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=AwBBkvhQ4s0" target="_blank">Computer Vision for Robotics - Articulated Robotics</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.freecodecamp.org/news/opencv-full-course/" target="_blank">OpenCV Tutorial - freeCodeCamp</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/robotics-perception" target="_blank">Computer Vision for Robotics - Coursera</a></li>
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
                                        SLAM (Simultaneous Localization and Mapping) permite ao robô construir um mapa do ambiente enquanto se localiza nele. Algoritmos como EKF-SLAM e particle filter são implementados via pacotes ROS como gmapping e cartographer. LiDAR e câmeras de profundidade são os sensores mais usados para criar mapas 2D e 3D.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLgnQpQtFTOGQrZ4O5QzbIHgl3b1JHimN_" target="_blank">SLAM Explained - Cyrill Stachniss</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=n3gVKfj8W8s" target="_blank">ROS Navigation Stack - Articulated Robotics</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/robotics/eth-zurich-autonomous-mobile-robots" target="_blank">Autonomous Mobile Robots - edX ETH Zürich</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/robotics-learning" target="_blank">Robot Mapping - Coursera</a></li>
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
                                        Integrar ML a robôs permite criar comportamentos adaptativos: reconhecimento de gestos para controle, detecção de objetos para manipulação e aprendizado por reforço para navegação autônoma. TensorFlow Lite e ONNX Runtime são frameworks otimizados para inferência em hardware embarcado com recursos limitados.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=M_F9bC8oBbA" target="_blank">Machine Learning for Robotics - Sentdex</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=Qq9F9uApLXA" target="_blank">TensorFlow Lite for Robotics - TensorFlow</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.udacity.com/course/artificial-intelligence-for-robotics--cs373" target="_blank">AI for Robotics - Udacity</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/robotics-learning" target="_blank">Robotics and AI - Coursera</a></li>
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