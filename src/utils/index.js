import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
    // currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
