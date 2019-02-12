import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <>
                <Navbar></Navbar>
                <div className="row main-content">
                    <div className="col-12">
                        {this.props.children}
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }
}