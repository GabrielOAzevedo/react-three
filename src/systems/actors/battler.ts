import Actor from "./actor";

export default class Battler {
  defaultInitiative: number;
  currentInitiative: number;

  actor: Actor;

  constructor(initiative: number, actor: Actor) {
    this.defaultInitiative = initiative;
    this.currentInitiative = initiative;
    this.actor = actor;
  }

  public resetInitiative() {
    this.currentInitiative = this.defaultInitiative;
  }

  public increaseInitiative() {
    this.currentInitiative += this.actor.speed;
  }
}
