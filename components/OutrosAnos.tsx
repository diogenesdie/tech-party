import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const OutrosAnos = forwardRef(function OutrosAnos(props, ref) {
    const [title, setTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [hasCallTyping, setHasCallTyping] = useState(false);
    const [isLastLetter, setIsLastLetter] = useState(false);
    
    const text = "Tornaram esse evento possível";
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

    const outrosAnos = [
        {
            name: "2015"
        },
        {
            name: "2016"
        },
        {
            name: "2017"
        },
        {
            name: "2018"
        },
        {
            name: "2019"
        }
    ];

    return (
        <section id="outrosAnos" className="section-padding">
            <div className="flex lg:flex-row flex-col gap-8 items-center">
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
                                    Outros anos
                                </div>
                            </div>
                        </div>
                        <div className="osx-content-blur flex flex-col lg:flex-row items-center justify-between w-full gap-8" style={{
                            padding: "50px",
                        }}>
                            {outrosAnos.map((outroAno, index) => (
                                    <AnimationOnScroll key={index} animateIn="animate__fadeInUp" animateOnce style={{
                                        animationDelay: `${index * .3}s`
                                    }} >
                                        <div 
                                            className="flex flex-col items-center justify-between w-full gap-8 mr-3 zoom"
                                            onClick={() => {
                                                window.open(`https://techparty.faccat.br/${outroAno.name}`);
                                            }}
                                        >
                                            <div className="animate__animated animate__fadeInUp animate__delay-3s flex items-center justify-center background-blur cursor-pointer" style={{
                                                width: "200px",
                                                height: "200px",
                                                position: "relative"
                                            }}>
                                                <span 
                                                    className="text-white text-4xl"
                                                >
                                                    {outroAno.name}
                                                </span>
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

export default OutrosAnos;