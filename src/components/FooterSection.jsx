import { NavLink, useLocation } from 'react-router-dom';
import footerWidget from '../assets/footer-widget.png';
import { pages } from '../constants/MenuPages';
import footerVector from '../assets/footer-vector.png';
import { Anchor } from "antd";

function FooterSection() {
    const {Link} = Anchor;

    return (
        <footer><a id='contactus'></a>
            <div className="container">
                <div className="wrapper top">
                    <div className="content _25">
                        <img className='widget' src={footerWidget}></img>
                    </div>
                    <div className="content _25">
                        <h3>Address</h3>
                        <b>Headquarters</b>
                        <p>18A South Road Paget, PG04 Bermuda</p>
                        <br/>
                        <b>European Headquarters</b>
                        <p>110 Chemin des Esserts Verbier, 1936 Switzerland</p>
                    </div>
                    <div className="content _25">
                        <h3>Services</h3>
                        <ul id="primary-menu">
                        {pages.map(x =>
                                <li key={x.name}>
                                {x.name === 'contact us' ? <NavLink to="#contactus" title={x.name}>{x.name}</NavLink> :
                                    <NavLink className="link" to={'/' + x.name.split(' ').join('').toLowerCase()}>
                                        {x.name} 
                                    </NavLink>
                                    }
                                    {x.submenus ? <ul className="submenu">
                                        {x.submenus.map(submenu => <li key={submenu}><NavLink className={({ isActive }) => isActive ? "active-link" : 'link'} to={'/' + x.name + '/' + submenu.split(' ').join('').toLowerCase()}>{submenu}</NavLink></li>)}
                                    </ul> : ''}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="content _25">
                        Or Contact us directly at <a className='underlined' href="mailto:hello@1stop.io">hello@1stop.io</a>
                        <img src={footerVector}></img>
                    </div>
                    
                </div>
                <hr/>
                <div className='content'>
                <div className="footer-div">
                    <p>
                        OneStopDevShop © 2022 
                    </p>
                    <div>
                        <ul className='social-links'>
                            <li><a href='https://www.facebook.com/'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href='https://www.twitter.com/'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href='https://www.linkedin.com/'><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
                
            
        </footer>
    )
}

export default FooterSection