import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import tiaCeliaLogo from '@/public/images/tia-celia-logo.jpeg';
import lighthouseLogo from '@/public/images/lighthouse-logo.jpeg';
import mercadoArnholdLogo from '@/public/images/mercado-arnhold-logo.png';
import Image from "next/image";

const Footer = (): JSX.Element => {
    const socialMedias = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/techpartyfaccat/",
            icon: FaFacebook
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/cursostifaccat",
            icon: FaInstagram
        },
        {
            name: "Twitter",
            link: "https://twitter.com/techpartyfaccat",
            icon: FaTwitter
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/playlist?list=PLkLwxRNpclbghZcA2PYzLyAbvKR3qZuam",
            icon: FaYoutube
        },
    ];

    const apoio = [
        {
            name: "Tia Célia",
            theme: "Padaria e confeitaria",
            image: tiaCeliaLogo,
            link: "https://www.instagram.com/confeitariatiacelia/",
        },
        {
            name: "Lighthouse",
            theme: "Consultoria e desenvolvimento de software",
            image: lighthouseLogo,
            link: "https://www.linkedin.com/company/lighthouse-ti/",
        },
        {
            name: "Mercado Arnhold",
            theme: "Supermercado",
            image: mercadoArnholdLogo
        },
    ]

    return (
        <footer className="footer w-full background-blur">
            <div className="flex items-center justify-between w-full flex-col md:flex-row px-4">
                <div className="flex flex-col order-2 md:order-1 mt-4 md:mt-0">
                    <span className="font-semibold md:text-left text-center ">Mais sobre nós</span>
                    <div className="flex md:flex-col flex-row text-sm">
                        <span><a href="https://faccat.br" target="_blank" className="text-white text-xs md:text-sm">Faccat</a><span className="md:hidden px-1">|</span></span>
                        <span><a href="https://ti.faccat.br/" target="_blank" className="text-white text-xs md:text-sm">Cursos TI Faccat</a><span className="md:hidden px-1">|</span></span>
                        <span><a href="https://www.facebook.com/TiFaccat/" target="_blank" className="text-white text-xs md:text-sm">TI Faccat no Facebook</a></span>
                    </div>
                </div>
                <div className="flex flex-col items-center order-1 md:order-2">
                    <span className="text-white text-center font-semibold   ">Siga-nos</span>
                    <div className="flex items-center gap-4 mt-3">
                        {socialMedias.map((socialMedia, index) => (
                            <a
                                key={index}
                                href={socialMedia.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <socialMedia.icon
                                    size={30}
                                    className="text-white cursor-pointer hover:text-gray-400"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center order-1 md:order-3 mt-4">
                    <span className="text-white text-center font-semibold">Agradecimentos especiais</span>
                    <div className="flex items-center gap-4 mt-3">
                        {apoio.map((apoiador, index) => (
                            <a
                                key={index}
                                href={apoiador.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="image-wrapper" style={{
                                    position: "relative",
                                    width: "40px",
                                    height: "40px",
                                }}>
                                    <Image
                                        src={apoiador.image} 
                                        alt="apoiador" 
                                        layout="fill"
                                        objectFit="cover"
                                        style={{
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex developer flex-col order-4 md:mt-0 mt-4 pb-16 md:pb-0 md:text-sm text-xs">
                    <span className="font-thin">
                        Feito com ❤️ por
                        <a href="https://github.com/diogenesdie" target="_blank" className="text-white"> Diógenes Dietrich</a>
                    </span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;