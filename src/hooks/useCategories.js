import { useQuery } from "@tanstack/react-query";
import { fetchAllCategories } from "../services/category";

export default function useCategories() {
  const { data, error, isLoading } = useQuery({
    queryFn: fetchAllCategories,
    queryKey: ["categories"],
  });
  return { data, error, isLoading };
}
