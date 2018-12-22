import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ArticleItem extends React.Component {
	render() {
		return (
            <div>
                {/* <h3>{this.props.header}</h3> */}
                <p>{this.props.children}</p>
                <hr/>
                <Button></Button>
            </div>
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
