type ProductColorDotsProps = {
  colors: string[];
};

export default function ProductColorDots({ colors }: ProductColorDotsProps) {
  return (
    <div className="flex gap-2">
      {colors.map((color, i) => (
        <span
          key={i}
          className="w-5 h-5 rounded-full border"
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
}
