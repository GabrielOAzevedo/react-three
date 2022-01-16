import { useState } from "react";
import Battler from "../actors/battler";

export function useTurnController(bList: Array<Battler>) {
  const list = Array.from(bList);
  const sortedList = list.sort((a, b) => b.currentInitiative - a.currentInitiative);
  const [currentTurn, setCurrentTurn] = useState<Battler>(sortedList[0]);
  const [battlerList, setBattlerList] = useState<Battler[]>(bList);

  const calculateTurnOrder = () => {
    const list = Array.from(battlerList);
    const sortedList = list.sort((a, b) => b.currentInitiative - a.currentInitiative);
    setBattlerList(sortedList);
    getTurn(sortedList);
  };

  const getTurn = (sortedList: Array<Battler>) => {
    setCurrentTurn(sortedList[0]);
  };

  const endTurn = () => {
    const list = Array.from(battlerList);
    list.forEach((battler) => {
      battler.increaseInitiative();
    });
    currentTurn.resetInitiative();
    calculateTurnOrder();
  };

  return { currentTurn, battlerList, getTurn, endTurn };
}
