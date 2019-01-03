import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ArticleText extends React.Component {
	render() {
		let items = this.props.items.map((item, index) => {
			return <div key={index} className="col m3">
				<div className="card hoverable">
					{/* <div className="card-image">
						<img src={'../img/1.jpg'} />
					</div> */}
					<div className="card-content">
						<span className="card-title">{item.header}</span>
						<p>{item.text}</p>
					</div>
					<div className="card-action">
						<Button></Button>
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
