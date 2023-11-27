import { UNITS } from "../constants/messages";

const convertThousandUnits = (amount) => {
    return amount.toLocaleString() + UNITS.UnitOfAmount;
}

export default convertThousandUnits;