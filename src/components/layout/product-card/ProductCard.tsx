import {FC} from "react";
import {Box, Paper, Typography} from "@mui/material";

type ProductCardProps = {
  index: number;
}

const ProductCard: FC<ProductCardProps> = ({index}) => {
  return (
    <Paper
      key={index}
      component={"a"}
      href={"/product/" + index}
      sx={{p: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 1}}
    >
      <Typography variant={"h6"}>Name</Typography>
      <Box sx={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, alignItems: "center"}}>
        <Typography>Category</Typography>
        <Typography>Brand</Typography>
        <Typography>-Left: 5</Typography>
        <Typography>1000$</Typography>
        <Typography>-10%</Typography>
        <Typography>-5/5</Typography>
      </Box>
      <Typography>-Desc</Typography>
    </Paper>
  );
}

export default ProductCard;
