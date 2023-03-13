import Commerce from "@chec/commerce.js";
export const commerce = new Commerce(import.meta.env.VITE_SOME_KEY)

export const commerce1 = new Commerce(import.meta.env.VITE_SOME_KEY1,true, {
  axiosConfig: {
    headers: {
      "X-Checkout-Use-Defaults": false,
    },
  },
  allowSecretKey: true,
});