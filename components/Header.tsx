import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
                    className="bg-white" 
                        style={{
                        borderRadius: '200px',
                        boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
                        color: '#000',
                        padding: '5px 10px',
                    }}
                    onClick={() => {
                        window.open('https://faccat.br');
                    }}
                >
                    Inscrições
                </button>
            </div>
            <div className="mobile w-full background-white text-black fixed bottom-0 flex items-center justify-between z-10 md:hidden">
                <span 
                    className="arrow-up"
                    onClick={() => {
                        let newCurrentIndex = currentIndex - 1;

                        if( newCurrentIndex < 0 ){
                            newCurrentIndex = items.length - 1;
                        }

                        setCurrentIndex(newCurrentIndex);

                        const element = document.querySelector(items[newCurrentIndex].link);
                        if( element ){
                            element.scrollIntoView({behavior: "smooth"});
                        }
                    }}
                >
                    <FaChevronUp />
                </span>
                <span
                    className="cursor-pointer item-header"
                >
                    Inscrições
                </span>
                <span 
                    className="arrow-down" 
                    onClick={() => {
                        let newCurrentIndex = currentIndex + 1;

                        if( newCurrentIndex > items.length - 1 ){
                            newCurrentIndex = 0;
                        }

                        setCurrentIndex(newCurrentIndex);

                        const element = document.querySelector(items[newCurrentIndex].link);
                        if( element ){
                            element.scrollIntoView({behavior: "smooth"});
                        }
                    }}
                >
                    <FaChevronDown />
                </span>
            </div>
        </header>
    );
}

export default Header;