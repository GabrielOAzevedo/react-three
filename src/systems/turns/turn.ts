import Battler from "../actors/battler";
import { useTurnController } from "./hooks";

export default function TurnController(bList: Array<Battler>) {
  const { currentTurn, battlerList, getTurn, endTurn } = useTurnController(bList);
  return { currentTurn, battlerList, getTurn, endTurn };
}
