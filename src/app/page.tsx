import ProductList from "@/components/layout/product-list";
import { getProducts } from "@/requests/http/products";

export default async function Catalog() {
  const initialData = await getProducts(10, 0);

  return (
    <ProductList initialData={initialData} />
  );
}
