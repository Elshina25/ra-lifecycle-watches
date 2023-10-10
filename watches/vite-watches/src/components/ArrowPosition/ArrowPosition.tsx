interface IArrowPosProps {
  time: number;
  arrowType: string;
}

export default function ArrowPosition({ time, arrowType }: IArrowPosProps) {
  let degree;
  const lineClass = `clock-hand-line clock-hand-line-${arrowType}`;
  switch (arrowType) {
    case "seconds":
      degree = time * 6;
      break;
    case "minuts":
      degree = time * 6;
      break;
    default:
      degree = time * 30;
  }
  return (
    <div
      className="clock-hand"
      style={{
        transform: `rotate(${degree}deg)`,
      }}
    >
      <div className={lineClass}>
        {arrowType !== "seconds" ? <div className="clock-hand-arrow" /> : null}
      </div>
    </div>
  );
}
