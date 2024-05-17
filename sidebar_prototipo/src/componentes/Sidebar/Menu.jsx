import React, { useEffect, useRef } from "react";

import '../Sidebar/Menu.css';

const Menu = () => {
    const toggleBtnRef = useRef(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const toggleBtn = toggleBtnRef.current;
        const sidebar = sidebarRef.current;

        const handleToggle = () => {
            sidebar.classList.toggle('active');
        };

        toggleBtn.addEventListener('click', handleToggle);

        return () => {
            toggleBtn.removeEventListener('click', handleToggle);
        };
    }, []);

    return (
        <div className="body">
            <nav className="sidebar" ref={sidebarRef}>
                <div className="logo-menu">
                    <h2 className="logo">Inova8M</h2>
                    <i className="bx bx-menu toggle-btn" ref={toggleBtnRef}></i>
                </div>
                <ul className="list">
                    <li className="list-item active">
                        <a href="#">
                            <i className='bx bx-home-alt'></i>
                            <span className="link-name" style={{ '--i': 1 }}>Inicio</span>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <i className='bx bx-task'></i>
                            <span className="link-name" style={{ '--i': 4 }}>Admision</span>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <i className='bx bx-user'></i>
                            <span className="link-name" style={{ '--i': 2 }}>Usuarios</span>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <i className='bx bx-paste'></i>
                            <span className="link-name" style={{ '--i': 3 }}>Roles</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
