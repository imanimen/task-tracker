import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1 style={headingStyle}>{title}</h1>
			<button className='btn'>Add</button>
		</header>
	)
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

// css in js
const headingStyle = {
	color: 'red', backgroundColor: 'black'
}

export default Header