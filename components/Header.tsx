import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
    const items = [
        {
            name: "TechParty",
            link: "#main",
        },
        {
            name: "Palestrantes",
            link: "#palestrantes",
        },
        {
            name: "Patrocinadores",
            link: "#patrocinadores",
        },
        {
            name: "Local",
            link: "#local",
        },
        {
            name: "Churras da TI",
            link: "#churras",
        },
        {
            name: "Outros anos",    
            link: "#outrosAnos",
        },
        {
            name: "Contato",
            link: "footer",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <header className="w-full fixed flex items-center justify-center z-50">
            <div className="desktop justify-center items-center gap-6 hidden md:flex w-full background-blur">
                {items.map((item, index) =>  {
                    return (
                        <span
                            key={index} 
                            className="text-white cursor-pointer item-header"
                            onClick={() => {
                                const element = document.querySelector(item.link);
                                if( element ){
                                    element.scrollIntoView({behavior: "smooth"});
                                }
                            }}
                        >
                            {item.name}
                        </span>
                    )
                })}
                <button 
                    className="bg-white flex items-center gap-2 zoom" 
                        style={{
                        borderRadius: '200px',
                        boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
                        color: '#000',
                        padding: '5px 10px',
                    }}
                    onClick={() => {
                        window.open('https://saga2.faccat.br/index.php?op=1374&certificados=t');
                    }}
                >
                    BAIXAR CERTIFICADO <FaSignInAlt />
                </button>
            </div>
            <div className="mobile background-white text-black fixed flex z-10 md:hidden" style={{
                bottom: '20px',
                right: '5px',
                margin: '0 20px',
                boxShadow: '1px 1px 5px 1px #ffffff80',
                borderRadius: '10px',
                color: '#08185f',
            }}>
                <div
                    className="cursor-pointer item-header text-center flex items-center gap-2"
                    onClick={() => {
                        window.open('https://saga2.faccat.br/index.php?op=1374&certificados=t');
                    }}
                >
                    BAIXAR CERTIFICADO <FaSignInAlt />
                </div>
            </div>
        </header>
    );
}

export default Header;