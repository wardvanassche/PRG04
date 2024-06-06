import { Actor, DisplayMode, Engine, Input, Random, Vector, } from "excalibur"
import { Resources, ResourceLoader } from "./resources.js";
import { StartScreen } from "./scenes/StartScreen.js";
import { MainGame } from "./scenes/MainGame.js";

export class Game extends Engine {

  constructor() {
    super({ width: 960, height: 540, displayMode: DisplayMode.FitScreen });
    this.start(ResourceLoader).then(() => this.startGame());
  }
  
  startGame() {
    this.add("MainGame", new MainGame(this.engine))
    this.addScene("StartScreen", new StartScreen(this.engine))
    this.goToScene("StartScreen");
  }
}

new Game();