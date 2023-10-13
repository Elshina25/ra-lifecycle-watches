import { IClockProps } from "../../models/IClockProps";
import { useState, useEffect } from "react";
import moment from "moment";
import ArrowPosition from "../ArrowPosition/ArrowPosition";
import "./Clock.css";

interface IClockPropsExtend {
  item: IClockProps;
  onDelete: CallableFunction;
}

export default function Clock({ item, onDelete }: IClockPropsExtend) {
  const [time, setTime] = useState(new Date());
  const { id, name, timezone } = item;
  let timeout: number | undefined;

  const ticTac = () => {
    setTime(new Date());
  };

  useEffect(ticTac, []);

  useEffect(() => {
    timeout = setTimeout(ticTac, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });

  const deleteClock = (evt: React.MouseEvent) => {
    evt.preventDefault();
    onDelete(id);
  };

  const timeOfZone = moment(time).utcOffset(timezone);
  const hours = timeOfZone.hours();
  const minutes = timeOfZone.minutes();
  const seconds = timeOfZone.seconds();

  return (
    <div className="clock">
      <h4 className="clock-name">{name}</h4>
      <div className="clock-face">
        <ArrowPosition time={seconds} arrowType="seconds" />
        <ArrowPosition time={minutes} arrowType="minutes" />
        <ArrowPosition time={hours} arrowType="hours" />
      </div>
      <button className="clock-btn" type="button" onClick={deleteClock}>
        X
      </button>
    </div>
  );
}
