export default function IA() {
    return (
        {

            id: '5',
            title: 'Sistemas Embarcados',
            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>Sistemas Embarcados são sistemas computacionais dedicados, projetados para executar funções específicas, geralmente com restrições de processamento, memória e energia. Presentes em diversos dispositivos do nosso cotidiano, desde eletrodomésticos até equipamentos industriais avançados, estes sistemas combinam hardware e software para atender requisitos específicos de aplicação.</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.embeddedrelated.com/showarticle/1350.php" target="_blank">Introdução aos Sistemas Embarcados</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.edx.org/learn/embedded-systems" target="_blank">Cursos Online de Sistemas Embarcados</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.eetimes.com/" target="_blank">Notícias e Tendências em Eletrônica Embarcada</a></li>
                    </ul>
                </div>
            ),
            children: [
                {
                    id: '5-1',
                    title: 'Fundamentos',
                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Os fundamentos em sistemas embarcados abrangem conhecimentos essenciais de lógica digital, arquitetura de computadores, eletrônica básica e sistemas numéricos. Estes conceitos formam a base teórica necessária para compreender como os componentes de hardware interagem e como informações são representadas e processadas em sistemas digitais.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.nand2tetris.org/" target="_blank">Do NAND ao Tetris - Construindo um Computador</a></li>
                                <li><a className="text-blue-600 underline" href="https://allaboutcircuits.com/textbook/" target="_blank">Livro Online de Circuitos Eletrônicos</a></li>
                                <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/" target="_blank">MIT OpenCourseWare - Circuitos e Eletrônica</a></li>
                            </ul>
                        </div>,
                    children: [
                        {
                            id: '5-1-1',
                            title: 'Lógica Digital',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A Lógica Digital é o estudo dos fundamentos das operações lógicas e suas implementações em circuitos eletrônicos. Abrange portas lógicas, álgebra booleana, circuitos combinacionais e sequenciais, que são a base para a construção de sistemas digitais mais complexos como microcontroladores e computadores.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.electronics-tutorials.ws/logic/logic_1.html" target="_blank">Tutoriais de Lógica Digital</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.falstad.com/circuit/" target="_blank">Simulador de Circuitos Online</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials/digital-logic" target="_blank">Fundamentos de Lógica Digital na Prática</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-1-2',
                            title: 'Arquitetura de Computadores',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A Arquitetura de Computadores estuda a organização e estrutura dos sistemas computacionais, incluindo CPU, memória, barramentos e periféricos. Compreender estes conceitos é essencial para o desenvolvimento eficiente de software e hardware em sistemas embarcados, permitindo otimizações específicas para cada plataforma.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.cs.cornell.edu/courses/cs3410/2019sp/" target="_blank">Curso de Arquitetura de Computadores - Cornell</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.bottomupcs.com/" target="_blank">Bottom-Up Computer Science</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.sciencedirect.com/topics/computer-science/embedded-processor" target="_blank">Arquitetura de Processadores Embarcados</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-1-3',
                            title: 'Eletrônica Básica',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A Eletrônica Básica aborda os componentes fundamentais dos circuitos eletrônicos, como resistores, capacitores, indutores, diodos e transistores. O conhecimento destes componentes e seus comportamentos é crucial para projetar interfaces entre microcontroladores e o mundo físico, bem como para a depuração de problemas em hardware.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/science/electrical-engineering" target="_blank">Khan Academy - Engenharia Elétrica</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.circuitlab.com/" target="_blank">CircuitLab - Simulação e Design</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.build-electronic-circuits.com/" target="_blank">Guia para Construção de Circuitos Eletrônicos</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-1-4',
                            title: 'Sistemas Numéricos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Os Sistemas Numéricos são fundamentais para a computação, especialmente os sistemas binário, octal e hexadecimal. A compreensão de como números são representados e manipulados em diferentes bases é essencial para programação de baixo nível, comunicação com periféricos e depuração de sistemas embarcados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.mathsisfun.com/binary-number-system.html" target="_blank">Fundamentos do Sistema Binário</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.geeksforgeeks.org/number-system-and-base-conversions/" target="_blank">Conversão entre Sistemas Numéricos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.electronics-tutorials.ws/binary/bin_1.html" target="_blank">Operações em Sistemas Binários</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-2',
                    title: 'Programação e Ferramentas',
                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A programação de sistemas embarcados exige conhecimento de linguagens específicas e ferramentas de desenvolvimento. Dominar linguagens como C e Assembly, juntamente com ferramentas de controle de versão e simulação, permite criar software eficiente e confiável para dispositivos com recursos limitados de processamento e memória.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.embedded.com/tips-for-improving-embedded-c-coding-efficiency/" target="_blank">Dicas para Programação Eficiente em C Embarcado</a></li>
                                <li><a className="text-blue-600 underline" href="https://opencores.org/" target="_blank">OpenCores - Biblioteca de Componentes Open Source</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.embedded.com/debugging-techniques-for-embedded-systems/" target="_blank">Técnicas de Depuração para Sistemas Embarcados</a></li>
                            </ul>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-2-1',
                            title: 'Linguagem C',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A Linguagem C é amplamente utilizada em sistemas embarcados devido à sua eficiência, portabilidade e capacidade de interagir diretamente com o hardware. Com C, é possível criar código otimizado para dispositivos com recursos limitados, manipular memória e periféricos, e implementar algoritmos complexos com controle preciso sobre a execução.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.learn-c.org/" target="_blank">Tutorial Interativo de C</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.embedded.com/effective-c-tips-for-embedded-systems/" target="_blank">C Efetivo para Sistemas Embarcados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/kozross/awesome-c" target="_blank">Awesome C - Recursos e Bibliotecas</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-2-2',
                            title: 'Linguagem Assembly',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A Linguagem Assembly fornece controle direto sobre o hardware do processador, permitindo otimizações extremas de desempenho e tamanho de código. Em sistemas embarcados críticos ou com severas limitações de recursos, o Assembly é utilizado para rotinas de inicialização, manipulação de interrupções e operações que exigem timing preciso.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tutorialspoint.com/assembly_programming/" target="_blank">Tutoriais de Programação Assembly</a></li>
                                        <li><a className="text-blue-600 underline" href="https://godbolt.org/" target="_blank">Compiler Explorer - Visualize Código Assembly</a></li>
                                        <li><a className="text-blue-600 underline" href="https://azeria-labs.com/writing-arm-assembly-part-1/" target="_blank">Programação Assembly para ARM</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-2-3',
                            title: 'Git e GitHub',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Git e GitHub são ferramentas essenciais para controle de versão e colaboração em projetos de software, incluindo sistemas embarcados. Estas ferramentas permitem rastrear mudanças no código, reverter para versões anteriores, gerenciar branches para diferentes funcionalidades e colaborar efetivamente em equipe durante o desenvolvimento.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://try.github.io/" target="_blank">Aprenda Git de Forma Interativa</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/topics/embedded-systems" target="_blank">Projetos de Sistemas Embarcados no GitHub</a></li>
                                        <li><a className="text-blue-600 underline" href="https://gitflow.readthedocs.io/" target="_blank">GitFlow para Gerenciamento de Branches</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-2-4',
                            title: 'Ferramentas de Simulação',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Ferramentas de simulação permitem testar sistemas embarcados antes da implementação em hardware, economizando tempo e recursos. Simuladores podem emular o comportamento de microcontroladores, periféricos e até sistemas completos, facilitando o desenvolvimento, depuração e testes de software embarcado em ambiente controlado.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.labcenter.com/proteus/" target="_blank">Proteus - Simulação de Circuitos e Microcontroladores</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.simulide.com/" target="_blank">SimulIDE - Simulador de Circuitos em Tempo Real</a></li>
                                        <li><a className="text-blue-600 underline" href="https://wokwi.com/" target="_blank">Wokwi - Simulador Online de Arduino e ESP32</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-3',
                    title: 'Microcontroladores',
                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Microcontroladores são o coração dos sistemas embarcados, integrando CPU, memória e periféricos em um único chip. A escolha da plataforma adequada e o domínio de suas características específicas são fundamentais para o desenvolvimento de projetos eficientes, considerando requisitos como desempenho, consumo de energia e conectividade.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://maker.pro/custom/tutorial/how-to-choose-the-right-microcontroller-for-your-project" target="_blank">Como Escolher o Microcontrolador Certo</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.mouser.com/technical-resources/conversion-calculators/microcontrollers/" target="_blank">Ferramentas de Comparação de Microcontroladores</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.embedded.com/understanding-microcontroller-power-optimization-techniques/" target="_blank">Técnicas de Otimização de Energia</a></li>
                            </ul>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-3-1',
                            title: 'Conceitos de Microcontroladores',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Os conceitos fundamentais de microcontroladores abrangem sua arquitetura interna, ciclo de instrução, registradores, memória e periféricos integrados. Compreender estes elementos permite explorar todo o potencial do dispositivo, implementando soluções otimizadas para requisitos específicos de aplicação e recursos disponíveis.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.microchip.com/en-us/education/resources" target="_blank">Recursos Educacionais da Microchip</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.embedded.com/understanding-microcontroller-architectures/" target="_blank">Entendendo Arquiteturas de Microcontroladores</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.adafruit.com/memories-of-an-arduino" target="_blank">Gerenciamento de Memória em Microcontroladores</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-3-2',
                            title: 'Arduino',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Arduino é uma plataforma de prototipagem eletrônica de código aberto, baseada em hardware e software fáceis de usar. Ideal para iniciantes e projetos educacionais, o Arduino oferece um ambiente de desenvolvimento simplificado, extensa documentação e uma comunidade ativa, facilitando a implementação de diversos projetos embarcados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank">Tutoriais Oficiais do Arduino</a></li>
                                        <li><a className="text-blue-600 underline" href="https://create.arduino.cc/projecthub" target="_blank">Arduino Project Hub - Projetos da Comunidade</a></li>
                                        <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/arduino-projects/" target="_blank">Projetos Práticos com Arduino</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-3-3',
                            title: 'ESP32 / ESP8266',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>ESP32 e ESP8266 são microcontroladores populares com Wi-Fi e Bluetooth integrados, ideais para projetos IoT. Com alta capacidade de processamento, baixo consumo energético e custo acessível, estes dispositivos permitem criar aplicações conectadas sofisticadas, desde automação residencial até monitoramento industrial e wearables.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/esp32-web-server-arduino-ide/" target="_blank">Criando Servidores Web com ESP32</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.espressif.com/projects/esp-idf/en/latest/" target="_blank">Documentação Oficial da Espressif - ESP-IDF</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.instructables.com/ESP8266-and-ESP32-Projects/" target="_blank">Projetos Práticos com ESP8266/ESP32</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-3-4',
                            title: 'STM32 / PIC',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Os microcontroladores STM32 (ST) e PIC (Microchip) são amplamente utilizados em aplicações industriais e comerciais devido à sua robustez, variedade de periféricos e amplo suporte. Estas plataformas oferecem opções para diversas necessidades, desde dispositivos simples de 8 bits até sistemas complexos de 32 bits com alto desempenho.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html" target="_blank">Documentação Oficial dos STM32</a></li>
                                        <li><a className="text-blue-600 underline" href="https://microchipdeveloper.com/software-services" target="_blank">Recursos para Desenvolvimento com PIC</a></li>
                                        <li><a className="text-blue-600 underline" href="https://deepbluembedded.com/stm32-projects-tutorials/" target="_blank">Tutoriais e Projetos com STM32</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-4',
                    title: 'Sistemas Operacionais de Tempo Real (RTOS)',
                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Sistemas Operacionais de Tempo Real (RTOS) permitem o gerenciamento eficiente de recursos e tarefas em sistemas embarcados, garantindo que operações críticas sejam executadas dentro de prazos determinísticos. O uso de RTOS facilita o desenvolvimento de aplicações complexas, melhorando a modularidade, manutenibilidade e reuso de código.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.freertos.org/RTOS.html" target="_blank">Conceitos Fundamentais de RTOS</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.embedded.com/fundamentals-of-real-time-operating-systems/" target="_blank">Fundamentos de Sistemas Operacionais de Tempo Real</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.ti.com/rtos" target="_blank">Recursos sobre RTOS da Texas Instruments</a></li>
                            </ul>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-4-1',
                            title: 'Conceito de RTOS',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Sistemas Operacionais de Tempo Real (RTOS) são sistemas operacionais projetados para aplicações com requisitos temporais críticos. Diferentemente dos sistemas operacionais convencionais, um RTOS garante que determinadas tarefas sejam executadas dentro de prazos previsíveis e determinísticos, essenciais para aplicações como controle industrial, aviônicos e dispositivos médicos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.embedded.com/introduction-to-real-time-operating-systems/" target="_blank">Introdução aos Sistemas Operacionais de Tempo Real</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.digikey.com/en/maker/projects/introduction-to-rtos-part-1-what-is-a-real-time-operating-system/4b43be5c069e427ca70a21a1bcb8f7b7" target="_blank">O que é um Sistema Operacional de Tempo Real</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.osrtos.com/" target="_blank">Comparativo de Sistemas Operacionais de Tempo Real</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-4-2',
                            title: 'FreeRTOS',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>FreeRTOS é um dos sistemas operacionais de tempo real mais populares para microcontroladores e pequenos sistemas embarcados. Open source, portável e escalável, oferece recursos essenciais como escalonamento de tarefas, semáforos, filas e temporizadores, com um kernel compacto que exige poucos recursos de processamento e memória.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://freertos.org/tutorial/" target="_blank">Tutoriais Oficiais do FreeRTOS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.freertos.org/features.html" target="_blank">Características e Funcionalidades do FreeRTOS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/FreeRTOS/FreeRTOS" target="_blank">Código Fonte e Exemplos no GitHub</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-4-3',
                            title: 'Comunicação entre Tarefas',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A comunicação entre tarefas em um RTOS é essencial para coordenar ações e compartilhar dados em sistemas multitarefa. Mecanismos como filas, semáforos, mutexes e grupos de eventos permitem a sincronização e troca de informações entre tarefas de forma segura, evitando problemas como condições de corrida e deadlocks.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.freertos.org/Inter-Task-Communication.html" target="_blank">Comunicação entre Tarefas no FreeRTOS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.digikey.com/en/maker/projects/introduction-to-rtos-solution-to-part-4-queues/7e0a2c8d09a947ebaa5eecf3b468887i" target="_blank">Implementando Filas em RTOS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.embedded.com/task-synchronization-tools-in-embedded-systems/" target="_blank">Ferramentas de Sincronização de Tarefas</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-5',
                    title: 'Periféricos e Comunicação',
                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Periféricos e protocolos de comunicação são fundamentais em sistemas embarcados, permitindo a interação com o mundo externo e a comunicação entre componentes. O domínio destes elementos possibilita o desenvolvimento de sistemas que podem captar informações do ambiente, processar dados e realizar ações de controle.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials/serial-communication" target="_blank">Fundamentos de Comunicação Serial</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.embedded.com/understanding-modern-digital-modulation-techniques/" target="_blank">Técnicas Modernas de Modulação Digital</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.digikey.com/en/maker/blogs/2019/how-to-choose-the-right-communication-protocol-for-your-project" target="_blank">Escolhendo o Protocolo Certo</a></li>
                            </ul>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-5-1',
                            title: 'GPIO',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>GPIO (General Purpose Input/Output) são pinos de entrada e saída de uso geral presentes em microcontroladores, permitindo a interação com componentes externos como LEDs, botões, relés e sensores digitais. Através do controle destes pinos, é possível ler sinais digitais externos ou controlar dispositivos, servindo como interface básica entre o mundo digital e o físico.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.raspberrypi.org/documentation/usage/gpio/" target="_blank">Guia GPIO da Raspberry Pi</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials/raspberry-gpio/all" target="_blank">Tutorial GPIO da SparkFun</a></li>
                                        <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/esp32-pinout-reference-gpios/" target="_blank">Referência de Pinagem GPIO para ESP32</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-5-2',
                            title: 'PWM, ADC, DAC',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>PWM (Modulação por Largura de Pulso), ADC (Conversor Analógico-Digital) e DAC (Conversor Digital-Analógico) são periféricos essenciais em sistemas embarcados para interface com o mundo analógico. PWM permite controlar potência através de pulsos digitais, ideal para LEDs e motores. ADC converte sinais analógicos em valores digitais para leitura de sensores, enquanto DAC realiza o processo inverso, gerando tensões analógicas a partir de valores digitais.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials/pulse-width-modulation/all" target="_blank">Entendendo a Modulação por Largura de Pulso</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.electronics-tutorials.ws/combination/analogue-to-digital-converter.html" target="_blank">Funcionamento de Conversores Analógico-Digitais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.allaboutcircuits.com/technical-articles/digital-to-analog-conversion-the-r-2r-dac/" target="_blank">Conversores Digital-Analógicos: Princípios e Aplicações</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-5-3',
                            title: 'Protocolos: I2C, SPI, UART',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>I2C, SPI e UART são protocolos de comunicação serial fundamentais em sistemas embarcados. I2C utiliza apenas dois fios para conectar múltiplos dispositivos em barramento compartilhado. SPI oferece comunicação mais rápida com seleção individual de dispositivos. UART permite comunicação assíncrona ponto-a-ponto com implementação simples. Cada protocolo possui vantagens específicas para diferentes aplicações e requisitos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials/i2c/all" target="_blank">Guia Completo sobre I2C</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all" target="_blank">Entendendo a Interface SPI</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.circuitbasics.com/basics-uart-communication/" target="_blank">Fundamentos da Comunicação UART</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-5-4',
                            title: 'Comunicação sem fio',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A comunicação sem fio em sistemas embarcados permite conectividade remota através de tecnologias como Wi-Fi, Bluetooth, LoRa, ZigBee e RF. Essas tecnologias variam em alcance, consumo energético, taxa de transmissão e complexidade de implementação, sendo essenciais para aplicações IoT, redes de sensores, controle remoto e monitoramento à distância em ambientes onde conexões físicas são impraticáveis.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.electronicshub.org/wireless-communication-technologies/" target="_blank">Comparativo de Tecnologias de Comunicação Sem Fio</a></li>
                                        <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/esp32-bluetooth-low-energy-ble-arduino-ide/" target="_blank">Bluetooth Low Energy com ESP32</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.thethingsnetwork.org/docs/lorawan/what-is-lorawan/" target="_blank">Introdução à Tecnologia LoRaWAN</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-6',
                    title: 'Aplicações Práticas',
                    content: <div>Algumas Aplicações Práticas</div>,
                    children: [
                        {
                            id: '5-6-1',
                            title: 'Leitura de Sensores',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A leitura de sensores é uma aplicação fundamental em sistemas embarcados, permitindo a coleta de dados do ambiente físico como temperatura, umidade, pressão, luz, movimento e gases. O processo envolve interface com sensores analógicos ou digitais, condicionamento de sinais, calibração e processamento de dados para converter leituras brutas em informações significativas que orientam decisões e ações do sistema.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/complete-guide-for-dht11dht22-humidity-and-temperature-sensor-with-arduino/" target="_blank">Guia Completo para Sensores DHT de Temperatura e Umidade</a></li>
                                        <li><a className="text-blue-600 underline" href="https://lastminuteengineers.com/bmp180-arduino-tutorial/" target="_blank">Utilizando Sensores de Pressão BMP180</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.adafruit.com/adafruit-tsl2591/overview" target="_blank">Sensores de Luz de Alta Precisão</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-6-2',
                            title: 'Controle de Motores',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O controle de motores em sistemas embarcados envolve diferentes tecnologias para acionar e controlar motores DC, servomotores, motores de passo e brushless. Utilizando técnicas como PWM, pontes H, drivers especializados e algoritmos de controle PID, é possível implementar desde simples rotações até movimentos precisos para robótica, automação industrial, impressoras 3D e diversos dispositivos eletromecânicos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://howtomechatronics.com/tutorials/arduino/arduino-dc-motor-control-tutorial-l298n-pwm-h-bridge/" target="_blank">Controle de Motores DC com L298N</a></li>
                                        <li><a className="text-blue-600 underline" href="https://lastminuteengineers.com/a4988-stepper-motor-driver-arduino-tutorial/" target="_blank">Controlando Motores de Passo com A4988</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.digikey.com/en/articles/controlling-brushless-dc-motors-with-microcontrollers" target="_blank">Controle de Motores BLDC com Microcontroladores</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-6-3',
                            title: 'Projetos com Display',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Projetos com displays oferecem interfaces visuais em sistemas embarcados, utilizando tecnologias como LCD, OLED, TFT e e-paper. Estas interfaces permitem apresentar informações, status do sistema, medições de sensores e menus interativos. A implementação envolve bibliotecas gráficas, gerenciamento de recursos limitados e considerações de design de interface para criar experiências de usuário eficientes em dispositivos com restrições de energia e processamento.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/guide-for-oled-display-with-arduino/" target="_blank">Guia para Displays OLED com Arduino</a></li>
                                        <li><a className="text-blue-600 underline" href="https://learn.adafruit.com/adafruit-gfx-graphics-library" target="_blank">Biblioteca Gráfica GFX para Displays</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.waveshare.com/wiki/E-Paper_Display_Series" target="_blank">Trabalhando com Displays E-Paper</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-6-4',
                            title: 'Integração com Apps e APIs',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A integração de sistemas embarcados com aplicativos móveis e APIs web expande suas funcionalidades, permitindo controle remoto, monitoramento em tempo real e análise de dados em nuvem. Esta conexão geralmente utiliza comunicação HTTP/HTTPS, MQTT ou WebSockets, com implementação de autenticação, criptografia e serialização de dados. O desenvolvimento pode envolver serviços como Firebase, AWS IoT, Blynk ou plataformas customizadas para IoT.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/" target="_blank">Comunicação MQTT com ESP32</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.baldengineer.com/mqtt-tutorial.html" target="_blank">Tutorial de MQTT para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.blynk.io/en/" target="_blank">Plataforma Blynk para IoT</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-7',
                    title: 'Avançado',
                    content:
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Tópicos avançados em sistemas embarcados envolvem o aprofundamento em tecnologias de hardware customizável, design de circuitos, programação de baixo nível e implementação de medidas de segurança. Estes conhecimentos permitem o desenvolvimento de soluções embarcadas complexas, eficientes e seguras para aplicações críticas.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.fpga4fun.com/" target="_blank">Tutoriais e Projetos com FPGA</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.kicad.org/discover/testimonials/" target="_blank">Projetos Reais Desenvolvidos com KiCad</a></li>
                                <li><a className="text-blue-600 underline" href="https://interrupt.memfault.com/blog/embedded-security-principles" target="_blank">Princípios de Segurança em Sistemas Embarcados</a></li>
                            </ul>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-7-1',
                            title: 'Projetos com FPGA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>FPGAs (Field-Programmable Gate Arrays) são dispositivos de hardware reconfigurável que permitem implementar circuitos digitais personalizados. Diferentemente dos microcontroladores, FPGAs oferecem paralelismo real e capacidade de processamento determinístico em alta velocidade. O desenvolvimento envolve linguagens de descrição de hardware como VHDL e Verilog, permitindo criar desde controladores de periféricos até complexos sistemas de processamento de sinais e aceleradores de algoritmos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nandland.com/articles/fpga-101-fpgas-for-beginners.html" target="_blank">FPGA para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.fpga4fun.com/HDLTutorial.html" target="_blank">Tutorial de HDL para FPGAs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.intel.com/content/www/us/en/developer/topic-technology/fpga-academic/overview.html" target="_blank">Recursos Acadêmicos de FPGA da Intel</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-7-2',
                            title: 'Design com KiCad',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>KiCad é uma suíte de software open source para design de placas de circuito impresso (PCB). Utilizado para projetar hardware personalizado para sistemas embarcados, o KiCad oferece ferramentas para desenho de esquemáticos, layout de placas, visualização 3D e geração de arquivos de fabricação. O domínio desta ferramenta permite criar circuitos otimizados, reduzir interferências, melhorar desempenho térmico e preparar projetos para produção industrial.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://kicad.org/help/documentation/" target="_blank">Documentação Oficial do KiCad</a></li>
                                        <li><a className="text-blue-600 underline" href="https://contextualelectronics.com/courses/getting-to-blinky-4-0/" target="_blank">Curso "Getting to Blinky" para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://hackaday.io/projects?tag=kicad" target="_blank">Projetos com KiCad no Hackaday</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-7-3',
                            title: 'Programação Bare-Metal',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Programação Bare-Metal refere-se ao desenvolvimento de software que interage diretamente com o hardware, sem camadas intermediárias como sistemas operacionais. Esta abordagem proporciona controle total sobre o dispositivo, melhor desempenho e previsibilidade temporal, sendo crucial para sistemas críticos e de tempo real. Envolve configuração direta de registradores, gerenciamento manual de memória e implementação de rotinas de inicialização e tratamento de interrupções.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://interrupt.memfault.com/blog/zero-to-main-1" target="_blank">Série "Zero to Main" de Programação Bare-Metal</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.embedded.com/bare-metal-programming-cc-on-the-metal-part-1/" target="_blank">Programação C/C++ Bare-Metal</a></li>
                                        <li><a className="text-blue-600 underline" href="https://embeddedinventor.com/a-beginners-guide-to-arm-cortex-m-bare-metal-development/" target="_blank">Guia para Iniciantes em ARM Cortex-M Bare-Metal</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-7-4',
                            title: 'Segurança em Sistemas Embarcados',
                            content: <div className="space-y-2 text-sm text-gray-700">
                                <p>Segurança em sistemas embarcados é cada vez mais crítica, principalmente com a expansão da IoT e dispositivos conectados. Esta área abrange proteção contra ataques físicos e remotos, implementação de criptografia para comunicação segura, autenticação robusta, secure boot, armazenamento seguro de chaves, atualização segura de firmware e proteção contra engenharia reversa. Práticas adequadas de segurança são essenciais para proteger dados sensíveis e garantir o funcionamento correto do sistema.</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.iotsecurityfoundation.org/best-practice-guidelines/" target="_blank">Diretrizes de Boas Práticas da IoT Security Foundation</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.embedded.com/implementing-symmetric-key-cryptography-for-iot-devices/" target="_blank">Implementando Criptografia em Dispositivos IoT</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.arm.com/architecture/security-features" target="_blank">Recursos de Segurança da Arquitetura ARM</a></li>
                                </ul>
                            </div>,
                            children: []
                        }
                    ]
                }
            ]

        }


    );
}