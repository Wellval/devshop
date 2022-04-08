import React from "react";
import PortfolioItem from "../components/PortfolioPage/PortfolioItem";
import { portfolioItems } from "../constants/PortfolioItems";

function Portfolio() {
    return (
        <div className="section dark">
            <div className="container column">
                <div className="content">
                    <h2 className="w pb-0">PORTFOLIO</h2>
                </div>
                <div className="wrapper wrap">
                    {portfolioItems.map(item => <PortfolioItem color={item.color} title={item.title}><img alt="" className="img-portfolio" src={item.image}></img></PortfolioItem>)}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;