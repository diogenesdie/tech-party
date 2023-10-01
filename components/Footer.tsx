import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = (): JSX.Element => {
    const socialMedias = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/techpartyfaccat/",
            icon: FaFacebook,
        },
        {
            name: "Twitter",
            link: "https://twitter.com/techpartyfaccat",
            icon: FaTwitter,
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/playlist?list=PLkLwxRNpclbghZcA2PYzLyAbvKR3qZuam",
            icon: FaYoutube,
        },
    ];

    return (
        <footer className="footer w-full background-blur">
            <div className="flex items-center justify-between w-full flex-col md:flex-row px-4">
                <div className="flex flex-col order-2 md:order-1 mt-4 md:mt-0">
                    <span className="font-semibold md:text-left text-center ">Mais sobre nós</span>
                    <div className="flex md:flex-col flex-row">
                        <a href="https://faccat.br" target="_blank" className="text-white text-sm">Faccat</a>
                        <a href="https://ti.faccat.br/" target="_blank" className="text-white text-sm">Cursos TI Faccat</a>
                        <a href="https://www.facebook.com/TiFaccat/" target="_blank" className="text-white text-sm">TI Faccat no Facebook</a>
                    </div>
                </div>
                <div className="flex flex-col items-center order-1 md:order-2">
                    <span className="text-white text-center font-semibold   ">Siga nos</span>
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
                <div className="flex developer flex-col order-3 md:mt-0 mt-4 pb-12 md:pb-0">
                    <span className="font-thin">
                        Feito com ❤️ por
                        <a href="https://github.com/diogenesdie" target="_blank" className="text-white text-sm"> Diógenes Dietrich</a>
                    </span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;