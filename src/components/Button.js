import React from "react";
import PropTypes from "prop-types";

const Button = ({color, text}) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}
Button.prototype = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
export default Button