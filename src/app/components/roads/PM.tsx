export default function PM() {
    return (
        {

            id: '9',
            title: 'Product Manager',
            content: (
                <div className="space-y-2 text-sm text-gray-700">
                    <p>Product Manager é o profissional responsável por definir a visão e estratégia de um produto digital, garantindo que ele atenda às necessidades dos usuários e objetivos do negócio. Atua como ponte entre as áreas técnicas, de design e negócios.</p>
                    <ul className="list-disc list-inside">
                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/what-is-a-product-manager/" target="_blank">O que é um Product Manager</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/" target="_blank">Mind the Product</a></li>
                        <li><a className="text-blue-600 underline" href="https://www.productschool.com/blog/" target="_blank">Product School Blog</a></li>
                    </ul>
                </div>
            ),
            children: [
                {
                    id: '9-1',
                    title: '🟢 Fundamentos de Produto',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Os fundamentos de produto englobam os conhecimentos essenciais para gerenciar produtos digitais com eficácia, incluindo conceitos básicos, modelos mentais e frameworks que orientam decisões estratégicas.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-management-fundamentals/" target="_blank">Fundamentos de Product Management</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.svpg.com/product-management-fundamentals/" target="_blank">SVPG - Product Management Fundamentals</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.productboard.com/blog/product-management-101/" target="_blank">Product Management 101</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '9-1-1',
                            title: 'O papel do Product Manager',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O Product Manager é responsável por identificar oportunidades de mercado, definir requisitos de produto, coordenar desenvolvimento e garantir que o produto atenda às necessidades dos usuários e objetivos de negócio.</p>
                                    <p className="font-bold text-red-500">É crucial desenvolver habilidades técnicas, de negócio e interpessoais para ter sucesso na função.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/product-management/product-manager" target="_blank">Atlassian - O papel do PM</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/what-is-a-product-manager/" target="_blank">ProductPlan - Definição de PM</a></li>
                                        <li><a className="text-blue-600 underline" href="https://productcoalition.com/the-product-management-hierarchy-of-needs-f9be117d0d32" target="_blank">Hierarquia de necessidades do PM</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-1-2',
                            title: 'Ciclo de vida do produto',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O ciclo de vida do produto abrange todas as etapas, desde a concepção até a descontinuação: introdução, crescimento, maturidade e declínio. Cada fase requer diferentes estratégias de gestão e marketing.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/glossary/product-lifecycle/" target="_blank">Ciclo de vida do produto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://hbr.org/1965/11/exploit-the-product-life-cycle" target="_blank">Harvard Business Review - Ciclo de vida</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/product-lifecycle-management/" target="_blank">Mind the Product - PLM</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-1-3',
                            title: 'Visão, missão e estratégia de produto',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A visão define o futuro desejado para o produto, a missão estabelece seu propósito, e a estratégia traça o caminho para realização da visão. Juntos, formam a base para todas as decisões do produto.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-vision/" target="_blank">Criando uma visão de produto eficaz</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.romanpichler.com/blog/10-tips-creating-agile-product-roadmap/" target="_blank">Roman Pichler - Product Roadmap</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.svpg.com/vision-vs-strategy/" target="_blank">SVPG - Visão vs Estratégia</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-1-4',
                            title: 'Tipos de produto (B2B, B2C, SaaS, etc)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Diferentes tipos de produtos digitais (B2B, B2C, SaaS, marketplace, etc.) possuem características distintas que afetam seu desenvolvimento, go-to-market e métricas de sucesso.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/saas-product-management/" target="_blank">Gestão de produtos SaaS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/what-makes-a-great-b2b-product-manager/" target="_blank">Product Management B2B</a></li>
                                        <li><a className="text-blue-600 underline" href="https://openviewpartners.com/blog/b2b-vs-b2c-product-management/" target="_blank">B2B vs B2C Product Management</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '9-2',
                    title: '🟡 Pesquisa e Descoberta',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A fase de pesquisa e descoberta é fundamental para entender profundamente os usuários, suas necessidades, problemas e comportamentos. É o alicerce para criar produtos que resolvam problemas reais.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.nngroup.com/articles/discovery-phase/" target="_blank">Nielsen Norman Group - Fase de descoberta</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.productboard.com/blog/product-discovery/" target="_blank">ProductBoard - Product Discovery</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.interaction-design.org/literature/topics/user-research" target="_blank">Interaction Design - Pesquisa de usuários</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '9-2-1',
                            title: 'Pesquisa com usuários',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A pesquisa com usuários envolve métodos qualitativos e quantitativos para entender comportamentos, necessidades e desejos do público-alvo. Técnicas incluem entrevistas, grupos focais, surveys e análise de dados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nngroup.com/articles/user-research-methods/" target="_blank">Nielsen Norman Group - Métodos de pesquisa</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.usertesting.com/resources/topics/user-research" target="_blank">UserTesting - Recursos de pesquisa</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/how-to-conduct-user-research/" target="_blank">Como conduzir pesquisas com usuários</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-2-2',
                            title: 'Entrevistas e testes de usabilidade',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Entrevistas e testes de usabilidade são métodos diretos para obter insights dos usuários. Enquanto entrevistas focam em compreender problemas e necessidades, testes avaliam a experiência de uso do produto.</p>
                                    <p className="font-bold text-red-500">Prepare um roteiro, mas mantenha-se flexível durante entrevistas para explorar tópicos inesperados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nngroup.com/articles/interviewing-users/" target="_blank">Nielsen Norman - Entrevistas com usuários</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.usability.gov/how-to-and-tools/methods/usability-testing.html" target="_blank">Usability.gov - Testes de usabilidade</a></li>
                                        <li><a className="text-blue-600 underline" href="https://maze.co/guides/usability-testing/" target="_blank">Maze - Guia de testes de usabilidade</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-2-3',
                            title: 'Mapas de empatia e personas',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Mapas de empatia e personas são ferramentas visuais que humanizam dados de pesquisa. Ajudam times a compartilhar um entendimento comum sobre os usuários, seus objetivos, frustrações e motivações.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.nngroup.com/articles/empathy-mapping/" target="_blank">Nielsen Norman - Mapas de empatia</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.interaction-design.org/literature/article/personas-why-and-how-you-should-use-them" target="_blank">Interaction Design - Personas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://miro.com/templates/empathy-map/" target="_blank">Miro - Template de mapa de empatia</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-2-4',
                            title: 'Job To Be Done (JTBD)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Jobs To Be Done é um framework que foca no "trabalho" que os usuários estão tentando realizar, não nas características demográficas. Ajuda a entender o que motiva as pessoas a adotar novos produtos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://jtbd.info/2-what-is-jobs-to-be-done-jtbd-796b82081cca" target="_blank">O que é JTBD</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.intercom.com/resources/books/intercom-jobs-to-be-done" target="_blank">Intercom - JTBD Framework</a></li>
                                        <li><a className="text-blue-600 underline" href="https://hbr.org/2016/09/know-your-customers-jobs-to-be-done" target="_blank">HBR - Conheça os Jobs de seus clientes</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '9-3',
                    title: '🟠 Estratégia e Roadmapping',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Estratégia e roadmapping conectam a visão do produto a planos de execução concretos. Definem o que construir, quando construir e por que, alinhando equipes e stakeholders em torno de objetivos comuns.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/what-is-a-product-roadmap/" target="_blank">O que é um Product Roadmap</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/product-roadmaps/" target="_blank">Mind the Product - Roadmaps</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.romanpichler.com/blog/strategize-product-strategy-roadmap-agile-world/" target="_blank">Roman Pichler - Estratégia de produto</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '9-3-1',
                            title: 'Definição de OKRs',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>OKRs (Objectives and Key Results) é uma metodologia de definição de metas que ajuda times a focar em objetivos ambiciosos e mensurar resultados de forma clara. Conecta o trabalho diário à estratégia de longo prazo.</p>
                                    <p className="font-bold text-red-500">OKRs devem ser ambiciosos, mensuráveis e transparentes para toda a organização.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/glossary/objectives-and-key-results-okrs/" target="_blank">ProductPlan - OKRs para produtos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://felipecastro.com/en/okr/what-is-okr/" target="_blank">O que são OKRs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.whatmatters.com/faqs/okr-examples-and-how-to-write-them" target="_blank">Como escrever bons OKRs</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-3-2',
                            title: 'Criação de Roadmap',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Um roadmap de produto é uma representação visual do plano estratégico que comunica a visão, direção e prioridades do produto. Existem diversos formatos: orientado a cronograma, a temas ou baseado em resultados.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/how-to-create-a-product-roadmap/" target="_blank">Como criar um roadmap eficaz</a></li>
                                        <li><a className="text-blue-600 underline" href="https://medium.com/@johnpcutler/a-better-roadmap-alternative-bcde22f3b6f5" target="_blank">Alternativas de roadmap</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.romanpichler.com/blog/10-tips-creating-agile-product-roadmap/" target="_blank">10 dicas para roadmaps ágeis</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-3-3',
                            title: 'Priorização (RICE, MoSCoW, Kano, ICE)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Métodos de priorização ajudam a decidir o que construir primeiro com base em critérios objetivos. RICE (Reach, Impact, Confidence, Effort), MoSCoW, Kano e ICE são frameworks populares para avaliar iniciativas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-prioritization-frameworks/" target="_blank">Frameworks de priorização</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" target="_blank">Método RICE</a></li>
                                        <li><a className="text-blue-600 underline" href="https://folding-burritos.com/2015/10/05/how-to-use-the-kano-model/" target="_blank">Modelo Kano</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-3-4',
                            title: 'Gestão de backlog',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>O backlog de produto é uma lista priorizada de todas as ideias, requisitos e melhorias para o produto. Uma gestão eficaz envolve refinamento constante, priorização e alinhamento com a estratégia.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/agile/product-backlog" target="_blank">Atlassian - Backlog de produto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mountaingoatsoftware.com/blog/how-product-managers-prevent-product-owners-from-making-progress" target="_blank">Refinamento de backlog</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/the-art-of-managing-the-product-backlog/" target="_blank">A arte de gerenciar backlogs</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '9-4',
                    title: '🔵 Métricas e Análise',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Métricas e análises permitem avaliar o desempenho do produto, identificar oportunidades de melhoria e validar hipóteses de negócio. PMs devem saber definir KPIs relevantes e interpretar dados para tomar decisões.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://amplitude.com/blog/product-metrics" target="_blank">Amplitude - Métricas de produto</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-metrics/" target="_blank">Guia de métricas para PMs</a></li>
                                <li><a className="text-blue-600 underline" href="https://mixpanel.com/blog/product-analytics-guide/" target="_blank">Mixpanel - Guia de analytics</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '9-4-1',
                            title: 'Métricas de produto (NPS, CAC, LTV, Retenção)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Métricas-chave como NPS (satisfação), CAC (custo de aquisição), LTV (valor vitalício) e retenção ajudam a avaliar o sucesso do produto. É essencial monitorar indicadores alinhados à estratégia do negócio.</p>
                                    <p className="font-bold text-red-500">Diferentes fases do ciclo de vida do produto exigem foco em diferentes métricas.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/saas-metrics/" target="_blank">Métricas essenciais para SaaS</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.intercom.com/blog/what-is-retention/" target="_blank">Intercom - Retenção</a></li>
                                        <li><a className="text-blue-600 underline" href="https://amplitude.com/blog/how-to-improve-retention" target="_blank">Como melhorar retenção</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-4-2',
                            title: 'Google Analytics, Mixpanel, Hotjar',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Ferramentas como Google Analytics, Mixpanel e Hotjar fornecem insights sobre o comportamento dos usuários. GA foca em métricas de site, Mixpanel em jornadas e eventos, e Hotjar em comportamento visual e feedback.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://analytics.google.com/analytics/academy/" target="_blank">Academia Google Analytics</a></li>
                                        <li><a className="text-blue-600 underline" href="https://mixpanel.com/blog/how-to-measure-product-metrics/" target="_blank">Mixpanel - Medição de métricas</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.hotjar.com/blog/product-manager/" target="_blank">Hotjar para Product Managers</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-4-3',
                            title: 'A/B Testing e experimentação',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Testes A/B e experimentações permitem validar hipóteses de forma científica, comparando diferentes versões de um produto para determinar qual oferece melhores resultados com base em dados reais.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.optimizely.com/optimization-glossary/ab-testing/" target="_blank">Glossário de A/B Testing</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.cxl.com/blog/the-ultimate-guide-to-ab-testing/" target="_blank">Guia definitivo de A/B Testing</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productboard.com/blog/experimentation-product-management/" target="_blank">Experimentação em product management</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-4-4',
                            title: 'Data-driven mindset',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Um mindset orientado a dados significa basear decisões em evidências mensuráveis, não em opiniões ou intuições. Envolve coletar dados relevantes, interpretá-los corretamente e agir com base nas conclusões.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://blog.amplitude.com/data-driven-product-management" target="_blank">Amplitude - Product Management com dados</a></li>
                                        <li><a className="text-blue-600 underline" href="https://medium.com/pminsider/a-data-driven-approach-to-product-management-55e640d0c814" target="_blank">Abordagem orientada a dados para PMs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/the-data-informed-product-manager/" target="_blank">O PM informado por dados</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '9-5',
                    title: '🟣 Habilidades Interpessoais',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>Habilidades interpessoais são fundamentais para PMs, que precisam influenciar sem autoridade formal, alinhar stakeholders com interesses diversos e liderar equipes multidisciplinares para alcançar resultados.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/communication-the-essential-skill-for-product-managers/" target="_blank">Comunicação para PMs</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.svpg.com/team-leadership/" target="_blank">SVPG - Liderança de equipes</a></li>
                                <li><a className="text-blue-600 underline" href="https://hbr.org/2013/07/influence-without-authority" target="_blank">HBR - Influência sem autoridade</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '9-5-1',
                            title: 'Comunicação com stakeholders',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Comunicação eficaz com stakeholders envolve adaptar mensagens para diferentes audiências, gerenciar expectativas e criar canais adequados para compartilhar informações sobre visão, estratégia e progresso do produto.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/communicate-product-roadmap-stakeholders/" target="_blank">Comunicando roadmaps aos stakeholders</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/stakeholder-management-101/" target="_blank">Gestão de stakeholders 101</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.uxpin.com/studio/blog/product-management-stakeholders/" target="_blank">Como trabalhar melhor com stakeholders</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-5-2',
                            title: 'Liderança sem autoridade',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>PMs precisam influenciar equipes sem autoridade hierárquica. Isso exige construção de confiança, geração de consenso, comunicação clara da visão e reconhecimento das contribuições de cada membro do time.</p>
                                    <p className="font-bold text-red-500">Construa credibilidade com conhecimento do produto, mercado e processos.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/influence-without-authority/" target="_blank">Como influenciar sem autoridade</a></li>
                                        <li><a className="text-blue-600 underline" href="https://hbr.org/2019/03/how-product-managers-can-collaborate-with-engineers" target="_blank">HBR - Colaboração com engenheiros</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/leading-without-authority/" target="_blank">Mind the Product - Liderança sem autoridade</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-5-3',
                            title: 'Trabalho com times de engenharia e design',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Trabalhar efetivamente com engenharia e design requer entendimento dos processos e linguagens de cada área. O PM deve facilitar colaboração, remover obstáculos e criar um ambiente onde cada especialidade contribua com seu melhor.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-management-engineering-design-triangle/" target="_blank">O triângulo PM-Design-Engenharia</a></li>
                                        <li><a className="text-blue-600 underline" href="https://medium.com/designing-atlassian/how-product-designers-and-product-managers-work-together-at-atlassian-95f0b393f987" target="_blank">PMs e designers: colaboração</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.intercom.com/blog/product-management-engineering-resources/" target="_blank">Gerenciando recursos de engenharia</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-5-4',
                            title: 'Gestão de conflitos e alinhamento de expectativas',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Conflitos são inevitáveis em ambientes colaborativos. PMs eficazes sabem facilitar diálogos construtivos, encontrar soluções que atendam diferentes necessidades e alinhar expectativas através de comunicação transparente.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/product-management-conflict-resolution/" target="_blank">Resolução de conflitos em produto</a></li>
                                        <li><a className="text-blue-600 underline" href="https://hbr.org/2017/07/stop-the-meeting-madness" target="_blank">HBR - Gerenciando reuniões eficazes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productboard.com/blog/managing-stakeholder-expectations/" target="_blank">Gerenciando expectativas de stakeholders</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '9-6',
                    title: '🔴 Técnicas e Ferramentas',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>O Product Manager moderno utiliza diversas ferramentas para documentar, planejar e analisar produtos. Dominar essas ferramentas aumenta a produtividade e permite comunicação eficaz com diferentes stakeholders.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-manager-tools/" target="_blank">Ferramentas essenciais para PMs</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/product-management-tools-techniques/" target="_blank">Mind the Product - Toolkit de PM</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.productboard.com/blog/best-product-management-tools/" target="_blank">Melhores ferramentas de Product Management</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '9-6-1',
                            title: 'Ferramentas de roadmap (ProductBoard, Aha!)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Ferramentas como ProductBoard, Aha! e Roadmunk ajudam a criar, comunicar e gerenciar roadmaps de produto. Facilitam visualização de estratégia, priorização de iniciativas e alinhamento com stakeholders.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productboard.com/features/" target="_blank">ProductBoard - Recursos</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.aha.io/roadmapping/guide/product-roadmap" target="_blank">Aha! - Guia de roadmapping</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/resources/product-roadmap-software-tools/" target="_blank">Comparativo de ferramentas de roadmap</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-6-2',
                            title: 'Ferramentas de tarefa e agilidade (Jira, Trello)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Jira, Trello, Asana e outras ferramentas de gestão de tarefas ajudam a organizar o trabalho, rastrear progresso e facilitar colaboração em ambientes ágeis. São essenciais para execução do roadmap e gestão do backlog.</p>
                                    <p className="font-bold text-red-500">A ferramenta ideal depende do tamanho e estrutura de sua organização.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.atlassian.com/software/jira/guides/getting-started/basics" target="_blank">Básico do Jira</a></li>
                                        <li><a className="text-blue-600 underline" href="https://trello.com/guide/trello-for-product-management" target="_blank">Trello para Product Management</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/jira-for-product-managers/" target="_blank">Jira para Product Managers</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-6-3',
                            title: 'Wireframing e prototipagem (Figma, Miro)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Ferramentas como Figma, Miro e Sketch permitem criar wireframes e protótipos para visualizar conceitos de produto. PMs utilizam essas ferramentas para comunicar ideias, validar conceitos e especificar requisitos visuais.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.figma.com/resources/learn-design/wireframes/" target="_blank">Figma - Criando wireframes</a></li>
                                        <li><a className="text-blue-600 underline" href="https://miro.com/blog/wireframing-prototyping-design-tools/" target="_blank">Miro - Ferramentas de design</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/wireframing-for-product-managers/" target="_blank">Wireframing para Product Managers</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-6-4',
                            title: 'Ferramentas de análise de dados (Excel, SQL, Looker)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Conhecimentos em ferramentas de análise como Excel, SQL, Looker e Tableau permitem ao PM extrair insights de dados. Essas habilidades são cruciais para tomar decisões baseadas em evidências e medir impacto do produto.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/sql-for-product-managers/" target="_blank">SQL para Product Managers</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productschool.com/blog/product-management-2/data-analysis-tools-product-managers/" target="_blank">Ferramentas de análise para PMs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://mode.com/sql-tutorial/" target="_blank">Tutorial de SQL para análise</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        }
                    ]
                },
                {
                    id: '9-7',
                    title: '⚫ Carreira e Certificações',
                    content: (
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>A carreira em Product Management oferece diversas oportunidades de crescimento, desde PM júnior até CPO (Chief Product Officer). Certificações, formações e networking são elementos importantes para desenvolvimento profissional.</p>
                            <ul className="list-disc list-inside">
                                <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-manager-career-path/" target="_blank">Carreira em Product Management</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/product-management-career-paths/" target="_blank">Trilhas de carreira em produto</a></li>
                                <li><a className="text-blue-600 underline" href="https://www.productschool.com/blog/product-management-2/certifications-product-manager/" target="_blank">Certificações para PMs</a></li>
                            </ul>
                        </div>
                    ),
                    children: [
                        {
                            id: '9-7-1',
                            title: 'Certificação CSPO (Scrum Alliance)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A certificação CSPO (Certified Scrum Product Owner) da Scrum Alliance valida conhecimentos em Product Ownership ágil. Aborda conceitos como backlog, refinamento, sprints e colaboração com o time de desenvolvimento.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner" target="_blank">Certificação CSPO oficial</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.mountaingoatsoftware.com/blog/the-product-owners-responsibilities" target="_blank">Responsabilidades do Product Owner</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-owner-vs-product-manager/" target="_blank">Product Owner vs Product Manager</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-7-2',
                            title: 'Formações PM (Reforge, Product School)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Programas como Reforge, Product School e PM3 oferecem formações especializadas para product managers em diferentes níveis. Cobrem aspectos práticos e estratégicos da gestão de produtos e ajudam a acelerar a carreira.</p>
                                    <p className="font-bold text-red-500">A formação ideal depende do seu nível atual e objetivos de carreira.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.reforge.com/blog/product-manager-skills" target="_blank">Reforge - Habilidades de PM</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.productschool.com/product-management-certification/" target="_blank">Product School - Certificações</a></li>
                                        <li><a className="text-blue-600 underline" href="https://productmanagementexercises.com/" target="_blank">Exercícios práticos de Product Management</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-7-3',
                            title: 'Mentoria e Comunidades (PM3, Produtos Incríveis)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>Comunidades como PM3, Produtos Incríveis e Product Hunt oferecem networking, conteúdo e mentoria para product managers. Participar dessas comunidades ajuda a compartilhar experiências e aprender com profissionais experientes.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.mindtheproduct.com/product-management-communities/" target="_blank">Comunidades de Product Management</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.produtosincriveisbr.com.br/" target="_blank">Produtos Incríveis</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.pm3.tech/" target="_blank">PM3 - Comunidade brasileira</a></li>
                                    </ul>
                                </div>
                            ),
                            children: []
                        },
                        {
                            id: '9-7-4',
                            title: 'Crescimento na carreira (PM → Group PM → Head of Product)',
                            content: (
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>A carreira em produto geralmente evolui de Product Manager para Senior PM, Group PM/PM Lead, Director of Product, até Head of Product ou CPO (Chief Product Officer). Cada nível exige diferentes habilidades e responsabilidades.</p>
                                    <ul className="list-disc list-inside">
                                        <li><a className="text-blue-600 underline" href="https://www.productplan.com/learn/product-manager-career-path/" target="_blank">Trilha de carreira de PMs</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.lennysnewsletter.com/p/product-manager-career-ladder" target="_blank">Lenny's Newsletter - Progressão de carreira</a></li>
                                        <li><a className="text-blue-600 underline" href="https://www.reforge.com/blog/crossing-the-canyon-product-leader" target="_blank">Reforge - Transição para liderança de produto</a></li>
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