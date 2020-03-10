import React from 'react';

export default class Button extends React.Component {
    
    render() {
        return (
            <button className={"btn " + this.props.class}>
                {this.props.textBtn}
            </button>
        );
    }
}