function PortfolioItem(props) {
    return (
        <div className="content _33">
            <div href="#" className="lightbox-link w-inline-block w-lightbox">
                <div className={`portfolio-wrapper ${props.color}`}>
                    <h3 className="portfolio-title">{props.title}</h3>
                    <div className="overlay-portf">
                        <div className="btn ghost">View</div>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem