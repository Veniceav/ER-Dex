import {useContext} from "react"
import { DataContext } from "../../data/DataContext"

const useMove = (moveName) => {
  const { data } = useContext(DataContext)

  const allMoves = data.moves
  const selectedMoveIndex = allMoves.findIndex(move => move.name === moveName) || 0
  const selectedMove = allMoves[selectedMoveIndex]

  return [selectedMove, selectedMoveIndex]
}

export {
  useMove
}