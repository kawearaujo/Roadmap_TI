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
                            ),
                            children: []
                        },
                        {
                            id: '5-1-3',
                            title: 'Eletrônica Básica',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-1-4',
                            title: 'Sistemas Numéricos',
                            content: (
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
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-2',
                    title: 'Programação e Ferramentas',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

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
                            ),
                            children: []
                        },
                        {
                            id: '5-2-2',
                            title: 'Linguagem Assembly',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-2-3',
                            title: 'Git e GitHub',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-2-4',
                            title: 'Ferramentas de Simulação',
                            content: (
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
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-3',
                    title: 'Microcontroladores',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

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
                            ),
                            children: []
                        },
                        {
                            id: '5-3-2',
                            title: 'Arduino',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-3-3',
                            title: 'ESP32 / ESP8266',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-3-4',
                            title: 'STM32 / PIC',
                            content: (
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
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-4',
                    title: 'Sistemas Operacionais de Tempo Real',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

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
                            ),
                            children: []
                        },
                        {
                            id: '5-4-2',
                            title: 'FreeRTOS',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-4-3',
                            title: 'Comunicação entre Tarefas',
                            content: (
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
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-5',
                    title: 'Periféricos e Comunicação',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

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
                            ),
                            children: []
                        },
                        {
                            id: '5-5-2',
                            title: 'PWM, ADC, DAC',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-5-3',
                            title: 'Protocolos: I2C, SPI, UART',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-5-4',
                            title: 'Comunicação sem fio',
                            content: (
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
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-6',
                    title: 'Aplicações Práticas',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>,
                    children: [
                        {
                            id: '5-6-1',
                            title: 'Leitura de Sensores',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-6-2',
                            title: 'Controle de Motores',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-6-3',
                            title: 'Projetos com Display',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-6-4',
                            title: 'Integrações',
                            content: (
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
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '5-7',
                    title: 'Avançado',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

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
                            ),
                            children: []
                        },
                        {
                            id: '5-7-2',
                            title: 'Design com KiCad',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-7-3',
                            title: 'Programação Bare-Metal',
                            content: (
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
                            ),
                            children: []
                        },
                        {
                            id: '5-7-4',
                            title: 'Segurança em Sistemas Embarcados',
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
                        }
                    ]
                }
            ]

        }


    );
}