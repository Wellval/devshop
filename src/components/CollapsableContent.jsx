import { useState } from "react";

function CollapsableContent(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="example">
            <div className={isOpen ? "mrc-content mrc-content-open" : "mrc-content"}>
                <div className="mrc-content-wrap">
                    {props.children}
                </div>
            </div>
            <div className="mrc-controls">
                <div className="mrc-btn-wrap">
                    <button className="btn btn-small" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Read Less" : "More"}</button>
                </div>
            </div>
        </div>
    )
}

export default CollapsableContent