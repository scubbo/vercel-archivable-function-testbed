// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_: Request) {
  const response = await fetch('https://api.vercel.app/products');
  const products = await response.json();
  // No-op change to retrigger
  return Response.json(products);
}
