import React, {useState} from 'react';
import Tooltip from "./Tooltip";

function Button(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    return <>
        <div className={"button" + (props.centered ? " center" : "") + (props.disabled ? " disabled" : "")}
             onMouseOver={e => {
                 setX(e.clientX + 20);
                 setY(e.clientY + 30);
                 setShowTooltip(true);
             }}
             onMouseOut={() => {
                 setShowTooltip(false);
             }}
             onMouseMove={e => {
                 setX(e.clientX + 20);
                 setY(e.clientY + 30);
             }}
        >
            <button onClick={props.onClick} type={props.submit ? "submit" : "button"}>{props.children}</button>
        </div>
        {showTooltip && props.tooltipTitle &&
        <Tooltip title={props.tooltipTitle} x={x} y={y}>{props.tooltipBody}</Tooltip>}
    </>
}

export default Button;