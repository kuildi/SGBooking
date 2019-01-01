import React from 'react';
import Article from '../components/Article';

export default class Main extends React.Component {
    
    render() {

        return (
            <div className="row center">
            <h1>Main page of booking</h1>
            <Article />
            </div>
        );
    }
}