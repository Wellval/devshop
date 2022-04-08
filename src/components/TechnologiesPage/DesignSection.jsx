import React from "react";
import listIcon from '../../assets/list-icon.svg';
import LayoutWithLines from "../LayoutWithLines";

function Design() {
    const list = [
        'Mobile Applications',
        'Prototyping',
        'Web Development & Web App Design',
        'UI/UX mockups',
        'User Experience Reviews',
        'Software as a Service (SaaS)',
        'Branding & Logo Creation',
        'Internal Applications'
    ]
    return (
        <LayoutWithLines colorClass='blue'>
        <div className="content center">
                <div className="pre-title">Design & User Interface</div>
                <h2 className="title-content no-right-margin">Has anyone ever asked you, so how do you want us to design this?</h2>
            </div>
            <div className="wrapper top">
                <div className="content _50 bg-shape">
                    <p className="p-20">Well, they have me, and <strong>I hate this question</strong></p>
                    <p className="p-20">I know what I like when I see it, and I can’t tell you how to design it. 
                    <strong> You’re the design experts, just do it and show me</strong></p>
                    <p className="p-20">We can help you take what you know you like but can’t quite define into words, and dazzle you with our intuitive, mind-reading-like design work.</p>
                    <p className="p-20">Just like our programming prowess, we can handle almost any type of design or user experience work.</p>
                    <p><a href="#" className="btn n-button">Book your call</a></p>
                </div>
                <div className="content _50">
                    <h3>Things we can work on with you include</h3>
                    {list.map(item => <li className="list-item"><p className="p-20"><img className="icon-list" src={listIcon}></img>{item}</p></li>)}
                </div>     
            </div>
        </LayoutWithLines>
    )
}

export default Design