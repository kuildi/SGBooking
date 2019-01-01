import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.brand = 'React blog!';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="row">
                    <div className="col-12">
                        {this.props.children}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}