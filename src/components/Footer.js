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
            <footer className="page-footer deep-orange">
                <div className="container">
                    <div className="row mg-bot-0">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12" style={{paddingBottom:'10px'}}>
                            <h5 className="white-text">Полезные ссылки</h5>
                            <Menu items={menuItems}></Menu>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}