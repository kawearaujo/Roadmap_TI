export default function IA() {
    return (
        {
            id: '7',
            title: 'IA',
            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>A <strong>Inteligência Artificial (IA)</strong> é uma área da ciência da computação que busca desenvolver <strong>sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana</strong>. Inclui <strong>aprendizado de máquina, processamento de linguagem natural, visão computacional</strong> e muito mais.</p>

                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=JMUxmLyrhSk" target="_blank">O que é Inteligência Artificial?</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank">Neural Networks Explained</a></li>
                    </ul>

                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/ai-for-everyone" target="_blank">Coursera - AI For Everyone</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.elementsofai.com/" target="_blank">Elements of AI</a></li>
                        <li><a className="text-blue-600 underline" href="https://ai.google/education/" target="_blank">Google AI Education</a></li>
                    </ul>

                    <p className="font-semibold text-purple-800">💡 Dica: Comece com conceitos gerais antes de se especializar em áreas específicas.</p>
                </div>
            ),
            children: [
                {
                    id: '7-1',
                    title: '🟢 Fundamentos',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>
                                Os fundamentos de IA estabelecem as bases teóricas e filosóficas do campo. Lógica booleana é o alicerce da computação, probabilidade e estatística sustentam os modelos de aprendizado, e álgebra linear e cálculo são os idiomas matemáticos dos algoritmos modernos. Entender a história e filosofia da IA situa o profissional no contexto das discussões sobre limitações, ética e o futuro da inteligência artificial.
                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-1-1',
                            title: 'Lógica e Álgebra Booleana',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Lógica booleana é a base matemática da computação. Operações AND, OR, NOT e XOR fundamentam circuitos digitais e estruturas condicionais em código. Em IA simbólica, sistemas especialistas e motores de inferência utilizam lógica formal para representar e raciocinar sobre conhecimento de forma estruturada.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=GRGrIhHbFQ0" target="_blank">Lógica Booleana - Curso em Vídeo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=gI-qXk7XojA" target="_blank">Boolean Logic & Logic Gates</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101" target="_blank">Logic - Khan Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/mathematical-thinking" target="_blank">Mathematical Thinking</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-1-2',
                            title: 'Probabilidade e Estatística',
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
                            id: '7-1-3',
                            title: 'Álgebra Linear e Cálculo',
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
                            id: '7-1-4',
                            title: 'História e Filosofia da IA',
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
                    id: '7-2',
                    title: '🟡 Programação e Ferramentas',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-2-1',
                            title: 'Python para IA',
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
                            id: '7-2-2',
                            title: 'Ambientes de desenvolvimento',
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
                            id: '7-2-3',
                            title: 'Bibliotecas',
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
                            id: '7-2-4',
                            title: 'Versionamento',
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
                    id: '7-3',
                    title: '🟠 Aprendizagem de Máquina',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-3-1',
                            title: 'Aprendizado Supervisionado',
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
                            id: '7-3-2',
                            title: 'Aprendizado Não Supervisionado',
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
                            id: '7-3-3',
                            title: 'Algoritmos Clássicos',
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
                            id: '7-3-4',
                            title: 'Validação e Ajuste de Modelos',
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
                    id: '7-4',
                    title: '🔵 Aprendizado Profundo',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-4-1',
                            title: 'Redes Neurais Artificiais',
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
                            id: '7-4-2',
                            title: 'Redes Convolucionais',
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
                            id: '7-4-3',
                            title: 'Redes Recorrentes',
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
                            id: '7-4-4',
                            title: 'Frameworks',
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
                    id: '7-5',
                    title: '🟣 Processamento de Linguagem Natural',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-5-1',
                            title: 'Pré-processamento de Texto',
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
                            id: '7-5-2',
                            title: 'Modelos Clássicos',
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
                            id: '7-5-3',
                            title: 'Modelos Avançados',
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
                            id: '7-5-4',
                            title: 'Aplicações',
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
                    id: '7-6',
                    title: '🔴 Visão Computacional',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-6-1',
                            title: 'Manipulação de Imagens',
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
                            id: '7-6-2',
                            title: 'Detecção e Classificação',
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
                            id: '7-6-3',
                            title: 'Segmentação de Imagens',
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
                            id: '7-6-4',
                            title: 'Modelos Pré-treinados',
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
                    id: '7-7',
                    title: '⚫ Ética, Segurança e Deploy',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-7-1',
                            title: 'Ética e Viés em IA',
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
                            id: '7-7-2',
                            title: 'Privacidade de Dados',
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
                            id: '7-7-3',
                            title: 'Deploy',
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
                            id: '7-7-4',
                            title: 'MLOps e Monitoramento de Modelos',
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
                    id: '7-8',
                    title: '🌐 Aplicações Reais',
                    content: (
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>

                            </p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-8-1',
                            title: 'Soluções Reais com IA',
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
                            id: '7-8-2',
                            title: 'Open Source e Competição',
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
                            id: '7-8-3',
                            title: 'Integração com APIs',
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
                            id: '7-8-4',
                            title: 'IA Generativa',
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
                }
            ]
        }
    );
}