import { useQuery } from "@tanstack/react-query";
import { fetchAllPromotions } from "../services/promotion";

export default function usePromotions() {
  const { data, error, isLoading } = useQuery({
    queryFn: fetchAllPromotions,
    queryKey: ["promotions"],
  });
  return { data, error, isLoading };
}
