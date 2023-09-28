import { useState, useEffect } from "react";

const Timer = () => {
	const dateOfEvent = new Date('2023-10-09T19:30:00');

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    //event timer countdown
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = dateOfEvent.getTime() - now;

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

    return (
        <div className="timer-wrapper flex items-center justify-center gap-5">
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
    )
}

export default Timer;