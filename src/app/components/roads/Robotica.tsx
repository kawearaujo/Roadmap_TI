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

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>Os fundamentos da robótica englobam conhecimentos multidisciplinares essenciais para entender e desenvolver sistemas robóticos. Incluem conceitos matemáticos, físicos e computacionais que formam a base teórica necessária antes de iniciar projetos práticos.</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://robotacademy.net.au/" target="_blank">Robot Academy - Fundamentos</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.coursera.org/specializations/robotics-fundamentals" target="_blank">Robotics Fundamentals - Coursera</a></li>
                            <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-832-underactuated-robotics-spring-2009/" target="_blank">MIT OpenCourseWare - Robótica</a></li>
                        </ul>
                    </div>

                    ,

                    children: [
                        {
                            id: '3-1-1', title: 'Matemática para Robótica',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A matemática é essencial para a robótica, abrangendo álgebra linear para transformações espaciais, cálculo para análise de movimento, geometria para planejamento de trajetórias e estatística para processamento de sensores e filtros.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Khan Academy - Álgebra Linear</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.edx.org/course/robot-mechanics-and-control-part-i" target="_blank">Mecânica e Controle de Robôs - edX</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLAQopGWlIcyaqDBW1zSKx7lHfVcOmWSWt" target="_blank">Robótica - Matemática Essencial</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-1-2', title: 'Física Elétrica e Mecânica',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A compreensão de princípios físicos é fundamental na robótica. A física elétrica aborda circuitos, campos magnéticos e transmissão de energia, enquanto a mecânica trata de forças, movimento, energia cinética e dinâmica - conceitos essenciais para construir robôs funcionais.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/science/physics/electricity-magnetism-topic" target="_blank">Khan Academy - Eletricidade e Magnetismo</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/mechanics-1" target="_blank">Engenharia Mecânica - Coursera</a></li>
                                    <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/physics/8-01sc-classical-mechanics-fall-2016/" target="_blank">MIT - Mecânica Clássica</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-1-3', title: 'Lógica de Programação',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A lógica de programação é a base para criar algoritmos que controlam o comportamento dos robôs. Envolve o desenvolvimento de raciocínio lógico, estruturas de controle, tipos de dados e funções que permitem traduzir intenções em instruções precisas para sistemas robóticos.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.codecademy.com/learn/learn-how-to-code" target="_blank">Codecademy - Aprender a Programar</a></li>
                                    <li><a className="text-blue-600 underline" href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" target="_blank">Scratch - Programação Visual</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">freeCodeCamp - Algoritmos</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-2',
                    title: 'Eletrônica',

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>A eletrônica na robótica trata dos componentes e circuitos que dão "vida" aos robôs. Inclui o estudo de componentes eletrônicos básicos, circuitos integrados, placas de desenvolvimento e interfaces que permitem que o robô interaja com o ambiente através de sensores e atuadores.</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials" target="_blank">SparkFun - Tutoriais de Eletrônica</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.adafruit.com/category/17" target="_blank">Adafruit - Componentes e Tutoriais</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.circuitbasics.com/" target="_blank">Circuit Basics - Guia para Iniciantes</a></li>
                        </ul>
                    </div>
                    ,

                    children: [
                        {
                            id: '3-2-1', title: 'Corrente, Tensão e Resistência',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>Os conceitos fundamentais de eletricidade são essenciais para entender circuitos robóticos. A corrente (fluxo de elétrons), tensão (diferença de potencial) e resistência (oposição ao fluxo) são grandezas relacionadas pela Lei de Ohm e determinam o funcionamento básico de todos os circuitos eletrônicos.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.allaboutcircuits.com/textbook/" target="_blank">All About Circuits - Livro Eletrônico</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.electronics-tutorials.ws/dccircuits/dcp_1.html" target="_blank">Lei de Ohm e Circuitos DC</a></li>
                                    <li><a className="text-blue-600 underline" href="https://phet.colorado.edu/pt_BR/simulations/circuit-construction-kit-dc" target="_blank">PhET - Simulador de Circuitos</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-2-2', title: 'Protoboard, Multímetro, Solda',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>As ferramentas básicas para construção de circuitos eletrônicos incluem a protoboard (para montagens temporárias), multímetro (para medir grandezas elétricas) e técnicas de solda (para conexões permanentes). Dominar esses elementos é essencial para o desenvolvimento prático de projetos robóticos.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials/how-to-use-a-breadboard" target="_blank">Como Usar uma Protoboard</a></li>
                                    <li><a className="text-blue-600 underline" href="https://learn.adafruit.com/multimeters" target="_blank">Guia de Multímetros - Adafruit</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.makerspaces.com/how-to-solder/" target="_blank">Técnicas de Soldagem para Eletrônica</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-2-3', title: 'Sensores e Atuadores',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>Sensores coletam dados do ambiente (luz, distância, temperatura, aceleração) enquanto atuadores permitem que o robô interaja com o mundo (motores, displays, LEDs). Estes componentes formam a interface entre o mundo físico e digital do robô, sendo fundamentais para sua autonomia e funcionalidade.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/21-arduino-modules-you-can-buy-for-less-than-2/" target="_blank">Módulos e Sensores Comuns</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.seeedstudio.com/blog/2020/01/08/types-of-sensors-for-target-detection-and-tracking/" target="_blank">Tipos de Sensores para Detecção</a></li>
                                    <li><a className="text-blue-600 underline" href="https://howtomechatronics.com/tutorials/arduino/arduino-dc-motor-control-tutorial-l298n-pwm-h-bridge/" target="_blank">Controle de Motores com Arduino</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-2-4', title: 'Microcontroladores (Arduino, ESP32)',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>Microcontroladores são os "cérebros" dos robôs simples e médios. Plataformas como Arduino e ESP32 oferecem processamento, entradas/saídas digitais e analógicas, comunicação e facilidade de programação, tornando-se elementos centrais para protótipos e projetos robóticos educacionais e amadores.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.arduino.cc/en/Guide" target="_blank">Guia Oficial Arduino</a></li>
                                    <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/getting-started-with-esp32/" target="_blank">Primeiros Passos com ESP32</a></li>
                                    <li><a className="text-blue-600 underline" href="https://create.arduino.cc/projecthub/projects/tags/robot" target="_blank">Projetos Robóticos com Arduino</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-3',
                    title: 'Programação',

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>A programação em robótica envolve criar algoritmos que controlam o comportamento do robô. Varia desde comandos simples para microcontroladores até sistemas complexos de navegação, visão computacional e inteligência artificial, utilizando diferentes linguagens adaptadas às necessidades específicas de cada projeto.</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://www.programiz.com/c-programming" target="_blank">Aprenda C Programming</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.learnpython.org/" target="_blank">Learn Python - Interativo</a></li>
                            <li><a className="text-blue-600 underline" href="https://www.robotis.us/e-manual/" target="_blank">Robotis - Manuais de Programação</a></li>
                        </ul>
                    </div>
                    ,

                    children: [
                        {
                            id: '3-3-1', title: 'C/C++ com Arduino',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A programação em C/C++ é fundamental para Arduino e muitas plataformas robóticas. Com esta linguagem, é possível controlar precisamente o hardware, otimizar o desempenho e criar desde funcionalidades básicas até sistemas complexos de controle e comunicação para robôs.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.arduino.cc/reference/en/" target="_blank">Referência Arduino C++</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.learncpp.com/" target="_blank">Tutorial Completo C++</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.tutorialspoint.com/arduino/arduino_quick_guide.htm" target="_blank">Guia Rápido Arduino</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-3-2', title: 'Python para Robótica',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>Python tornou-se uma linguagem popular na robótica devido à sua simplicidade e poderosas bibliotecas. É ideal para processamento de dados, controle de alto nível, visão computacional e integração com inteligência artificial em robôs mais avançados, sendo compatível com Raspberry Pi e outros sistemas.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.pythonrobotics.com/" target="_blank">Python Robotics</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.learnrobotics.org/blog/python-for-robotics/" target="_blank">Python para Robótica - LearnRobotics</a></li>
                                    <li><a className="text-blue-600 underline" href="https://realpython.com/python-raspberry-pi/" target="_blank">Python no Raspberry Pi</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-3-3', title: 'ROS (Robot Operating System)',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>O Robot Operating System é um framework flexível para desenvolvimento de software robótico. Não é um sistema operacional tradicional, mas oferece serviços como abstração de hardware, controle de dispositivos, comunicação entre processos e gerenciamento de pacotes, sendo amplamente usado em robótica profissional e acadêmica.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="http://wiki.ros.org/ROS/Tutorials" target="_blank">Tutoriais Oficiais ROS</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.theconstructsim.com/ros-courses-library/" target="_blank">Cursos ROS - The Construct</a></li>
                                    <li><a className="text-blue-600 underline" href="https://github.com/ros/ros_tutorials" target="_blank">Exemplos ROS - GitHub</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-4',
                    title: 'Mecânica',

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>A mecânica abrange os aspectos físicos da construção de robôs: estrutura, movimentação e interação com o ambiente. Inclui design de chassis, sistemas de transmissão, atuadores mecânicos e considerações sobre materiais, resistência e peso para criar robôs funcionais e eficientes.</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://www.instructables.com/class/Robots-Class/" target="_blank">Instructables - Classe de Robôs</a></li>
                            <li><a className="text-blue-600 underline" href="https://robotshop.com/community/tutorials/show/designing-custom-robot-chassis" target="_blank">Design de Chassis Robóticos</a></li>
                            <li><a className="text-blue-600 underline" href="https://hackaday.io/projects?tag=robotics" target="_blank">Projetos Mecânicos - Hackaday</a></li>
                        </ul>
                    </div>
                    ,

                    children: [
                        {
                            id: '3-4-1', title: 'Motores (Servo, DC, Passo)',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>Os motores são os músculos dos robôs. Servomotores oferecem controle preciso de posição, motores DC são simples e potentes para tração, e motores de passo permitem movimentos incrementais precisos. A escolha depende das necessidades de torque, velocidade, precisão e controle do projeto.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://learn.adafruit.com/adafruit-motor-selection-guide/types-of-motors" target="_blank">Guia de Seleção de Motores</a></li>
                                    <li><a className="text-blue-600 underline" href="https://howtomechatronics.com/how-it-works/how-servo-motors-work-how-to-control-servos-using-arduino/" target="_blank">Como Servomotores Funcionam</a></li>
                                    <li><a className="text-blue-600 underline" href="https://lastminuteengineers.com/stepper-motor-l298n-arduino-tutorial/" target="_blank">Controlando Motores de Passo</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-4-2', title: 'Chassis e Engrenagens',
                            content:
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O chassis é a estrutura que suporta todos os componentes do robô, enquanto as engrenagens modificam a relação entre velocidade e torque dos motores. O design adequado destes elementos considera fatores como estabilidade, resistência, peso, eficiência energética e facilidade de manutenção.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.servocity.com/motion-components/" target="_blank">Componentes Mecânicos - ServoCity</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.instructables.com/How-to-Build-Robot-Gearmotors-and-Gear-Boxes/" target="_blank">Construção de Caixas de Engrenagens</a></li>
                                        <li><a className="text-blue-600 underline" href="https://grabcad.com/library/tag/robot-chassis" target="_blank">Modelos de Chassis - GrabCAD</a></li>
                                    </ul>
                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-4-3', title: 'Modelagem 3D (Fusion, Tinkercad)',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A modelagem 3D permite projetar peças personalizadas para robôs antes da construção física. Ferramentas como Fusion 360 e Tinkercad possibilitam criar componentes estruturais, suportes para sensores e peças mecânicas que podem ser fabricadas por impressão 3D ou outros métodos de fabricação digital.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.tinkercad.com/learn/designs" target="_blank">Aprenda Tinkercad</a></li>
                                    <li><a className="text-blue-600 underline" href="https://help.autodesk.com/view/fusion360/ENU/courses/" target="_blank">Cursos Fusion 360</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.thingiverse.com/education/lessons/tags/robotics" target="_blank">Projetos Educacionais - Thingiverse</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-5',
                    title: 'Projetos Práticos',

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>Os projetos práticos são fundamentais para aplicar e integrar conhecimentos de robótica. Começando com modelos simples e progredindo para sistemas mais complexos, os projetos hands-on desenvolvem habilidades de resolução de problemas, design iterativo e domínio de diferentes tecnologias robóticas.</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://www.instructables.com/robots/" target="_blank">Instructables - Projetos de Robôs</a></li>
                            <li><a className="text-blue-600 underline" href="https://create.arduino.cc/projecthub/robotics" target="_blank">Arduino Project Hub - Robótica</a></li>
                            <li><a className="text-blue-600 underline" href="https://hackaday.io/list/160039-robotics-projects" target="_blank">Hackaday - Projetos Robóticos</a></li>
                        </ul>
                    </div>
                    ,

                    children: [
                        {
                            id: '3-5-1', title: 'Robô Seguidor de Linha',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>O robô seguidor de linha é um projeto inicial popular que utiliza sensores infravermelhos para detectar uma linha preta em superfície clara (ou vice-versa). Este projeto ensina conceitos de sensoriamento, controle básico de motores, lógica de decisão e introduz algoritmos de controle como PID para movimentos suaves.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.instructables.com/Line-Following-Robot/" target="_blank">Tutorial Completo - Seguidor de Linha</a></li>
                                    <li><a className="text-blue-600 underline" href="https://howtomechatronics.com/tutorials/arduino/arduino-line-follower-robot/" target="_blank">Arduino Seguidor de Linha - HowToMechatronics</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=QbSvNds0NnE" target="_blank">Vídeo Tutorial PID para Seguidor</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-5-2', title: 'Robô com Controle por Bluetooth',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>O controle por Bluetooth permite comandar robôs remotamente usando smartphones ou computadores. Este projeto introduz conceitos de comunicação sem fio, protocolos de comunicação, desenvolvimento de interfaces de controle e programação para recepção e interpretação de comandos no robô.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://howtomechatronics.com/tutorials/arduino/arduino-and-hc-05-bluetooth-module-tutorial/" target="_blank">Arduino com Módulo Bluetooth HC-05</a></li>
                                    <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/esp32-bluetooth-classic-arduino-ide/" target="_blank">ESP32 com Bluetooth Classic</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.instructables.com/Arduino-Bluetooth-RC-Car-Android-Controlled/" target="_blank">Carro RC Arduino Controlado por Android</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-5-3', title: 'Automação com Sensores',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>Os projetos de automação com sensores aplicam conceitos de robótica para criar sistemas que respondem automaticamente às condições ambientais. Utilizando sensores de temperatura, umidade, movimento e outros, estes sistemas podem controlar dispositivos, coletar dados ou alertar sobre situações específicas.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/9-home-automation-projects-for-beginner-with-arduino/" target="_blank">Projetos de Automação Residencial</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.instructables.com/Arduino-Automatic-Watering-System-For-Plants-Garde/" target="_blank">Sistema Automático de Irrigação</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.hackster.io/projects/tags/sensors" target="_blank">Hackster.io - Projetos com Sensores</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                    ],
                },
                {
                    id: '3-6',
                    title: 'Avançado',

                    content: <div className="space-y-2 text-sm text-gray-700">
                        <p>Tópicos avançados em robótica exploram tecnologias de ponta e métodos sofisticados para criar robôs mais inteligentes e capazes. Incluem algoritmos complexos, integração com IA, sistemas de percepção avançados e técnicas que aproximam os robôs da autonomia e adaptabilidade encontradas em sistemas biológicos.</p>
                        <ul className="list-disc list-inside">
                            <li><a className="text-blue-600 underline" href="https://www.edx.org/course/autonomous-mobile-robots" target="_blank">Robôs Móveis Autônomos - edX</a></li>
                            <li><a className="text-blue-600 underline" href="https://courses.nvidia.com/courses/course-v1:DLI+S-RX-02+V2/" target="_blank">NVIDIA - Robótica com Inteligência Artificial</a></li>
                            <li><a className="text-blue-600 underline" href="https://spectrum.ieee.org/robotics" target="_blank">IEEE Spectrum - Avanços em Robótica</a></li>
                        </ul>
                    </div>
                    ,

                    children: [
                        {
                            id: '3-6-1', title: 'Visão Computacional com OpenCV',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A visão computacional permite que robôs "enxerguem" e interpretem o ambiente visual. Com a biblioteca OpenCV, é possível implementar detecção de objetos, rastreamento de movimento, reconhecimento facial e análise de imagens, adicionando capacidades perceptivas sofisticadas aos sistemas robóticos.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://docs.opencv.org/master/d9/df8/tutorial_root.html" target="_blank">Tutoriais Oficiais OpenCV</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.pyimagesearch.com/category/raspberry-pi/" target="_blank">Visão Computacional no Raspberry Pi</a></li>
                                    <li><a className="text-blue-600 underline" href="https://github.com/opencv/opencv/tree/master/samples/python" target="_blank">Exemplos Python OpenCV - GitHub</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-6-2', title: 'Navegação e SLAM',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>SLAM (Simultaneous Localization and Mapping) permite que robôs construam mapas de ambientes desconhecidos enquanto rastreiam sua própria posição. Combinado com algoritmos de planejamento de rotas, SLAM forma a base da navegação autônoma em robôs móveis, sendo crucial para aplicações como veículos autônomos e drones.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://medium.com/robotics-with-ros/introduction-to-slam-9c02d3486cc2" target="_blank">Introdução ao SLAM com ROS</a></li>
                                    <li><a className="text-blue-600 underline" href="https://github.com/AtsushiSakai/PythonRobotics" target="_blank">Python Robotics - Algoritmos de Navegação</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.coursera.org/lecture/mobile-robot/introduction-to-slam-W12Mk" target="_blank">Coursera - Introdução ao SLAM</a></li>
                                </ul>
                            </div>
                            ,
                            children: []
                        },
                        {
                            id: '3-6-3', title: 'Integração com IA e Machine Learning',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>A integração de inteligência artificial e aprendizado de máquina com robótica cria sistemas que podem aprender com a experiência, reconhecer padrões e tomar decisões complexas. Estas tecnologias permitem robôs que se adaptam a novos ambientes, melhoram com o tempo e resolvem problemas de formas inovadoras.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/js/tutorials" target="_blank">TensorFlow.js - Tutoriais</a></li>
                                    <li><a className="text-blue-600 underline" href="https://gym.openai.com/docs/" target="_blank">OpenAI Gym - Aprendizado por Reforço</a></li>
                                    <li><a className="text-blue-600 underline" href="https://github.com/topics/robotics-machine-learning" target="_blank">GitHub - Robótica com Machine Learning</a></li>
                                </ul>
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