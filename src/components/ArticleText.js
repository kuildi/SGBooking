import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ArticleText extends React.Component {
	render() {
		let items = this.props.items.map((item, index) => {
			return <div key={index} className="col s6 m4 l4 xl3">
				<div className="card hoverable">
					<div className="card-image">
						<img src={'https://via.placeholder.com/300/5c6bc0/fff?text=Заглушечка'} />
						<span className="card-title">{item.header}</span>
					</div>
					<div className="card-content white-text">
						<p>{item.text}</p>
					</div>
				</div>
			</div>
		});

		return (
			<div className="left-align">
				{items}
			</div>
		);
	}
}
{/* <ArticleItem key={index}>{item.header}{item.text}</ArticleItem> */ }
// ArticleItem.defaultProps = {
// 	children: "Главная (страница по умолчанию)",
// 	href: "/"
// };

// ArticleItem.propTypes = {
// 	children: PropTypes.number.isRequired,
// 	href: PropTypes.string.isRequired
// }
