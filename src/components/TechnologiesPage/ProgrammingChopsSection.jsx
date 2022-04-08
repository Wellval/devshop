import React from "react";
import listIcon from '../../assets/list-icon.svg';
import LayoutWithLines from "../LayoutWithLines";

function ProgrammingChops() {
    const leftList = [
        'iOS Development',
        'Android Development',
        'Web Development',
        'React Native',
        'Backend Development',
        'Artificial Intelligence',
        'Machine Learning'
    ];

    const rightList = [
        'ASP/C#/.NET',
        'PHP Laravel, PHP Core, Other PHP frameworks',
        'Java & node.js',
        'React.js',
        'Angular.js',
        'Vue.js',
        'Native React'
    ]

    return (
        <LayoutWithLines lines='both' colorClass='blue'>
            <div className="section blue">
                <div className="container column">
                    <div className="content center">
                        <div className="pre-title">DEVELOPMENT & PROGRAMMING CHOPS</div>
                        <h2 className="title-content no-right-margin">We wouldn't call ourselves OneStop Devshop if we didn't have the best and brightest devshops in town.</h2>
                    </div>

                    <div className="wrapper top">
                        <div className="content _50 bg-shape">
                            <p className="p-20">Of course, we wouldn’t call ourselves Onestop Devshop if we didn’t have the best and brightest
                                developers in town.</p>
                            <p className="p-20">We have scoured the best geographical locations around the world for top developers in the most important
                                technologies. While we focus on .NET technologies, we also have experts in WordPress PHP programming, node.js, angular.js,
                                react.js, native react for mobile application development, and open source technologies as well.</p>
                            <p className="p-20">Do you have a specific budget in mind? Chances are, <strong>we can handle that budget too</strong>, without sacrificing quality.</p>
                        </div>
                        <div className="content _50">
                            <h3>Things we can work on with you include:</h3>
                            <div className="wrapper top">
                                <div className="content _50 padding">
                                    <div className="pre-title margin">Stuff We Do:</div>
                                    {leftList.map(item => <li className="list-item"><p className="p-20"><img className="icon-list" src={listIcon}></img>{item}</p></li>)}
                                </div>
                                <div className="content _50 padding">
                                    <div className="pre-title margin">Languages & Blockchain:</div>
                                    {rightList.map(item => <li className="list-item"><p className="p-20"><img className="icon-list" src={listIcon}></img>{item}</p></li>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWithLines>
    )
}

export default ProgrammingChops