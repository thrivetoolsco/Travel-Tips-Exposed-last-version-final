interface YinYangNewProps {
  size?: number | string;
  color?: string;
  bgColor?: string;
  className?: string;
}

export default function YinYangNew({
  size = 32,
  color = "currentColor",
  bgColor = "transparent",
  className = "",
}: YinYangNewProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <circle cx="50" cy="50" r="49" fill={bgColor} />

      <g transform="rotate(45 50 50)">
        <path
          d="M50,1 A49,49 0 0,1 50,99 A24.5,24.5 0 0,1 50,50 A24.5,24.5 0 0,0 50,1Z"
          fill={color}
        />
        <circle cx="50" cy="25.5" r="11" fill={bgColor} />
        <circle cx="50" cy="74.5" r="11" fill={color} />
        <circle cx="50" cy="25.5" r="4.5" fill={color} />
        <circle cx="50" cy="74.5" r="4.5" fill={bgColor} />
      </g>

      <circle cx="50" cy="50" r="49" fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}
