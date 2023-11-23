import OutputView from "./OutputView";
import { OBJECT } from "./constants/objects";
import calTotalAmount from "./utils/calTotalAmount";
import getBenefitEvents from "./utils/getBenefitEvents";
import inputValid from "./valid/inputValid";

class App {
  #saveDate
  #saveOrder
  #saveTotalAmount
  #saveBenefits
  #possibleEvent

  constructor() {
  }

  async run() {
    OutputView.printHello();
    await this.christmasEvent();
  }

  async christmasEvent() {
    await this.readDate();
  }

  async readDate() {
    try {
      this.#saveDate = await inputValid.validDate();
      await this.readOrder();
    } catch (error) {
      OutputView.printError(error);
    }
  }

  async readOrder() {
    try {
      this.#saveOrder = await inputValid.validOrder();
      this.printOrderView();
    } catch (error) {
      OutputView.printError(error);
    }
  }

  printOrderView() {
    OutputView.printPreview(this.#saveDate);
    this.getNeededValues();
  }

  getNeededValues() {
    this.#saveTotalAmount = calTotalAmount(this.#saveOrder);
    this.#saveBenefits = getBenefitEvents(this.#saveDate, this.#saveOrder, this.#saveTotalAmount);
    this.printAllContents();
  }

  printAllContents() {
    this.#possibleEvent = this.#saveTotalAmount < OBJECT.eventAppliedAmount ? false : true;
    this.printMenu();
  }

  printMenu() {
    OutputView.printMenu(this.#saveOrder);
    this.printBeforeDiscount();
  }

  printBeforeDiscount() {
    OutputView.printBeforeDiscount(this.#saveTotalAmount);
    this.printPresentation();
  }

  printPresentation() {
    OutputView.printPresentation(this.#saveBenefits.presentationEvent[0]);
    this.printBenefit();
  }

  printBenefit() {
    OutputView.printBenefit(this.#possibleEvent);
    this.printAllBenefitAmount();
  }

  printAllBenefitAmount() {
    OutputView.printAllBenefitAmount(this.#saveBenefits, this.#possibleEvent);
    this.printAfterDiscount();
  }

  printAfterDiscount() {
    OutputView.printAfterDiscount(this.#saveTotalAmount, this.#saveBenefits);
    this.printEventBadge();
  }

  printEventBadge() {
    OutputView.printEventBadge(this.#saveBenefits.badge, this.#possibleEvent);
  }
}

export default App;
