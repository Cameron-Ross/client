import { CSSProperties } from "react";
import { ButtonProps } from "../types";


export default function Button(props: ButtonProps) {
    // Extract values from the props
    const { name, disabled = false, onClick } = props;
    // The button styling
    let style: CSSProperties = {
      color: 'white',
      borderRadius: 25,
      backgroundColor: 'purple',
      padding: '10px 15px 10px 15px',
      opacity: disabled ? .65 : 1,
      cursor: disabled ? undefined : 'pointer',
      border: 'none'
    };
    // Return the component
    return (
      <button style = {style} disabled = {disabled} onClick={onClick}>
        {name}
      </button>
    );
}
  