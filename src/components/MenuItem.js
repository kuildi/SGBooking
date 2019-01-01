import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

export default class MenuItem extends React.Component {
	render() {
		return (
			<li className={this.props.active ? 'active skew' : 'skew'} id={this.props.id}>
				<Link to={this.props.href}>{this.props.children}</Link>
			</li>
		);
	}
}

MenuItem.defaultProps = {
	children: "Главная (страница по умолчанию)",
	href: "/"
};

MenuItem.propTypes = {
	children: PropTypes.number.isRequired,
	href: PropTypes.string.isRequired
}
