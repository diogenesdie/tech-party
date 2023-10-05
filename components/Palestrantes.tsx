import ideaIcon from '@/public/images/idea.png';
import julianaPhoto from '@/public/images/juliana-damasio.jpeg';
import marcioRobsonPhoto from '@/public/images/marcio-robson.jpeg';
import douglasDiasPhoto from '@/public/images/douglas-dias.jpeg';
import jhonesSouzaPhoto from '@/public/images/jhones-souza.jpeg';
import rafaelPhoto from '@/public/images/rafael-bordini.jpeg';
import Image from "next/image";
import { forwardRef, use, useEffect, useImperativeHandle, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaClock, FaLinkedin } from "react-icons/fa";

const Palestrantes = forwardRef(function Palestrantes (props, ref) {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [hasCallTyping, setHasCallTyping] = useState(false);
    const [isLastLetter, setIsLastLetter] = useState(false);
    
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
            //verify if the target is not the dialog description or a child of dialog description
            if( target && !target.classList.contains("dialog-description") && !target.closest(".dialog-description") ) {
                const dialogDescription = document.querySelector(".dialog-description");
                if (dialogDescription) {
                    dialogDescription.classList.remove("active");
                }
            }
        });

        return () => {
            document.querySelector("body")?.removeEventListener("click", (e) => {
                const target = e.target as HTMLElement;

                if( target && !target.classList.contains("dialog-description") ) {
                    const dialogDescription = document.querySelector(".dialog-description");
                    if (dialogDescription) {
                        dialogDescription.classList.remove("active");
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
            name: "Douglas Dias",
            theme: "Cibersegurança: Indo além do Red Team e Blue Team",
            image: douglasDiasPhoto,
            day: "09/out",
            time: "19h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/douglas-dias-00100011/"
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
            theme: "Mercado de trabalho em TI",
            image: marcioRobsonPhoto,
            day: "10/out",
            time: "19h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/marcio-robson-de-souza-4376ba33/"
        },
        {
            name: "Rafael Bordini",
            theme: "IA na saúde",
            image: rafaelPhoto,
            day: "10/out",
            time: "20h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/rafael-h-bordini-a63187/",
            description: `<p><p><b>Rafael H. Bordini</b> é professor associado na PUCRS, cargo que exerce desde 2012. Recebeu o título de PhD em Ciência da Computação pela University College London em 1999. Foi pesquisador na Universidade de Liverpool e professor na Universidade de Durham e no Instituto de Informática da UFRGS. Atualmente dirige o Grupo de Pesquisa em <b>Inteligência Artificial Aplicada à Saúde</b> do Núcleo de Inteligência Artificial da Escola Politécnica. Seus interesses de pesquisa incluem sistemas multiagentes, sistemas de diálogo baseados em teoria da argumentação, aplicação de técnicas de aprendizado de máquina e técnicas de IA explicáveis para suporte à tomada de decisões, com foco em aplicações na área da saúde, para resgate em situações de desastres naturais, e no domínio jurídico. Publicou mais de 150 artigos científicos e possui mais de 9000 citações segundo o <b>Google Scholar</b>.</p><p style="margin-top: 10px"><b>Pesquisa e Inovação em Inteligência Artificial Aplicada à Saúde</b></p><p>Nessa palestra serão apresentados progressos recentes no uso de técnicas de <b>Inteligência Artificial</b> na área da Saúde. Também serão apresentados projetos de pesquisa nesse tema que estão sendo conduzidos pelo Grupo de Pesquisa em <b>Inteligência Artificial na Saúde</b> da Escola Politécnica da PUCRS.</p></p>`
        },
        {
            name: "Juliana Damasio",
            theme: "Como melhorar a experiência do usuário?",
            image: julianaPhoto,
            day: "11/out",
            time: "19h30m",
            duration: "40 min",
            linkedin: "https://www.linkedin.com/in/juliana-damasio-4916ba39/",
            description: `<p><b>Com doutorado e mestrado em Ciência da Computação pela PUCRS</b></a>, Juliana Damasio Oliveira tem uma trajetória marcada pela atuação em tecnologia assistiva para deficientes visuais, chatbots, avaliação de usabilidade, audiogames, banco de dados e sistemas multiagentes. Com experiência docente em disciplinas como "<b>banco de dados</b>" e "<b>Interação humano-computador</b>", Juliana, a partir de 2022, assumiu o cargo de Analista de BI no Noharm, software associado ao Instituto de Inteligência Artificial na Saúde. Ela também investe esforços na startup Whispers, da qual é sócia, que emprega Inteligência Artificial na alocação de leitos hospitalares. No âmbito profissional, Juliana se empenha em aprimorar a conexão entre tecnologia e atendimento centrado no paciente.<p style="margin-top: 10px"><b>Como melhorar a experiência do usuário?</b></p> A palestra abordará definições, técnicas e estratégias para criar interfaces intuitivas e envolventes. Além disso, discutiremos a importância de entender as necessidades do seu público-alvo e como a preocupação com a experiência do usuário pode ser o grande diferencial no sucesso do seu projeto ou empreendimento.</p>`
        }
    ];

    const [description, setDescription] = useState("");

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
                        <div className="osx-content-blur flex flex-col lg:flex-row items-center justify-center w-full gap-8" style={{
                            padding: "50px",
                            maxWidth: "1000px",
                        }}>
                            {palestrantes.map((palestrante, index) => (
                                    <AnimationOnScroll key={index} animateIn="animate__fadeInUp" animateOnce style={{
                                        animationDelay: `${index * .3}s`
                                    }} >
                                        <div className="flex flex-col items-center justify-between w-full gap-2 mr-3">
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
                                            {palestrante.description && (
                                                <button 
                                                    className="text-white text-2xl text-center w-full btn-palestrante mt-3 zoom"
                                                    onClick={() => {
                                                        setDescription(palestrante.description || "");

                                                        const dialogDescription = document.querySelector(".dialog-description");
                                                        if (dialogDescription) {
                                                            dialogDescription.classList.add("active");
                                                        }
                                                    }}
                                                >
                                                    Saiba mais
                                                </button>
                                            )}
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
            <div className="dialog-description flex fixed" style={{
                zIndex: 99999,
            }}>
                <div className="osx-wrapper lg:w-auto w-full mb-4 lg:mb-0">
                    <div className="outer-blur flex	items-center">
                        <div className="flex items-center justify-start w-full relative">
                            <div className="flex items-center justify-start absolute">
                                <div className="dot red" onClick={() => {
                                    if( document && document.querySelector(".dialog-description") ) { 
                                        const dialogDescription = document.querySelector(".dialog-description");
                                        if (dialogDescription) {
                                            dialogDescription.classList.remove("active");
                                        }
                                    }
                                }}></div>
                                <div className="dot amber"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="inner flex items-center justify-center grow">
                                Palestrantes
                            </div>
                        </div>
                    </div>
                    <div className="osx-content-blur opaco-dark flex flex-col lg:flex-row items-center justify-center w-full gap-8" style={{
                        padding: "50px",
                        maxWidth: "1000px",
                    }}>
                        <div className="description" dangerouslySetInnerHTML={{__html: description}}></div> 
                    </div>
                </div>	
            </div>
        </section>
    );
});

export default Palestrantes;