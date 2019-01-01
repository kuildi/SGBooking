import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
	isActive(href)
	{
		return window.location.pathname === href;
	}

	render() {

		let items = this.props.items.map((item, index) => {
			return <MenuItem key={index} href={item.href}  active={this.isActive(item.href)} id={item.id} icon={item.icon}>{item.title}</MenuItem>
		});

		return (
			<div>
				<ul>
					{items}
				</ul>
			</div>
		);
	}
}