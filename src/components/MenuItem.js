import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default class MenuItem extends React.Component {
	render() {
		return (
			<li className='skew' id={this.props.id}>
				<NavLink to={this.props.href} activeClassName="active">{this.props.children}</NavLink>
			</li>
		);
	}
}

// MenuItem.defaultProps = {
// 	children: "Главная (страница по умолчанию)",
// 	href: "/"
// };

// MenuItem.propTypes = {
// 	children: PropTypes.number.isRequired,
// 	href: PropTypes.string.isRequired
// }
