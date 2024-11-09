import { getProduct } from "@/requests/http/products";
import { Box, Typography } from "@mui/material";

interface ProductPageProps {
  params: {
    id: string;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(Number(params.id));

  return (
    <>
      <Box sx={{ py: 2, display: "flex", gap: 3, width: "100%", justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={product.images[0]} alt="Product image" style={{ maxWidth: "100%", maxHeight: 400 }} />
        </Box>
        <Box>
          <Typography component={"h1"} sx={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
          }}>{product.title}</Typography>
          <Typography>{product.category}</Typography>
          <Typography>{product.brand}</Typography>
          <Typography>
            {product.rating}/5
            <span role="img" aria-label="star">⭐</span>
          </Typography>
          <Typography>{product.price}$ </Typography>
          <Typography sx={{ color: "red", fontWeight: "bold" }}>-{product.discountPercentage}%</Typography>
          <Typography>-{product.availabilityStatus}</Typography>
        </Box>
      </Box>
      <Typography>{product.description}</Typography>
    </>
  );
}
