import { useEffect, useState } from "react";
import { checkDolarStatus, getDolarPrice } from "../utils/helpers";

function useDolar() {
  const [dolar, setDolar] = useState(0);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const price = await getDolarPrice();
      const status = await checkDolarStatus();
      setStatus(status);
      setDolar(price);
      setIsLoading(false);
    })();
  }, []);

  return { dolar, status, isLoading };
}

export default useDolar;
