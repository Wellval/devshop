import Button from "../Button"

function Guarantee() {
    return (
        <div className="section dark bg">
            <div className="container column">
                <div className="content pb-0">
                    <div className="pre-title">Work Risk Free</div>
                    <h2 className="title-content w margin">The first 30 days of your software project are guaranteed.</h2>
                    <div className="wrapper top c">
                        <div className="content _50 padding45">
                            <p className="p-20 white l"><strong>Once you’ve started working with our team, we will ensure the quality by 
                            protecting the first 30 days of the project.</strong></p>
                            <p className="p-20 white l noop">After all, that, don’t you think we can probably handle your software project?</p>
                        </div>
                        <div className="content _50 padding45">
                            <p className="p-20 white l"><strong>Still, have doubts?</strong></p>
                            <p className="p-20 white l noop">Well, that’s why we can offer you a 30-day guarantee. That’s right,
                             during the first 30 days if you have a problem with your development team or with anything at all, 
                             we will handle that problem immediately to satisfy your concerns. If we can’t, we will transfer 
                             your project to another qualified development team, and refund the full amount that you may have 
                             or will have to pay.</p>
                            <p className="p-20 white l noop">We wouldn’t offer this guarantee if we thought you’d have problems, but 
                            just in case, it’s there for you to feel 100% comfortable in moving forward with us.</p>
                        </div>
                    </div>
                </div>
                <Button classname="n-button" content="book your call" />
            </div>
        </div>
    )
}

export default Guarantee