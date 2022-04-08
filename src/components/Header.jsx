import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { pages } from "../constants/MenuPages";
import { Anchor } from "antd"


function Header() {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const ref = useRef(null);
    const dropdownMenu = useRef(null);
    const {Link} = Anchor;

    const handleClickOutside = (event) => {
        if (dropdownMenu.current && !dropdownMenu.current.contains(event.target)) {
          setOpen(false);
        }
      }

    useEffect(() => {
        if(open === false) {
            setSubmenuOpen(false);
        }
    }, [open]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownMenu]);

    return (
        <header id="transparent-header">
            <div className="container">
                <div className="header-wrap">
                    <a href="#">
                        <img className="logo-img top" src="https://www.onestopdevshop.io/wp-content/uploads/2020/04/cropped-Logo-1.jpg" alt="logo"></img>
                    </a>
                    <nav ref={dropdownMenu}>
                        <a href="#" className={`menu-links ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                            <span>{open}</span>
                        </a>
                        <ul className="main-menu">
                            {pages.map(x =>
                                <li key={x.name}>
                                    {x.name === 'contact us' ? <Anchor><Link href="#contactus" title={x.name}/></Anchor> :
                                        <NavLink className={({ isActive }) => isActive ? "active-link" : 'link'} to={'/' + x.name.split(' ').join('').toLowerCase()}>
                                            {x.name} {x.submenus ? <i className="fa fa-caret-down"></i> : ''}
                                        </NavLink>
                                    }
                                    {x.submenus ? <span ref={ref} className={submenuOpen ? 'close-submenu' : 'open-submenu'} onClick={() => setSubmenuOpen(!submenuOpen)}></span> : ''}
                                    {x.submenus ? <ul className="submenu">
                                        {x.submenus.map(submenu => <li key={submenu}><NavLink className={({ isActive }) => isActive ? "active-link" : 'link'} to={'/' + x.name + '/' + submenu.split(' ').join('').toLowerCase()}>{submenu}</NavLink></li>)}
                                    </ul> : ''}
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;