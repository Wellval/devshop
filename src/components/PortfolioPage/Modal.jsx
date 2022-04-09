import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import listIcon from '../../assets/list-icon.svg';
import { useRef } from "react";
import Button from "../Button";

function Modal(props) {
    const fade = useRef(null)
    const closeModal = () => {
        document.body.classList.remove('modal-open');
    }

    const handleClick = (event) => {
        if (fade.current && fade.current === event.target) {
            document.body.classList.remove('modal-open');
        }
    }

    return (
        <div className="modal fade show" ref={fade} onClick={handleClick}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                        <button className="close" onClick={closeModal}>x</button>
                    </div>
                    <div className="modal-body">
                        <Carousel preventMovementUntilSwipeScrollTolerance={true} showStatus={false} showIndicators={false} showThumbs={false} showArrows={true} >
                            {props.modalSlides ? props.modalSlides.map(item =>
                                <div className="divFlex">
                                    <div className="col-md-7">
                                        <img src={item.image}></img>

                                    </div>
                                    <div className="content col-md-5 technical_used">
                                        {item.text ? item.text.map(textItem => <div key={textItem.title + Math.random()}>
                                            <h5>{textItem.title}</h5>
                                            {textItem.p ? <p>{textItem.p}</p> : ''}
                                            <ul>
                                                {textItem.listItems.map(item => <li key={item + Math.random()}><p className="p-20"><img className="icon-list" src={listIcon}></img>{item}</p></li>)}
                                            </ul>

                                        </div>) : ''}
                                        <Button classname="n-button visit-site-btn" content="visit site"></Button>
                                    </div>
                                </div>) : ''}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal