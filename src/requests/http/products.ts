import apiRequest from "@/requests/config";
import ProductsData from "@/requests/types/ProductsData";

export const getProducts = async (limit: number, skip: number): Promise<ProductsData> => {
  const response = await apiRequest<ProductsData>("GET", "/products", {
    params: { limit, skip }
  });
  return response.data;
};