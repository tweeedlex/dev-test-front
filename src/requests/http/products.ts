import apiRequest from "@/requests/config";
import ProductsData, {Product} from "@/requests/types/ProductsData";

export const getProducts = async (limit: number, skip: number): Promise<ProductsData> => {
  const response = await apiRequest<ProductsData>("GET", "/products", {
    params: { limit, skip }
  });
  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await apiRequest<Product>("GET", `/products/${id}`);
  return response.data;
}