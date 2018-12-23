import React from 'react'
import Menu from './Menu'

export default class Navbar extends React.Component {
    render() {
        const menuItems = [
            { id:"main", href: "/", title: "Главная" },
            { id:"football", href: "/football", title: "Футбол" },
            { id:"basketball", href: "/basketball", title: "Баскетбол" },
            { id:"tenis", href: "/tenis", title: "Теннис" },
            { id:"vacancy", href: "/jobs", title: "Вакансии" },
            { id:"about", href: "/about", title: "Oнас" },
            { id:"contacts", href: "/contacts", title: "Контакты" }
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