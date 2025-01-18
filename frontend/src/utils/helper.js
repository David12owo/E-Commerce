export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
}

export const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://e-commerce-2-grwh.onrender.com/api/v1"
    : "http://localhost:3000/api/v1";
