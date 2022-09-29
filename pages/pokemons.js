import Image from "next/image"
import { useSession, getSession, signIn } from 'next-auth/react'
import { useEffect, useState } from "react"

function Pokemons() {
    const { data: session, status } = useSession()
    console.log({ session, status })
    const pokemons = ['charmander', 'bulbasaur', 'squirtle']
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setLoading(false)
            }
        } 
        securePage()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>List of Pokemons</h1>
            {
                pokemons.map(pokemon => {
                    return (
                        <div key={pokemon}>
                            <Image src={`/${pokemon}.png`} alt={pokemon} width='200' height='200' />
                        </div>
                    )
                })
            }
        </>
    )

}

export default Pokemons