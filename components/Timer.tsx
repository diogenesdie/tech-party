import { useState, useEffect } from "react";

const Timer = () => {
	const dateOfEvent = new Date('2023-10-09T19:30:00');

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(1);
    const [stateDistance, setStateDistance] = useState(0);
    const [animationDelay, setAnimationDelay] = useState('animate__delay-3s');

    //event timer countdown
    useEffect(() => {
        const now = new Date().getTime();
        const distance = dateOfEvent.getTime() - now;

        if( distance > 0 ) {
            setAnimationDelay('');
        }

        setStateDistance(distance);

        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = dateOfEvent.getTime() - now;

            setStateDistance(distance);

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if( stateDistance <= 0 ) {
        return (
            <p className={`glitch text-center text-2xl 2xl:text-2xl text-white font-bold animate__animated animate__fadeInUp ${animationDelay}`} style={{
                animationIterationCount: '1'
            }}>{'Participou do evento?'}</p>
        )
    }

    return (
        <div className={`flex w-full animate__animated animate__infinite ${stateDistance <= 10000 ? 'animate__pulse' : ''}`}>
            <div className={`timer-wrapper flex items-center justify-center gap-5 ${stateDistance <= 10000 ? 'animate__animated animate__fadeOutDown' : ''}`} style={{
                animationIterationCount: '1',
                animationDelay: '9s'
            }}>
                <div className="flex flex-col items-center justify-center background-blur">
                    <span className="text-4xl text-white font-bold">{days}</span>
                    <span className="text-sm text-white font-bold">Dias</span>
                </div>
                <div className="flex flex-col items-center justify-center background-blur">
                    <span className="text-4xl text-white font-bold">{hours}</span>
                    <span className="text-sm text-white font-bold">Horas</span>
                </div>
                <div className="flex flex-col items-center justify-center background-blur">
                    <span className="text-4xl text-white font-bold">{minutes}</span>
                    <span className="text-sm text-white font-bold">Minutos</span>
                </div>
                <div className="flex flex-col items-center justify-center background-blur">
                    <span className="text-4xl text-white font-bold">{seconds}</span>
                    <span className="text-sm text-white font-bold">Segundos</span>
                </div>
            </div>
        </div>
    )
}

export default Timer;