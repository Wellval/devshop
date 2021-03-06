import { useState } from "react";
import Modal from './Modal';

function PortfolioItem(props) {

    const openModal = () => {
        document.body.classList.add('modal-open')
    }

    const open = (e) => {
        console.log(e.currentTarget)
        e.currentTarget.classList.add('active');
    }

    return (
        <div className="content _33">
            <div href="#" className="lightbox-link w-inline-block w-lightbox" onClick={(e) => {open(e)}}>
                <div className={`portfolio-wrapper ${props.color}`}>
                    <h3 className="portfolio-title">{props.title}</h3>
                    <div className="overlay-portf">
                        <div className="btn ghost" onClick={openModal}>View</div>
                    </div>
                    {props.children}
                </div>
            </div>
            {props.modalSlides ? <Modal title={props.title} modalSlides={props.modalSlides}></Modal> : ''}
        </div>
    )
}

export default PortfolioItem