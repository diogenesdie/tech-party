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
	const phrases = [
		"No centro de eventos da faccat.",
		"Do dia 09 ao dia 11 de outubro das 19h30m às 22h30m.",
		"Palestras com os melhores profissionais do mercado."
	];
	const speed = 150;

	const [title, setTitle] = useState("");
	const [index, setIndex] = useState(0);
	const [isLastLetter, setIsLastLetter] = useState(false);
	const [phrase, setPhrase] = useState("");
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [phraseLetterIndex, setPhraseLetterIndex] = useState(0);
	const [isErasing, setIsErasing] = useState(false);
	const [isLastLetterPhrase, setIsLastLetterPhrase] = useState(false);

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

	//show phrases with typing animation and erase using backspace animation 
	useEffect(() => {
		if( isLastLetter ){
			if( phraseIndex < phrases.length && !isErasing ){
				setIsErasing(false);
				setIsLastLetterPhrase(false);

				if( phraseLetterIndex < phrases[phraseIndex].length ){
					setTimeout(() => {
						setPhrase(`${phrase}${phrases[phraseIndex][phraseLetterIndex]}`);
						setPhraseLetterIndex(phraseLetterIndex + 1);
					}, 100);
				} else {
					setIsLastLetterPhrase(true);
					setTimeout(() => {
						setIsErasing(true);
					}, 2000);
				}

			} else {
				setIsErasing(true);
				setIsLastLetterPhrase(false);

				if( phraseLetterIndex > 0 ){
					setTimeout(() => {
						setPhraseLetterIndex(prevIndex => {
							setPhrase(phrase.slice(0, phrase.length - 1));
							return prevIndex - 1;
						});
					}, 50);

				} else {
					setTimeout(() => {
						setPhraseIndex(prev => {
							if(prev < phrases.length - 1) {
								return prev + 1;
							}

							return 0;
						});
						setIsErasing(false);
					}, 1000);
				}
			}
		}
	}, [phraseIndex, phraseLetterIndex, isLastLetter, isErasing]);
	

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
			<main className="flex flex-col items-center justify-between w-full px-6">
				<div className={`flex items-center justify-center w-full flex-col lg:flex-row lg:gap-10 lg:mt-0 mt-8 lg:h-screen`}>
					<div className="main-title-wrapper flex flex-col h-full items-center p-10 justify-center transition-all duration-500 ease-in-out">
						<h1 className="text-6xl text-white font-bold">{title}
							{phraseLetterIndex === 0 && !isLastLetter && (
								<span className="thin">|</span>
							)}
						</h1>
						<h2 className="font-thin text-white font-bold text-center" style={{
							maxWidth: "300px"
						}}>{phrase}
							{isLastLetter && (
								<span className={`${isLastLetterPhrase || phraseLetterIndex === 0 ? 'animate-blink' : ''} thin`}>|</span>
							)}
						</h2>
						<div className="wrapper-countdown mt-4 animate__animated animate__fadeInUp animate__delay-1s">
							<Timer/>
						</div>
					</div>
					<div className="osx-wrapper lg:w-auto w-full animate__animated animate__fadeInRight animate__delay-2s mb-4 lg:mb-0">
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
						<div className="osx-content-blur flex flex-col lg:flex-row items-center justify-between w-full gap-8" style={{
							padding: "50px",
						}}>
							<div className="image-wrapper animate__animated animate__fadeInUp animate__delay-3s">
								<Image src={tiFaccatLogo} alt="Centro de Eventos" objectFit='contain' width={500} height={500} />
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
