import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type ProductsData from "@/requests/types/ProductsData";

type UsePaginationProps = {
  queryKey: string;
  queryFn: (limit: number, skip: number) => Promise<ProductsData>;
  initialData: ProductsData;
  limit?: number;
};

const usePagination = ({ queryKey, queryFn, initialData, limit = 10 }: UsePaginationProps) => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useQuery<ProductsData>({
    queryKey: [queryKey, page],
    queryFn: () => queryFn(limit, page * limit),
    initialData: page === 0 ? initialData : undefined,
    retry: 2,
  });

  const nextPage = () => {
    if (!isLoading && data?.products?.length === limit) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const displayPage = page + 1;

  return {
    data,
    isLoading,
    isError,
    nextPage,
    prevPage,
    page: displayPage,
    totalPages: Math.ceil((data?.total || limit) / limit),
  };
};

export default usePagination;