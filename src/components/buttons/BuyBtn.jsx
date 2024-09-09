import { Wallet } from "@mercadopago/sdk-react";
import propTypes from "prop-types";
import { PURCHASES_ENABLED } from "../../utils/consts";
import Loader from "../Loader";
import PurchasesDisabled from "../PurchasesDisabled";

function BuyBtn({ preferenceId }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4 h-[105px]">
      {PURCHASES_ENABLED ? (
        preferenceId != null ? (
          <Wallet initialization={{ preferenceId }} />
        ) : (
          <Loader />
        )
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
