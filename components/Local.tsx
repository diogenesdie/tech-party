import mapIcon from '@/public/images/map.png';
import Image from "next/image";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Local = forwardRef(function Local (props, ref) {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [hasCallTyping, setHasCallTyping] = useState(false);
    const [isLastLetter, setIsLastLetter] = useState(false);
    
    const text = "Onde será o evento?";
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
                                    Local
                                </div>
                            </div>
                        </div>
                        <div className="osx-content-blur flex flex-col lg:flex-row items-center justify-between w-full gap-8" style={{
                            padding: "50px",
                        }}>
                            <iframe
                                loading="lazy"
                                className="w-full border-none rounded-lg iframe-map"
                                src={`https://www.google.com/maps/embed/v1/${false ? 'directions' : 'place'}?key=AIzaSyDEgPFK1_Micb5aUDZ9Mpwnyhan1tNEsKE&${false ? 'destination' : 'q'}=Centro+de+Eventos+Faccat${false ? `&origin=-29.6391269,-50.789545` : ''}`}
                            >
                            </iframe>
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
                            <Image src={mapIcon} alt="Cursor" objectFit='contain' width={50} height={50} className="ml-3 icon" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce style={{
                        animationDelay: "1s"
                    }}>
                        <h3 className="section-description text-md">
                        <p><b>Centro de Eventos da Faccat:</b> Local moderno e com várias comodidades no Campus da instituição, oferecendo uma das mais belas vistas da região do Vale do Paranhana. Estamos entre Novo Hamburgo e Gramado, próximos a cidades como Igrejinha, Parobé e Três Coroas. Explore os prédios históricos de Taquara, a fábrica da Heineken em Igrejinha (agendamento disponível) ou visite o Centro Budista de Três Coroas. Endereço: Av. Oscar Martins Rangel, 4500. Taquara/RS. Mapa:</p>
                        </h3>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    );
});

export default Local;