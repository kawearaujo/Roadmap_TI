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
                    title: '🟢 Fundamentos',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os fundamentos de sistemas embarcados integram lógica digital, arquitetura de computadores, eletrônica básica e sistemas numéricos. Entender como dados são representados em binário e hexadecimal, como portas lógicas formam circuitos e como a arquitetura interna de microcontroladores funciona é indispensável. Essa base permite programar com consciência do hardware subjacente, resultando em código mais eficiente e confiável.
                            </p>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-1-1',
                            title: 'Lógica Digital',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Lógica digital é a base do hardware de qualquer sistema embarcado. Portas AND, OR, NOT, NAND e NOR constroem circuitos combinacionais. Flip-flops e registradores formam circuitos sequenciais com memória. Mapas de Karnaugh simplificam expressões booleanas. Entender esses conceitos é essencial para compreender o funcionamento interno dos microcontroladores.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm" target="_blank">Lógica Digital Completo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=gI-qXk7XojA" target="_blank">Digital Logic</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://nptel.ac.in/courses/108105132" target="_blank">Digital Circuits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/computing/ap-computer-science-principles/computers-101" target="_blank">Logic Gates</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-1-2',
                            title: 'Arquitetura de Computadores',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        A arquitetura de computadores descreve como processadores executam instruções: ciclo fetch-decode-execute, pipeline, registradores, memória cache e barramentos. Em embarcados, arquiteturas RISC como ARM Cortex-M são dominantes. Entender o modelo de memória, mapeamento de registradores e espaço de endereçamento é fundamental para programação bare-metal eficiente.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=FZGugFqdr60" target="_blank">Computer Architecture - CrashCourse</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PL2F1GnPKwMhRCmn1h4M3kP4KOqAON1e37" target="_blank">ARM Architecture for Embedded</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/comparch" target="_blank">Computer Architecture - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/embedded-systems" target="_blank">Embedded Systems Architecture - edX</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-1-3',
                            title: 'Eletrônica Básica',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Resistores, capacitores, indutores, diodos e transistores são os componentes passivos e ativos fundamentais em circuitos embarcados. Transistores BJT e MOSFET são usados como chaves e amplificadores. Reguladores de tensão garantem alimentação estável. Entender datasheets e dimensionar corretamente cada componente evita danos ao hardware.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLxI8Can9yAHevRkQnSgviIgnzCH3Nss_Y" target="_blank">Eletrônica para Embarcados - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLwjK_iyK4LLCAN89YWFgRXnKI6sXoIFGa" target="_blank">Electronics Fundamentals - All About Electronics</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic" target="_blank">Electronic Circuits - Khan Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/eecs16a" target="_blank">Fundamentals of Electrical Engineering - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-1-4',
                            title: 'Sistemas Numéricos',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Sistemas numéricos são a linguagem do hardware digital. Binário representa dados com 0 e 1. Hexadecimal simplifica a leitura de endereços e registradores. BCD codifica dígitos decimais. Complemento de dois representa números negativos em inteiros com sinal. Converter fluentemente entre bases é habilidade básica em qualquer desenvolvimento embarcado.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ZL-LhaaMTTE" target="_blank">Sistemas Numéricos - Neso Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=LpuPe81bc2w" target="_blank">Binary, Hex and Decimal - CrashCourse</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/computing/ap-computer-science-principles/computers-101/digital-data-representation/a/bits-and-binary" target="_blank">Number Systems - Khan Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://nptel.ac.in/courses/117106086" target="_blank">Digital Systems - NPTEL</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-2',
                    title: '🟡 Programação e Ferramentas',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                A programação de sistemas embarcados exige domínio de linguagens de baixo nível que interagem diretamente com hardware. C é a linguagem padrão da indústria por sua eficiência e controle. Assembly é essencial para entender o funcionamento mais íntimo do processador e otimizar trechos críticos. Git versiona o firmware e ferramentas de simulação validam o design antes de gravar no hardware real.
                            </p>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-2-1',
                            title: 'Linguagem C',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        C é a linguagem dominante em sistemas embarcados por combinar alto controle de hardware com portabilidade. Ponteiros, gerenciamento de memória, estruturas de bits, operações bitwise e acesso direto a registradores são conceitos críticos. Qualificadores como volatile e const têm significados especiais em código embarcado que diferem do uso em software de propósito geral.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PL2F1GnPKwMhRCmn1h4M3kP4KOqAON1e37" target="_blank">C para Sistemas Embarcados - Jacob Sorber</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=KJgsSFOSQv0" target="_blank">C Programming Full Course - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.freecodecamp.org/news/the-c-beginners-handbook/" target="_blank">C Programming - freeCodeCamp</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/embedded-software-hardware" target="_blank">Embedded C - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-2-2',
                            title: 'Linguagem Assembly',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Assembly é a linguagem de mais baixo nível, com correspondência direta às instruções do processador. Em embarcados, é usada para rotinas de startup, handlers de interrupção críticos e otimização de trechos de tempo real. Entender Assembly ajuda a depurar código C analisando o código gerado pelo compilador e otimizar uso de registradores.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=gfmRrPjnEw4" target="_blank">ARM Assembly for Beginners</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=tpIctyqH29Q" target="_blank">Assembly Language - CrashCourse</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://nptel.ac.in/courses/106102064" target="_blank">Assembly Language - NPTEL</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/assembly-language" target="_blank">ARM Assembly - edX</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-2-3',
                            title: 'Git e GitHub',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Versionar firmware com Git é essencial em projetos embarcados profissionais. O .gitignore deve excluir arquivos gerados como binários e objetos compilados. Tags marcam versões de firmware relacionadas a releases de hardware. Boas mensagens de commit descrevendo mudanças de hardware ou comportamento facilitam rastreabilidade de bugs introduzidos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=UBAX-13g8OM" target="_blank">Git para Embedded - Jacob Sorber</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx" target="_blank">Git Tutorial - Corey Schafer</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.cursoemvideo.com/curso/git-e-github/" target="_blank">Git e GitHub - Curso em Vídeo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/version-control-with-git" target="_blank">Version Control with Git - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },

                        {
                            id: '5-2-4',
                            title: 'Ferramentas de Simulação',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Proteus e SimulIDE simulam circuitos com microcontroladores antes de gravar no hardware real, economizando tempo e evitando danos. QEMU emula plataformas ARM para desenvolvimento sem hardware físico. Analisadores lógicos como o Saleae capturam e decodificam comunicação serial, SPI e I2C para depuração de protocolo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=5NiPQpxF5vY" target="_blank">Proteus Tutorial - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=V_AGWMWlCfU" target="_blank">SimulIDE para Arduino</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.udemy.com/course/proteus-pcb-design/" target="_blank">Proteus Simulation - Udemy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/embedded-systems" target="_blank">Embedded Systems Simulation - edX</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-3',
                    title: '🟠 Microcontroladores',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Microcontroladores são o coração dos sistemas embarcados. Arduino é o ponto de entrada ideal pelo ecossistema acessível. ESP32 adiciona conectividade Wi-Fi e Bluetooth para IoT. STM32 e PIC são as plataformas profissionais mais usadas na indústria, com HALs robustas, suporte a RTOS e ampla documentação. Cada plataforma tem um ecossistema de ferramentas e comunidades próprios.
                            </p>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-3-1',
                            title: 'Conceitos de Microcontroladores',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Microcontroladores integram CPU, memória Flash e RAM, periféricos como GPIO, UART e ADC em um único chip. Diferem de microprocessadores por serem completos para aplicações dedicadas. Conceitos como clock, ciclos de instrução, memória mapeada em registradores e vetores de interrupção são fundamentais para qualquer plataforma embarcada.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=jKT4H0bstH8" target="_blank">Microcontrollers Explained - Jacob Sorber</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=37R4-CsC6Wc" target="_blank">Introdução a Microcontroladores - WR Kits</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/microcontrollers-c" target="_blank">Microcontrollers and the C Language - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/embedded-systems" target="_blank">Introduction to Embedded Systems - edX</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-3-2',
                            title: 'Arduino',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Arduino é a plataforma de prototipagem mais popular para iniciantes em embarcados. Sua IDE simplificada, vasta biblioteca de shields e comunidade ativa tornam o aprendizado acessível. Para avançar além do Arduino, é importante entender o hardware subjacente (ATmega, ARM) e programar diretamente os registradores sem depender de abstrações da biblioteca.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLxI8Can9yAHeTSERpJFAolM9OsVuHgzGX" target="_blank">Arduino para Iniciantes - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=zJ-LqeX_fLU" target="_blank">Arduino Full Course - freeCodeCamp</a></li>
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
                            ),
                            children: []
                        },
                        {
                            id: '5-3-3',
                            title: 'ESP32 / ESP8266',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        ESP32 é um microcontrolador dual-core com Wi-Fi e Bluetooth integrados, ideal para IoT e projetos conectados. Suporta programação via Arduino IDE, ESP-IDF (framework nativo) e MicroPython. ESP8266 é o predecessor mais simples e barato. Ambos têm ADC, PWM, UART, SPI e I2C, com farta documentação e comunidade ativa.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLxI8Can9yAHdG8tw2QofrU02IuAEVyGlL" target="_blank">ESP32 para Iniciantes - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=xPlN_Tk3VLQ" target="_blank">ESP32 Full Guide - Random Nerd Tutorials</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://randomnerdtutorials.com/learn-esp32-with-arduino-ide/" target="_blank">ESP32 - Random Nerd Tutorials</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/iot" target="_blank">IoT with ESP32 - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-3-4',
                            title: 'STM32 / PIC',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        STM32 da ST Microelectronics é a família de microcontroladores ARM Cortex-M mais usada na indústria. Programado via STM32CubeIDE com HAL robusta. PIC da Microchip é amplamente usado em equipamentos médicos e automotivos. Ambos exigem conhecimento mais profundo de datasheets, periféricos e configuração de clock para uso profissional.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLXSyc11qLa1a4Tqbz228dPZfMrs-KRpzA" target="_blank">STM32 para Iniciantes - Phil's Lab</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=DBGPHcIwGNs" target="_blank">PIC Microcontroller Tutorial - Microchip</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.st.com/content/st_com/en/support/learning/stm32-education.html" target="_blank">STM32 - STMicroelectronics Learning</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/embedded-systems/the-university-of-texas-at-austin-embedded-systems-shape-the-world-microcontroller-input-output" target="_blank">ARM Embedded Systems - edX</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-4',
                    title: '🔵 Sistemas Operacionais de Tempo Real',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                RTOSes (Real-Time Operating Systems) permitem que microcontroladores executem múltiplas tarefas de forma determinística, com prazos garantidos. Em sistemas mais complexos, gerenciar concorrência manualmente torna-se inviável. FreeRTOS é o RTOS open source mais usado no mundo embarcado. Conceitos como scheduling, semáforos e filas são essenciais para qualquer desenvolvimento com RTOS.
                            </p>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-4-1',
                            title: 'Conceito de RTOS',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Um RTOS garante que tarefas críticas sejam executadas dentro de prazos determinísticos, diferente de sistemas operacionais de propósito geral. Conceitos como preempção, prioridade de tarefas, latência de interrupção e jitter são fundamentais. A diferença entre hard real-time (prazo nunca pode ser violado) e soft real-time define a criticidade do sistema.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=F321087yYy4" target="_blank">RTOS Explained - Digikey</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PL2F1GnPKwMhRCmn1h4M3kP4KOqAON1e37" target="_blank">Real-Time Operating Systems - Jacob Sorber</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/real-time-systems" target="_blank">Real-Time Operating Systems - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.freertos.org/about-RTOS.html" target="_blank">RTOS Introduction - FreeRTOS</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-4-2',
                            title: 'FreeRTOS',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        FreeRTOS é o RTOS open source mais popular para microcontroladores, portado para centenas de plataformas incluindo Arduino, ESP32 e STM32. Oferece scheduler preemptivo, tarefas com prioridade, filas, semáforos e mutexes. É mantido pela Amazon como AWS FreeRTOS com suporte a conectividade IoT em nuvem.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLEBQazB0HUyQ4hAPU1cJED6t3DU0h34bz" target="_blank">FreeRTOS Tutorial - Digikey</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=qsflCf6ahXU" target="_blank">FreeRTOS com ESP32 - WR Kits</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.freertos.org/Documentation/RTOS_book.html" target="_blank">FreeRTOS - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.udemy.com/course/mastering-rtos-hands-on-with-freertos-arduino-and-stm32fx/" target="_blank">Mastering FreeRTOS - Udemy</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-4-3',
                            title: 'Comunicação entre Tarefas',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Em RTOS, tarefas se comunicam via primitivas de sincronização. Filas (queues) passam dados entre tarefas de forma thread-safe. Semáforos coordenam acesso a recursos compartilhados. Mutexes previnem condições de corrida. Grupos de eventos permitem que tarefas aguardem múltiplas condições. Escolher a primitiva correta previne deadlocks e garante determinismo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=F321087yYy4" target="_blank">FreeRTOS Queues and Semaphores - Digikey</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=kP-pP6FEu8I" target="_blank">RTOS Inter-task Communication - Jacob Sorber</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.freertos.org/Documentation/161204_Mastering_the_FreeRTOS_Real_Time_Kernel-A_Hands-On_Tutorial_Guide.pdf" target="_blank">FreeRTOS Inter-Task Communication</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/real-time-systems" target="_blank">Embedded RTOS - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-5',
                    title: '🟣 Periféricos e Comunicação',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Periféricos e protocolos de comunicação são os meios pelos quais microcontroladores interagem com o mundo externo e com outros dispositivos. GPIO controla pinos digitais, PWM gera sinais de controle, ADC lê sinais analógicos e DAC gera tensões analógicas. I2C, SPI e UART são os protocolos seriais mais usados para comunicar com sensores, displays e módulos externos.
                            </p>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-5-1',
                            title: 'GPIO',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        GPIO (General Purpose I/O) configura pinos como entrada ou saída digital. PWM (Pulse Width Modulation) controla intensidade de LEDs e velocidade de motores variando o duty cycle. ADC converte sinais analógicos como temperatura em valores digitais. DAC realiza o processo inverso, gerando tensões analógicas para áudio e controle de atuadores.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0Rvv18qJEpE" target="_blank">GPIO, PWM e ADC - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=_F73taCi2Uw" target="_blank">STM32 GPIO and PWM - Phil's Lab</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/embedded-systems/the-university-of-texas-at-austin-embedded-systems-shape-the-world-microcontroller-input-output" target="_blank">GPIO and ADC - Embedded Systems - edX</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://docs.arduino.cc/learn/microcontrollers/analog-input" target="_blank">Arduino Peripherals - Arduino Documentation</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-5-2',
                            title: 'PWM, ADC, DAC',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        GPIO (General Purpose I/O) configura pinos como entrada ou saída digital. PWM (Pulse Width Modulation) controla intensidade de LEDs e velocidade de motores variando o duty cycle. ADC converte sinais analógicos como temperatura em valores digitais. DAC realiza o processo inverso, gerando tensões analógicas para áudio e controle de atuadores.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0Rvv18qJEpE" target="_blank">GPIO, PWM e ADC - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=_F73taCi2Uw" target="_blank">STM32 GPIO and PWM - Phil's Lab</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/embedded-systems/the-university-of-texas-at-austin-embedded-systems-shape-the-world-microcontroller-input-output" target="_blank">GPIO and ADC - Embedded Systems - edX</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://docs.arduino.cc/learn/microcontrollers/analog-input" target="_blank">Arduino Peripherals - Arduino Documentation</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-5-3',
                            title: 'Protocolos: I2C, SPI, UART',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        I2C usa dois fios (SDA e SCL) para conectar múltiplos dispositivos num barramento endereçável, ideal para sensores de baixa velocidade. SPI usa quatro fios com velocidade superior para displays e memórias flash. UART é comunicação serial assíncrona ponto-a-ponto usada para debug e módulos como GPS e Bluetooth. Cada protocolo tem trade-offs de pinos, velocidade e distância.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=IyGwvGzrqp8" target="_blank">I2C, SPI e UART Explicados - Ben Eater</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=sVnJCMGfVrM" target="_blank">Protocolos de Comunicação - WR Kits</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.digikey.com.br/en/articles/the-basics-of-uart-communication" target="_blank">Serial Protocols - Digikey</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/interface-with-arduino" target="_blank">Communication Protocols - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-5-4',
                            title: 'Comunicação sem fio',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Wi-Fi via ESP32, Bluetooth clássico e BLE, LoRa para longas distâncias e Zigbee para redes mesh são as principais tecnologias de comunicação sem fio em embarcados. MQTT é o protocolo padrão para IoT por ser leve e eficiente em redes instáveis. A escolha da tecnologia depende de alcance, consumo de energia e frequência de transmissão.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=xPlN_Tk3VLQ" target="_blank">ESP32 WiFi e MQTT - Random Nerd Tutorials</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=hMOwbNUpDQA" target="_blank">LoRa para IoT - Andreas Spiess</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/iot-wireless-cloud-computing" target="_blank">IoT Wireless - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.hivemq.com/mqtt-essentials/" target="_blank">MQTT Tutorial - HiveMQ</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-6',
                    title: '🔴 plicações Práticas',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                As aplicações práticas consolidam o aprendizado em projetos reais que combinam hardware e software. Leitura de sensores é o projeto de entrada mais comum. Controle de motores é essencial em robótica e automação industrial. Projetos com display criam interfaces visuais para sistemas embarcados. Integrações com plataformas IoT como AWS e Azure conectam dispositivos à nuvem.
                            </p>
                        </div>,
                    children: [
                        {
                            id: '5-6-1',
                            title: 'Leitura de Sensores',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Integrar sensores como DHT22 (temperatura e umidade), BMP280 (pressão e altitude), MPU6050 (acelerômetro e giroscópio) e HC-SR04 (ultrassônico) é prática fundamental em embarcados. Cada sensor tem seu protocolo de comunicação e timing específico. Tratar dados brutos, aplicar filtros e calibrar leituras são habilidades essenciais para dados confiáveis.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0Rvv18qJEpE" target="_blank">Sensores com Arduino e ESP32 - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=xPlN_Tk3VLQ" target="_blank">Sensor Integration - Random Nerd Tutorials</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub/projects/tags/sensor" target="_blank">Sensor Projects - Arduino Project Hub</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/iot" target="_blank">IoT Sensing - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-6-2',
                            title: 'Controle de Motores',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Controlar motores DC via driver L298N ou ponte H, servomotores via PWM e motores de passo via driver A4988 são habilidades práticas fundamentais. Implementar controle PID para velocidade e posição é o próximo nível, garantindo resposta suave e precisa mesmo com perturbações externas no sistema de controle.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=CgQKbxEtzNM" target="_blank">Controle de Motor DC com Arduino - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=wkfEZmsQqiA" target="_blank">PID Controller for Motors - Brian Douglas</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub/projects/tags/motor" target="_blank">Motor Control - Arduino Project Hub</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/control-of-mobile-robots" target="_blank">Control Systems - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-6-3',
                            title: 'Projetos com Display',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Displays LCD 16x2 via I2C, OLED 128x64 e TFT coloridos são amplamente usados para interfaces em sistemas embarcados. Bibliotecas como U8g2 e Adafruit GFX simplificam o desenho de texto, gráficos e ícones. Criar menus de navegação, gráficos de dados em tempo real e dashboards locais são habilidades valiosas em projetos industriais e IoT.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=1Kd8PbNY5-Y" target="_blank">OLED Display com Arduino - WR Kits</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=rq5yPJbX_uk" target="_blank">TFT Display ESP32 - Random Nerd Tutorials</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://randomnerdtutorials.com/esp32-ssd1306-oled-display-arduino-ide/" target="_blank">Display Projects - Random Nerd Tutorials</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://create.arduino.cc/projecthub/projects/tags/display" target="_blank">Embedded Display - Arduino Project Hub</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-6-4',
                            title: 'Integrações',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Integrar sistemas embarcados com plataformas IoT como AWS IoT Core, Azure IoT Hub e Google Cloud IoT permite monitoramento remoto e controle via nuvem. Node-RED oferece programação visual para fluxos IoT. Grafana com InfluxDB cria dashboards de telemetria em tempo real, fechando o ciclo completo de um sistema IoT industrial.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=xPlN_Tk3VLQ" target="_blank">ESP32 com AWS IoT - Random Nerd Tutorials</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ksGeUD26Mw0" target="_blank">Node-RED com ESP32 - Andreas Spiess</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.aws.training/Details/eLearning?id=60697" target="_blank">AWS IoT Core - AWS Training</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/iot-wireless-cloud-computing" target="_blank">IoT Cloud Integration - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-7',
                    title: '⚫ Avançado',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os tópicos avançados de sistemas embarcados atendem às demandas da indústria de maior sofisticação técnica. FPGAs permitem criar hardware personalizado em lógica programável. KiCad possibilita projetar PCBs profissionais. Programação bare-metal elimina abstrações para máximo controle e eficiência. Segurança em embarcados tornou-se crítica com a expansão da IoT e sistemas conectados.
                            </p>
                        </div>
                    ,
                    children: [
                        {
                            id: '5-7-1',
                            title: 'Projetos com FPGA',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        FPGAs (Field-Programmable Gate Arrays) são circuitos integrados que podem ser reprogramados para implementar qualquer lógica digital. Programados em VHDL ou Verilog, são usados em processamento de sinal, telecomunicações e prototipagem de chips. Xilinx e Intel (Altera) dominam o mercado, com placas de desenvolvimento como DE10-Nano e Arty acessíveis para aprendizado.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLnAoag7Ew-vr1M98Q5K8nHPMy6BD-mVa3" target="_blank">FPGA para Iniciantes - nandland</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=6RL6Ah-bGqs" target="_blank">VHDL Tutorial - nandland</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://nandland.com" target="_blank">FPGA Design - nandland.com</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/fpga-hardware-description-languages" target="_blank">FPGA Design for Embedded Systems - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-7-2',
                            title: 'Design com KiCad',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        KiCad é uma suíte open source para design de PCBs (Printed Circuit Boards) profissionais. Permite criar esquemáticos, designar footprints, rotear trilhas e gerar arquivos Gerber para fabricação. Saber projetar PCBs transforma protótipos em produtos, eliminando a dependência de protoboards e garantindo confiabilidade e miniaturização.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=aVUqaB4LyJs" target="_blank">KiCad Tutorial Completo - Phil's Lab</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=0QnRzZQFGSI" target="_blank">PCB Design com KiCad - Contextual Electronics</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.kicad.org" target="_blank">KiCad EDA - KiCad Documentation</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/pcb-design" target="_blank">PCB Design - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-7-3',
                            title: 'Programação Bare-Metal',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Programação bare-metal significa controlar o microcontrolador diretamente via registradores, sem HAL ou RTOS. Configurar clock, inicializar stack, escrever handlers de interrupção e gerenciar periféricos manualmente resulta em código mínimo e máxima eficiência. É essencial para sistemas com restrições severas de memória ou requisitos de determinismo extremo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLc_vA4r0r3Gr76SrnjBsxWBStfYLCdBq3" target="_blank">Bare Metal Programming STM32 - Low Level Learning</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PL2F1GnPKwMhRCmn1h4M3kP4KOqAON1e37" target="_blank">ARM Bare Metal - Jacob Sorber</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/embedded-systems" target="_blank">Bare Metal Embedded - edX</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.phils-lab.net" target="_blank">STM32 Bare Metal - Phil's Lab</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '5-7-4',
                            title: 'Segurança em Sistemas Embarcados',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Com IoT expandindo-se rapidamente, segurança em embarcados tornou-se crítica. Secure Boot garante que apenas firmware autenticado execute. Criptografia como AES e TLS protege comunicação. Armazenamento seguro de chaves em elementos seguros previne extração. Análise de vulnerabilidades em firmware e proteção contra buffer overflow e ataques físicos completam o tema.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=g4WFbMvjnoA" target="_blank">Embedded Security - Colin O'Flynn</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=DZ4wG_jFBRs" target="_blank">IoT Security - IBM Technology</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/iot-security" target="_blank">Embedded Security - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/hardware-security" target="_blank">Hardware Security - Coursera</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ,
                            children: []
                        }
                    ]
                }
            ]

        }


    );
}