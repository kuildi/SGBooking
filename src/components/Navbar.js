import React from 'react'
import Menu from './Menu'

export default class Navbar extends React.Component {
    render() {
        const menuItems = [
            { id: "main", href: "/", title: "Главная" },
            { id: "football", href: "/football", title: "Футбол" },
            { id: "basketball", href: "/basketball", title: "Баскетбол" },
            { id: "tenis", href: "/tennis", title: "Теннис" },
            { id: "vacancy", href: "/cricket", title: "Крикет" },
            { id: "contacts", href: "/contacts", title: "Контакты" }
        ];
        return (
            <nav className="amber darken-1 header_sticky">
                <div className="nav-wrapper">
                    <Menu items={menuItems}></Menu>
                    <ul className="login_block right">
                        <li><a href="#">Войти</a></li>
                        {/* <li className='dropdown-menu'><a href="#">Зарегистрироваться</a></li>
                        <li className='dropdown-menu'><a href="#">лОолл</a></li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}