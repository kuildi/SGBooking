import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu'

export default class Navbar extends React.Component {
    render() {
        const menuItems = [
            { href: "/", title: "Главная" },
            { href: "/about", title: "О нас" },
            { href: "/service", title: "Услуги" },
            { href: "/contacts", title: "Контакты" },
            { href: "/jobs", title: "Вакансии" },
            { href: "/hello", title: "Hello" },
            { href: "/world", title: "World" },
        ];
        return (
            <nav className="teal header_sticky">
                <div className="nav-wrapper">
                    <Menu items={menuItems}></Menu>
                </div>
            </nav>
        );
    }
}