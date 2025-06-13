import { Coins, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreditsBadge({ credits = 0 }: { credits?: number }) {
  const router = useRouter();
  return (
    <div className="flex items-center bg-zinc-800 rounded-xl px-4 py-1.5 gap-2 w-fit shadow border border-zinc-700">
      <Coins className="w-5 h-5 text-white/80" />
      <span className="text-white font-medium">{credits} credits</span>
      <button
        onClick={() => {
          router.push("/dashboard/buy-credits");
        }}
        className="cursor-pointer bg-gradient-to-br border border-blue-700 from-blue-400 via-blue-500 to-blue-700 transition-colors rounded-full w-7 h-7 flex items-center justify-center"
        aria-label="Add credits"
        type="button"
      >
        <Plus className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
