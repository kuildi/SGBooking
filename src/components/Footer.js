import React from 'react';
import Menu from './Menu';

export default class Footer extends React.Component {

    render() {

        const menuItems = [
            { href: "/", title: "Главная" },
            { href: "/about", title: "О Вас" },
            { href: "/service", title: "Services" },
            { href: "/about", title: "О Аас" },
            { href: "/service", title: "Serv" },
        ];

        return (
            <footer className="page-footer deep-orange" style={{position:'relative', zIndex:'-10'}}>
                <div className="container">
                    <div className="row mg-bot-0">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}