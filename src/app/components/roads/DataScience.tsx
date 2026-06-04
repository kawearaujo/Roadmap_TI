export default function IA() {
    return (
        {
            id: '6',
            title: 'Data Science',
            content:
                <div className="space-y-4 text-md text-zinc-100">
                    <p>A <strong>Ciência de Dados (Data Science)</strong> é um campo interdisciplinar que utiliza métodos científicos, processos, algoritmos e sistemas para extrair conhecimento e insights de dados estruturados e não-estruturados. Combinando <strong>estatística, matemática, programação, visualização e conhecimento de domínio</strong>, a ciência de dados permite transformar grandes volumes de informações em decisões estratégicas e soluções inovadoras.</p>
                    <p>Os cientistas de dados atuam como verdadeiros detetives de dados, investigando <strong>padrões ocultos, tendências emergentes e correlações significativas</strong> que podem impulsionar a inovação e eficiência em diversos setores. Este campo está em constante evolução, incorporando avanços em <strong>inteligência artificial, aprendizado de máquina e computação de alto desempenho</strong>.</p>
                    <p>Esta seção apresenta um panorama completo da ciência de dados, desde seus fundamentos teóricos até aplicações práticas em ambientes reais, servindo como guia para profissionais e estudantes que desejam navegar por esta área transformadora.</p>
                </div>,
            children: [
                {
                    id: '6-1',
                    title: '🟢 Fundamentos Matemáticos',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>Os <strong>fundamentos matemáticos e estatísticos</strong> formam a base teórica que sustenta todas as técnicas e algoritmos utilizados na ciência de dados. Este conhecimento é essencial para <strong>compreender como os modelos funcionam, interpretar resultados corretamente e desenvolver novas abordagens</strong> para problemas complexos.</p>
                            <p>A matemática fornece as ferramentas para <strong>representar e manipular dados multidimensionais</strong>, enquanto a estatística permite <strong>quantificar incertezas e fazer inferências robustas</strong> a partir de amostras limitadas. Juntas, essas disciplinas capacitam o cientista de dados a extrair conhecimento significativo e confiável mesmo de conjuntos de dados desafiadores.</p>
                            <p>Esta seção explora os principais conceitos matemáticos e estatísticos que todo profissional de dados deve dominar, desde álgebra linear e cálculo até probabilidade e análise exploratória de dados.</p>
                        </div>,
                    children: [
                        {
                            id: '6-1-1',
                            title: 'Álgebra Linear',
                            content: <div className="space-y-2 text-sm text-zinc-100">
                                <p>A <strong>Álgebra Linear</strong> é fundamental para Data Science, fornecendo ferramentas matemáticas para <strong>manipular dados multidimensionais</strong>. Conceitos como <strong>matrizes, vetores, autovalores e autovetores</strong> são essenciais para algoritmos de machine learning, redução de dimensionalidade e transformações lineares de dados.</p>

                                <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" target="_blank">Essence of Linear Algebra - 3Blue1Brown</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=kjBOesZCoqc&list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B" target="_blank">Álgebra Linear para Machine Learning</a></li>
                                </ul>

                                <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.khanacademy.org/math/linear-algebra" target="_blank">Khan Academy - Curso Completo de Álgebra Linear</a></li>
                                    <li><a className="text-blue-600 underline" href="https://numpy.org/doc/stable/reference/routines.linalg.html" target="_blank">Operações de Álgebra Linear com NumPy</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.cs.cornell.edu/courses/cs485/2006sp/LinAlg_Complete.pdf" target="_blank">Álgebra Linear para Aprendizado de Máquina</a></li>
                                </ul>

                                <p className="font-semibold text-black-800">💡 Dica: Pratique com exercícios de transformações lineares e decomposição de matrizes.</p>
                            </div>,
                            children: []
                        },
                        {
                            id: '6-1-2',
                            title: 'Cálculo Diferencial e Integral',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>O <strong>Cálculo</strong> é essencial na <strong>otimização de modelos de machine learning</strong>, especialmente no processo de <strong>gradient descent</strong>. Derivadas ajudam a entender a taxa de mudança em funções e são usadas para minimizar funções de custo, enquanto integrais são aplicadas em probabilidade e estatística.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🎥 Videoaulas Recomendadas:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" target="_blank">Essence of Calculus - 3Blue1Brown</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.youtube.com/watch?v=HfACrKJ_Y2w" target="_blank">Cálculo para Machine Learning</a></li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg border border-zinc-100 dark:border-zinc-700 p-4">
                                            <p className="font-semibold text-zinc-100">🔍 Onde Pesquisar:</p>
                                            <ul className="list-disc list-inside">
                                                <li><a className="text-zinc-200 underline" href="https://www.coursera.org/learn/multivariate-calculus-machine-learning" target="_blank">Cálculo Multivariado para Machine Learning</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/math/calculus-1" target="_blank">Khan Academy - Cálculo Diferencial</a></li>
                                                <li><a className="text-zinc-200 underline" href="https://www.khanacademy.org/math/calculus-2" target="_blank">Khan Academy - Cálculo Integral</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <p className="font-semibold text-black-800">💡 Dica: Foque em derivadas parciais e a regra da cadeia para entender backpropagation.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-1-3',
                            title: 'Probabilidade e Estatística',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Probabilidade e Estatística</strong> formam a base teórica da ciência de dados, permitindo <strong>quantificar incertezas e fazer inferências</strong> a partir de amostras. Conceitos como <strong>distribuições de probabilidade, intervalos de confiança, testes de hipóteses e regressão</strong> são fundamentais para análise de dados.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=KbB0FjPg0mw&list=PL2-dafEMk2A7mu0bSksCGMJEmeddU_H4D" target="_blank">Estatística para Machine Learning</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=zZWd56VlN7w" target="_blank">Probabilidade para Data Science</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.probabilitycourse.com/" target="_blank">Curso Online de Probabilidade</a></li>
                                        <li><a className="text-blue-600 underline" href="https://seeing-theory.brown.edu/" target="_blank">Visualização Interativa de Conceitos Estatísticos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.statsmodels.org/stable/index.html" target="_blank">Statsmodels - Biblioteca Python para Estatística</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Domine testes de hipótese e intervalos de confiança para validação de modelos.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-1-4',
                            title: 'Análise de Dados',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>A <strong>Análise Exploratória de Dados (EDA)</strong> é o processo de investigar, visualizar e sumarizar dados para <strong>descobrir padrões, anomalias e relacionamentos</strong>. Esta etapa crucial ocorre antes da modelagem e ajuda a formular hipóteses, identificar variáveis relevantes e detectar problemas nos dados.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=GPVsHOlRBBI" target="_blank">EDA Completo com Python</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=xi0vhXFPegw" target="_blank">Técnicas Avançadas de EDA</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://pandas.pydata.org/docs/user_guide/visualization.html" target="_blank">Visualização com Pandas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://seaborn.pydata.org/tutorial/exploratory.html" target="_blank">EDA com Seaborn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15" target="_blank">Guia Prático para EDA</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use pairplots e matrizes de correlação para identificar relações entre variáveis.</p>
                                </div>,
                            children: []
                        }
                    ]
                },
                {
                    id: '6-2',
                    title: '🟡 Programação e Ferramentas',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>O <strong>domínio de linguagens de programação e ferramentas especializadas</strong> é fundamental para o trabalho prático em ciência de dados. Estas habilidades técnicas permitem <strong>implementar algoritmos, automatizar fluxos de trabalho e criar soluções escaláveis</strong> para problemas data-driven.</p>
                            <p><strong>Python</strong> emergiu como a linguagem predominante neste campo devido à sua versatilidade, legibilidade e ao rico ecossistema de bibliotecas especializadas. Junto com ambientes de desenvolvimento como <strong>Jupyter Notebooks</strong> e ferramentas de controle de versão como <strong>Git</strong>, estas tecnologias formam o toolkit essencial do cientista de dados moderno.</p>
                            <p>Esta seção aborda as principais ferramentas computacionais utilizadas na prática da ciência de dados, fornecendo recursos para desenvolver proficiência técnica e implementar soluções eficientes.</p>
                        </div>,
                    children: [
                        {
                            id: '6-2-1',
                            title: 'Python',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Python</strong> tornou-se a linguagem dominante para ciência de dados devido à sua <strong>sintaxe clara, vasta comunidade e ecossistema rico</strong> de bibliotecas especializadas. Para cientistas de dados, dominar Python significa compreender <strong>estruturas de dados básicas, funções, orientação a objetos e conceitos avançados</strong> como compreensões de lista e geradores.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=_uQrJ0TkZlc" target="_blank">Python for Beginners - Programming with Mosh</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=LHBE6Q9XlzI" target="_blank">Python for Data Science</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.learnpython.org/" target="_blank">Learn Python - Tutorial Interativo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pythonforengineers.com/python-for-scientists-and-engineers/" target="_blank">Python para Cientistas e Engenheiros</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.python-guide.org/" target="_blank">O Guia Definitivo para Python</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Pratique com exercícios no HackerRank e LeetCode.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-2-2',
                            title: 'Bibliotecas Essenciais',
                            content: <div className="space-y-2 text-sm text-zinc-100">
                                <p>As <strong>bibliotecas essenciais para Data Science</strong> em Python formam um ecossistema poderoso. <strong>NumPy</strong> fornece estruturas para computação numérica eficiente, <strong>Pandas</strong> oferece DataFrames flexíveis para manipulação de dados tabulares, e <strong>Matplotlib</strong> permite criar visualizações personalizáveis.</p>

                                <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=vmEHCJofslg" target="_blank">Pandas Tutorial</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=QUT1VHiLmmI" target="_blank">NumPy Tutorial</a></li>
                                </ul>

                                <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://pandas.pydata.org/docs/getting_started/index.html" target="_blank">Primeiros Passos com Pandas</a></li>
                                    <li><a className="text-blue-600 underline" href="https://numpy.org/learn/" target="_blank">Aprendendo NumPy</a></li>
                                    <li><a className="text-blue-600 underline" href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" target="_blank">Tutorial Introdutório de Matplotlib</a></li>
                                </ul>

                                <p className="font-semibold text-black-800">💡 Dica: Domine operações de groupby e merge no Pandas para manipulação eficiente.</p>
                            </div>,
                            children: []
                        },
                        {
                            id: '6-2-3',
                            title: 'Jupyter Notebook',
                            content: <div className="space-y-2 text-sm text-zinc-100">
                                <p>O <strong>Jupyter Notebook</strong> revolucionou a forma como cientistas de dados trabalham, oferecendo um <strong>ambiente interativo que combina código, visualizações, narrativas e equações</strong>. Esta ferramenta permite desenvolvimento iterativo, documentação inline e compartilhamento de análises completas.</p>

                                <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=HW29067qVWk" target="_blank">Jupyter Notebook Tutorial</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=wCwSxYV0aTo" target="_blank">Dicas e Truques do Jupyter</a></li>
                                </ul>

                                <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://jupyter.org/install" target="_blank">Instalação do Jupyter</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.dataquest.io/blog/jupyter-notebook-tutorial/" target="_blank">Tutorial Completo de Jupyter Notebook</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.kaggle.com/notebooks" target="_blank">Exemplos de Notebooks no Kaggle</a></li>
                                </ul>

                                <p className="font-semibold text-black-800">💡 Dica: Use magic commands (%timeit, %%time) para profiling de código.</p>
                            </div>,
                            children: []
                        },
                        {
                            id: '6-2-4',
                            title: 'Ambientes e Versionamento',
                            content: <div className="space-y-2 text-sm text-zinc-100">
                                <p>Ferramentas de <strong>ambiente e versionamento são cruciais</strong> para o desenvolvimento sustentável de projetos. <strong>Git</strong> permite controle de versão, <strong>virtualenv/conda</strong> criam ambientes Python isolados, e <strong>Docker</strong> oferece containerização para replicabilidade perfeita.</p>

                                <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=USjZcfj8yxE" target="_blank">Git Tutorial for Beginners</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Kyx2PsuwomE" target="_blank">Docker para Data Science</a></li>
                                </ul>

                                <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://git-scm.com/book/pt-br/v2" target="_blank">Livro Git - Português</a></li>
                                    <li><a className="text-blue-600 underline" href="https://docs.python.org/pt-br/3/tutorial/venv.html" target="_blank">Ambientes Virtuais Python</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.docker.com/get-started" target="_blank">Primeiros Passos com Docker</a></li>
                                </ul>

                                <p className="font-semibold text-black-800">💡 Dica: Use Docker Compose para orquestrar múltiplos serviços.</p>
                            </div>,
                            children: []
                        }
                    ]
                },
                {
                    id: '6-3',
                    title: '🟠 Processamento e Manipulação de Dados',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>O <strong>processamento e manipulação de dados</strong> representa uma etapa crucial e frequentemente desafiadora no fluxo de trabalho da ciência de dados. É nesta fase que <strong>dados brutos, muitas vezes desestruturados e imperfeitos, são transformados</strong> em formatos adequados para análise e modelagem.</p>
                            <p>Este processo abrange desde a <strong>coleta inicial através de diversas fontes</strong> (APIs, web scraping, bancos de dados) até a <strong>limpeza, transformação e enriquecimento</strong> dos dados. A qualidade do trabalho realizado nesta etapa determina diretamente a confiabilidade e relevância dos insights finais.</p>
                            <p>Esta seção explora as técnicas e melhores práticas para aquisição, preparação e engenharia de features, estabelecendo bases sólidas para análises e modelagens subsequentes.</p>
                        </div>,
                    children: [
                        {
                            id: '6-3-1',
                            title: 'Coleta de Dados',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>A <strong>coleta de dados</strong> é o primeiro passo crucial em qualquer projeto. <strong>Web scraping</strong> permite extrair informações de páginas web, enquanto <strong>APIs</strong> oferecem acesso programático a dados organizados. Considerações éticas e legais são essenciais nesta etapa.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=XVv6mJpFOb0" target="_blank">Web Scraping com BeautifulSoup</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=tb8gHvYlCFs" target="_blank">Trabalhando com APIs em Python</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank">Documentação BeautifulSoup</a></li>
                                        <li><a className="text-blue-600 underline" href="https://requests.readthedocs.io/pt_BR/latest/" target="_blank">Biblioteca Requests para APIs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.selenium.dev/documentation/pt-br/" target="_blank">Selenium - Automação Web</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Respeite robots.txt e termos de serviço ao fazer web scraping.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-3-2',
                            title: 'Limpeza e Preparação',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>A <strong>limpeza e preparação de dados</strong>, frequentemente consumindo 60-80% do tempo em projetos, transformam dados brutos em formatos adequados para análise. Inclui <strong>tratamento de valores ausentes, correção de inconsistências, remoção de duplicatas e tratamento de outliers</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=K96rwcZ6o7c" target="_blank">Data Cleaning com Pandas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=W26C1_yMBWE" target="_blank">Técnicas Avançadas de Limpeza</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://pandas.pydata.org/docs/user_guide/missing_data.html" target="_blank">Tratamento de Dados Ausentes com Pandas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/preprocessing.html" target="_blank">Pré-processamento com Scikit-learn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4" target="_blank">Guia Definitivo para Limpeza de Dados</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Documente todas as transformações para reprodutibilidade.</p>
                                </div>
                            ,
                            children: []
                        },
                        {
                            id: '6-3-3',
                            title: 'Feature Engineering',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Feature engineering</strong> é a arte de transformar dados brutos em características que <strong>melhoram o desempenho dos modelos de machine learning</strong>. Envolve criação de novas variáveis, transformações matemáticas, codificação de variáveis categóricas e extração de padrões temporais.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=V0u6bxQOUJ8" target="_blank">Feature Engineering Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=GD1LENeX38A" target="_blank">Técnicas Avançadas de Feature Engineering</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/feature_extraction.html" target="_blank">Extração de Features com Scikit-learn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.featuretools.com/" target="_blank">FeatureTools - Automação de Feature Engineering</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/" target="_blank">Guia Prático de Feature Engineering</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use domain knowledge para criar features mais relevantes.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-3-4',
                            title: 'Tratamento de Dados',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>O <strong>tratamento adequado de dados ausentes e outliers</strong> é crucial para construir modelos robustos. Para dados ausentes, técnicas incluem <strong>remoção, imputação e métodos baseados em modelos</strong>. Outliers podem ser identificados por <strong>métodos estatísticos e técnicas de clustering</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=KNu8-cX9F8U" target="_blank">Handling Missing Data</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=A6g8Y_GsNwE" target="_blank">Detecção de Outliers</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/impute.html" target="_blank">Métodos de Imputação no Scikit-learn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.statsmodels.org/stable/generated/statsmodels.graphics.gofplots.qqplot.html" target="_blank">Gráficos Q-Q para Detecção de Outliers</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/ways-to-detect-and-remove-the-outliers-404d16608dba" target="_blank">Métodos para Detectar e Remover Outliers</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Investigue a causa dos missing values antes de decidir o tratamento.</p>
                                </div>,
                            children: []
                        }
                    ]
                },
                {
                    id: '6-4',
                    title: '🔵 Machine Learning',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p><strong>Machine Learning (Aprendizado de Máquina)</strong> representa o coração da ciência de dados moderna, permitindo que <strong>computadores aprendam padrões a partir de dados</strong> e realizem previsões ou tomem decisões sem programação explícita.</p>
                            <p>Os algoritmos de machine learning podem ser categorizados em <strong>supervisionados (dados rotulados), não-supervisionados (dados não rotulados) e por reforço</strong>. Cada paradigma oferece ferramentas específicas para diferentes tipos de problemas.</p>
                            <p>Esta seção explora os fundamentos do aprendizado de máquina, desde algoritmos clássicos até técnicas de validação e otimização, fornecendo a base necessária para desenvolver modelos preditivos eficazes.</p>
                        </div>,
                    children: [
                        {
                            id: '6-4-1',
                            title: 'Aprendizado Supervisionado',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>O <strong>aprendizado supervisionado</strong> é um paradigma onde algoritmos aprendem padrões a partir de <strong>dados rotulados</strong>. Dividido em <strong>regressão (valores contínuos) e classificação (categorias)</strong>, inclui algoritmos como regressão linear, árvores de decisão, random forests e SVM.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=PPLop4L2eGk" target="_blank">Supervised Learning Overview</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=LsK-xG1cLYA" target="_blank">Classification vs Regression</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/supervised_learning.html" target="_blank">Algoritmos de Aprendizado Supervisionado no Scikit-learn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.coursera.org/learn/machine-learning" target="_blank">Curso de Machine Learning - Andrew Ng</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/learn/classification" target="_blank">Kaggle Learn - Classificação</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Comece com modelos simples antes de partir para algoritmos complexos.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-4-2',
                            title: 'Aprendizado Não Supervisionado',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>O <strong>aprendizado não supervisionado</strong> explora dados sem rótulos para <strong>descobrir estruturas e padrões intrínsecos</strong>. Técnicas principais incluem <strong>clustering (agrupamento), redução de dimensionalidade e detecção de anomalias</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Mn6aObA7Z2I" target="_blank">Unsupervised Learning Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=IP2hK3oUQ_s" target="_blank">Clustering Algorithms</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/unsupervised_learning.html" target="_blank">Algoritmos de Aprendizado Não Supervisionado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/generative/autoencoder" target="_blank">Autoencoders com TensorFlow</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/unsupervised-learning-with-python-173c51dc7f03" target="_blank">Aprendizado Não Supervisionado com Python</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use elbow method para determinar o número ideal de clusters.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-4-3',
                            title: 'Validação de Modelos',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>A <strong>validação de modelos</strong> é essencial para garantir que algoritmos <strong>generalizem bem para dados não vistos</strong>. Técnicas como <strong>validação cruzada</strong> ajudam a avaliar robustez. O <strong>overfitting</strong> ocorre quando modelos "decoram" dados de treino em vez de aprender padrões gerais.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Oi2a9YfY5n0" target="_blank">Cross-Validation Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Anq4PgdASsc" target="_blank">Overfitting and Underfitting</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/cross_validation.html" target="_blank">Validação Cruzada no Scikit-learn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/keras/overfit_and_underfit" target="_blank">Combatendo Overfitting com TensorFlow</a></li>
                                        <li><a className="text-blue-600 underline" href="https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/" target="_blank">Guia sobre Overfitting e Underfitting</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use learning curves para diagnosticar overfitting/underfitting.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-4-4',
                            title: 'Modelos Clássicos',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>Os <strong>modelos clássicos de machine learning</strong> formam a base da ciência de dados moderna. <strong>Regressões</strong> modelam relações entre variáveis, <strong>Árvores de decisão</strong> capturam interações complexas, <strong>KNN</strong> classifica por similaridade, e <strong>SVM</strong> encontra hiperplanos ótimos de separação.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Zz0_Jp4R5Ew" target="_blank">Decision Trees Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=efR1C6CvhmE" target="_blank">Support Vector Machines</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/linear_model.html" target="_blank">Modelos Lineares no Scikit-learn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/tree.html" target="_blank">Árvores de Decisão e Random Forests</a></li>
                                        <li><a className="text-blue-600 underline" href="https://scikit-learn.org/stable/modules/svm.html" target="_blank">Support Vector Machines (SVM)</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Entenda os hiperparâmetros de cada algoritmo para tuning eficiente.</p>
                                </div>,
                            children: []
                        }
                    ]
                },
                {
                    id: '6-5',
                    title: '🟣 Aprendizado Profundo',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>O <strong>Aprendizado Profundo (Deep Learning)</strong> representa uma evolução revolucionária do machine learning, utilizando <strong>redes neurais com múltiplas camadas</strong> para modelar relações altamente complexas nos dados.</p>
                            <p>As arquiteturas de deep learning são capazes de <strong>aprender hierarquias de representações</strong>, identificando desde características básicas até conceitos abstratos. Este poder vem com desafios significativos, incluindo <strong>necessidade de grandes volumes de dados e intenso poder computacional</strong>.</p>
                            <p>Esta seção explora os principais tipos de redes neurais profundas, frameworks de implementação e aplicações práticas.</p>
                        </div>,
                    children: [
                        {
                            id: '6-5-1',
                            title: 'Redes Neurais Artificiais',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Redes Neurais Artificiais</strong> são modelos inspirados no cérebro humano, compostos por <strong>camadas de neurônios interconectados</strong>. O aprendizado ocorre via <strong>backpropagation</strong>, ajustando pesos para minimizar erros. Arquiteturas <strong>feedforward e MLP</strong> modelam relações não-lineares complexas.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank">Neural Networks Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Ilg3gGewQ5U" target="_blank">Backpropagation Explained</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/quickstart/beginner" target="_blank">Introdução a Redes Neurais com TensorFlow</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/beginner/basics/intro.html" target="_blank">Fundamentos de PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://playground.tensorflow.org/" target="_blank">Playground Neural Network - Visualização Interativa</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Comece com redes simples e aumente a complexidade gradualmente.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-5-2',
                            title: 'Redes Convolucionais',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Redes Neurais Convolucionais (CNNs)</strong> revolucionaram o processamento de imagens com sua arquitetura especializada em <strong>detectar padrões espaciais</strong>. Compostas por <strong>camadas convolucionais, pooling e totalmente conectadas</strong>, estas redes automaticamente aprendem hierarquias de características.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=YRhxdVk_sIs" target="_blank">CNNs Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=pj9-rr1wDhM" target="_blank">Building CNNs with TensorFlow</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/images/cnn" target="_blank">Tutorial CNN com TensorFlow</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" target="_blank">Classificação de Imagens com PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://cs231n.github.io/" target="_blank">CS231n - Curso de CNNs de Stanford</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use transfer learning com modelos pré-treinados para problemas específicos.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-5-3',
                            title: 'Redes Recorrentes',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Redes Neurais Recorrentes (RNNs)</strong> são especializadas em <strong>processamento sequencial de dados</strong>, mantendo uma "memória" de informações anteriores. <strong>LSTM e GRU</strong> superam limitações de RNNs tradicionais, permitindo retenção seletiva de informações por períodos prolongados.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=WCUNPb-5EYI" target="_blank">RNNs and LSTMs Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=9zhrxE5PQgY" target="_blank">Building RNNs with Python</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials/text/text_classification_rnn" target="_blank">Classificação de Texto com RNNs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://colah.github.io/posts/2015-08-Understanding-LSTMs/" target="_blank">Entendendo LSTMs - Tutorial Visual</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html" target="_blank">RNN para Classificação com PyTorch</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use gradient clipping para evitar exploding gradients em RNNs.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-5-4',
                            title: 'Frameworks',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>Os <strong>frameworks modernos de deep learning</strong> simplificam o desenvolvimento de arquiteturas complexas. <strong>TensorFlow</strong> oferece computação distribuída, <strong>PyTorch</strong> tem API intuitiva, e <strong>Keras</strong> facilita prototipagem rápida.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=tPYj3fFJGjk" target="_blank">TensorFlow vs PyTorch</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=qFJeN9V1ZsI" target="_blank">Keras Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tutorials" target="_blank">Tutoriais Oficiais do TensorFlow</a></li>
                                        <li><a className="text-blue-600 underline" href="https://pytorch.org/tutorials/" target="_blank">Aprenda PyTorch - Tutoriais</a></li>
                                        <li><a className="text-blue-600 underline" href="https://keras.io/getting_started/" target="_blank">Primeiros Passos com Keras</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Escolha PyTorch para pesquisa e TensorFlow para produção.</p>
                                </div>,
                            children: []
                        }
                    ]
                },
                {
                    id: '6-6',
                    title: '🔴 Banco de Dados',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>A <strong>infraestrutura de armazenamento e processamento</strong> é fundamental para lidar com os volumes, velocidades e variedades de dados no mundo contemporâneo. As tecnologias de <strong>Banco de Dados e Big Data</strong> fornecem os alicerces para gerenciar desde análises tradicionais até pipelines de dados massivos.</p>
                            <p>Os sistemas de <strong>banco de dados relacionais (SQL)</strong> continuam sendo cruciais para dados estruturados, enquanto tecnologias <strong>NoSQL</strong> oferecem flexibilidade para formatos variados. Para volumes realmente grandes, ecossistemas como <strong>Hadoop e Spark</strong> permitem processamento distribuído.</p>
                            <p>Esta seção explora o espectro de tecnologias de armazenamento e processamento de dados, desde SQL tradicional até arquiteturas modernas de data lakes.</p>
                        </div>,
                    children: [
                        {
                            id: '6-6-1',
                            title: 'SQL',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>SQL (Structured Query Language)</strong> é fundamental para cientistas de dados que precisam <strong>extrair, transformar e analisar dados</strong> em bancos relacionais. A linguagem permite desde consultas simples até operações complexas como <strong>JOINS, agregações, window functions e CTEs</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=HXV3zeQKqGY" target="_blank">SQL for Beginners</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=7S_tz1z_5bA" target="_blank">Advanced SQL for Data Science</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://mode.com/sql-tutorial/" target="_blank">SQL Tutorial para Análise de Dados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.w3schools.com/sql/" target="_blank">W3Schools - Referência SQL</a></li>
                                        <li><a className="text-blue-600 underline" href="https://sqlzoo.net/" target="_blank">SQLZoo - Exercícios Interativos</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Pratique com queries complexas envolvendo múltiplos JOINs e subqueries.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-6-2',
                            title: 'NoSQL',
                            content: <div className="space-y-2 text-sm text-zinc-100">
                                <p>Bancos de dados <strong>NoSQL</strong> oferecem alternativas flexíveis aos sistemas relacionais. <strong>MongoDB</strong> armazena dados em documentos JSON-like, <strong>Redis</strong> é um armazenamento em memória rápido. Outros sistemas incluem bancos orientados a <strong>colunas, grafos e chave-valor</strong>.</p>

                                <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=EE8ZTQxa0AM" target="_blank">NoSQL Databases Explained</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=-bt_y4Loofg" target="_blank">MongoDB Crash Course</a></li>
                                </ul>

                                <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                <ul className="list-disc list-inside">
                                    <li><a className="text-blue-600 underline" href="https://university.mongodb.com/" target="_blank">MongoDB University - Cursos Gratuitos</a></li>
                                    <li><a className="text-blue-600 underline" href="https://redis.io/docs/manual/" target="_blank">Documentação Oficial do Redis</a></li>
                                    <li><a className="text-blue-600 underline" href="https://www.tutorialspoint.com/mongodb/mongodb_overview.htm" target="_blank">Visão Geral do MongoDB</a></li>
                                </ul>

                                <p className="font-semibold text-black-800">💡 Dica: Use MongoDB para dados semi-estruturados e Redis para caching.</p>
                            </div>,
                            children: []
                        },
                        {
                            id: '6-6-3',
                            title: 'Hadoop e Spark',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Apache Hadoop e Spark</strong> são ecossistemas fundamentais para processamento de big data. <strong>Hadoop</strong> utiliza <strong>MapReduce e HDFS</strong>, enquanto <strong>Spark</strong> oferece computação em memória mais rápida com APIs unificadas para streaming, SQL e machine learning.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=aReuLtY0YWI" target="_blank">Hadoop Explained</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=z9r1K4pY3k8" target="_blank">Apache Spark Tutorial</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://spark.apache.org/docs/latest/quick-start.html" target="_blank">Spark Quick Start</a></li>
                                        <li><a className="text-blue-600 underline" href="https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html" target="_blank">Tutorial MapReduce</a></li>
                                        <li><a className="text-blue-600 underline" href="https://databricks.com/learn/training/free-courses" target="_blank">Cursos Gratuitos de Spark - Databricks</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use PySpark para processamento distribuído com Python.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-6-4',
                            title: 'Data Lakes e Data Warehousing',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Data Lakes e Data Warehouses</strong> representam abordagens complementares. <strong>Data Lakes</strong> armazenam dados brutos sem esquema predefinido, <strong>Data Warehouses</strong> são repositórios estruturados otimizados para consultas analíticas. Soluções modernas criam arquiteturas de <strong>"lakehouse"</strong>.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=W3ZmG4g41YI" target="_blank">Data Lake vs Data Warehouse</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=U1TALsTiS6M" target="_blank">Building Data Lakes on AWS</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://aws.amazon.com/pt/big-data/datalakes-and-analytics/" target="_blank">AWS - Data Lakes e Analytics</a></li>
                                        <li><a className="text-blue-600 underline" href="https://cloud.google.com/bigquery/docs/introduction" target="_blank">Introdução ao Google BigQuery</a></li>
                                        <li><a className="text-blue-600 underline" href="https://docs.databricks.com/data-engineering/index.html" target="_blank">Engenharia de Dados com Databricks</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use data lakes para dados brutos e warehouses para dados processados.</p>
                                </div>,
                            children: []
                        }
                    ]
                },
                {
                    id: '6-7',
                    title: '⚫ Visualização e Comunicação',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>A <strong>visualização e comunicação eficaz de dados</strong> transforma números abstratos em insights acionáveis, sendo frequentemente o fator decisivo para o sucesso de projetos. Como ponte entre a análise técnica e a tomada de decisões, estas habilidades permitem <strong>transmitir descobertas complexas de forma acessível</strong>.</p>
                            <p>A visualização de dados combina <strong>princípios estatísticos, design gráfico e psicologia cognitiva</strong> para criar representações visuais que amplificam nossa capacidade de detectar padrões. Complementarmente, o <strong>storytelling com dados</strong> estrutura visualizações em narrativas coerentes.</p>
                            <p>Esta seção aborda tanto as ferramentas técnicas de visualização quanto as estratégias de comunicação e apresentação de resultados.</p>
                        </div>,
                    children: [
                        {
                            id: '6-7-1',
                            title: 'Bibliotecas de Visualização',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>As <strong>bibliotecas de visualização em Python</strong> oferecem capacidades complementares. <strong>Matplotlib</strong> fornece controle detalhado, <strong>Seaborn</strong> simplifica visualizações estatísticas, e <strong>Plotly</strong> se destaca por gráficos interativos para web e dashboards.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=UO98lJQ3QGI" target="_blank">Matplotlib Tutorial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6GUZXDef2U0" target="_blank">Seaborn vs Matplotlib</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://matplotlib.org/stable/gallery/index.html" target="_blank">Galeria de Exemplos Matplotlib</a></li>
                                        <li><a className="text-blue-600 underline" href="https://seaborn.pydata.org/examples/index.html" target="_blank">Exemplos de Visualizações com Seaborn</a></li>
                                        <li><a className="text-blue-600 underline" href="https://plotly.com/python/getting-started/" target="_blank">Primeiros Passos com Plotly</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use Plotly para dashboards interativos e Matplotlib para publicações científicas.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-7-2',
                            title: 'Dashboards e Ferramentas de BI',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>Ferramentas de <strong>Business Intelligence como Power BI e Tableau</strong> transformaram a forma como as empresas visualizam dados. Permitem criar <strong>dashboards interativos sem programação extensiva</strong>, com conectividade a múltiplas fontes de dados e atualizações automatizadas.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=AGrl-H87pRU" target="_blank">Power BI Tutorial for Beginners</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6mBt_Tggc5I" target="_blank">Tableau Tutorial for Beginners</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://powerbi.microsoft.com/pt-br/learning/" target="_blank">Microsoft Power BI - Centro de Aprendizado</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tableau.com/learn/training" target="_blank">Treinamento Gratuito de Tableau</a></li>
                                        <li><a className="text-blue-600 underline" href="https://community.powerbi.com/" target="_blank">Comunidade Power BI - Exemplos e Suporte</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use Power BI para integração com Microsoft Stack e Tableau para visualizações avançadas.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-7-3',
                            title: 'Storytelling',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>O <strong>storytelling com dados</strong> vai além de gráficos bonitos, transformando números em <strong>narrativas convincentes que geram ação</strong>. Combina análise técnica com princípios de comunicação visual e narrativa para criar apresentações que ressoam com o público.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=8EMW7io4rSI" target="_blank">Data Storytelling Techniques</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=xj-2eSUe-2g" target="_blank">How to Tell Stories with Data</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="http://www.storytellingwithdata.com/" target="_blank">Storytelling with Data - Blog</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=8EMW7io4rSI" target="_blank">Dicas de Storytelling com Dados - Vídeo</a></li>
                                        <li><a className="text-blue-600 underline" href="https://infovis.fh-potsdam.de/readings/Cairo2013-TheFactfulArt.pdf" target="_blank">Princípios de Design para Visualização</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Estruture suas apresentações com: situação, complicação, solução.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-7-4',
                            title: 'Apresentações',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>A capacidade de <strong>comunicar efetivamente resultados</strong> para diferentes públicos é crucial. <strong>Apresentações técnicas</strong> exigem rigor metodológico e detalhamento, enquanto comunicações para <strong>públicos não técnicos</strong> requerem foco nos insights e impactos práticos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=wh2S2A0fHbE" target="_blank">Presenting Technical Topics to Non-Technical Audiences</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=l9JXGR7UIww" target="_blank">Data Science Presentation Skills</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://hbr.org/2018/09/don-t-let-your-analytics-cheat-the-truth" target="_blank">Harvard Business Review: Apresentando Dados Honestamente</a></li>
                                        <li><a className="text-blue-600 underline" href="https://medium.com/nightingale/how-to-present-data-to-people-who-are-scared-of-numbers-9089944cebaf" target="_blank">Como Apresentar Dados para Pessoas com Receio de Números</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.slideshare.net/databricks/communicating-data-science-results-effectively" target="_blank">Comunicando Resultados de Ciência de Dados Efetivamente</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Adapte o nível de detalhe técnico conforme o conhecimento da audiência.</p>
                                </div>,
                            children: []
                        }
                    ]
                },
                {
                    id: '6-8',
                    title: '🌐 Aplicações e Projetos',
                    content:
                        <div className="space-y-4 text-md text-zinc-100">
                            <p>A <strong>aplicação prática da ciência de dados em projetos reais</strong> é o objetivo final de todo o conhecimento teórico e técnico. É nos desafios do mundo real que as metodologias são testadas, adaptadas e refinadas, <strong>gerando valor tangível para organizações e sociedade</strong>.</p>
                            <p>O ciclo completo de um projeto de dados envolve desde a <strong>definição clara do problema de negócio</strong> até a <strong>implementação de modelos em produção e monitoramento contínuo</strong>. Este processo iterativo frequentemente revela complexidades não antecipadas.</p>
                            <p>Esta seção explora metodologias de desenvolvimento de projetos, técnicas de operacionalização de modelos e casos de uso em diversos setores.</p>
                        </div>,
                    children: [
                        {
                            id: '6-8-1',
                            title: 'Projetos com Dados Públicos',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>Projetos com dados públicos</strong> são excelentes oportunidades para construir portfólio e desenvolver habilidades práticas. Fontes como <strong>IBGE, Portal de Dados Abertos e Kaggle</strong> oferecem dados diversos para análise. Projetos bem documentados demonstram capacidade de obter insights a partir de dados brutos.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=LhMqU0MCyH0" target="_blank">Data Science Projects for Beginners</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=ql4J6SpLXZA" target="_blank">Building Data Science Portfolio</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.ibge.gov.br/estatisticas/downloads-estatisticas.html" target="_blank">Dados Estatísticos do IBGE</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kaggle.com/datasets" target="_blank">Kaggle Datasets</a></li>
                                        <li><a className="text-blue-600 underline" href="https://dados.gov.br/" target="_blank">Portal Brasileiro de Dados Abertos</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Documente seus projetos no GitHub com README detalhado.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-8-2',
                            title: 'Modelos Preditivos',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>A implementação bem-sucedida de <strong>modelos preditivos em contextos empresariais</strong> vai além da precisão técnica, exigindo <strong>alinhamento com objetivos de negócio</strong>. Aplicações comuns incluem previsão de demanda, detecção de fraudes, análise de churn e sistemas de recomendação.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=wqSbo20mdj8" target="_blank">Business Applications of Predictive Modeling</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=PX4N_Sf99-c" target="_blank">Measuring ROI of Data Science Projects</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://hbr.org/2018/01/you-dont-need-artificial-intelligence-you-need-augmented-intelligence" target="_blank">Harvard Business Review: Inteligência Aumentada nos Negócios</a></li>
                                        <li><a className="text-blue-600 underline" href="https://towardsdatascience.com/data-science-for-business-predictive-modeling-strategies-adad0e0080c5" target="_blank">Estratégias de Modelagem Preditiva para Negócios</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mckinsey.com/business-functions/quantumblack/our-insights/scaling-ai-like-a-tech-native-the-ceos-role" target="_blank">McKinsey: Implementando IA em Escala</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Traduza métricas técnicas em KPIs de negócio compreensíveis.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-8-3',
                            title: 'Deploy de Modelos',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p>O <strong>deployment de modelos</strong> transforma algoritmos teóricos em serviços práticos acessíveis via APIs. <strong>Flask</strong> é ideal para projetos pequenos a médios, enquanto <strong>FastAPI</strong> oferece performance superior e documentação automática. Ferramentas como <strong>Docker</strong> garantem consistência entre ambientes.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=Z1RJmh_OqeA" target="_blank">Deploy ML Model with Flask</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=-ykeT6kj-7s" target="_blank">FastAPI for ML Deployment</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank">Documentação Oficial do Flask</a></li>
                                        <li><a className="text-blue-600 underline" href="https://fastapi.tiangolo.com/" target="_blank">FastAPI - Framework Moderna para Criação de APIs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.tensorflow.org/tfx/tutorials/serving/rest_simple" target="_blank">TensorFlow Serving para Deploy de Modelos</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Use Docker para criar imagens reproduzíveis dos seus modelos.</p>
                                </div>,
                            children: []
                        },
                        {
                            id: '6-8-4',
                            title: 'Monitoramento de Modelos',
                            content:
                                <div className="space-y-2 text-sm text-zinc-100">
                                    <p><strong>MLOps (Machine Learning Operations)</strong> aplica princípios de DevOps ao ciclo de vida de modelos, garantindo transição eficiente para produção. Práticas essenciais incluem <strong>controle de versão, pipelines automatizados e monitoramento contínuo</strong> de performance.</p>

                                    <p className="font-semibold text-blue-800">🎥 Videoaulas Recomendadas:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=6g3tSWo4vrY" target="_blank">MLOps Complete Course</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=1PXyf1DKfqE" target="_blank">Monitoring ML Models in Production</a></li>
                                    </ul>

                                    <p className="font-semibold text-green-800">🔍 Onde Pesquisar:</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://mlflow.org/docs/latest/index.html" target="_blank">MLflow - Gerenciamento do Ciclo de Vida ML</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.kubeflow.org/docs/started/introduction/" target="_blank">Introdução ao Kubeflow</a></li>
                                        <li><a className="text-blue-600 underline" href="https://neptune.ai/blog/how-to-monitor-your-models-in-production-guide" target="_blank">Guia para Monitoramento de Modelos em Produção</a></li>
                                    </ul>

                                    <p className="font-semibold text-black-800">💡 Dica: Monitore data drift e model decay para manter modelos relevantes.</p>
                                </div>,
                            children: []
                        }
                    ]
                }
            ]
        }
    );
}