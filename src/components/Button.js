import React from "react";
import PropTypes from "prop-types";

const Button = ({color, text, onClick}) => {
    const onclick = (e) => {
        console.log(onClick)
    }

    return (
        <button
            style={{backgroundColor: color}}
            className='btn'>{text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}
Button.prototype = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onclick: PropTypes.func
}
export default Button