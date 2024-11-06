"use client";
import ProductCard from "@/components/layout/product-card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/requests/http/products";
import ProductsData from "@/requests/types/ProductsData";
import {Box} from "@mui/material";

export default function ProductList({ initialData }: { initialData: ProductsData }) {
  const { data = initialData, isLoading, isError } = useQuery({
    queryKey: ["products", { limit: 10, skip: 0 }],
    queryFn: () => getProducts(10, 0),
    initialData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: {xs: "repeat(2, 2fr)", md: "repeat(3, 1fr)"}, gap: 2 }}>
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}
