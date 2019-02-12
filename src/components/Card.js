import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="col s6 m4 l4 xl3">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={'https://via.placeholder.com/300/5c6bc0/fff?text=Заглушечка'} />
                        <span className="card-title">{this.props.header}</span>
                    </div>
                    <div className="card-content white-text left-align">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}