import OutputView from "./OutputView";
import { OBJECT } from "./constants/objects";
import calBadge from "./utils/calBadge";
import calTotalAmount from "./utils/calTotalAmount";
import getBenefitLists from "./utils/getBenefitLists";
import getMenuCount from "./utils/getMenuCount";
import getPresentation from "./utils/getPresentation";
import inputValid from "./valid/inputValid";

class App {
  #saveDate
  #saveOrder
  #saveTotalAmount

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
    if (this.#saveTotalAmount < OBJECT.eventAppliedAmount) {
      this.printNotAppliedEvent();
    } else {
      this.printAppliedEvent();
    }
  }

  printNotAppliedEvent() {
    const menusCount = getMenuCount(this.#saveOrder);
    const [presentation, amount] = getPresentation(this.#saveTotalAmount);
    const benefits = getBenefitLists(this.#saveDate, this.#saveOrder);
    const badge = calBadge(benefits.sumBenefit);

    OutputView.printMenu(menusCount);
    OutputView.printBeforeDiscount(this.#saveTotalAmount);
    OutputView.printPresentation(presentation);
    OutputView.printBenefit(benefits, amount, false);
    OutputView.printAllBenefit(benefits, false);
    OutputView.printAfterDiscount(this.#saveTotalAmount, 0, 0);
    OutputView.printEventBadge(badge, false);
  }

  printAppliedEvent() {
    const menusCount = getMenuCount(this.#saveOrder);
    const [presentation, amount] = getPresentation(this.#saveTotalAmount);
    const benefits = getBenefitLists(this.#saveDate, this.#saveOrder);
    const badge = calBadge(benefits.sumBenefit, amount);

    OutputView.printMenu(menusCount);
    OutputView.printBeforeDiscount(this.#saveTotalAmount);
    OutputView.printPresentation(presentation);
    OutputView.printBenefit(benefits, amount, true);
    OutputView.printAllBenefit(benefits, amount, true);
    OutputView.printAfterDiscount(this.#saveTotalAmount, benefits.sumBenefit);
    OutputView.printEventBadge(badge, true);
  }
}

export default App;
