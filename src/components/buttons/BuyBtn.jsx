import { Wallet } from "@mercadopago/sdk-react";
import propTypes from "prop-types";
import { PURCHASES_ENABLED } from "../../utils/consts";
import PurchasesDisabled from "../PurchasesDisabled";

function BuyBtn({ preferenceId }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4 h-[237.6px]">
      {PURCHASES_ENABLED ? (
        <Wallet initialization={{ preferenceId }} />
      ) : (
        <PurchasesDisabled />
      )}
    </div>
  );
}

export default BuyBtn;

BuyBtn.propTypes = {
  preferenceId: propTypes.oneOfType([
    propTypes.string,
    propTypes.oneOf([null]),
  ]),
};
