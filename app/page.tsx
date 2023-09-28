'use client';
import Image from 'next/image';
import { Parallax, Background } from "react-parallax";
import { useCallback, useEffect, useRef, useState } from 'react';
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Timer from '@/components/Timer';
import Header from '@/components/Header';
import centroEventosImage from '@/public/images/centro-eventos.jpeg';
import faccatLogo from '@/public/images/faccat-logo.png';
import tiFaccatLogo from '@/public/images/ti-faccat-logo.png';

export default function Home() {
	//typing animation and
	const text = "Tech Party";

	const [title, setTitle] = useState("");
	const [index, setIndex] = useState(0);
	const [speed, setSpeed] = useState(150);
	const [isLastLetter, setIsLastLetter] = useState(false);

	useEffect(() => {
		if (index < text.length) {
			setTimeout(() => {
				setTitle(`${title}${text[index]}`);
				setIndex(index + 1);

				if (index == text.length - 1) {
					setIsLastLetter(true);
				}
			}, speed);
		}
	}, [index]);

	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.log(container);
	}, []);

	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col items-center justify-between w-full">
				<div className={`flex items-center justify-center h-screen w-full flex-col lg:flex-row`}>
					<div className="main-title-wrapper flex flex-col h-full items-center p-10 justify-center transition-all duration-500 ease-in-out">
						<h1 className="text-6xl text-white font-bold">{title}<span className={`${isLastLetter ? 'animate-blink' : ''} thin`}>|</span></h1>
						<div className="wrapper-countdown mt-4 animate__animated animate__fadeInUp animate__delay-1s">
							<Timer/>
						</div>
					</div>
					<div className="osx-wrapper animate__animated animate__fadeInRight animate__delay-2s">
						<div className="outer-blur flex	items-center">
							<div className="flex items-center justify-start">
								<div className="dot red"></div>
								<div className="dot amber"></div>
								<div className="dot green"></div>
								<div className="inner flex items-center justify-center">
									TI Faccat 
								</div>
							</div>
						</div>
						<div className="osx-content-blur flex items-center justify-between w-full gap-8" style={{
							padding: "50px",
						}}>
							<div className="image-wrapper animate__animated animate__fadeInUp animate__delay-3s">
								<Image src={tiFaccatLogo} alt="Centro de Eventos" width={500} height={500} />
								<span className="text-white text-2xl font-bold">um-evento-ti-faccat.png</span>
							</div>
							<div className="image-wrapper animate__animated animate__fadeInUp" style={{
								animationDelay: "3.2s"
							}}>
								<Image src={faccatLogo} alt="Centro de Eventos" width={500} height={500} />
								<span className="text-white text-2xl font-bold">faccat.png</span>
							</div>
							<div className="image-wrapper animate__animated animate__fadeInUp" style={{
								animationDelay: "3.4s"
							}}>
								<Image src={centroEventosImage} alt="Centro de Eventos" width={500} height={500} />
								<span className="text-white text-2xl font-bold">centro-de-eventos.jpg</span>
							</div>
						</div>
					</div>	
				</div>
			</main>
		</>
	)
}
