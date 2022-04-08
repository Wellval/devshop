import ourWork from "../../assets/our-work.svg";

function OurWork() {
    return (
        <div className="section blue">
            <div className="wrapper">
                <div className="container reverse">
                    <div className="content bg-shape">
                        <img src={ourWork}></img>
                    </div>
                    <div className="content">
                        <div className="pre-title">Less is more</div>
                        <h2 className="title-content">How we work</h2>
                        <p className="p-20">We operate in a completely different <a href="#">business model </a>
                        from the start. Our main desire is rather than work with the cheapest developers, we work 
                        with high-quality developers but still within your budget by building out a leaner product. 
                        By focusing on the core benefit, or core problem, we can help you eliminate down to the bare 
                        minimum what your customers really can’t live without. We take on the vision of your product 
                        and work with you to become your software partners, ideally even becoming a semi-permanent part 
                        of your team, ensuring the final success of your project.</p>
                        <p className="p-20">In software development, LESS IS MORE. The simpler, the better.</p>
                        <p className="p-20">We are NOT about building software to quickly move on to the next project.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWork