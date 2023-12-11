import AppController from "./controller/AppController";

class App {
  #eventController

  constructor() {
    this.#eventController = new AppController();
  }

  async run() {
    await this.#eventController.christmasStart();
  }
}

export default App;
