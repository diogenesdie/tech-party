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
        // {
        //     name: "Programação",
        //     link: "#services",
        // },
        {
            name: "Patrocinadores",
            link: "#patrocinadores",
        }
    ];
    return (
        <header className="w-full background-blur fixed flex justify-center gap-6 items-center">
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
        </header>
    );
}

export default Header;