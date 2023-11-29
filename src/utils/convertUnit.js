import { UNITS } from "../constants/objects";

const convertThousandUnits = (amount) => {
    return amount.toLocaleString() + UNITS.UnitOfAmount;
}

export default convertThousandUnits;