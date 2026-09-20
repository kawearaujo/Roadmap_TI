export default function IA() {
    return (
        {
            id: '7',
            title: 'IA',
            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>A <strong>Inteligência Artificial</strong> é uma área que busca criar sistemas capazes de <strong>processar dados, aprender padrões e tomar decisões</strong> com base em informações e objetivos definidos. Ela abrange campos como <strong>aprendizado de máquina, redes neurais, visão computacional e processamento de linguagem</strong>.</p>

                    <p>Para trilhar esse caminho com clareza, o ideal é seguir uma sequência: <strong>entender os fundamentos matemáticos e estatísticos</strong>, <strong>aprender programação em Python</strong>, <strong>explorar bibliotecas e ferramentas</strong> e, por fim, aplicar modelos em projetos reais. Esse processo ajuda a transformar conceitos em soluções práticas e mensuráveis.</p>

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
                                Os fundamentos de IA são a base para compreender como os modelos aprendem, como os dados são interpretados e como a tomada de decisão acontece. Em vez de estudar apenas teoria isolada, o ideal é conectar <strong>lógica, probabilidades, cálculo e álgebra linear</strong> com aplicações reais de inteligência artificial.
                            </p>
                            <p>Os passos principais são: <strong>entender as bases matemáticas</strong>, <strong>compreender a história e a ética da IA</strong> e <strong>relacionar esses conceitos com algoritmos e problemas reais</strong>. Essa visão mais ampla permite uma formação mais sólida, crítica e aplicada.</p>
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
                                        Probabilidade e estatística são fundamentais para IA pois a maioria dos modelos modernos opera com incerteza. Distribuições de probabilidade, teorema de Bayes, inferência estatística e testes de hipótese são conceitos aplicados diretamente em modelos generativos, classificadores probabilísticos e avaliação de modelos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9" target="_blank">Probabilidade para IA - StatQuest</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HZGCoVF3YvM" target="_blank">Statistics for AI - 3Blue1Brown</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/math/statistics-probability" target="_blank">Probability and Statistics - Khan Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.edx.org/learn/probability/massachusetts-institute-of-technology-probability-the-science-of-uncertainty-and-data" target="_blank">Introduction to Probability - edX MIT</a></li>
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
                                        Álgebra linear e cálculo são os idiomas matemáticos da IA moderna. Tensores são extensões de matrizes usados em redes neurais profundas. Derivadas parciais e gradientes calculam como ajustar os pesos de um modelo durante o treinamento. Sem esses fundamentos, é impossível entender como os algoritmos de IA realmente aprendem.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" target="_blank">Essence of Linear Algebra - 3Blue1Brown</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" target="_blank">Essence of Calculus - 3Blue1Brown</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/linear-algebra-machine-learning" target="_blank">Mathematics for ML: Linear Algebra - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/multivariate-calculus-machine-learning" target="_blank">Calculus for ML - Coursera</a></li>
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
                                        Conhecer a história da IA, desde os trabalhos de Turing e McCarthy até o deep learning moderno, oferece contexto valioso. Debates filosóficos como o Teste de Turing, o Quarto Chinês e questões sobre consciência artificial ajudam a situar o profissional nas discussões sobre limites, responsabilidade e impacto social da IA.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=ePLFg4F-_k4" target="_blank">History of AI - CrashCourse</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=MGW_Qcqr9eQ" target="_blank">The Philosophy of Artificial Intelligence</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/ai-for-everyone" target="_blank">AI For Everyone - Coursera Andrew Ng</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://ethics-of-ai.mooc.fi" target="_blank">Ethics of AI - University of Helsinki</a></li>
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
                                A parte prática da IA começa com <strong>Python</strong>, ambientes de desenvolvimento e bibliotecas especializadas. Nessa etapa, você vai aprender a manipular dados, estruturar projetos, testar ideias e executar modelos de forma organizada e reutilizável.
                            </p>
                            <p>O processo recomendado é: <strong>dominar Python</strong>, <strong>aprender ferramentas como Jupyter e Colab</strong>, <strong>explorar bibliotecas de dados e ML</strong> e <strong>usar versionamento para manter rastreabilidade dos experimentos</strong>. Isso ajuda a transformar conhecimento em projetos consistentes, escaláveis e fáceis de validar.</p>
                        </div>
                    ),
                    children: [
                        {
                            id: '7-2-1',
                            title: 'Python para IA',
                            content: (
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>
                                        Python é a linguagem dominante em IA pela sua sintaxe clara e ecossistema. Além dos conceitos básicos, é importante dominar list comprehensions, generators, decorators e o modelo de tipos dinâmicos. Boas práticas como modularização e docstrings tornam experimentos reproduzíveis e colaborações mais eficientes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=S9uPNppGsGo" target="_blank">Python para IA - DSA</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=7eh4d6sabA0" target="_blank">Python for Machine Learning - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.datascienceacademy.com.br/cursosgratuitos" target="_blank">Python para IA - DSA Data Science Academy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/specializations/python" target="_blank">Python for Everybody - Coursera</a></li>
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
                                        Google Colab oferece GPUs gratuitas na nuvem, ideal para treinar modelos sem hardware dedicado. Jupyter Notebook permite combinar código e documentação num formato interativo. Gerenciar ambientes com Conda ou venv evita conflitos de dependências entre projetos de IA que usam versões distintas de frameworks.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=inN8seMm7UI" target="_blank">Google Colab Tutorial - Sentdex</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=K5WkA9Hx2XQ" target="_blank">Jupyter Notebook para IA - Sigmoidal</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://colab.research.google.com/notebooks/intro.ipynb" target="_blank">Google Colab - Documentação Oficial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/introduction-to-jupyter" target="_blank">Jupyter for Data Science - Coursera</a></li>
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
                                        NumPy e Pandas são essenciais para manipulação de dados. Scikit-learn oferece algoritmos clássicos de ML prontos para usar. TensorFlow e PyTorch são os frameworks de deep learning mais usados. Matplotlib e Seaborn visualizam resultados. Hugging Face disponibiliza modelos pré-treinados de NLP e visão computacional.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=WcDaZ67TVRo" target="_blank">NumPy, Pandas e Scikit-learn - Sigmoidal</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=QEaBAZQCtwE" target="_blank">Hugging Face Tutorial - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn" target="_blank">Kaggle Learn - Python, Pandas, ML</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://huggingface.co/learn/nlp-course" target="_blank">Hugging Face Course</a></li>
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
                                        Git é essencial para versionar código de IA, mas experimentos também precisam de rastreabilidade. DVC (Data Version Control) versiona datasets e modelos junto ao código. MLflow rastreia parâmetros, métricas e artefatos de experimentos. Essas ferramentas tornam projetos de IA reproduzíveis e auditáveis.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=kLKBcPonMYw" target="_blank">DVC Tutorial - Iterative.ai</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=qdcHHrsXA48" target="_blank">MLflow para Experimentos - Krish Naik</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.cursoemvideo.com/curso/git-e-github/" target="_blank">Git e GitHub - Curso em Vídeo</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/mlops-fundamentals" target="_blank">MLOps Fundamentals - Coursera</a></li>
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
                                A aprendizagem de máquina é o coração da IA moderna. Algoritmos supervisionados aprendem a partir de exemplos rotulados, enquanto os não supervisionados descobrem padrões ocultos. Conhecer os algoritmos clássicos e saber validar e ajustar modelos corretamente são habilidades que diferenciam quem realmente domina ML daqueles que apenas aplicam código copiado.
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
                                        Aprendizado supervisionado usa dados rotulados para treinar modelos de classificação e regressão. Algoritmos como SVM, árvores de decisão, Random Forest, Gradient Boosting e KNN são amplamente utilizados. Entender quando usar cada algoritmo e como interpretar seus resultados é fundamental para soluções eficazes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" target="_blank">Supervised Learning - StatQuest</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=I5iDjj5jINE" target="_blank">ML Supervisionado com Sklearn - Sigmoidal</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/specializations/machine-learning-introduction" target="_blank">Machine Learning - Andrew Ng (Coursera)</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/intro-to-machine-learning" target="_blank">Intro to ML - Kaggle</a></li>
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
                                        Aprendizado não supervisionado encontra estrutura em dados sem rótulos. Clustering agrupa pontos similares, redução de dimensionalidade como PCA comprime dados preservando informação, e modelos generativos como VAEs aprendem distribuições de dados. São usados em detecção de anomalias, segmentação e exploração de dados.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=eN0wFzBA4Sc" target="_blank">Unsupervised Learning - StatQuest</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=4b5d3muPQmA" target="_blank">K-Means Clustering - Sigmoidal</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning" target="_blank">Unsupervised Learning - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/intro-to-machine-learning" target="_blank">Clustering - Kaggle</a></li>
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
                                        Regressão linear e logística, Naive Bayes, SVM, k-NN, árvores de decisão e Random Forest formam o repertório clássico de ML. Esses algoritmos, apesar de mais simples que deep learning, são interpretáveis, rápidos e frequentemente superam redes neurais em datasets menores ou com poucos recursos computacionais.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" target="_blank">Algoritmos Clássicos de ML - StatQuest</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HcqpanDadyQ" target="_blank">ML Crash Course - Google</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://developers.google.com/machine-learning/crash-course" target="_blank">ML Crash Course - Google</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/intermediate-machine-learning" target="_blank">Intermediate Machine Learning - Kaggle</a></li>
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
                                        Validar modelos corretamente evita overfitting e garante generalização. Técnicas como cross-validation, grid search para hiperparâmetros e análise de curvas de aprendizado são essenciais. Métricas como AUC-ROC, F1-score, RMSE e precisão devem ser escolhidas conforme o tipo e o objetivo do problema.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=fSytzGwwBVw" target="_blank">Model Validation - StatQuest</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HdlDYng8g9s" target="_blank">Hyperparameter Tuning - Krish Naik</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/intermediate-machine-learning" target="_blank">Intermediate ML (Validation) - Kaggle</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/introduction-to-machine-learning-in-production" target="_blank">ML in Production - Coursera</a></li>
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
                                O aprendizado profundo impulsionou avanços extraordinários em IA ao permitir que modelos aprendam representações complexas diretamente dos dados brutos. Redes neurais profundas, CNNs para imagens e RNNs para sequências revolucionaram campos inteiros. Frameworks como TensorFlow e PyTorch tornaram acessível o treinamento desses modelos mesmo para pesquisadores com recursos limitados.
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
                                        Redes neurais são compostas por camadas de neurônios artificiais que aprendem via backpropagation. Funções de ativação como ReLU e Sigmoid introduzem não-linearidade. Técnicas de regularização como Dropout e Batch Normalization previnem overfitting. São a base de todo o ecossistema de deep learning moderno.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank">Neural Networks - 3Blue1Brown</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=DqfOUQKVBEQ" target="_blank">Redes Neurais do Zero - Sigmoidal</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/neural-networks-deep-learning" target="_blank">Neural Networks and Deep Learning - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.fast.ai" target="_blank">Deep Learning - fast.ai</a></li>
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
                                        CNNs são especializadas em processamento de dados com estrutura espacial como imagens e vídeos. Camadas convolucionais detectam padrões locais hierarquicamente, do simples ao complexo. Arquiteturas como ResNet, VGG e EfficientNet são referências em tarefas de visão computacional e estão disponíveis pré-treinadas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=YRhxdVk_sIs" target="_blank">CNN Explained - Deeplizard</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" target="_blank">CNN - Stanford CS231n</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/convolutional-neural-networks" target="_blank">CNN - Coursera deeplearning.ai</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/computer-vision" target="_blank">Computer Vision - Kaggle</a></li>
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
                                        RNNs processam sequências mantendo estado interno entre passos. LSTMs e GRUs resolvem o problema do gradiente desvanescente das RNNs simples. São usadas em séries temporais, geração de texto e tradução automática. Transformers, porém, têm superado RNNs em muitas tarefas sequenciais nos últimos anos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=AsNTP8Kwu80" target="_blank">RNNs e LSTM - StatQuest</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=BwmddtPFWtA" target="_blank">Redes Recorrentes - Siraj Raval</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/nlp-sequence-models" target="_blank">Sequence Models - Coursera deeplearning.ai</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/time-series" target="_blank">Time Series - Kaggle</a></li>
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
                                        TensorFlow com Keras e PyTorch são os frameworks dominantes de deep learning. TensorFlow é forte em produção e deployment mobile via TensorFlow Lite. PyTorch é preferido em pesquisa por sua interface Pythônica e modo eager. JAX, da Google, é uma alternativa emergente com foco em computação numérica de alta performance.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=V_xro1bcAuA" target="_blank">PyTorch Full Course - freeCodeCamp</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=tPYj3fFJGjk" target="_blank">TensorFlow 2.0 - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.fast.ai" target="_blank">Deep Learning with PyTorch - fast.ai</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/professional-certificates/tensorflow-in-practice" target="_blank">TensorFlow in Practice - Coursera</a></li>
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
                                O Processamento de Linguagem Natural (NLP) permite que máquinas compreendam, gerem e interajam usando linguagem humana. Da análise de sentimentos à geração de texto e tradução automática, o NLP transformou interfaces digitais. Com o advento dos Transformers e modelos como GPT e BERT, o campo avançou exponencialmente, criando demanda crescente por especialistas.
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
                                        Antes de alimentar texto a modelos, ele deve ser normalizado. Tokenização divide texto em unidades menores, stemming e lemmatização reduzem palavras à raiz, e stopwords removem termos sem valor semântico. TF-IDF e word embeddings como Word2Vec transformam texto em representações numéricas para os modelos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=IaMJh5_UbQ4" target="_blank">NLP Pré-processamento com Python - Sigmoidal</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=viZrOnJclY0" target="_blank">Text Preprocessing - StatQuest</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/intro-to-nlp" target="_blank">Natural Language Processing - Kaggle</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.nltk.org/book/" target="_blank">NLP with Python - NLTK Book</a></li>
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
                                        Modelos clássicos de NLP incluem Naive Bayes para classificação de texto, n-gramas para modelagem de linguagem e SVM para análise de sentimentos. Bag of Words e TF-IDF são representações vetoriais simples mas eficazes para tarefas como categorização de documentos e detecção de spam.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=5RqA7zvA0bE" target="_blank">Bag of Words e TF-IDF - Sigmoidal</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=viZrOnJclY0" target="_blank">NLP Clássico - StatQuest</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/classification-vector-spaces-in-nlp" target="_blank">NLP with Classification - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/intro-to-nlp" target="_blank">Text Mining - Kaggle</a></li>
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
                                        Transformers revolucionaram o NLP com o mecanismo de atenção. BERT é pré-treinado para tarefas de compreensão e GPT para geração de texto. Hugging Face disponibiliza centenas desses modelos pré-treinados via uma API simples. Fine-tuning adapta modelos gerais para tarefas específicas com poucos dados.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=kCc8FmEb1nY" target="_blank">Transformers Explained - Andrej Karpathy</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=-9vVhYEXeyQ" target="_blank">BERT e GPT - Yannic Kilcher</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://huggingface.co/learn/nlp-course" target="_blank">Hugging Face NLP Course</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/attention-models-in-nlp" target="_blank">NLP with Attention Models - Coursera</a></li>
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
                                        NLP tem aplicações práticas como chatbots, análise de sentimentos em reviews, sumarização automática, tradução, extração de informação e sistemas de busca semântica. RAG (Retrieval-Augmented Generation) combina modelos de linguagem com bases de conhecimento para respostas mais precisas e atualizadas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=wypVcNIgqCo" target="_blank">Chatbot com Python e NLP - Sentdex</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=T-D1OfcDW1M" target="_blank">RAG Explained - IBM Technology</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/specializations/natural-language-processing" target="_blank">NLP Applications - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" target="_blank">LangChain for LLM Applications - DeepLearning.AI</a></li>
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
                                Visão Computacional capacita máquinas a interpretar e compreender imagens e vídeos. Desde manipulação básica de pixels até detecção de objetos em tempo real e segmentação semântica, o campo avançou enormemente com o deep learning. OpenCV é a biblioteca de referência para processamento de imagens, enquanto YOLO e modelos baseados em Transformers lideram em detecção e classificação.
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
                                        OpenCV é a biblioteca padrão para manipulação de imagens em Python. Operações como redimensionamento, conversão de espaço de cor, filtragem, detecção de bordas com Canny e operações morfológicas são a base do pré-processamento de imagens antes de alimentar modelos de aprendizado de máquina.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/playlist?list=PLQVvvaa0QuDdttJXlLtAJxJetJcqmqlQq" target="_blank">OpenCV com Python - Sentdex</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=oXlwWbU8l2o" target="_blank">OpenCV Completo - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://docs.opencv.org/4.x/d9/df8/tutorial_root.html" target="_blank">OpenCV Tutorial - OpenCV Documentation</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/computer-vision-basics" target="_blank">Computer Vision Basics - Coursera</a></li>
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
                                        Classificação determina o que está numa imagem, enquanto detecção localiza e classifica múltiplos objetos simultaneamente. YOLO (You Only Look Once) é o algoritmo de detecção em tempo real mais popular. Transfer learning com modelos pré-treinados como ResNet e EfficientNet acelera o desenvolvimento de soluções customizadas.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=WgPbbWmnXJ8" target="_blank">YOLO Object Detection - Nicolai Nielsen</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=tPYj3fFJGjk" target="_blank">Image Classification com TensorFlow - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/computer-vision" target="_blank">Computer Vision - Kaggle</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/convolutional-neural-networks" target="_blank">Object Detection - Coursera</a></li>
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
                                        Segmentação vai além da detecção ao classificar cada pixel individualmente. Segmentação semântica atribui uma classe a cada pixel, enquanto a de instâncias distingue objetos individuais. U-Net é a arquitetura referência para segmentação, amplamente usada em imagens médicas e análise de satélites.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=nDPWywWRIRo" target="_blank">Image Segmentation - Sentdex</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=IHq1t7NxS8k" target="_blank">U-Net Architecture Explained - Aladdin Persson</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/convolutional-neural-networks" target="_blank">Image Segmentation - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/competitions/uw-madison-gi-tract-image-segmentation" target="_blank">Medical Image Analysis - Kaggle</a></li>
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
                                        Modelos pré-treinados como ResNet, VGG, EfficientNet e Vision Transformer (ViT) foram treinados em grandes datasets como ImageNet. Através de transfer learning, suas representações são adaptadas para novas tarefas com poucos dados. Hugging Face e TorchVision disponibilizam esses modelos de forma simples e prática.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=OO4HD-1wRN8" target="_blank">Transfer Learning - Deeplizard</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=b6C0v72FVkg" target="_blank">Modelos Pré-treinados - Krish Naik</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.fast.ai" target="_blank">Transfer Learning - fast.ai</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn/computer-vision" target="_blank">CV with Pretrained Models - Kaggle</a></li>
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
                                Com o avanço da IA, questões de ética, viés, privacidade e responsabilidade tornaram-se centrais. Modelos podem perpetuar discriminações presentes nos dados de treinamento. Além da responsabilidade ética, colocar modelos em produção exige conhecimento de APIs, contêineres, monitoramento e MLOps para garantir que continuem funcionando corretamente ao longo do tempo.
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
                                        Modelos de IA podem amplificar vieses presentes nos dados de treinamento, causando discriminações em decisões de crédito, contratação e saúde. Ferramentas como IBM AI Fairness 360 e Google What-If Tool ajudam a identificar e mitigar vieses. Documentar modelos com Model Cards é uma prática de transparência recomendada.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=zIYpqPMRMo0" target="_blank">AI Ethics - CrashCourse</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=UG_X_7g63rY" target="_blank">Bias in AI - MIT</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://ethics-of-ai.mooc.fi" target="_blank">Ethics of AI - University of Helsinki</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/ai-for-everyone" target="_blank">AI For Everyone - Coursera</a></li>
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
                                        LGPD no Brasil e GDPR na Europa regulam o uso de dados pessoais em sistemas de IA. Técnicas como anonimização, pseudonimização e privacidade diferencial permitem treinar modelos sem expor dados sensíveis individualmente. Federated Learning treina modelos sem centralizar dados, preservando a privacidade dos usuários.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=vOe7a5EWLPE" target="_blank">LGPD e IA - Privacidade Tech</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=gI0wk1CXlsQ" target="_blank">Differential Privacy - Google</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/northeastern-data-privacy" target="_blank">Data Privacy Fundamentals - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.fast.ai" target="_blank">Privacy in AI - fast.ai</a></li>
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
                                        Fazer deploy de modelos de IA envolve empacotá-los como APIs REST com FastAPI ou Flask, contêinerizá-los com Docker e publicar em nuvem como AWS, GCP ou Azure. TensorFlow Serving e TorchServe são soluções especializadas para servir modelos em produção com alta performance e escalabilidade.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=b5F667g1yCk" target="_blank">Deploy ML Model com FastAPI - Krish Naik</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=fqMOX6JJhGo" target="_blank">Docker para Data Science - freeCodeCamp</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/machine-learning-modeling-pipelines-in-production" target="_blank">ML Deployment - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.freecodecamp.org/news/the-docker-handbook/" target="_blank">Docker Tutorial - freeCodeCamp</a></li>
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
                                        MLOps aplica práticas DevOps ao ciclo de vida de modelos de ML. MLflow rastreia experimentos, DVC versiona dados e modelos, e sistemas de CI/CD automatizam retreinamento. Monitorar data drift e degradação de performance em produção garante que o modelo continue entregando valor ao longo do tempo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=c_AAndiq2uk" target="_blank">MLOps Overview - Chip Huyen</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=RFD87DiQMkk" target="_blank">Model Monitoring com Evidently AI</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/mlops-fundamentals" target="_blank">MLOps Fundamentals - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/introduction-to-machine-learning-in-production" target="_blank">Machine Learning in Production - DeepLearning.AI</a></li>
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
                                Aplicar IA em problemas reais fecha o ciclo de aprendizado. Projetos com datasets públicos constroem portfólio, competições no Kaggle desenvolvem habilidades competitivas, e a integração com APIs de LLMs como OpenAI e Anthropic abre portas para produtos inovadores. IA Generativa com LLMs e difusão representa a fronteira mais atual e acelerada do campo.
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
                                        Construir soluções reais exige ir além dos tutoriais: definir um problema claro, coletar dados adequados, validar a solução com usuários reais e medir o impacto. Projetos como detecção de fraude, recomendação de produtos e análise de sentimentos são exemplos clássicos com alto valor de portfólio.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=S_LR7UBEqxA" target="_blank">Projetos Reais de IA - Krish Naik</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=6f3VVoK9lnU" target="_blank">End-to-End ML Project - Sigmoidal</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/learn" target="_blank">Kaggle Learn</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.fast.ai" target="_blank">Applied ML - fast.ai</a></li>
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
                                        Contribuir com projetos open source de IA e participar de competições no Kaggle acelera o aprendizado prático e aumenta a visibilidade profissional. Competições expõem a técnicas avançadas de ensemble, feature engineering e tuning. O GitHub com projetos bem documentados é o currículo técnico mais valorizado na área.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=GJBg0NU-Jso" target="_blank">Como Competir no Kaggle - Ken Jee</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/c/YannicKilcher" target="_blank">Open Source AI Projects - Yannic Kilcher</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.kaggle.com/competitions" target="_blank">Kaggle Competitions</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://skills.github.com" target="_blank">GitHub para IA - GitHub Skills</a></li>
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
                                        APIs de IA como OpenAI (GPT), Anthropic (Claude), Google (Gemini) e Hugging Face permitem integrar modelos de linguagem e visão em aplicações sem treinar modelos do zero. Com poucas linhas de Python, é possível construir chatbots, sistemas de sumarização e análise de documentos prontos para produção.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=uRQH2CFvedY" target="_blank">OpenAI API com Python - freeCodeCamp</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=QEaBAZQCtwE" target="_blank">Hugging Face API - Yannic Kilcher</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" target="_blank">LangChain for LLM Apps - DeepLearning.AI</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/" target="_blank">Building Systems with ChatGPT API - DeepLearning.AI</a></li>
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
                                        IA Generativa cria conteúdo novo: texto, imagens, código, áudio e vídeo. LLMs como GPT e Claude usam Transformers para geração de texto. Modelos de difusão como Stable Diffusion geram imagens de alta qualidade. Prompt engineering e fine-tuning são habilidades centrais para extrair o máximo desses modelos.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=hfIUstzHs9A" target="_blank">Generative AI Explained - IBM Technology</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=sFztPP9qPRc" target="_blank">Stable Diffusion Tutorial - Andrej Karpathy</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/generative-ai-with-llms" target="_blank">Generative AI with LLMs - Coursera</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.deeplearning.ai/short-courses/" target="_blank">Short Courses on Generative AI - DeepLearning.AI</a></li>
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