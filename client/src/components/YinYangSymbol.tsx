interface YinYangSymbolProps {
  size?: number;
  className?: string;
  color?: string;
  bgColor?: string;
}

export default function YinYangSymbol({ size = 32, className = "", color = "currentColor", bgColor = "transparent" }: YinYangSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <defs>
        <filter id="brushstroke" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" seed="5" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
      <g filter="url(#brushstroke)">
        <circle cx="50" cy="50" r="46" fill={bgColor} stroke={color} strokeWidth="4"/>
        <path
          d="M50,4 A46,46 0 0,1 50,96 A23,23 0 0,1 50,50 A23,23 0 0,0 50,4Z"
          fill={color}
        />
        <circle cx="50" cy="27" r="9" fill={bgColor || "white"} />
        <circle cx="50" cy="73" r="9" fill={color} />
        <circle cx="50" cy="27" r="4.5" fill={color} />
        <circle cx="50" cy="73" r="4.5" fill={bgColor || "white"} />
      </g>
    </svg>
  );
}
