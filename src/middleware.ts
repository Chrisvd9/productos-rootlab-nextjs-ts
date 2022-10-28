import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Iproduct } from "./components/Products/ProductsList";

export async function middleware(request: NextRequest) {
  const urlItems = request.nextUrl.pathname
    .split("/")
    .filter((item) => item !== "");

  if (urlItems[0] === "products" && urlItems.length === 2) {
    const productId = urlItems[1];

    const products: Iproduct[] = (await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    )
      .then((res) => res.json())
      .then((data: Iproduct[]) => data.slice(0, 20))
      .catch((error) => console.error(error))) as Iproduct[];

    if (!products.some((product) => product.id === Number(productId))) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:id*"],
};
