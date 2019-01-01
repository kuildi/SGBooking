import React from 'react';
import Article from '../components/Article';

export default class Football extends React.Component {

    render() {

        return (
            <div className="row center">
                <h1>Football articles</h1>
                <Article />
            </div>
        );
    }
}