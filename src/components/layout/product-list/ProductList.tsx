"use client";
import ProductCard from "@/components/layout/product-card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/requests/http/products";
import ProductsData from "@/requests/types/ProductsData";

export default function ProductList({ initialData }: { initialData: ProductsData }) {
  const { data = initialData, isLoading, isError } = useQuery({
    queryKey: ["products", { limit: 10, skip: 0 }],
    queryFn: () => getProducts(10, 0),
    initialData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
      {data.products.map((item, index) => (
        <ProductCard key={item.id} index={index} />
      ))}
    </div>
  );
}
