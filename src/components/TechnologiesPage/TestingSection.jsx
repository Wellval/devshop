import React from "react";
import listIcon from '../../assets/list-icon.svg';
import LayoutWithLines from "../LayoutWithLines";

function Testing() {
    const leftList = [
        'Product Exploration',
        'Functionality Testing',
        'Usability',
        'App Store Provisioning',
        'Performance Testing',
        'Security Testing',
        'App Store & Google Play Optimisation',
    ];

    const rightList = [
        'Claims Testing',
        'User Testing',
        'Localisation Testing',
        'Security Testing',
        'App Store & Google Play',
        'Optimisation',
        'Smart Contract Testing',
        'Backup',
        'Optimisations',
        'Database Administration'
    ];

    return (
        <LayoutWithLines colorClass='blue'>
            <div className="section blue">
                <div className="container column">
                    <div className="content center">
                        <div className="pre-title">Testing & Quality Assurancee</div>
                        <h2 className="title-content no-right-margin">We wouldn't call ourselves OneStop Devshop if we didn't have the best and brightest devshops in town.</h2>
                    </div>

                    <div className="wrapper top">
                        <div className="content _50 bg-shape">
                            <p className="p-20">Once your application, service, the mobile app is built, we can make sure our
                                dedicated in-house quality assurance department pours through every action, click, pixel, form submission,
                                and parsing of code so that everything is squeaky clean.</p>
                            <p className="p-20">Our commitment is simple.</p>
                            <p className="p-20">Stamp out all bugs until your software application is ready to take to your customers
                                with the same type of confidence you’d want to walk down that aisle on your wedding day. Proud, sure,
                                steady like you’re making the most important decision of your life. Well, maybe not as important as that,
                                but pretty darn close.</p>
                        </div>
                        <div className="content _50">
                            <h3>We can handle:</h3>
                            <div className="wrapper top">
                                <div className="content _50 padding">
                                    {leftList.map(item => <li key={item} className="list-item"><p className="p-20"><img className="icon-list" src={listIcon}></img>{item}</p></li>)}
                                </div>
                                <div className="content _50 padding">
                                    {rightList.map(item => <li key={item} className="list-item"><p className="p-20"><img className="icon-list" src={listIcon}></img>{item}</p></li>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWithLines>
    )
}

export default Testing