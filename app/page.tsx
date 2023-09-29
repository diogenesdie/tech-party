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
import Palestrantes from '@/components/Palestrantes';
import Patrocinadores from '@/components/Patrocinadores';
import cursorIcon from '@/public/images/cursor.png';
import foto1 from '@/public/images/foto-1.jpeg';
import foto2 from '@/public/images/foto-2.jpeg';
import foto3 from '@/public/images/foto-3.jpeg';
import foto4 from '@/public/images/foto-4.jpeg';

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

	const mainRef = useRef<HTMLDivElement>(null);

	const palestrantesRef = useRef<HTMLDivElement>(null);
	const windowPalestrantesRef = useRef<any>(null);

	const patrocinadoresRef = useRef<HTMLDivElement>(null);
	const windowPatrocinadoresRef = useRef<any>(null);

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

	useEffect(() => {
		//on scroll window verify if palestrantesRef is visible
		//if is visible, add class palestrantes-background-gradient to body
		//else remove class palestrantes-background-gradient from body
		const handleScroll = () => {
			const palestrantesRefElement = palestrantesRef.current;
			const patrocinadoresRefElement = patrocinadoresRef.current;
			const mainRefElement = mainRef.current;

			if( palestrantesRefElement && patrocinadoresRefElement && mainRefElement ){
				const palestrantesRefElementTop = palestrantesRefElement.getBoundingClientRect().top;
				const palestrantesRefElementBottom = palestrantesRefElement.getBoundingClientRect().bottom;

				const patrocinadoresRefElementTop = patrocinadoresRefElement.getBoundingClientRect().top;
				const patrocinadoresRefElementBottom = patrocinadoresRefElement.getBoundingClientRect().bottom;

				const mainRefElementTop = mainRefElement.getBoundingClientRect().top;
				const mainRefElementBottom = mainRefElement.getBoundingClientRect().bottom;
				const windowHeight = window.innerHeight - 100;

				//when div is visible by half of the screen
				if( palestrantesRefElementTop < windowHeight && palestrantesRefElementBottom > windowHeight ){
					windowPalestrantesRef.current?.startTyping();
					document.body.classList.add("palestrantes-background-gradient");
					document.body.classList.remove("patrocinadores-background-gradient");
				} 

				if( patrocinadoresRefElementTop < windowHeight && patrocinadoresRefElementBottom > windowHeight ){
					windowPatrocinadoresRef.current?.startTyping();
					document.body.classList.remove("palestrantes-background-gradient");
					document.body.classList.add("patrocinadores-background-gradient");
				}

				if( mainRefElementTop < windowHeight && mainRefElementBottom > windowHeight ){
					document.body.classList.remove("palestrantes-background-gradient");
					document.body.classList.remove("patrocinadores-background-gradient");
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};

	}, []);

	return (
		<>
			<Header />
			<main 
				className="flex flex-col items-center justify-between w-full px-6"
				ref={mainRef}
				id="main"
			>
				<div className={`flex items-center justify-center w-full flex-col lg:flex-row lg:gap-10 lg:mt-0 mt-8 lg:h-screen`}>
					<div className="main-title-wrapper flex flex-col h-full items-center p-10 justify-center transition-all duration-500 ease-in-out">
						<div className="flex items-center">
							<h1 className="lg:text-6xl text-5xl text-white font-bold">{title}
								{phraseLetterIndex === 0 && !isLastLetter && (
									<span className="thin">|</span>
								)}
							</h1>
							<Image src={cursorIcon} alt="Cursor" objectFit='contain' width={50} height={50} className="ml-3 animate__animated animate__fadeInUp	 animate__delay-1s icon" />
						</div>
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
					<div className="osx-wrapper lg:w-auto w-full animate__animated animate__fadeInRight animate__delay-2s mb-4 lg:mb-0 gallery-container">
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
						<div className="osx-content-blur flex flex-col lg:flex-row items-center justify-between w-full gap-8 flex-wrap" style={{
							padding: "50px",
						}}>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "3.2s"
								}}>
									<Image 
										src={tiFaccatLogo}
										alt="TI Faccat" 
										layout="fill"
										objectFit="contain"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "3.6s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">um-evento-ti-faccat.png</span>
							</div>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "3.4s"
								}}>
									<Image 
										src={centroEventosImage}
										alt="Centro de Eventos" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "3.8s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">centro-de-eventos.jpg</span>
							</div>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "3.6s"
								}}>
									<Image 
										src={foto1}
										alt="Infisc Tech Party 2019" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">infisc-tech-party-2019.jpeg</span>
							</div>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp animate__animated animate__fadeInUp" style={{
									animationDelay: "3.8s"
								}}>
									<Image 
										src={foto2}
										alt="Entretenimento" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4.2s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">entretenimento.jpeg</span>
							</div>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "4s"
								}}>
									<Image 
										src={foto3}
										alt="Drones" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4.4s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">drones.jpeg</span>
							</div>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "4.2s"
								}}>
									<Image 
										src={foto4}
										alt="E muito mais" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4.6s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">e-muito-mais.jpeg</span>
							</div>
						</div>
					</div>	
				</div>
			</main>
			<section 
				id="palestrantes" 
				className="flex flex-col items-center justify-center w-full px-6 py-10 "
				ref={palestrantesRef}
			>
				<Palestrantes ref={windowPalestrantesRef}/>
			</section>
			<section 
				id="patrocinadores" 
				className="flex flex-col items-center justify-center w-full px-6 py-10 "
				ref={patrocinadoresRef}
			>
				<Patrocinadores ref={windowPatrocinadoresRef}/>
			</section>
		</>
	)
}
