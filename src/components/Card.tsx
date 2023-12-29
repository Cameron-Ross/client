import { NavLink as Link } from "react-router-dom";
import '../App.css';
import { CardProps } from "../types";

export default function Card(props: CardProps) {

  let date = props.date?.toLocaleString('en-US', { month: 'short', year: 'numeric' });

  return (
    <div className={props.selected ? 'card selected': 'card'} onClick={props.onClick}>
      <h3>{props.name}</h3>
      <p className={"info"}>{!date ? undefined : `${props.status} • ${date}`}</p>
    </div>
  );
}
