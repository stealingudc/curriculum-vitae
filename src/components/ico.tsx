import LucideIcon from "/lucide.png"

function Lucide({ size }: { size?: number }) {
  return <img width={size} height={size} src={LucideIcon} />;
}

export { Lucide };
