import OutputView from "./OutputView";
import { OBJECT } from "./constants/objects";
import calTotalAmount from "./utils/calTotalAmount";
import getBenefitEvents from "./utils/getBenefitEvents";
import getMenuCount from "./utils/getMenuCount";
import inputValid from "./valid/inputValid";

class App {
  #saveDate
  #saveOrder
  #saveTotalAmount
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
    this.getTotalAmount();
  }

  getTotalAmount() {
    this.#saveTotalAmount = calTotalAmount(this.#saveOrder);
    this.checkPossibleEvent();
  }

  checkPossibleEvent() {
    this.#possibleEvent = this.#saveTotalAmount < OBJECT.eventAppliedAmount ? false : true;
    this.printMenu();
  }

  printMenu() {
    const menusCount = getMenuCount(this.#saveOrder);

    OutputView.printMenu(menusCount);
    this.printBeforeDiscount();
  }

  printBeforeDiscount() {
    OutputView.printBeforeDiscount(this.#saveTotalAmount);
    this.printPresentation();
  }

  printPresentation() {
    const { presentationEvent } = getBenefitEvents(undefined, undefined, this.#saveTotalAmount);

    OutputView.printPresentation(presentationEvent[0]);
    this.printBenefit();
  }

  printBenefit() {
    const benefitLists = getBenefitEvents(this.#saveDate, this.#saveOrder, this.#saveTotalAmount);

    OutputView.printBenefit(benefitLists, this.#possibleEvent);
    this.printAllBenefitAmount();
  }

  printAllBenefitAmount() {
    const { allBenefitAmount, presentationEvent } = getBenefitEvents(this.#saveDate, this.#saveOrder, this.#saveTotalAmount);
    const totalBenefitAmount = allBenefitAmount + presentationEvent[1];

    OutputView.printAllBenefitAmount(totalBenefitAmount, this.#possibleEvent);
    this.printAfterDiscount();
  }

  printAfterDiscount() {
    const benefitLists = getBenefitEvents(this.#saveDate, this.#saveOrder, undefined);

    OutputView.printAfterDiscount(this.#saveTotalAmount, benefitLists);
    this.printEventBadge();
  }

  printEventBadge() {
    const { badge } = getBenefitEvents(this.#saveDate, this.#saveOrder, this.#saveTotalAmount);

    OutputView.printEventBadge(badge, this.#possibleEvent);
  }
}

export default App;
