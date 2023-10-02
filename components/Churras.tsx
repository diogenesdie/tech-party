import choppsPhoto from '@/public/images/ate-chopp.jpeg';
import barbecueIcon from '@/public/images/barbecue.png';
import churrasTiPhoto from '@/public/images/churras-ti.jpeg';
import melhoresAssadoresPhoto from '@/public/images/melhores-assadores.jpeg';
import Image from "next/image";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
``

const Churras = forwardRef(function Churras(props, ref) {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [hasCallTyping, setHasCallTyping] = useState(false);
    const [isLastLetter, setIsLastLetter] = useState(false);
    
    const text = "Churras da TI";
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

    return (
        <section id="Churras" className="section-padding">
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
                            <Image src={barbecueIcon} alt="Cursor" objectFit='contain' width={50} height={50} className="ml-3 icon" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                        animationDelay: "1s"
                    }}>
                        <h3 className="section-description text-md">
                            <p>No Churras da TI, parte da Tech Party 2023, no dia <b>11 de outubro</b>, a fusão de <b>sabores, chopp gelado</b> e entretenimento eleva a celebração. As churrasqueiras exalam aromas irresistíveis, transformando cortes de carne em obras-primas, enquanto torneiras de chopp oferecem variedade. O evento, além do paladar, destaca-se por performances ao vivo, música envolvente e atividades interativas, proporcionando uma experiência onde a <b>conexão</b> transcende os códigos, unindo tecnologia e diversão.</p>
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
                                    Churras da TI
                                </div>
                            </div>
                        </div>
                        <div className="osx-content-blur flex flex-col lg:flex-row items-center justify-between w-full gap-8" style={{
                            padding: "50px",
                        }}>
                            <div className="flex flex-col file-wrapper items-center">
                                <AnimationOnScroll animateIn="animate__fadeInUp relative" animateOnce style={{
                                    animationDelay: "1s"
                                }}>
                                    <div className="animate__animated animate__fadeInUp animate__delay-3s image-wrapper" style={{
                                        position: "relative"
                                    }}>
                                        <Image 
                                            src={churrasTiPhoto}
                                            alt="Centro de Eventos" 
                                            layout="fill"
                                            objectFit="cover"
                                            className="zoom"
                                            style={{
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </div>
								</AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                                    animationDelay: "1.4s"
                                }}>
								    <span className="text-white text-2xl font-bold">churrasco-bagual.jpeg</span>
                                </AnimationOnScroll>
							</div>
                            <div className="flex flex-col file-wrapper items-center">
                                <AnimationOnScroll animateIn="animate__fadeInUp relative" animateOnce style={{
                                    animationDelay: "1.4s"
                                }}>
                                    <div className="animate__animated animate__fadeInUp animate__delay-3s image-wrapper" style={{
                                        position: "relative"
                                    }}>
                                        <Image 
                                            src={melhoresAssadoresPhoto}
                                            alt="Centro de Eventos" 
                                            layout="fill"
                                            objectFit="cover"
                                            className="zoom"
                                            style={{
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </div>
								</AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                                    animationDelay: "1.8s"
                                }}>
								    <span className="text-white text-2xl font-bold">melhores-assadores.jpeg</span>
                                </AnimationOnScroll>
							</div>
                            <div className="flex flex-col file-wrapper items-center">
                                <AnimationOnScroll animateIn="animate__fadeInUp relative" animateOnce style={{
                                    animationDelay: "2s"
                                }}>
                                    <div className="animate__animated animate__fadeInUp animate__delay-3s image-wrapper" style={{
                                        position: "relative"
                                    }}>
                                        <Image 
                                            src={choppsPhoto}
                                            alt="Centro de Eventos" 
                                            layout="fill"
                                            objectFit="cover"
                                            className="zoom"
                                            style={{
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </div>
								</AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                                    animationDelay: "2.4s"
                                }}>
								    <span className="text-white text-2xl font-bold">ate-chopp.jpeg</span>
                                </AnimationOnScroll>
							</div>
                        </div>
                    </div>	
                </AnimationOnScroll>
            </div>
        </section>
    );
});

export default Churras;