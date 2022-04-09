import dashedLine1 from '../../assets/dashed-line-1.svg';
import riskfree from '../../assets/riskfree.svg';
import nate from '../../assets/nate.jpg'
import CollapsableContent from "../CollapsableContent";

function RiskFreeSection() {
    return (
        <div className='section column'>
            <div className='line-wrapper'>
                <img className='dashed-line' src={dashedLine1} />
            </div>
            <div className='container reverse'>
                <div className='content bg-shape'>
                    <img src={riskfree}></img>
                </div>
                <div className='wrapper top'>
                    <div className="pre-title">Work risk free</div>
                    <h2 className="title-content">The First 30 Days Of Your Project Are Guaranteed</h2>
                    <h4>Once you’ve started working with our team, we will ensure the quality by protecting the first 30 days of the project.</h4>
                    <p className="p-20">Our <a href="#">teams have at least 10 years in seniority of developing</a> full time. We concentrate on
                        Microsoft technologies, azure cloud deployment, These are the best development teams in the world, teams that have worked
                        with very successful software companies, and fortune 500 enterprise solutions. We carefully vet our development teams,
                        programmers, and support staff to make sure that you only work with the best. We can handle a variety of specifications,
                        time zones, and preferences. All based on your needs. By using our services, that we use ourselves, and that has been
                        checked through years and years of personal experience, you’ll ensure that you can cut out the dead beat churn-n-burn
                        freelancers that don’t really care about your project.</p>
                    <div className='testimonial-wrapper'>
                        <img className='portrait' src={nate}></img>
                        <div className='testimonial-text-wrapper'>
                            <div className='testimonial-name'>Nate Pummel</div>
                            <div className='testimonial-text'>
                                <CollapsableContent>
                                    <p className="p-20">" I've been working with Geordie and his team now for about 12 months and I'm so
                                        glad I switched over to his services. The team I was working with before literally cost twice as much,
                                        and took twice as long. I thought I needed to work with a local team, but that proved to be nearly disastrous
                                        for my software application development processes. Since moving to OneStop Devshop, I have been able to move
                                        my SaaS to new levels of success, all with helpful and timely programmatic updates.  It's not just about the
                                        technical side either, as a seasoned entrepreneur and business owner himself, Geordie can help with copy
                                        writing, design, management and a host of other services. Whatever you do, listen to him, he knows what he
                                        is talking about. I know I do, and I'm sure glad to be with him and his team. "</p>
                                </CollapsableContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskFreeSection