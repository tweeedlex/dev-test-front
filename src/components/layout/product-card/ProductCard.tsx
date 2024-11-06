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
      sx={{p: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 1}}
    >
      <Box
        component={"img"}
        src={product.images[0]}
        alt={"Product image"}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "contain",
        }}
      ></Box>
      <Typography>{product.title}</Typography>
      <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          alignItems: "center"
      }}>
        <Typography>{product.brand}</Typography>
        <span></span>
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
