"use client";
import {FC} from "react";
import {Box, Paper, Typography} from "@mui/material";
import {Product} from "@/requests/types/ProductsData";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
  return (
    <Paper
      key={product.id}
      component={"a"}
      href={"/product/" + product.id}
      sx={{p: {xs: 1, sm: 2 }, display: "flex", flexDirection: "column", alignItems: "center", gap: 1}}
    >
      <Box
        component={"img"}
        src={product.images[0]}
        alt={"Product image"}
        sx={{
          width: "100%",
          height: {xs: 100, sm: 200},
          objectFit: "contain",
        }}
      ></Box>
      <Typography>{product.title}</Typography>
      <Box sx={{
          display: "grid",
          gridTemplateColumns: {xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)"},
          gap: {xs: 1, sm: 2 },
          alignItems: "center",
          width: "100%"
      }}>
        <Typography>{product.brand}</Typography>
        <Typography sx={{ display: {xs: "none", sm: "block"} }}></Typography>
        <Typography>{product.category}</Typography>
        <Typography>{product.price}$</Typography>
        <Typography sx={{color: "red"}}>-{product.discountPercentage}%</Typography>
        <Typography>
          {product.rating}/5
          <span role="img" aria-label="star">⭐</span>
        </Typography>
      </Box>
    </Paper>
  );
}

export default ProductCard;
