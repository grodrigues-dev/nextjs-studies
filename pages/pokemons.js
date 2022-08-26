function Pokemons() {

    const pokemons = ['charmander', 'bulbasaur', 'squirtle']

    return (
        <>
            <h1>List of Pokemons</h1>
            {
                pokemons.map(pokemon => {
                    return (
                        <div key={pokemon}>
                            <img  src={`/${pokemon}.png`} alt={pokemon} width='200' height='200'/>
                        </div>
                    )
                })
            }
        </>
    )
    
}

export default Pokemons