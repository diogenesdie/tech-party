import ideaIcon from '@/public/images/idea.png';
import julianaPhoto from '@/public/images/juliana-damasio.jpeg';
import marcioRobsonPhoto from '@/public/images/marcio-robson.jpeg';
import benHurSantosPhoto from '@/public/images/ben-hur-santos.jpeg';
import jhonesSouzaPhoto from '@/public/images/jhones-souza.jpeg';
import rafaelPhoto from '@/public/images/rafael-bordini.jpeg';
import Image from "next/image";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaClock, FaDownload, FaInfo, FaLinkedin, FaPlay } from "react-icons/fa";
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(
  () => import('@/components/PDFViewer'),
  { ssr: false }
);
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


const Palestrantes = forwardRef(function Palestrantes (props, ref) {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [hasCallTyping, setHasCallTyping] = useState(false);
    const [isLastLetter, setIsLastLetter] = useState(false);

    const dialogInfo = useRef<HTMLDivElement>(null);
    
    const text = "Quem estará presente?";
    const speed = 150;

    const typeAll = () => {
        setHasCallTyping(true);

        if (index < text.length) {
            setTimeout(() => {
                setTitle(`${title}${text[index]}`);
                setIndex(index + 1);

                if (index == text.length - 1) {
                    setIsLastLetter(true);
                }
            }, speed);
        }

    };
    useImperativeHandle(ref, () => ({
        startTyping: typeAll
    }));

    useEffect(() => {
        document.querySelector("body")?.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;

            if( target && !target.classList.contains("btn-palestrante") && !target.classList.contains("dialog-description") && !target.closest(".dialog-description") ) {
                if ( dialogInfo.current ) {
                    dialogInfo.current.classList.remove("active");
                }
            }
        });

        return () => {
            document.querySelector("body")?.removeEventListener("click", (e) => {
                const target = e.target as HTMLElement;

                if( target && !target.classList.contains("btn-palestrante") && !target.classList.contains("dialog-description") ) {
                    if( dialogInfo.current ) {
                        dialogInfo.current.classList.remove("active");
                    }
                }
            });
        }
    }, []);

    useEffect(() => {
        if (hasCallTyping) {
            typeAll();
        }
    }, [index]);

    const palestrantes = [
        {
            name: "Ben-Hur Santos",
            theme: "Desenvolvimento Seguro",
            image: benHurSantosPhoto,
            day: "09/out",
            time: "19h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/benhurott/",
            presentation: "https://techparty.faccat.br/2023/presentations/ben-hur-presentation.pdf",
            maxPage: 55,
        },
        {
            name: "Jhones Souza",
            theme: "Métodos Ágeis e Inovação",
            image: jhonesSouzaPhoto,
            day: "09/out",
            time: "20h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/jhonesdesouza1981/",
            description: `<p><p><b>Jhones Souza</b> possui mais de 20 anos de experiência em análise e desenvolvimento de sistemas, metodologias ágeis e gestão de pessoas. Atua como Desenvolvedor de Sistemas, Scrum Master, e Agile Coach, com ênfase em Scrum, Kanban, e Scrumban. Além disso, é integrante ao time Core Global de Coaches, Design Thinking Coach, e Embaixador do Labs. Também lidera o Employee Sounding Board e é Analista de Sistemas, especialista em sistemas como HCM, Master Data, Payroll e Reports. Jhones é Mentor, Coach, Trainer e Recrutador, com formação em Tecnologia em Análise e Desenvolvimento de Sistemas pela Unitins e MBA em Gestão de Recursos Humanos pela Unisinos.</p><p style="margin-top: 10px"><b>Métodos Ágeis e Inovação</b></p><p>Apresentação inspiradora sobre gestão ágil, agilidade, inovação e carreira. Descubra como aplicar práticas ágeis para impulsionar sua carreira e alcançar resultados inovadores. Uma palestra imperdível para quem busca se destacar no mercado atual.</p></p>`
        },
        {
            name: "Márcio Robson de Souza",
            theme: "Mercado Brasileiro de TI: panorama, tendências e oportunidades",
            image: marcioRobsonPhoto,
            day: "10/out",
            time: "19h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/marcio-robson-de-souza-4376ba33/",
            description: `<p><p><b>Marcio Robson de Souza</b>, 44 anos, é Bacharel em Administração de empresas pela Faccat (2010) e Técnico em Contabilidade pelo CNEC (1997). Ele é Sócio Fundador, CEO e diretor comercial da iBRsistemas Software ERP, Sócio Fundador, CEO e diretor comercial da ParanhanaNET, e Sócio fundador da Plano1 Contabilidade. Com 27 anos de experiência em TI, Marcio é um empreendedor dedicado.</p><p style="margin-top: 10px"><b>Mercado Brasileiro de TI: panorama, tendências e oportunidades</b></p><p>Uma profunda análise dos números do mercado de TI, avaliando os investimentos do setor no Brasil e no mundo, para juntos criar os cenários e identificar onde estão as oportunidades.</p></p>`,
            presentation: "https://techparty.faccat.br/2023/presentations/marcio-robson-presentation.pdf",
            maxPage: 31
        },
        {
            name: "Rafael Bordini",
            theme: "IA na saúde",
            image: rafaelPhoto,
            day: "10/out",
            time: "20h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/rafael-h-bordini-a63187/",
            description: `<p><p><b>Rafael H. Bordini</b> é professor associado na PUCRS, cargo que exerce desde 2012. Recebeu o título de PhD em Ciência da Computação pela University College London em 1999. Foi pesquisador na Universidade de Liverpool e professor na Universidade de Durham e no Instituto de Informática da UFRGS. Atualmente dirige o Grupo de Pesquisa em <b>Inteligência Artificial Aplicada à Saúde</b> do Núcleo de Inteligência Artificial da Escola Politécnica. Seus interesses de pesquisa incluem sistemas multiagentes, sistemas de diálogo baseados em teoria da argumentação, aplicação de técnicas de aprendizado de máquina e técnicas de IA explicáveis para suporte à tomada de decisões, com foco em aplicações na área da saúde, para resgate em situações de desastres naturais, e no domínio jurídico. Publicou mais de 150 artigos científicos e possui mais de 9000 citações segundo o <b>Google Scholar</b>.</p><p style="margin-top: 10px"><b>Pesquisa e Inovação em Inteligência Artificial Aplicada à Saúde</b></p><p>Nessa palestra serão apresentados progressos recentes no uso de técnicas de <b>Inteligência Artificial</b> na área da Saúde. Também serão apresentados projetos de pesquisa nesse tema que estão sendo conduzidos pelo Grupo de Pesquisa em <b>Inteligência Artificial na Saúde</b> da Escola Politécnica da PUCRS.</p></p>`,
            presentation: "https://techparty.faccat.br/2023/presentations/rafael-bordini-presentation.pdf",
            maxPage: 43
        },
        {
            name: "Juliana Damasio",
            theme: "Como melhorar a experiência do usuário?",
            image: julianaPhoto,
            day: "11/out",
            time: "19h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/juliana-damasio-4916ba39/",
            description: `<p><b>Com doutorado e mestrado em Ciência da Computação pela PUCRS</b></a>, Juliana Damasio Oliveira tem uma trajetória marcada pela atuação em tecnologia assistiva para deficientes visuais, chatbots, avaliação de usabilidade, audiogames, banco de dados e sistemas multiagentes. Com experiência docente em disciplinas como "<b>banco de dados</b>" e "<b>Interação humano-computador</b>", Juliana, a partir de 2022, assumiu o cargo de Analista de BI no Noharm, software associado ao Instituto de Inteligência Artificial na Saúde. Ela também investe esforços na startup Whispers, da qual é sócia, que emprega Inteligência Artificial na alocação de leitos hospitalares. No âmbito profissional, Juliana se empenha em aprimorar a conexão entre tecnologia e atendimento centrado no paciente.<p style="margin-top: 10px"><b>Como melhorar a experiência do usuário?</b></p> A palestra abordará definições, técnicas e estratégias para criar interfaces intuitivas e envolventes. Além disso, discutiremos a importância de entender as necessidades do seu público-alvo e como a preocupação com a experiência do usuário pode ser o grande diferencial no sucesso do seu projeto ou empreendimento.</p>`,
            presentation: "https://techparty.faccat.br/2023/presentations/juilia-damasio-presentation.pdf",
            maxPage: 33
        }
    ];

    const [description, setDescription] = useState("");
    const [presentation, setPresentation] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    return (
        <section id="palestrantes" className="section-padding">
            <div className="flex lg:flex-row gap-8 items-center flex-col-reverse">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce className="w-full lg:w-auto">
                    <div className="osx-wrapper lg:w-auto w-full mb-4 lg:mb-0">
                        <div className="outer-blur flex	items-center">
                            <div className="flex items-center justify-start w-full relative">
                                <div className="flex items-center justify-start absolute">
									<div className="dot red"></div>
									<div className="dot amber"></div>
									<div className="dot green"></div>
								</div>
                                <div className="inner flex items-center justify-center grow">
                                    Palestrantes
                                </div>
                            </div>
                        </div>
                        <div className="osx-content-blur flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-8" style={{
                            padding: "50px",
                            maxWidth: "1100px",
                        }}>
                            {palestrantes.map((palestrante, index) => (
                                    <AnimationOnScroll key={index} animateIn="animate__fadeInUp" className="flex flex-col items-center" animateOnce style={{
                                        animationDelay: `${index * .3}s`
                                    }} >
                                        <div className="palestrantes-wrapper flex flex-col items-center justify-between w-full gap-2 mr-3">
                                            <div className="animate__animated animate__fadeInUp animate__delay-3s" style={{
                                                width: "180px",
                                                height: "180px",
                                                position: "relative"
                                            }}>
                                                <Image 
                                                    src={palestrante.image} 
                                                    alt="palestrante" 
                                                    layout="fill"
                                                    objectFit="cover"
                                                    style={{
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                                <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full overlay">
                                                    <a href={palestrante.linkedin} target="_blank" className="text-white text-4xl">
                                                        <FaLinkedin />
                                                    </a>
                                                </div> 
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <h3 className="text-2xl text-center text-white font-bold p-0 m-0">{palestrante.name}</h3>
                                                <h4 className="text-whitw p-0 m-0 text-center" style={{maxWidth: '300px'}}>{palestrante.theme}</h4>
                                                <div className="flex items-center gap-2 lg:text-md text-sm">
                                                    <FaClock />
                                                    <span>{palestrante.day} às {palestrante.time} ({palestrante.duration})</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {palestrante.description && (
                                                    <button 
                                                        className="text-white text-2xl text-center w-auto btn-palestrante mt-3 zoom justify-end grow"
                                                        title="Sobre o palestrante"
                                                        onClick={() => {
                                                            setDescription(palestrante.description || "");
                                                            setPresentation("");
                                                            setMaxPage(1);
                                                            setPageNumber(1);
                                                            if (dialogInfo.current) {
                                                                dialogInfo.current.classList.add("active");
                                                            }
                                                        }}
                                                    >
                                                        <FaInfo />
                                                    </button>
                                                )}
                                                {palestrante.presentation && (
                                                    <button 
                                                        className="text-white text-2xl text-center w-auto btn-palestrante mt-3 zoom justify-end grow"
                                                        title="Ver apresentação"
                                                        onClick={() => {
                                                            setPresentation(palestrante.presentation || "");
                                                            setMaxPage(palestrante.maxPage || 1);
                                                            setPageNumber(1);
                                                            setDescription("");
                                                            if (dialogInfo.current) {
                                                                dialogInfo.current.classList.add("active");
                                                            }
                                                        }}
                                                    >
                                                        <FaPlay/>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </AnimationOnScroll>
                                ))}
                        </div>
                    </div>	
                </AnimationOnScroll>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <h2 className="lg:text-4xl text-xl text-white font-bold">{title}
                            {!isLastLetter && (
                                <span className="thin">|</span>
                            )}
                        </h2>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                            animationDelay: "1.8s"
                        }}>
                            <Image src={ideaIcon} alt="Cursor" objectFit='contain' width={50} height={50} className="ml-3 icon" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                        animationDelay: "1s"
                    }}>
                        <h3 className="section-description text-md">
                            <p>Conheça os <b>especialistas em informática</b> que vão transformar seu entendimento sobre o <b>futuro digital</b>. De líderes visionários a profissionais experientes, nossos palestrantes trarão <b>insights inovadores</b> e conhecimento técnico avançado. Prepare-se para uma experiência única de <b>aprendizado e inspiração</b>.</p>
                        </h3>
                    </AnimationOnScroll>
                </div>
            </div>
            <div ref={dialogInfo} className="dialog-description flex fixed" style={{
                zIndex: 99999,
            }}>
                <div className="osx-wrapper lg:w-auto w-full mb-4 lg:mb-0">
                    <div className="outer-blur flex	items-center">
                        <div className="flex items-center justify-start w-full relative">
                            <div className="flex items-center justify-start absolute">
                                <div className="dot red" onClick={() => {
                                    if( dialogInfo.current ) {
                                        dialogInfo.current.classList.remove("active");
                                    }
                                }}></div>
                                <div className="dot amber"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="inner flex items-center justify-center grow">
                                {description ? "Sobre o palestrante" : "Apresentação"}
                            </div>
                        </div>
                    </div>
                    <div className="osx-content-blur opaco-dark flex flex-col lg:flex-row items-center justify-center w-full gap-8" style={{
                        padding: presentation ? "0px" : "50px",
                        maxWidth: presentation ? "1200px" : "1000px",
                        overflow: "auto",
                    }}>
                        {description && (
                            <div className="description" dangerouslySetInnerHTML={{__html: description}}></div> 
                        )}
                        {presentation && (
                            <div className="p-2 relative">
                                <PdfViewer url={presentation} className="pdf-view-presentation" pageNumber={pageNumber} width={800} />
                                <div className="flex items-center justify-center gap-2 mt-3">
                                    <div className="grow"></div>
                                    <button className="btn-palestrante" onClick={() => {
                                        if (pageNumber > 1) {
                                            setPageNumber(pageNumber - 1);
                                        }
                                    }}>Anterior</button>
                                    <span>{pageNumber}</span>
                                    <button className="btn-palestrante" onClick={() => {
                                        if (pageNumber < maxPage) {
                                            setPageNumber(pageNumber + 1);
                                        }
                                    }}>Próximo</button>
                                    <div className="grow"></div>
                                    <button
                                        className="btn-palestrante"
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = presentation;
                                            link.setAttribute('download', 'presentation.pdf');
                                            link.setAttribute('target', '_blank');
                                            document.body.appendChild(link);
                                            link.click();
                                            link.remove();
                                        }}
                                    >
                                        <FaDownload/>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>	
            </div>
        </section>
    );
});

export default Palestrantes;