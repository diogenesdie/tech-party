import { AnimationOnScroll } from "react-animation-on-scroll";
import { forwardRef, use, useEffect, useImperativeHandle, useState } from "react";
import julianaPhoto from '@/public/images/juliana-damasio.jpeg';
import rafaelPhoto from '@/public/images/rafael-bordini.jpeg';
import ideaIcon from '@/public/images/idea.png';
import Image from "next/image";

const Palestrantes = forwardRef((props, ref) => {
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
        if (hasCallTyping) {
            typeAll();
        }
    }, [index]);

    const palestrantes = [
        {
            name: "Rafael Bordini",
            theme: "IA na saúde",
            image: rafaelPhoto,
        },
        {
            name: "Juliana Damásio",
            theme: "Usabilidade",
            image: julianaPhoto,
        }
    ];

    return (
        <section id="palestrantes" style={{paddingTop: "100px"}}>
            <div className="flex lg:flex-row gap-8 items-center flex-col-reverse">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce className="w-full lg:w-auto">
                    <div className="osx-wrapper lg:w-auto w-full mb-4 lg:mb-0">
                        <div className="outer-blur flex	items-center">
                            <div className="flex items-center justify-start">
                                <div className="dot red"></div>
                                <div className="dot amber"></div>
                                <div className="dot green"></div>
                                <div className="inner flex items-center justify-center">
                                    Palestrantes
                                </div>
                            </div>
                        </div>
                        <div className="osx-content-blur flex flex-col lg:flex-row items-center justify-between w-full gap-8" style={{
                            padding: "50px",
                        }}>
                            {palestrantes.map((palestrante, index) => (
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
                                                    src={palestrante.image} 
                                                    alt="palestrante" 
                                                    layout="fill"
                                                    objectFit="cover"
                                                    style={{
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <h3 className="text-2xl text-white font-bold p-0 m-0">{palestrante.name}</h3>
                                                <h4 className="text-whitw p-0 m-0">{palestrante.theme}</h4>
                                            </div>
                                        </div>
                                    </AnimationOnScroll>
                                ))}
                        </div>
                    </div>	
                </AnimationOnScroll>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <h2 className="lg:text-4xl text-2xl text-white font-bold">{title}
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
                        Conheça os especialistas em informática que vão transformar seu entendimento
                        sobre o futuro digital. De líderes visionários a profissionais experientes, nossos palestrantes trarão insights inovadores e
                        conhecimento técnico avançado. Prepare-se para uma experiência única de aprendizado e inspiração.
                        </h3>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    );
});

export default Palestrantes;