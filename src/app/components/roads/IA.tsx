export default function IA() {
    return (
        {
            id: '7',
            title: 'IA',
            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>A Inteligência Artificial (IA) é uma área da ciência da computação que busca desenvolver sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana. Inclui aprendizado de máquina, processamento de linguagem natural, visão computacional e muito mais.</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/ai-for-everyone" target="_blank">Coursera - AI For Everyone</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.elementsofai.com/" target="_blank">Elements of AI</a></li>
                        <li><a className="text-blue-600 underline" href="https://ai.google/education/" target="_blank">Google AI Education</a></li>
                    </ul>
                </div>
            ),
            children: [
                {
                    id: '7-1',
                    title: '🟢 Fundamentos',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Os fundamentos da IA são as bases matemáticas, lógicas e filosóficas necessárias para compreender e desenvolver sistemas inteligentes. Incluem lógica, probabilidade, álgebra e uma compreensão histórica da área.</p>
                            <p className="font-bold text-green-600">Recomendado começar por estes tópicos antes de avançar para implementações práticas.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.edx.org/course/artificial-intelligence-ai" target="_blank">EdX - Introduction to AI</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math" target="_blank">Khan Academy - Matemática</a></li>
                                <li><a className="text-blue-600 underline" href="https://mml-book.github.io/" target="_blank">Mathematics for Machine Learning (Livro)</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-1-1',
                            title: 'Lógica e Álgebra Booleana',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A lógica e a álgebra booleana formam a base do raciocínio computacional e são fundamentais para entender algoritmos de IA. Incluem operações lógicas, tabelas verdade e métodos de prova.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" target="_blank">Neso Academy - Lógica Digital</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/readings/MIT6_042JF10_chap01.pdf" target="_blank">MIT - Matemática para Ciência da Computação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.cs.princeton.edu/courses/archive/fall09/cos126/lectures/06logic-10-13.pdf" target="_blank">Princeton - Lógica Booleana</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-1-2',
                            title: 'Probabilidade e Estatística',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Probabilidade e estatística são essenciais para compreender incertezas e fazer inferências a partir de dados, fundamentais para aprendizado de máquina e modelagem estatística em IA.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/statistics-probability" target="_blank">Khan Academy - Estatística e Probabilidade</a></li>
                                        <li><a className="text-blue-600 underline" href="https://seeing-theory.brown.edu/" target="_blank">Seeing Theory - Visualização de Conceitos</a></li>
                                        <li><a className="text-blue-600 underline" href="http://www.probability.net/" target="_blank">Probability.net - Recursos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/" target="_blank">MIT - Introdução à Probabilidade e Estatística</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-1-3',
                            title: 'Álgebra Linear e Cálculo',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Álgebra linear e cálculo fornecem as ferramentas matemáticas para trabalhar com espaços vetoriais, matrizes, derivadas e otimização, que são fundamentais para algoritmos de aprendizado de máquina.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank">3Blue1Brown - Essência da Álgebra Linear</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Khan Academy - Álgebra Linear</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/calculus-1" target="_blank">Khan Academy - Cálculo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/" target="_blank">MIT - Álgebra Linear</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-1-4',
                            title: 'História e Filosofia da IA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Compreender a história e filosofia da IA ajuda a contextualizar os avanços atuais e os desafios éticos. Abrange desde os primeiros experimentos até debates sobre consciência e inteligência artificial geral.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://plato.stanford.edu/entries/artificial-intelligence/" target="_blank">Stanford Encyclopedia - Filosofia da IA</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.computerhistory.org/timeline/ai-robotics/" target="_blank">Computer History Museum - Timeline da IA</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.amazon.com/AI-Modern-Approach-Stuart-Russell/dp/0134610997/" target="_blank">Livro: AI: A Modern Approach - Capítulos Históricos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html" target="_blank">Wait But Why - A Revolução da IA</a></li>
                                    </ul>
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
                            <p>Dominar as ferramentas e linguagens de programação essenciais para IA é fundamental para implementar algoritmos e manipular dados. Python é a linguagem dominante, juntamente com bibliotecas e ambientes de desenvolvimento.</p>
                            <p className="font-bold text-yellow-600">Familiarize-se com estas ferramentas antes de avançar para implementações de ML/DL.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/specializations/python-3-programming" target="_blank">Coursera - Python 3 Programming</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.anaconda.com/download" target="_blank">Anaconda - Ambiente Python para Ciência de Dados</a></li>
                                <li><a className="text-blue-600 underline" href="https://github.com/microsoft/ML-For-Beginners" target="_blank">Microsoft - ML para Iniciantes</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-2-1',
                            title: 'Python para IA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Python é a linguagem mais utilizada em IA devido à sua sintaxe clara e grande ecossistema de bibliotecas especializadas. Aprenda estruturas de dados, funções, orientação a objetos e boas práticas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.python.org/about/gettingstarted/" target="_blank">Python.org - Começando</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.codecademy.com/learn/learn-python-3" target="_blank">Codecademy - Python 3</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.learnpython.org/" target="_blank">LearnPython.org - Tutorial Interativo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://automatetheboringstuff.com/" target="_blank">Automate the Boring Stuff with Python</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-2-2',
                            title: 'Ambientes: Jupyter, Google Colab, VSCode',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Ambientes de desenvolvimento específicos para IA oferecem funcionalidades como execução interativa de código, visualização de dados e acesso a recursos computacionais. Jupyter Notebooks, Google Colab e VSCode são os mais populares.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://jupyter.org/try" target="_blank">Jupyter - Try Online</a></li>
                                        <li><a className="text-blue-600 underline" href="https://colab.research.google.com/" target="_blank">Google Colab - Notebooks na Nuvem</a></li>
                                        <li><a className="text-blue-600 underline" href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank">VSCode - Tutorial Python</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook" target="_blank">DataCamp - Tutorial Jupyter Notebook</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-2-3',
                            title: 'Bibliotecas: NumPy, Pandas, Matplotlib',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Bibliotecas fundamentais para manipulação e visualização de dados são essenciais para preparar dados para algoritmos de IA. NumPy oferece operações matemáticas eficientes, Pandas para manipulação de dados tabulares e Matplotlib para visualizações.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://numpy.org/doc/stable/user/absolute_beginners.html" target="_blank">NumPy - Guia para Iniciantes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/index.html" target="_blank">Pandas - Tutoriais Introdutórios</a></li>
                                        <li><a className="text-blue-600 underline" href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" target="_blank">Matplotlib - Tutorial Pyplot</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.w3schools.com/python/numpy/default.asp" target="_blank">W3Schools - Tutorial NumPy</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-2-4',
                            title: 'Git e GitHub',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Controle de versão e colaboração são essenciais para projetos de IA. Git permite rastrear mudanças no código e GitHub facilita compartilhamento, colaboração e integração com ferramentas de CI/CD.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://git-scm.com/book/en/v2" target="_blank">Pro Git Book</a></li>
                                        <li><a className="text-blue-600 underline" href="https://lab.github.com/" target="_blank">GitHub Learning Lab</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian - Tutoriais Git</a></li>
                                        <li><a className="text-blue-600 underline" href="https://try.github.io/" target="_blank">Try Git - Recursos</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '7-3',
                    title: '🟠 Machine Learning (ML)',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Machine Learning é um subconjunto da IA focado em algoritmos que aprendem com dados. Existem diferentes abordagens como aprendizado supervisionado, não supervisionado e por reforço, cada uma com aplicações específicas.</p>
                            <p className="font-bold text-orange-600">Este é o núcleo técnico da IA prática moderna.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/machine-learning" target="_blank">Coursera - Machine Learning (Andrew Ng)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.fast.ai/" target="_blank">Fast.ai - Cursos Práticos</a></li>
                                <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/tutorial/" target="_blank">Scikit-Learn - Tutoriais</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-3-1',
                            title: 'Aprendizado Supervisionado',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>No aprendizado supervisionado, algoritmos são treinados em dados rotulados para prever saídas para novas entradas. Inclui classificação (previsão de categorias) e regressão (previsão de valores contínuos).</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.datacamp.com/community/tutorials/supervised-learning-python" target="_blank">DataCamp - Aprendizado Supervisionado em Python</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/supervised_learning.html" target="_blank">Scikit-Learn - Aprendizado Supervisionado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/intro-to-machine-learning" target="_blank">Kaggle - Introdução ao Machine Learning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://jakevdp.github.io/PythonDataScienceHandbook/05.01-what-is-machine-learning.html" target="_blank">Python Data Science Handbook - ML</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-3-2',
                            title: 'Aprendizado Não Supervisionado',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>No aprendizado não supervisionado, algoritmos identificam padrões em dados não rotulados. Técnicas comuns incluem clustering (agrupamento), redução de dimensionalidade e detecção de anomalias.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/unsupervised_learning.html" target="_blank">Scikit-Learn - Aprendizado Não Supervisionado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.datacamp.com/community/tutorials/introduction-to-clustering" target="_blank">DataCamp - Introdução ao Clustering</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/unsupervised-learning-with-python-173c51dc7f03" target="_blank">Towards Data Science - Aprendizado Não Supervisionado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/lecture/machine-learning/unsupervised-learning-olRZo" target="_blank">Coursera - Introdução ao Aprendizado Não Supervisionado</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-3-3',
                            title: 'Algoritmos Clássicos (KNN, SVM, Árvores)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Algoritmos clássicos de ML ainda são amplamente utilizados por sua interpretabilidade e eficiência. K-Nearest Neighbors (KNN), Support Vector Machines (SVM) e Árvores de Decisão formam a base do aprendizado de máquina prático.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/neighbors.html" target="_blank">Scikit-Learn - KNN</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/svm.html" target="_blank">Scikit-Learn - SVM</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/tree.html" target="_blank">Scikit-Learn - Árvores de Decisão</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/intro-to-machine-learning" target="_blank">Kaggle - Introdução aos Algoritmos de ML</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-3-4',
                            title: 'Validação e Ajuste de Modelos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Validar e ajustar modelos é essencial para garantir bom desempenho em dados novos. Técnicas incluem validação cruzada, métricas de avaliação, regularização e otimização de hiperparâmetros.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/cross_validation.html" target="_blank">Scikit-Learn - Validação Cruzada</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/model_evaluation.html" target="_blank">Scikit-Learn - Avaliação de Modelos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/intermediate-machine-learning" target="_blank">Kaggle - ML Intermediário</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/hyperparameter-optimization-with-random-search-and-grid-search/" target="_blank">Machine Learning Mastery - Otimização de Hiperparâmetros</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '7-4',
                    title: '🔵 Deep Learning (DL)',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Deep Learning é um subconjunto do Machine Learning baseado em redes neurais artificiais com múltiplas camadas. Esta abordagem revolucionou áreas como visão computacional, processamento de linguagem natural e reconhecimento de fala.</p>
                            <p className="font-bold text-blue-600">Representa o estado da arte em muitas aplicações de IA.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.deeplearningbook.org/" target="_blank">Deep Learning Book (Goodfellow, Bengio, Courville)</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/specializations/deep-learning" target="_blank">Coursera - Deep Learning Specialization</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.fast.ai/2019/06/28/course-p2v3/" target="_blank">Fast.ai - Practical Deep Learning</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-4-1',
                            title: 'Redes Neurais Artificiais (ANN)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Redes Neurais Artificiais são a base do Deep Learning, inspiradas no funcionamento do cérebro humano. Consistem em neurônios artificiais organizados em camadas que processam e transformam dados para aprender padrões complexos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.3blue1brown.com/topics/neural-networks" target="_blank">3Blue1Brown - Neural Networks</a></li>
                                        <li><a className="text-blue-600 underline" href="https://playground.tensorflow.org/" target="_blank">TensorFlow Playground - Visualização Interativa</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/neural-networks-deep-learning" target="_blank">Coursera - Neural Networks and Deep Learning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/neural-networks-crash-course/" target="_blank">Machine Learning Mastery - Curso Rápido</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-4-2',
                            title: 'Redes Convolucionais (CNN)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Redes Neurais Convolucionais são especializadas em processamento de dados com estrutura em grade, como imagens. Utilizam operações de convolução para detectar características locais e construir representações hierárquicas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://cs231n.github.io/" target="_blank">Stanford CS231n - CNNs para Visual Recognition</a></li>
                                        <li><a className="text-blue-600 underline" href="https://medium.com/@RaghavPrabhu/understanding-of-convolutional-neural-network-cnn-deep-learning-99760835f148" target="_blank">Medium - Entendendo CNNs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/images/cnn" target="_blank">TensorFlow - Tutorial CNN</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" target="_blank">PyTorch - Tutorial CIFAR10</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-4-3',
                            title: 'Redes Recorrentes (RNN, LSTM, GRU)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Redes Neurais Recorrentes são projetadas para trabalhar com dados sequenciais. LSTMs (Long Short-Term Memory) e GRUs (Gated Recurrent Units) são variantes que lidam melhor com dependências de longo prazo em sequências.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://colah.github.io/posts/2015-08-Understanding-LSTMs/" target="_blank">Colah's Blog - Entendendo LSTMs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/text/text_classification_rnn" target="_blank">TensorFlow - Classificação de Texto com RNN</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/gentle-introduction-long-short-term-memory-networks-experts/" target="_blank">ML Mastery - Introdução a LSTMs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html" target="_blank">PyTorch - RNN para Classificação</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-4-4',
                            title: 'Frameworks (TensorFlow, PyTorch)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Frameworks como TensorFlow e PyTorch facilitam o desenvolvimento de modelos de Deep Learning, oferecendo abstrações de alto nível, otimizações automáticas e ferramentas para treinamento e deploy de modelos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials" target="_blank">TensorFlow - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/" target="_blank">PyTorch - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://keras.io/guides/" target="_blank">Keras - Guias</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/pytorch-tutorial-develop-deep-learning-models/" target="_blank">ML Mastery - Tutorial PyTorch</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '7-5',
                    title: '🟣 Processamento de Linguagem Natural (NLP)',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Processamento de Linguagem Natural (NLP) é a área da IA que lida com a interação entre computadores e linguagem humana. Inclui análise de texto, tradução automática, chatbots e sistemas de resposta a perguntas.</p>
                            <p className="font-bold text-purple-600">Uma das áreas de maior crescimento e aplicação prática da IA.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.nltk.org/book/" target="_blank">NLTK Book - Introdução ao NLP com Python</a></li>
                                <li><a className="text-blue-600 underline" href="https://web.stanford.edu/~jurafsky/slp3/" target="_blank">Stanford - Speech and Language Processing</a></li>
                                <li><a className="text-blue-600 underline" href="https://huggingface.co/course/chapter1" target="_blank">Hugging Face - Curso NLP</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-5-1',
                            title: 'Pré-processamento de Texto',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O pré-processamento de texto é fundamental para transformar texto bruto em formato adequado para algoritmos de ML. Inclui tokenização, normalização, remoção de stopwords, stemming e lematização.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nltk.org/howto/tokenize.html" target="_blank">NLTK - Tutorial de Tokenização</a></li>
                                        <li><a className="text-blue-600 underline" href="https://spacy.io/usage/linguistic-features" target="_blank">spaCy - Recursos Linguísticos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction" target="_blank">Scikit-learn - Extração de Features de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/nlp-text-preprocessing-a-practical-guide-and-template-d80874676e79" target="_blank">Towards Data Science - Guia Prático</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-5-2',
                            title: 'Modelos Clássicos (Bag of Words, TF-IDF)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Modelos clássicos de NLP transformam texto em representações numéricas. Bag of Words representa documentos pela frequência de palavras, enquanto TF-IDF (Term Frequency-Inverse Document Frequency) considera também a importância das palavras no corpus.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/feature_extraction.html#the-bag-of-words-representation" target="_blank">Scikit-learn - Bag of Words</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/text/word_embeddings" target="_blank">TensorFlow - Word Embeddings</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/text-vectorization-bag-of-words-vs-tf-idf-vs-word2vec-b4864e17ccc5" target="_blank">Towards Data Science - Vetorização de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/gentle-introduction-bag-words-model/" target="_blank">ML Mastery - Introdução ao BoW</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-5-3',
                            title: 'Modelos Avançados (BERT, GPT)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Modelos de linguagem baseados em transformers como BERT (Bidirectional Encoder Representations from Transformers) e GPT (Generative Pre-trained Transformer) revolucionaram o NLP com arquiteturas baseadas em atenção e pré-treinamento em grandes corpus.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://huggingface.co/transformers/model_doc/bert.html" target="_blank">Hugging Face - Documentação BERT</a></li>
                                        <li><a className="text-blue-600 underline" href="https://jalammar.github.io/illustrated-bert/" target="_blank">Illustrated BERT</a></li>
                                        <li><a className="text-blue-600 underline" href="https://jalammar.github.io/illustrated-gpt2/" target="_blank">Illustrated GPT-2</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/text/tutorials/fine_tune_bert" target="_blank">TensorFlow - Fine-tunning BERT</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-5-4',
                            title: 'Aplicações (Chatbots, Classificação, Geração)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>NLP possibilita diversas aplicações práticas como chatbots inteligentes, classificação de textos (sentimento, spam), tradução automática, geração de texto e sistemas de resposta a perguntas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/text/text_classification_rnn" target="_blank">TensorFlow - Classificação de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://huggingface.co/blog/how-to-generate" target="_blank">Hugging Face - Geração de Texto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/build-a-simple-chatbot-with-python-and-nltk-5d07b027e727" target="_blank">Towards Data Science - Construindo um Chatbot</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html" target="_blank">PyTorch - Tutorial de Tradução</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '7-6',
                    title: '🔴 Visão Computacional (CV)',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Visão Computacional é a área da IA que permite aos computadores interpretar e processar imagens e vídeos. Abrange reconhecimento de objetos, detecção facial, segmentação de imagens e muitas outras aplicações visuais.</p>
                            <p className="font-bold text-red-600">Uma área de grande impacto em automação, segurança e análise de mídia.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.pyimagesearch.com/start-here/" target="_blank">PyImageSearch - Tutoriais de CV</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/convolutional-neural-networks" target="_blank">Coursera - CNNs e Visão Computacional</a></li>
                                <li><a className="text-blue-600 underline" href="https://opencv.org/opencv-free-course/" target="_blank">OpenCV - Curso Gratuito</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-6-1',
                            title: 'Manipulação de Imagens (OpenCV)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Manipulação de imagens é fundamental para visão computacional, envolvendo operações como redimensionamento, filtragem, transformação e extração de características. OpenCV é a biblioteca mais popular e abrangente para essas tarefas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://docs.opencv.org/master/d9/df8/tutorial_root.html" target="_blank">OpenCV - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.pyimagesearch.com/2018/07/19/opencv-tutorial-a-guide-to-learn-opencv/" target="_blank">PyImageSearch - Tutorial OpenCV</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.learnopencv.com/" target="_blank">LearnOpenCV - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html" target="_blank">OpenCV-Python - Documentação</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-6-2',
                            title: 'Detecção e Classificação de Objetos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Detecção e classificação de objetos são tarefas fundamentais que identificam e categorizam objetos em imagens. Técnicas modernas incluem R-CNN, YOLO, SSD e modelos baseados em transformers como DETR.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/object-recognition-with-deep-learning/" target="_blank">ML Mastery - Reconhecimento de Objetos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/images/object_detection" target="_blank">TensorFlow - Detecção de Objetos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/ultralytics/yolov5" target="_blank">GitHub - YOLOv5</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html" target="_blank">PyTorch - Tutorial TorchVision</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-6-3',
                            title: 'Segmentação de Imagens',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Segmentação de imagens divide uma imagem em regiões significativas, permitindo identificar precisamente a localização de objetos. Inclui segmentação semântica (por categoria) e segmentação de instância (objetos individuais).</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/images/segmentation" target="_blank">TensorFlow - Segmentação de Imagens</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html" target="_blank">PyTorch - Segmentação com TorchVision</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.jeremyjordan.me/semantic-segmentation/" target="_blank">Jeremy Jordan - Segmentação Semântica</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/qubvel/segmentation_models.pytorch" target="_blank">GitHub - Modelos de Segmentação PyTorch</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-6-4',
                            title: 'Modelos Pré-treinados (YOLO, ResNet)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Modelos pré-treinados facilitam o desenvolvimento de soluções de visão computacional sem treinar do zero. YOLO (You Only Look Once) é ideal para detecção rápida, enquanto ResNet oferece classificação poderosa com redes residuais profundas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/computer-vision" target="_blank">Kaggle - Computer Vision</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pjreddie.com/darknet/yolo/" target="_blank">YOLO - Documentação Oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/hub/pytorch_vision_resnet/" target="_blank">PyTorch - ResNet</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/api_docs/python/tf/keras/applications" target="_blank">TensorFlow - Modelos Pré-treinados</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '7-7',
                    title: '⚫ Ética, Segurança e Deploy de IA',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A implementação responsável de IA exige considerações éticas, segurança de dados e técnicas eficientes de implantação. Esta área cobre questões de viés, privacidade e ferramentas para colocar modelos em produção.</p>
                            <p className="font-bold">Aspectos essenciais para aplicações de IA confiáveis e sustentáveis.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.fast.ai/2018/09/24/ai-ethics-resources/" target="_blank">Fast.ai - Recursos de Ética em IA</a></li>
                                <li><a className="text-blue-600 underline" href="https://ai.google/education/responsible-ai-practices" target="_blank">Google - Práticas Responsáveis de IA</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tfx/tutorials/serving/rest_simple" target="_blank">TensorFlow - Deploy de Modelos</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-7-1',
                            title: 'Ética e Viés em IA',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Sistemas de IA podem perpetuar ou amplificar preconceitos presentes nos dados de treinamento. A ética em IA aborda questões de justiça, transparência, responsabilidade e impacto social dos sistemas inteligentes.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/ai-ethics" target="_blank">Coursera - Ethics in AI</a></li>
                                        <li><a className="text-blue-600 underline" href="https://ai.google/responsibilities/responsible-ai-practices/" target="_blank">Google - Práticas Responsáveis</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.fast.ai/2018/09/24/ai-ethics-resources/" target="_blank">Fast.ai - Recursos de Ética</a></li>
                                        <li><a className="text-blue-600 underline" href="https://fairmlbook.org/" target="_blank">Fairness and Machine Learning</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-7-2',
                            title: 'Privacidade de Dados',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A privacidade de dados é crucial em aplicações de IA, especialmente com regulamentações como GDPR e LGPD. Técnicas como aprendizado federado, criptografia e anonimização ajudam a proteger informações sensíveis.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/responsible_ai/privacy" target="_blank">TensorFlow - Privacy in ML</a></li>
                                        <li><a className="text-blue-600 underline" href="https://opacus.ai/" target="_blank">Opacus - Privacy for PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.fast.ai/posts/2020-01-09-data-privacy.html" target="_blank">Fast.ai - Privacidade de Dados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.udacity.com/course/secure-and-private-ai--ud185" target="_blank">Udacity - Secure and Private AI</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-7-3',
                            title: 'Deploy com Flask, FastAPI, Streamlit',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Colocar modelos de IA em produção requer frameworks como Flask (web básico), FastAPI (API de alto desempenho) ou Streamlit (aplicações interativas). Estas ferramentas permitem criar interfaces e APIs para seus modelos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://flask.palletsprojects.com/en/2.0.x/tutorial/" target="_blank">Flask - Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://fastapi.tiangolo.com/tutorial/" target="_blank">FastAPI - Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.streamlit.io/en/stable/getting_started.html" target="_blank">Streamlit - Começando</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/deploying-machine-learning-models-with-streamlit-and-heroku-54e1071bf2db" target="_blank">Towards Data Science - Deploy com Streamlit</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-7-4',
                            title: 'MLOps e Monitoramento de Modelos',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>MLOps (Machine Learning Operations) combina DevOps com desenvolvimento de ML para automatizar ciclos de vida de modelos. Inclui versionamento, implantação contínua, monitoramento de desempenho e retreinamento automático.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.mlflow.org/docs/latest/index.html" target="_blank">MLflow - Documentação</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tfx" target="_blank">TensorFlow Extended (TFX)</a></li>
                                        <li><a className="text-blue-600 underline" href="https://madewithml.com/courses/mlops/" target="_blank">Made With ML - Curso MLOps</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kubeflow.org/docs/started/introduction/" target="_blank">Kubeflow - Introdução</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '7-8',
                    title: '🌐 Aplicações Reais e Projetos',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A aplicação prática de IA em diversos setores demonstra seu potencial transformador. Essa área explora casos de uso reais, competições, integração com outros sistemas e tendências emergentes como IA generativa.</p>
                            <p className="font-bold text-green-600">Consolidação de conhecimentos através de projetos práticos e aplicações do mundo real.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.kaggle.com/competitions" target="_blank">Kaggle - Competições</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/ai-for-everyone" target="_blank">Coursera - AI for Everyone</a></li>
                                <li><a className="text-blue-600 underline" href="https://paperswithcode.com/" target="_blank">Papers With Code - Implementações</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-8-1',
                            title: 'Soluções Reais com IA (Saúde, Finanças, Indústria)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>IA está transformando diversos setores com aplicações práticas. Na saúde, auxilia diagnósticos e descoberta de medicamentos; em finanças, otimiza investimentos e detecção de fraudes; na indústria, permite manutenção preditiva e automação inteligente.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nature.com/articles/s41591-018-0316-z" target="_blank">Nature - IA na Medicina</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ibm.com/watson-health" target="_blank">IBM Watson Health</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mckinsey.com/industries/financial-services/our-insights/ai-bank-of-the-future-can-banks-meet-the-ai-challenge" target="_blank">McKinsey - IA em Bancos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.ge.com/digital/iiot-platform" target="_blank">GE - Soluções Industriais</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-8-2',
                            title: 'Projetos Open Source e Competição (Kaggle)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Participar de projetos open source e competições de ML/IA desenvolve habilidades práticas. Plataformas como Kaggle oferecem datasets, competições e colaboração com a comunidade global de cientistas de dados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/competitions" target="_blank">Kaggle - Competições</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/tensorflow/models" target="_blank">GitHub - TensorFlow Models</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/pytorch/examples" target="_blank">GitHub - PyTorch Examples</a></li>
                                        <li><a className="text-blue-600 underline" href="https://mlcontests.com/" target="_blank">ML Contests - Lista de Competições</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-8-3',
                            title: 'Integração com APIs e Aplicações Web',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Integrar modelos de IA em aplicações existentes requer conhecimento de APIs e desenvolvimento web. Serviços como Azure AI, Google Cloud AI e AWS AI facilitam esse processo, oferecendo modelos pré-treinados via APIs.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://cloud.google.com/ai-platform/docs/tutorials" target="_blank">Google Cloud AI - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.microsoft.com/azure/cognitive-services/" target="_blank">Azure Cognitive Services</a></li>
                                        <li><a className="text-blue-600 underline" href="https://aws.amazon.com/machine-learning/" target="_blank">AWS - Serviços de ML</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/js" target="_blank">TensorFlow.js - ML para Web</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '7-8-4',
                            title: 'IA Generativa (Imagens, Texto, Música)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>IA generativa cria conteúdo original como imagens, texto e música. Modelos como GANs, Transformers e Diffusion Models possibilitam aplicações criativas e revolucionam campos como arte digital, composição musical e escrita.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://openai.com/blog/dall-e/" target="_blank">OpenAI - DALL-E</a></li>
                                        <li><a className="text-blue-600 underline" href="https://huggingface.co/blog/stable_diffusion" target="_blank">Hugging Face - Stable Diffusion</a></li>
                                        <li><a className="text-blue-600 underline" href="https://github.com/lucidrains/DALLE2-pytorch" target="_blank">GitHub - DALL-E 2 PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://magenta.tensorflow.org/" target="_blank">Google Magenta - Música e Arte com ML</a></li>
                                    </ul>
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