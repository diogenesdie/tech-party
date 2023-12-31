'use client';
import Churras from '@/components/Churras';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Local from '@/components/Local';
import OutrosAnos from '@/components/OutrosAnos';
import Palestrantes from '@/components/Palestrantes';
import Patrocinadores from '@/components/Patrocinadores';
import Timer from '@/components/Timer';
import centroEventosImage from '@/public/images/centro-eventos.jpeg';
import cursorIcon from '@/public/images/cursor.png';
import cursor3dIcon from '@/public/images/cursor-3d.png';
import foto1 from '@/public/images/foto-1.jpeg';
import foto2 from '@/public/images/foto-2.jpeg';
import foto3 from '@/public/images/foto-3.jpeg';
import foto4 from '@/public/images/foto-4.jpeg';
import brindes from '@/public/images/brindes.jpeg';
import rango1 from '@/public/images/rango-1.jpeg';
import rango2 from '@/public/images/rango-2.jpeg';
import tiFaccatLogo from '@/public/images/ti-faccat-logo.png';
import "animate.css/animate.min.css";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
	//typing animation and
	const text = "TECH PARTY";
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

	const localRef = useRef<HTMLDivElement>(null);
	const windowLocalRef = useRef<any>(null);

	const outrosAnosRef = useRef<HTMLDivElement>(null);
	const windowOutrosAnosRef = useRef<any>(null);

	const churrasRef = useRef<HTMLDivElement>(null);
	const windowChurrasRef = useRef<any>(null);

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
			const localRefElement = localRef.current;
			const outrosAnosRefElement = outrosAnosRef.current;
			const churrasRefElement = churrasRef.current;
			const mainRefElement = mainRef.current;

			if( palestrantesRefElement && 
				patrocinadoresRefElement &&
				mainRefElement && 
				localRefElement &&
				outrosAnosRefElement && 
				churrasRefElement
			) { 
				const palestrantesRefElementTop = palestrantesRefElement.getBoundingClientRect().top;
				const palestrantesRefElementBottom = palestrantesRefElement.getBoundingClientRect().bottom;

				const patrocinadoresRefElementTop = patrocinadoresRefElement.getBoundingClientRect().top;
				const patrocinadoresRefElementBottom = patrocinadoresRefElement.getBoundingClientRect().bottom;

				const localRefElementTop = localRefElement.getBoundingClientRect().top;
				const localRefElementBottom = localRefElement.getBoundingClientRect().bottom;

				const outrosAnosRefElementTop = outrosAnosRefElement.getBoundingClientRect().top;
				const outrosAnosRefElementBottom = outrosAnosRefElement.getBoundingClientRect().bottom;

				const churrasRefElementTop = churrasRefElement.getBoundingClientRect().top;
				const churrasRefElementBottom = churrasRefElement.getBoundingClientRect().bottom;

				const mainRefElementTop = mainRefElement.getBoundingClientRect().top;
				const mainRefElementBottom = mainRefElement.getBoundingClientRect().bottom;
				const windowHeight = window.innerHeight - 100;

				//when div is visible by half of the screen
				if( palestrantesRefElementTop < windowHeight && palestrantesRefElementBottom > windowHeight ){
					windowPalestrantesRef.current?.startTyping();
					document.body.classList.add("palestrantes-background-gradient");
					document.body.classList.remove("patrocinadores-background-gradient");
					document.body.classList.remove("local-background-gradient");
					document.body.classList.remove("outros-anos-background-gradient");
					document.body.classList.remove("churras-background-gradient");
				} 

				if( patrocinadoresRefElementTop < windowHeight && patrocinadoresRefElementBottom > windowHeight ){
					windowPatrocinadoresRef.current?.startTyping();
					document.body.classList.add("patrocinadores-background-gradient");
					document.body.classList.remove("palestrantes-background-gradient");
					document.body.classList.remove("churras-background-gradient");
					document.body.classList.remove("local-background-gradient");
					document.body.classList.remove("outros-anos-background-gradient");
				}

				if( localRefElementTop < windowHeight && localRefElementBottom > windowHeight ){
					windowLocalRef.current?.startTyping();
					document.body.classList.add("local-background-gradient");
					document.body.classList.remove("outros-anos-background-gradient");
					document.body.classList.remove("churras-background-gradient");
					document.body.classList.remove("palestrantes-background-gradient");
					document.body.classList.remove("patrocinadores-background-gradient");
				}

				if( outrosAnosRefElementTop < windowHeight && outrosAnosRefElementBottom > windowHeight ){
					windowOutrosAnosRef.current?.startTyping();
					document.body.classList.add("outros-anos-background-gradient");
					document.body.classList.remove("churras-background-gradient");
					document.body.classList.remove("local-background-gradient");
					document.body.classList.remove("palestrantes-background-gradient");
					document.body.classList.remove("patrocinadores-background-gradient");
				}

				if( churrasRefElementTop < windowHeight && churrasRefElementBottom > windowHeight ){
					windowChurrasRef.current?.startTyping();
					document.body.classList.add("churras-background-gradient");
					document.body.classList.remove("palestrantes-background-gradient");
					document.body.classList.remove("patrocinadores-background-gradient");
					document.body.classList.remove("local-background-gradient");
					document.body.classList.remove("outros-anos-background-gradient");
				}

				if( mainRefElementTop < windowHeight && mainRefElementBottom > windowHeight ){
					document.body.classList.remove("palestrantes-background-gradient");
					document.body.classList.remove("churras-background-gradient");
					document.body.classList.remove("patrocinadores-background-gradient");
					document.body.classList.remove("local-background-gradient");
					document.body.classList.remove("outros-anos-background-gradient");
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
						<div className="flex items-center relative">
							<h1 className={`glitch text-4xl 2xl:text-5xl text-white font-bold`}>{title}</h1>
							{phraseLetterIndex === 0 && !isLastLetter && (
								<span className="thin text-4xl">|</span>
							)}
							<Image src={cursor3dIcon} alt="Cursor" objectFit='contain' width={50} height={50} className="ml-3 animate__animated animate__fadeInUp	 animate__delay-1s icon" />
						</div>
						<h2 className="font-thin text-white font-bold text-center" style={{
							maxWidth: "300px"
						}}>{phrase}
							{isLastLetter && (
								<span className={`${isLastLetterPhrase || phraseLetterIndex === 0 ? 'animate-blink' : ''}`}>|</span>
							)}
						</h2>
						<div className="wrapper-countdown mt-4 animate__animated animate__fadeInUp animate__delay-1s">
							<Timer/>
						</div>
						<a href="https://saga2.faccat.br/index.php?op=1374&certificados=t" target="_blank" className={`flex justify-center participacao-gratuita mt-4 zoom animation`} onMouseEnter={(e) => {
							//remove class animation
							e.currentTarget.classList.remove("animation");
						}}>
							BAIXAR CERTIFICADO
						</a>
						<div className="main-description-wrapper flex flex-col items-center justify-center mt-4">
							<h3 className="section-description text-md text-white text-left animate__animated animate__fadeInUp animate__delay-2s">
							<b>Traga sua família e amigos</b>, venha explorar a vanguarda da <b>inovação na TechParty 2023</b>, um evento <b>gratuito e acessível a todos</b>. Nosso compromisso é impulsionar a <b>Tecnologia da Informação (TI)</b> e fomentar a troca de conhecimento. Desfrute de <b>três noites repletas de talks</b> conduzidas por profissionais qualificados e experientes em suas respectivas áreas. Confira a <b>Programação</b> para conhecer os temas empolgantes e os palestrantes renomados que farão parte desse encontro enriquecedor.
							</h3>
						</div>
					</div>
					<div className="osx-wrapper lg:w-auto w-full animate__animated animate__fadeInRight animate__delay-3s mb-4 lg:mb-0 gallery-container">
						<div className="outer-blur flex	items-center">
							<div className="flex items-center justify-start w-full relative">
								<div className="flex items-center justify-start absolute">
									<div className="dot red"></div>
									<div className="dot amber"></div>
									<div className="dot green"></div>
								</div>
								<div className="inner flex items-center justify-center grow">
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
								<span style={{animationDelay: "3.6s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">Um-Evento-TI-Faccat.png</span>
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
								<span style={{animationDelay: "3.8s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">No-Centro-De-Eventos.jpg</span>
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
								<span style={{animationDelay: "4s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">No-Auditório-3.jpeg</span>
							</div>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp animate__animated animate__fadeInUp" style={{
									animationDelay: "3.8s"
								}}>
									<Image 
										src={foto2}
										alt="Luta de robôs" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4.2s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">Luta-De-Robôs.jpeg</span>
							</div>
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "4s"
								}}>
									<Image 
										src={foto3}
										alt="Networking"
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4.4s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">Networking.jpeg</span>
							</div>
							
							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "4.2s"
								}}>
									<Image 
										src={brindes}
										alt="Brindes" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4.6s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">Brindes.jpeg</span>
							</div>

							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "4.4s"
								}}>
									<Image 
										src={rango1}
										alt="Brindes" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "4.8s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">Rango-Break.jpeg</span>
							</div>

							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "4.6s"
								}}>
									<Image 
										src={rango2}
										alt="Brindes" 
										layout="fill"
										objectFit="cover"
										style={{
											borderRadius: "10px",
										}}
									/>
								</div>
								<span style={{animationDelay: "5s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">Mais-Rango-Break.jpeg</span>
							</div>

							<div className="flex flex-col file-wrapper items-center">
								<div className="image-wrapper animate__animated animate__fadeInUp" style={{
									animationDelay: "4.8s"
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
								<span style={{animationDelay: "5.2s"}} className="text-white text-2xl font-bold animate__animated animate__fadeInUp">E-Muito-Mais.jpeg</span>
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
			<section 
				id="local" 
				className="flex flex-col items-center justify-center w-full px-6 py-10 "
				ref={localRef}
			>
				<Local ref={windowLocalRef}/>
			</section>
			<section 
				id="churras"
				className="flex flex-col items-center justify-center w-full px-6 py-10 "
				ref={churrasRef}
			>
				<Churras ref={windowChurrasRef}/>
			</section>
			<section 
				id="outrosAnos" 
				className="flex flex-col items-center justify-center w-full px-6 py-10 "
				ref={outrosAnosRef}
			>
				<OutrosAnos ref={windowOutrosAnosRef}/>
			</section>
			<Footer />
		</>
	)
}
