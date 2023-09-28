const Header = () => {
    const items = [
        {
            name: "TechParty",
            link: "#home",
        },
        {
            name: "Palestrantes",
            link: "#about",
        },
        {
            name: "Programação",
            link: "#services",
        },
        {
            name: "Patrocinadores",
            link: "#portfolio",
        }
    ];
    return (
        <header className="w-full background-blur fixed flex justify-center gap-6 items-center">
            {items.map((item, index) =>  {
                return (
                    <span key={index} className="text-white">{item.name}</span>
                )
            })}
            <button className="btn btn-primary bg-white rounded text-black px-2">Inscrições</button>
        </header>
    );
}

export default Header;