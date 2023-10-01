import { AnimationOnScroll } from "react-animation-on-scroll";
import { forwardRef, use, useEffect, useImperativeHandle, useState } from "react";
import Image from "next/image";
import infiscLogo from '@/public/images/infisc-logo.png';
import autopecasOkLogo from '@/public/images/autopecas-ok-logo.jpeg';
import tiaCeliaLogo from '@/public/images/tia-celia-logo.jpeg';
import starIcon from '@/public/images/star.png';

const Patrocinadores = forwardRef(function Patrocinadores(props, ref) {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [hasCallTyping, setHasCallTyping] = useState(false);
    const [isLastLetter, setIsLastLetter] = useState(false);
    
    const text = "Tornaram o evento possível";
    const speed = 100;

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
        if (hasCallTyping) {
            typeAll();
        }
    }, [index]);

    const patrocinadores = [
        {
            name: "Infisc",
            theme: "Transformação Digital",
            image: infiscLogo,
        },
        {
            name: "Autopeças OK",
            theme: "Distribuidora automotiva",
            image: autopecasOkLogo,
        },
        {
            name: "Tia Célia",
            theme: "Padaria e confeitaria",
            image: tiaCeliaLogo
        }
    ];

    return (
        <section id="patrocinadores" className="section-padding">
            <div className="flex lg:flex-row flex-col gap-8 items-center">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <h2 className="lg:text-4xl text-xl text-white font-bold">{title}
                            {!isLastLetter && (
                                <span className="thin">|</span>
                            )}
                        </h2>
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                            animationDelay: "3s"
                        }}>
                            <Image src={starIcon} alt="Cursor" objectFit='contain' width={50} height={50} className="ml-3 icon" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                        animationDelay: "1s"
                    }}>
                        <h3 className="section-description text-md">
                            <p>Agradecemos aos nossos <b>valiosos patrocinadores</b> por tornarem a <b>Tech Party 2023</b> possível. Suporte essencial para impulsionar a inovação, essas parcerias destacam o compromisso das empresas líderes em tecnologia com o avanço da indústria. Junte-se a nós em reconhecimento a esses <b>parceiros incríveis</b>, cujo apoio é fundamental para criar uma experiência enriquecedora e repleta de oportunidades para todos os participantes.</p>
                        </h3>
                    </AnimationOnScroll>
                </div>
                <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce className="w-full lg:w-auto">
                    <div className="osx-wrapper lg:w-auto w-full mb-4 lg:mb-0">
                        <div className="outer-blur flex	items-center">
                            <div className="flex items-center justify-start w-full realtive">
                                <div className="flex items-center justify-start absolute">
									<div className="dot red"></div>
									<div className="dot amber"></div>
									<div className="dot green"></div>
								</div>
                                <div className="inner flex items-center justify-center grow">
                                    Patrocinadores
                                </div>
                            </div>
                        </div>
                        <div className="osx-content-blur flex flex-col lg:flex-row items-center justify-between w-full gap-8" style={{
                            padding: "50px",
                        }}>
                            {patrocinadores.map((patrocinador, index) => (
                                    <AnimationOnScroll key={index} animateIn="animate__fadeInUp" animateOnce style={{
                                        animationDelay: `${index * .3}s`
                                    }} >
                                        <div className="flex flex-col items-center justify-between w-full gap-8 mr-3">
                                            <div className="animate__animated animate__fadeInUp animate__delay-3s" style={{
                                                width: "200px",
                                                height: "200px",
                                                position: "relative"
                                            }}>
                                                <Image
                                                    src={patrocinador.image} 
                                                    alt="palestrante" 
                                                    layout="fill"
                                                    objectFit="cover"
                                                    style={{
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <h3 className="text-2xl text-white font-bold p-0 m-0">{patrocinador.name}</h3>
                                                <h4 className="text-whitw p-0 m-0">{patrocinador.theme}</h4>
                                            </div>
                                        </div>
                                    </AnimationOnScroll>
                                ))}
                        </div>
                    </div>	
                </AnimationOnScroll>
            </div>
        </section>
    );
});

export default Patrocinadores;