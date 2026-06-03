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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Os <strong>fundamentos da IA</strong> são as bases <strong>matemáticas, lógicas e filosóficas</strong> necessárias para compreender e desenvolver sistemas inteligentes. Incluem <strong>lógica, probabilidade, álgebra e uma compreensão histórica</strong> da área.</p>
                            <p className="font-bold text-green-600">Recomendado começar por estes tópicos antes de avançar para implementações práticas.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=ukzFI9rgwfU" target="_blank">Mathematics for Machine Learning</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=1XBhXZSn4RU" target="_blank">Fundamentos de IA</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.edx.org/course/artificial-intelligence-ai" target="_blank">EdX - Introduction to AI</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math" target="_blank">Khan Academy - Matemática</a></li>
                                <li><a className="text-blue-600 underline" href="https://mml-book.github.io/" target="_blank">Mathematics for Machine Learning (Livro)</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Domine a matemática básica antes de pular para algoritmos complexos.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-1-1',
                            title: 'Lógica e Álgebra Booleana',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A <strong>lógica e a álgebra booleana</strong> formam a base do <strong>raciocínio computacional</strong> e são fundamentais para entender algoritmos de IA. Incluem <strong>operações lógicas, tabelas verdade e métodos de prova</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=UvI-AMAtrvE" target="_blank">Lógica Booleana para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Od8vvOcN-2U" target="_blank">Álgebra Booleana Completa</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" target="_blank">Neso Academy - Lógica Digital</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/readings/MIT6_042JF10_chap01.pdf" target="_blank">MIT - Matemática para Ciência da Computação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.cs.princeton.edu/courses/archive/fall09/cos126/lectures/06logic-10-13.pdf" target="_blank">Princeton - Lógica Booleana</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Pratique com tabelas verdade para entender operações lógicas.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-1-2',
                            title: 'Probabilidade e Estatística',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Probabilidade e estatística</strong> são essenciais para compreender <strong>incertezas e fazer inferências</strong> a partir de dados, fundamentais para <strong>aprendizado de máquina e modelagem estatística</strong> em IA.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=KbB0FjPg0mw" target="_blank">Probabilidade para Machine Learning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=zZWd56VlN7w" target="_blank">Estatística para Data Science</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/statistics-probability" target="_blank">Khan Academy - Estatística e Probabilidade</a></li>
                                        <li><a className="text-blue-600 underline" href="https://seeing-theory.brown.edu/" target="_blank">Seeing Theory - Visualização de Conceitos</a></li>
                                        <li><a className="text-blue-600 underline" href="http://www.probability.net/" target="_blank">Probability.net - Recursos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/" target="_blank">MIT - Introdução à Probabilidade e Estatística</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Foque em distribuições de probabilidade e testes de hipótese.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-1-3',
                            title: 'Álgebra Linear e Cálculo',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Álgebra linear e cálculo</strong> fornecem as ferramentas matemáticas para trabalhar com <strong>espaços vetoriais, matrizes, derivadas e otimização</strong>, que são fundamentais para algoritmos de aprendizado de máquina.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=fNk_zzaMoSs" target="_blank">Essência da Álgebra Linear</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=WUvTyaaNkzM" target="_blank">Essência do Cálculo</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank">3Blue1Brown - Essência da Álgebra Linear</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Khan Academy - Álgebra Linear</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/calculus-1" target="_blank">Khan Academy - Cálculo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/" target="_blank">MIT - Álgebra Linear</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Domine operações com matrizes e derivadas parciais.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-1-4',
                            title: 'História e Filosofia da IA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Compreender a <strong>história e filosofia da IA</strong> ajuda a contextualizar os <strong>avanços atuais e os desafios éticos</strong>. Abrange desde os primeiros experimentos até debates sobre consciência e inteligência artificial geral.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=8nt3edWLgIg" target="_blank">História da Inteligência Artificial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=5W1Rtf1bT5Q" target="_blank">Filosofia da IA</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://plato.stanford.edu/entries/artificial-intelligence/" target="_blank">Stanford Encyclopedia - Filosofia da IA</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.computerhistory.org/timeline/ai-robotics/" target="_blank">Computer History Museum - Timeline da IA</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.amazon.com/AI-Modern-Approach-Stuart-Russell/dp/0134610997/" target="_blank">Livro: AI: A Modern Approach - Capítulos Históricos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html" target="_blank">Wait But Why - A Revolução da IA</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Entenda o contexto histórico para evitar repetir erros do passado.</p>
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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Dominar as <strong>ferramentas e linguagens de programação essenciais</strong> para IA é fundamental para implementar algoritmos e manipular dados. <strong>Python é a linguagem dominante</strong>, juntamente com bibliotecas e ambientes de desenvolvimento.</p>
                            <p className="font-bold text-yellow-600">Familiarize-se com estas ferramentas antes de avançar para implementações de ML/DL.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=LHBE6Q9XlzI" target="_blank">Python para Data Science</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=HW29067qVWk" target="_blank">Jupyter Notebook Tutorial</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/specializations/python-3-programming" target="_blank">Coursera - Python 3 Programming</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.anaconda.com/download" target="_blank">Anaconda - Ambiente Python para Ciência de Dados</a></li>
                                <li><a className="text-blue-600 underline" href="https://github.com/microsoft/ML-For-Beginners" target="_blank">Microsoft - ML para Iniciantes</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Instale Anaconda para ter todas as bibliotecas essenciais de uma vez.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-2-1',
                            title: 'Python para IA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Python</strong> é a linguagem mais utilizada em IA devido à sua <strong>sintaxe clara e grande ecossistema de bibliotecas especializadas</strong>. Aprenda <strong>estruturas de dados, funções, orientação a objetos e boas práticas</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_uQrJ0TkZlc" target="_blank">Python Tutorial for Beginners</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank">Learn Python - Full Course</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.python.org/about/gettingstarted/" target="_blank">Python.org - Começando</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.codecademy.com/learn/learn-python-3" target="_blank">Codecademy - Python 3</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.learnpython.org/" target="_blank">LearnPython.org - Tutorial Interativo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://automatetheboringstuff.com/" target="_blank">Automate the Boring Stuff with Python</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Pratique com exercícios no HackerRank e LeetCode.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-2-2',
                            title: 'Ambientes de desenvolvimento',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Ambientes de desenvolvimento específicos</strong> para IA oferecem funcionalidades como <strong>execução interativa de código, visualização de dados e acesso a recursos computacionais</strong>. Jupyter Notebooks, Google Colab e VSCode são os mais populares.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=HW29067qVWk" target="_blank">Jupyter Notebook Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=RLYoEyIHL6A" target="_blank">Google Colab Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://jupyter.org/try" target="_blank">Jupyter - Try Online</a></li>
                                        <li><a className="text-blue-600 underline" href="https://colab.research.google.com/" target="_blank">Google Colab - Notebooks na Nuvem</a></li>
                                        <li><a className="text-blue-600 underline" href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank">VSCode - Tutorial Python</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook" target="_blank">DataCamp - Tutorial Jupyter Notebook</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use Google Colab para projetos que exigem GPU gratuita.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-2-3',
                            title: 'Bibliotecas',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Bibliotecas fundamentais para manipulação e visualização de dados</strong> são essenciais para preparar dados para algoritmos de IA. <strong>NumPy</strong> oferece operações matemáticas eficientes, <strong>Pandas</strong> para manipulação de dados tabulares e <strong>Matplotlib</strong> para visualizações.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=QUT1VHiLmmI" target="_blank">NumPy Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=vmEHCJofslg" target="_blank">Pandas Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://numpy.org/doc/stable/user/absolute_beginners.html" target="_blank">NumPy - Guia para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/index.html" target="_blank">Pandas - Tutoriais Introdutórios</a></li>
                                        <li><a className="text-blue-600 underline" href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" target="_blank">Matplotlib - Tutorial Pyplot</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.w3schools.com/python/numpy/default.asp" target="_blank">W3Schools - Tutorial NumPy</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Domine operações de DataFrame no Pandas para manipulação eficiente.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-2-4',
                            title: 'Versionamento',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Controle de versão e colaboração</strong> são essenciais para projetos de IA. <strong>Git</strong> permite rastrear mudanças no código e <strong>GitHub</strong> facilita compartilhamento, colaboração e integração com ferramentas de CI/CD.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=USjZcfj8yxE" target="_blank">Git Tutorial for Beginners</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=3fUbBnN_H2c" target="_blank">Git e GitHub Crash Course</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://git-scm.com/book/en/v2" target="_blank">Pro Git Book</a></li>
                                        <li><a className="text-blue-600 underline" href="https://lab.github.com/" target="_blank">GitHub Learning Lab</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian - Tutoriais Git</a></li>
                                        <li><a className="text-blue-600 underline" href="https://try.github.io/" target="_blank">Try Git - Recursos</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use Git desde o primeiro projeto para criar bons hábitos.</p>
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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Machine Learning</strong> é um subconjunto da IA focado em <strong>algoritmos que aprendem com dados</strong>. Existem diferentes abordagens como <strong>aprendizado supervisionado, não supervisionado e por reforço</strong>, cada uma com aplicações específicas.</p>
                            <p className="font-bold text-orange-600">Este é o núcleo técnico da IA prática moderna.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=ukzFI9rgwfU" target="_blank">Machine Learning Explained</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=PPLop4L2eGk" target="_blank">Supervised vs Unsupervised Learning</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/machine-learning" target="_blank">Coursera - Machine Learning (Andrew Ng)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.fast.ai/" target="_blank">Fast.ai - Cursos Práticos</a></li>
                                <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/tutorial/" target="_blank">Scikit-Learn - Tutoriais</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Comece com o curso do Andrew Ng para fundamentos sólidos.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-3-1',
                            title: 'Aprendizado Supervisionado',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>No <strong>aprendizado supervisionado</strong>, algoritmos são treinados em <strong>dados rotulados para prever saídas</strong> para novas entradas. Inclui <strong>classificação (previsão de categorias) e regressão (previsão de valores contínuos)</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=LsK-xG1cLYA" target="_blank">Classification vs Regression</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4EOCQJgqAOY" target="_blank">Supervised Learning Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.datacamp.com/community/tutorials/supervised-learning-python" target="_blank">DataCamp - Aprendizado Supervisionado em Python</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/supervised_learning.html" target="_blank">Scikit-Learn - Aprendizado Supervisionado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/intro-to-machine-learning" target="_blank">Kaggle - Introdução ao Machine Learning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://jakevdp.github.io/PythonDataScienceHandbook/05.01-what-is-machine-learning.html" target="_blank">Python Data Science Handbook - ML</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Comece com regressão linear e classificação logística.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-3-2',
                            title: 'Aprendizado Não Supervisionado',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>No <strong>aprendizado não supervisionado</strong>, algoritmos identificam <strong>padrões em dados não rotulados</strong>. Técnicas comuns incluem <strong>clustering (agrupamento), redução de dimensionalidade e detecção de anomalias</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Mn6aObA7Z2I" target="_blank">Unsupervised Learning Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=IP2hK3oUQ_s" target="_blank">Clustering Algorithms</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/unsupervised_learning.html" target="_blank">Scikit-Learn - Aprendizado Não Supervisionado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.datacamp.com/community/tutorials/introduction-to-clustering" target="_blank">DataCamp - Introdução ao Clustering</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/unsupervised-learning-with-python-173c51dc7f03" target="_blank">Towards Data Science - Aprendizado Não Supervisionado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/lecture/machine-learning/unsupervised-learning-olRZo" target="_blank">Coursera - Introdução ao Aprendizado Não Supervisionado</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use K-means para clustering e PCA para redução de dimensionalidade.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-3-3',
                            title: 'Algoritmos Clássicos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Algoritmos clássicos de ML</strong> ainda são amplamente utilizados por sua <strong>interpretabilidade e eficiência</strong>. <strong>K-Nearest Neighbors (KNN), Support Vector Machines (SVM) e Árvores de Decisão</strong> formam a base do aprendizado de máquina prático.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Zz0_Jp4R5Ew" target="_blank">Decision Trees Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=efR1C6CvhmE" target="_blank">Support Vector Machines</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/neighbors.html" target="_blank">Scikit-Learn - KNN</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/svm.html" target="_blank">Scikit-Learn - SVM</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/tree.html" target="_blank">Scikit-Learn - Árvores de Decisão</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/intro-to-machine-learning" target="_blank">Kaggle - Introdução aos Algoritmos de ML</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Random Forests geralmente performam melhor que árvores individuais.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-3-4',
                            title: 'Validação e Ajuste de Modelos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Validar e ajustar modelos</strong> é essencial para garantir <strong>bom desempenho em dados novos</strong>. Técnicas incluem <strong>validação cruzada, métricas de avaliação, regularização e otimização de hiperparâmetros</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Oi2a9YfY5n0" target="_blank">Cross-Validation Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Anq4PgdASsc" target="_blank">Overfitting and Underfitting</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/cross_validation.html" target="_blank">Scikit-Learn - Validação Cruzada</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/model_evaluation.html" target="_blank">Scikit-Learn - Avaliação de Modelos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/intermediate-machine-learning" target="_blank">Kaggle - ML Intermediário</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/hyperparameter-optimization-with-random-search-and-grid-search/" target="_blank">Machine Learning Mastery - Otimização de Hiperparâmetros</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use GridSearchCV ou RandomizedSearchCV para otimização automática.</p>
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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Deep Learning</strong> é um subconjunto do Machine Learning baseado em <strong>redes neurais artificiais com múltiplas camadas</strong>. Esta abordagem revolucionou áreas como <strong>visão computacional, processamento de linguagem natural e reconhecimento de fala</strong>.</p>
                            <p className="font-bold text-blue-600">Representa o estado da arte em muitas aplicações de IA.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6M5VXKLf4D4" target="_blank">Deep Learning Explained</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank">Neural Networks Demystified</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.deeplearningbook.org/" target="_blank">Deep Learning Book (Goodfellow, Bengio, Courville)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/specializations/deep-learning" target="_blank">Coursera - Deep Learning Specialization</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.fast.ai/2019/06/28/course-p2v3/" target="_blank">Fast.ai - Practical Deep Learning</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Comece com redes neurais simples antes de arquiteturas complexas.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-4-1',
                            title: 'Redes Neurais Artificiais',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Redes Neurais Artificiais</strong> são a base do Deep Learning, inspiradas no funcionamento do cérebro humano. Consistem em <strong>neurônios artificiais organizados em camadas</strong> que processam e transformam dados para aprender padrões complexos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank">Neural Networks Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Ilg3gGewQ5U" target="_blank">Backpropagation Explained</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.3blue1brown.com/topics/neural-networks" target="_blank">3Blue1Brown - Neural Networks</a></li>
                                        <li><a className="text-blue-600 underline" href="https://playground.tensorflow.org/" target="_blank">TensorFlow Playground - Visualização Interativa</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/neural-networks-deep-learning" target="_blank">Coursera - Neural Networks and Deep Learning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/neural-networks-crash-course/" target="_blank">Machine Learning Mastery - Curso Rápido</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Entenda bem backpropagation antes de avançar.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-4-2',
                            title: 'Redes Convolucionais',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Redes Neurais Convolucionais</strong> são especializadas em <strong>processamento de dados com estrutura em grade, como imagens</strong>. Utilizam <strong>operações de convolução para detectar características locais</strong> e construir representações hierárquicas.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=YRhxdVk_sIs" target="_blank">CNNs Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=pj9-rr1wDhM" target="_blank">Building CNNs with TensorFlow</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://cs231n.github.io/" target="_blank">Stanford CS231n - CNNs para Visual Recognition</a></li>
                                        <li><a className="text-blue-600 underline" href="https://medium.com/@RaghavPrabhu/understanding-of-convolutional-neural-network-cnn-deep-learning-99760835f148" target="_blank">Medium - Entendendo CNNs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/images/cnn" target="_blank">TensorFlow - Tutorial CNN</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" target="_blank">PyTorch - Tutorial CIFAR10</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use transfer learning com modelos pré-treinados para economizar tempo.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-4-3',
                            title: 'Redes Recorrentes',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Redes Neurais Recorrentes</strong> são projetadas para trabalhar com <strong>dados sequenciais</strong>. <strong>LSTMs (Long Short-Term Memory) e GRUs (Gated Recurrent Units)</strong> são variantes que lidam melhor com dependências de longo prazo em sequências.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=WCUNPb-5EYI" target="_blank">RNNs and LSTMs Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=9zhrxE5PQgY" target="_blank">Building RNNs with Python</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://colah.github.io/posts/2015-08-Understanding-LSTMs/" target="_blank">Colah&apos;s Blog - Entendendo LSTMs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/text/text_classification_rnn" target="_blank">TensorFlow - Classificação de Texto com RNN</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/gentle-introduction-long-short-term-memory-networks-experts/" target="_blank">ML Mastery - Introdução a LSTMs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html" target="_blank">PyTorch - RNN para Classificação</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use GRU como alternativa mais simples à LSTM.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-4-4',
                            title: 'Frameworks',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Frameworks como TensorFlow e PyTorch</strong> facilitam o desenvolvimento de modelos de Deep Learning, oferecendo <strong>abstrações de alto nível, otimizações automáticas e ferramentas</strong> para treinamento e deploy de modelos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=tPYj3fFJGjk" target="_blank">TensorFlow vs PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=5bS_bgEuZEY" target="_blank">TensorFlow 2.0 Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials" target="_blank">TensorFlow - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/" target="_blank">PyTorch - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://keras.io/guides/" target="_blank">Keras - Guias</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/pytorch-tutorial-develop-deep-learning-models/" target="_blank">ML Mastery - Tutorial PyTorch</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Escolha PyTorch para pesquisa e TensorFlow para produção.</p>
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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Processamento de Linguagem Natural (NLP)</strong> é a área da IA que lida com a <strong>interação entre computadores e linguagem humana</strong>. Inclui <strong>análise de texto, tradução automática, chatbots e sistemas de resposta a perguntas</strong>.</p>
                            <p className="font-bold text-purple-600">Uma das áreas de maior crescimento e aplicação prática da IA.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=oi0JXuL19TA" target="_blank">NLP Explained</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=8S3qHHUKqYk" target="_blank">Transformers for NLP</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.nltk.org/book/" target="_blank">NLTK Book - Introdução ao NLP com Python</a></li>
                                <li><a className="text-blue-600 underline" href="https://web.stanford.edu/~jurafsky/slp3/" target="_blank">Stanford - Speech and Language Processing</a></li>
                                <li><a className="text-blue-600 underline" href="https://huggingface.co/course/chapter1" target="_blank">Hugging Face - Curso NLP</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Use Hugging Face transformers para modelos state-of-the-art.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-5-1',
                            title: 'Pré-processamento de Texto',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O <strong>pré-processamento de texto</strong> é fundamental para transformar <strong>texto bruto em formato adequado</strong> para algoritmos de ML. Inclui <strong>tokenização, normalização, remoção de stopwords, stemming e lematização</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=FLZvOKSCkxY" target="_blank">Text Preprocessing for NLP</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=zWq-hoa27tY" target="_blank">NLTK Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nltk.org/howto/tokenize.html" target="_blank">NLTK - Tutorial de Tokenização</a></li>
                                        <li><a className="text-blue-600 underline" href="https://spacy.io/usage/linguistic-features" target="_blank">spaCy - Recursos Linguísticos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction" target="_blank">Scikit-learn - Extração de Features de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/nlp-text-preprocessing-a-practical-guide-and-template-d80874676e79" target="_blank">Towards Data Science - Guia Prático</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use spaCy para processamento mais rápido e eficiente.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-5-2',
                            title: 'Modelos Clássicos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Modelos clássicos de NLP</strong> transformam texto em representações numéricas. <strong>Bag of Words</strong> representa documentos pela frequência de palavras, enquanto <strong>TF-IDF (Term Frequency-Inverse Document Frequency)</strong> considera também a importância das palavras no corpus.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4nqo0e-WPS4" target="_blank">Bag of Words Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=D2V1okCEsiE" target="_blank">TF-IDF Explained</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/feature_extraction.html#the-bag-of-words-representation" target="_blank">Scikit-learn - Bag of Words</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/text/word_embeddings" target="_blank">TensorFlow - Word Embeddings</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/text-vectorization-bag-of-words-vs-tf-idf-vs-word2vec-b4864e17ccc5" target="_blank">Towards Data Science - Vetorização de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/gentle-introduction-bag-words-model/" target="_blank">ML Mastery - Introdução ao BoW</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: TF-IDF geralmente performa melhor que Bag of Words simples.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-5-3',
                            title: 'Modelos Avançados',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Modelos de linguagem baseados em transformers</strong> como <strong>BERT (Bidirectional Encoder Representations from Transformers) e GPT (Generative Pre-trained Transformer)</strong> revolucionaram o NLP com arquiteturas baseadas em atenção e pré-treinamento em grandes corpus.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=7kLi8u2dJz0" target="_blank">Transformers Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=xI0HHN5XKDo" target="_blank">BERT Explained</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://huggingface.co/transformers/model_doc/bert.html" target="_blank">Hugging Face - Documentação BERT</a></li>
                                        <li><a className="text-blue-600 underline" href="https://jalammar.github.io/illustrated-bert/" target="_blank">Illustrated BERT</a></li>
                                        <li><a className="text-blue-600 underline" href="https://jalammar.github.io/illustrated-gpt2/" target="_blank">Illustrated GPT-2</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/text/tutorials/fine_tune_bert" target="_blank">TensorFlow - Fine-tunning BERT</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use BERT para tarefas de entendimento e GPT para geração.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-5-4',
                            title: 'Aplicações',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>NLP possibilita diversas aplicações práticas</strong> como <strong>chatbots inteligentes, classificação de textos (sentimento, spam), tradução automática, geração de texto e sistemas de resposta a perguntas</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=wypVcNIH6D4" target="_blank">Building a Chatbot</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Y_hzMnRXjhI" target="_blank">Text Classification with BERT</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/text/text_classification_rnn" target="_blank">TensorFlow - Classificação de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://huggingface.co/blog/how-to-generate" target="_blank">Hugging Face - Geração de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/build-a-simple-chatbot-with-python-and-nltk-5d07b027e727" target="_blank">Towards Data Science - Construindo um Chatbot</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html" target="_blank">PyTorch - Tutorial de Tradução</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Comece com classificação de sentimentos como projeto inicial.</p>
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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Visão Computacional</strong> é a área da IA que permite aos computadores <strong>interpretar e processar imagens e vídeos</strong>. Abrange <strong>reconhecimento de objetos, detecção facial, segmentação de imagens</strong> e muitas outras aplicações visuais.</p>
                            <p className="font-bold text-red-600">Uma área de grande impacto em automação, segurança e análise de mídia.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=OcycT1Jwsns" target="_blank">Computer Vision Explained</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=2hXG8v8p0KM" target="_blank">OpenCV Tutorial</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.pyimagesearch.com/start-here/" target="_blank">PyImageSearch - Tutoriais de CV</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/convolutional-neural-networks" target="_blank">Coursera - CNNs e Visão Computacional</a></li>
                                <li><a className="text-blue-600 underline" href="https://opencv.org/opencv-free-course/" target="_blank">OpenCV - Curso Gratuito</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Comece com OpenCV para manipulação básica de imagens.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-6-1',
                            title: 'Manipulação de Imagens',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Manipulação de imagens</strong> é fundamental para visão computacional, envolvendo operações como <strong>redimensionamento, filtragem, transformação e extração de características</strong>. <strong>OpenCV</strong> é a biblioteca mais popular e abrangente para essas tarefas.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=2hXG8v8p0KM" target="_blank">OpenCV Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=WQeoO7MI0Bs" target="_blank">Image Processing with OpenCV</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.opencv.org/master/d9/df8/tutorial_root.html" target="_blank">OpenCV - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.pyimagesearch.com/2018/07/19/opencv-tutorial-a-guide-to-learn-opencv/" target="_blank">PyImageSearch - Tutorial OpenCV</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.learnopencv.com/" target="_blank">LearnOpenCV - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html" target="_blank">OpenCV-Python - Documentação</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Aprenda operações básicas como thresholding e morphological operations.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-6-2',
                            title: 'Detecção e Classificação',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Detecção e classificação de objetos</strong> são tarefas fundamentais que <strong>identificam e categorizam objetos em imagens</strong>. Técnicas modernas incluem <strong>R-CNN, YOLO, SSD e modelos baseados em transformers como DETR</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=ag3DLKsl2vk" target="_blank">Object Detection Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=GGeF_MycEjg" target="_blank">YOLO Object Detection</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/object-recognition-with-deep-learning/" target="_blank">ML Mastery - Reconhecimento de Objetos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/images/object_detection" target="_blank">TensorFlow - Detecção de Objetos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/ultralytics/yolov5" target="_blank">GitHub - YOLOv5</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html" target="_blank">PyTorch - Tutorial TorchVision</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use YOLO para detecção em tempo real.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-6-3',
                            title: 'Segmentação de Imagens',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Segmentação de imagens</strong> divide uma imagem em <strong>regiões significativas</strong>, permitindo identificar precisamente a localização de objetos. Inclui <strong>segmentação semântica (por categoria) e segmentação de instância (objetos individuais)</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Az7Rru6d7Rc" target="_blank">Image Segmentation Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=q8nxi-dMqEo" target="_blank">Semantic Segmentation Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/images/segmentation" target="_blank">TensorFlow - Segmentação de Imagens</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html" target="_blank">PyTorch - Segmentação com TorchVision</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.jeremyjordan.me/semantic-segmentation/" target="_blank">Jeremy Jordan - Segmentação Semântica</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/qubvel/segmentation_models.pytorch" target="_blank">GitHub - Modelos de Segmentação PyTorch</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use U-Net para segmentação médica e Mask R-CNN para instâncias.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-6-4',
                            title: 'Modelos Pré-treinados',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Modelos pré-treinados</strong> facilitam o desenvolvimento de soluções de visão computacional sem treinar do zero. <strong>YOLO (You Only Look Once)</strong> é ideal para detecção rápida, enquanto <strong>ResNet</strong> oferece classificação poderosa com redes residuais profundas.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=GGeF_MycEjg" target="_blank">YOLO Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=GWt6Fu05voI" target="_blank">ResNet Explained</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/computer-vision" target="_blank">Kaggle - Computer Vision</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pjreddie.com/darknet/yolo/" target="_blank">YOLO - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/hub/pytorch_vision_resnet/" target="_blank">PyTorch - ResNet</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/api_docs/python/tf/keras/applications" target="_blank">TensorFlow - Modelos Pré-treinados</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use transfer learning para adaptar modelos pré-treinados ao seu problema.</p>
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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A <strong>implementação responsável de IA</strong> exige considerações éticas, segurança de dados e técnicas eficientes de implantação. Esta área cobre questões de <strong>viés, privacidade e ferramentas para colocar modelos em produção</strong>.</p>
                            <p className="font-bold">Aspectos essenciais para aplicações de IA confiáveis e sustentáveis.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=3oeE7sU0X-c" target="_blank">AI Ethics and Bias</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=TrW6RE2lcZo" target="_blank">MLOps Tutorial</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.fast.ai/2018/09/24/ai-ethics-resources/" target="_blank">Fast.ai - Recursos de Ética em IA</a></li>
                                <li><a className="text-blue-600 underline" href="https://ai.google/education/responsible-ai-practices" target="_blank">Google - Práticas Responsáveis de IA</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tfx/tutorials/serving/rest_simple" target="_blank">TensorFlow - Deploy de Modelos</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Considere aspectos éticos desde o início do projeto.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-7-1',
                            title: 'Ética e Viés em IA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Sistemas de IA podem perpetuar ou amplificar preconceitos</strong> presentes nos dados de treinamento. A <strong>ética em IA</strong> aborda questões de <strong>justiça, transparência, responsabilidade e impacto social</strong> dos sistemas inteligentes.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=3oeE7sU0X-c" target="_blank">AI Ethics and Bias</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=59bMh59JQDo" target="_blank">Fairness in Machine Learning</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/ai-ethics" target="_blank">Coursera - Ethics in AI</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ai.google/responsibilities/responsible-ai-practices/" target="_blank">Google - Práticas Responsáveis</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.fast.ai/2018/09/24/ai-ethics-resources/" target="_blank">Fast.ai - Recursos de Ética</a></li>
                                        <li><a className="text-blue-600 underline" href="https://fairmlbook.org/" target="_blank">Fairness and Machine Learning</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Teste seus modelos com dados diversos para detectar vieses.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-7-2',
                            title: 'Privacidade de Dados',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A <strong>privacidade de dados</strong> é crucial em aplicações de IA, especialmente com regulamentações como <strong>GDPR e LGPD</strong>. Técnicas como <strong>aprendizado federado, criptografia e anonimização</strong> ajudam a proteger informações sensíveis.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=TrW6RE2lcZo" target="_blank">Privacy in Machine Learning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=4bY1qS3Ou1g" target="_blank">Federated Learning</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/responsible_ai/privacy" target="_blank">TensorFlow - Privacy in ML</a></li>
                                        <li><a className="text-blue-600 underline" href="https://opacus.ai/" target="_blank">Opacus - Privacy for PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.fast.ai/posts/2020-01-09-data-privacy.html" target="_blank">Fast.ai - Privacidade de Dados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.udacity.com/course/secure-and-private-ai--ud185" target="_blank">Udacity - Secure and Private AI</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use differential privacy para proteger dados sensíveis.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-7-3',
                            title: 'Deploy',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Colocar modelos de IA em produção requer frameworks como <strong>Flask (web básico), FastAPI (API de alto desempenho) ou Streamlit (aplicações interativas)</strong>. Estas ferramentas permitem criar interfaces e APIs para seus modelos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Z1RJmh_OqeA" target="_blank">Deploy ML Model with Flask</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=-ykeT6kj-7s" target="_blank">FastAPI for ML Deployment</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://flask.palletsprojects.com/en/2.0.x/tutorial/" target="_blank">Flask - Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://fastapi.tiangolo.com/tutorial/" target="_blank">FastAPI - Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.streamlit.io/en/stable/getting_started.html" target="_blank">Streamlit - Começando</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/deploying-machine-learning-models-with-streamlit-and-heroku-54e1071bf2db" target="_blank">Towards Data Science - Deploy com Streamlit</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use FastAPI para APIs de alto desempenho.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-7-4',
                            title: 'MLOps e Monitoramento de Modelos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>MLOps (Machine Learning Operations)</strong> combina DevOps com desenvolvimento de ML para <strong>automatizar ciclos de vida de modelos</strong>. Inclui <strong>versionamento, implantação contínua, monitoramento de desempenho e retreinamento automático</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6z6nK1t7+8" target="_blank">MLOps Complete Course</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=1PXyf1DKfqE" target="_blank">Monitoring ML Models</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.mlflow.org/docs/latest/index.html" target="_blank">MLflow - Documentação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tfx" target="_blank">TensorFlow Extended (TFX)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://madewithml.com/courses/mlops/" target="_blank">Made With ML - Curso MLOps</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kubeflow.org/docs/started/introduction/" target="_blank">Kubeflow - Introdução</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use MLflow para experimentação e Kubeflow para orquestração.</p>
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
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A <strong>aplicação prática de IA em diversos setores</strong> demonstra seu potencial transformador. Essa área explora <strong>casos de uso reais, competições, integração com outros sistemas e tendências emergentes</strong> como IA generativa.</p>
                            <p className="font-bold text-green-600">Consolidação de conhecimentos através de projetos práticos e aplicações do mundo real.</p>

                            <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=JMUxmLyrhSk" target="_blank">Real-world AI Applications</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=j4_VyRDOmN4" target="_blank">Generative AI Projects</a></li>
                            </ul>

                            <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.kaggle.com/competitions" target="_blank">Kaggle - Competições</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/ai-for-everyone" target="_blank">Coursera - AI for Everyone</a></li>
                                <li><a className="text-blue-600 underline" href="https://paperswithcode.com/" target="_blank">Papers With Code - Implementações</a></li>
                            </ul>

                            <p className="font-semibold text-purple-800">💡 Dica: Participe de competições no Kaggle para ganhar experiência prática.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-8-1',
                            title: 'Soluções Reais com IA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>IA está transformando diversos setores</strong> com aplicações práticas. Na <strong>saúde</strong>, auxilia diagnósticos e descoberta de medicamentos; em <strong>finanças</strong>, otimiza investimentos e detecção de fraudes; na <strong>indústria</strong>, permite manutenção preditiva e automação inteligente.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XU0ChH5BQ4U" target="_blank">AI in Healthcare</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=wqSbo20mdj8" target="_blank">AI in Finance</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nature.com/articles/s41591-018-0316-z" target="_blank">Nature - IA na Medicina</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ibm.com/watson-health" target="_blank">IBM Watson Health</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mckinsey.com/industries/financial-services/our-insights/ai-bank-of-the-future-can-banks-meet-the-ai-challenge" target="_blank">McKinsey - IA em Bancos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ge.com/digital/iiot-platform" target="_blank">GE - Soluções Industriais</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Explore datasets específicos do seu setor de interesse.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-8-2',
                            title: 'Open Source e Competição',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Participar de <strong>projetos open source e competições de ML/IA</strong> desenvolve habilidades práticas. Plataformas como <strong>Kaggle</strong> oferecem datasets, competições e colaboração com a comunidade global de cientistas de dados.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=TNZxq14Z_7g" target="_blank">Getting Started with Kaggle</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=ql4J6SpLXZA" target="_blank">Building Data Science Portfolio</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/competitions" target="_blank">Kaggle - Competições</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/tensorflow/models" target="_blank">GitHub - TensorFlow Models</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/pytorch/examples" target="_blank">GitHub - PyTorch Examples</a></li>
                                        <li><a className="text-blue-600 underline" href="https://mlcontests.com/" target="_blank">ML Contests - Lista de Competições</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Comece com competições de iniciante no Kaggle.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-8-3',
                            title: 'Integração com APIs',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>Integrar modelos de IA em aplicações existentes</strong> requer conhecimento de APIs e desenvolvimento web. Serviços como <strong>Azure AI, Google Cloud AI e AWS AI</strong> facilitam esse processo, oferecendo modelos pré-treinados via APIs.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Oza5PbkY7fI" target="_blank">Integrating AI with Web Apps</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=7XFY0X1aBcU" target="_blank">Cloud AI Services</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://cloud.google.com/ai-platform/docs/tutorials" target="_blank">Google Cloud AI - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/azure/cognitive-services/" target="_blank">Azure Cognitive Services</a></li>
                                        <li><a className="text-blue-600 underline" href="https://aws.amazon.com/machine-learning/" target="_blank">AWS - Serviços de ML</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/js" target="_blank">TensorFlow.js - ML para Web</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Use TensorFlow.js para ML diretamente no navegador.</p>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-8-4',
                            title: 'IA Generativa',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>IA generativa</strong> cria <strong>conteúdo original como imagens, texto e música</strong>. Modelos como <strong>GANs, Transformers e Diffusion Models</strong> possibilitam aplicações criativas e revolucionam campos como arte digital, composição musical e escrita.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=9CreZ2gRmCQ" target="_blank">Generative AI Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=1FIc5SeJcaA" target="_blank">Stable Diffusion Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://openai.com/blog/dall-e/" target="_blank">OpenAI - DALL-E</a></li>
                                        <li><a className="text-blue-600 underline" href="https://huggingface.co/blog/stable_diffusion" target="_blank">Hugging Face - Stable Diffusion</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/lucidrains/DALLE2-pytorch" target="_blank">GitHub - DALL-E 2 PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://magenta.tensorflow.org/" target="_blank">Google Magenta - Música e Arte com ML</a></li>
                                    </ul>

                                    <p className="font-semibold text-purple-800">💡 Dica: Experimente com GANs para entender os fundamentos da IA generativa.</p>
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