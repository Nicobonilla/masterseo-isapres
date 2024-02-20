export default function Roots() {
  const { ROOT_URL_HOST, ROOT_URL_LOCALHOST } = process.env;
  // Runtime check to ensure ROOT_URL_HOST is not undefined
  if (typeof ROOT_URL_HOST === "undefined") {
    throw new Error("ROOT_URL_HOST is not defined");
  }
  // Runtime check to ensure ROOT_URL_HOST is not undefined
  if (typeof ROOT_URL_LOCALHOST === "undefined") {
    throw new Error("ROOT_URL_LOCALHOST is not defined");
  }
  const root = ROOT_URL_HOST ? ROOT_URL_HOST : ROOT_URL_LOCALHOST;
  return root;
}
