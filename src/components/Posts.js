import React from 'react';
import Card from './Card';

export default class Posts extends React.Component {

    render() {

        let items = this.props.items.map((item, index) => {
            return <Card key={index} header={item.header} text={item.text}></Card>
        });

        return (
            <div className="row">
                <div className="col m12">
                    {items}
                </div>
            </div>
        );
    }
}