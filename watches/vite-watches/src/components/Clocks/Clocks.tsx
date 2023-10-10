import { IClockProps } from "../../models/IClockProps";
import Clock from "../Clock/Clock";
import { v4 } from 'uuid';
import './Clocks.css';


export default function Clocks({ clocks, onDelete }: { clocks: IClockProps[], onDelete: CallableFunction }) {
    return (
        <div className="clocks">
            {clocks.map(clock => (
            <Clock key={v4()} item={clock} onDelete={onDelete}/>
            ))}
        </div>
    )
}
