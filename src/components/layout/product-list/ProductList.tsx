"use client";
import ProductCard from "@/components/layout/product-card";
import {Box, Button, Typography} from "@mui/material";
import type ProductsData from "@/requests/types/ProductsData";
import { getProducts } from "@/requests/http/products";
import usePagination from "@/hooks/usePagination";
import Preloader from "@/components/ui/preloader";

export default function ProductList({ initialData }: { initialData: ProductsData }) {
  const {
    data,
    isLoading,
    isError,
    nextPage,
    prevPage,
    page,
    totalPages
  } = usePagination({
    queryKey: "products",
    queryFn: getProducts,
    initialData,
    limit: 10,
  });

  if (isError) return <p>Error loading products</p>;
  if (!data) return <Preloader />;

  return (
    <>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 2fr)",
          md: "repeat(3, 1fr)"
        },
        gap: 2,
        minHeight: '500px'
      }}>
        {data.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        gap: 2
      }}>
        <Button
          onClick={prevPage}
          disabled={page === 1 || isLoading}
          variant="contained"
        >
          Previous
        </Button>
        <Typography>{page} / {totalPages}</Typography>
        <Button
          onClick={nextPage}
          disabled={isLoading}
          variant="contained"
        >
          Next
        </Button>
      </Box>
    </>
  );
}