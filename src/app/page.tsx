import {Box} from "@mui/material";
import ProductCard from "@/components/layout/product-card";

export default function Catalog() {
  const data = [0, 0, 0, 0, 0, 0, 0]

  return (
    <Box sx={{py: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2}}>
      {
        data.map((item, index) => (
          <ProductCard key={index} index={index} />
        ))
      }
    </Box>
  );
}
