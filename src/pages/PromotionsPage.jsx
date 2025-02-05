import PromotionTable from "../features/promotion/PromotionTable";
import Heading from "../ui/Heading";

export default function PromotionsPage() {
  return (
    <div className="w-full p-8">
      <Heading level={2}>Promotions</Heading>
      <div className="mt-10 flex w-full justify-between">
        <PromotionTable />
      </div>
    </div>
  );
}
