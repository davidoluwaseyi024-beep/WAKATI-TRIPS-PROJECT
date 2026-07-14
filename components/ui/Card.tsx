import { cn } from "@/lib/cn";

type Tone = "paper" | "sand" | "ink";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  sand: "bg-sand text-ink",
  ink: "bg-ink text-paper",
};

export function Card({
  tone = "paper",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-[2px] p-8 shadow-card", tones[tone], className)}>
      {children}
    </div>
  );
}
