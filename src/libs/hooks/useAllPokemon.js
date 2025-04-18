import { useContext } from "react"
import { DataContext } from "../../data/DataContext"

// const dummyFilter = {
//   name: 'Squir',
//   ability: 'Absorbant',
//   move: 'Tackle'
// }

const useAllPokemon = (filter) => {
  const { data } = useContext(DataContext)

  const allPokemon = data.species
  const filteredPokemon = filter ? allPokemon.filter(p => {
    const { name, eggMoves, levelUpMoves, TMHMMoves, tutor } = p
    const { abis, inns } = p.stats

    return Object.keys(filter).some(f => {
      const filterVal = filter[f]
      if (!filterVal) return false

      switch (f) {
        case "move":
          if (
            [
              ...eggMoves,
              ...TMHMMoves,
              ...tutor,
              ...levelUpMoves.map(lum => lum.id)
            ].includes(data.moves.findIndex(a => a.name.includes(filterVal)))
          ) return true
          return false

        case "name":
          if (name.includes(filterVal)) return true
          return false

        case "ability":
          if (abis.includes(data.abilities.findIndex(a => a.name.includes(filterVal)))) return true
          if (inns.includes(data.abilities.findIndex(a => a.name.includes(filterVal)))) return true
          return false
        
        default:
          return true
      }
    })
  }).slice(1) : allPokemon.slice(1)

  return [filteredPokemon]
}

export {
  useAllPokemon
}