import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className={this.props.class}>
                <div className="card hoverable">
                    <div className="card-content white-text left-align">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}