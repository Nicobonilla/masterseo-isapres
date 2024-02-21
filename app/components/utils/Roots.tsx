export default function Roots() {
  const { ROOT_URL_HOST } = process.env;
  const x = (typeof ROOT_URL_HOST === "undefined") ? 'http://localhost:3000/': ROOT_URL_HOST;
  console.log(x);
  return  x
}
