import CollapsableContent from "../CollapsableContent";
import testimonialLuke from '../../assets/luke.jpg';
import podcastProfile from "../../assets/podcast-profile.jpg";

function PersonSection() {
    return (
        <div className="section blue">
            <div className="wrapper">
                <div className="container">
                    <div className="content">
                        <h2>I'm Geordie Wardman, entrepreneur of 15 years, author, investor, multiple SaaS builder and owner.</h2>
                        <CollapsableContent>
                            <p className="p-20">I’ve spent close to two million dollars on <a href="#">software, software services </a> 
                                and software applications from so-called experts. I’ve had some successes, but I’ve also had
                                some spectacular failures. When you fail in the software world, the failure can be so catastrophic
                                that it can send your business to the software graveyard.</p>
                            <p className="p-20">I had to learn this the hard way when I decided to go with a firm from eastern
                                Europe, sight unseen, based on references that they provided to me. Then it happened again with
                                another developer from Asia, some other firms from India, and even from the good ol’ USA. I’ve been
                                burned by the best of them.</p>
                            <p className="p-20">Everyone <a>knows that the best developers</a> don’t need to list on freelance sites because they’re
                             too good to do so. It’d be insulting to list on a freelance website.</p>
                            <p className="p-20">Everyone also knows that the best <a>software builders would NEVER hire</a> a freelancer at the 
                            risk of losing everything to this person if they mess it up.</p>
                            <p className="p-20">If you’re a startup working on your next big idea, losing TIME is worse than losing money.</p>
                        </CollapsableContent>
                        <div className='testimonial-wrapper'>
                        <img className='portrait' src={testimonialLuke}></img>
                        <div className='testimonial-text-wrapper'>
                        <div className='testimonial-name'>Luke Bragg</div>
                            <div className='testimonial-text'>
                                <CollapsableContent>
                                    <p className="testimonial-text p-20">"Our team has been planning for MVP for the last year. While searching job boards, linkedin, angel's 
                                    list for possible teams to work with we came across Geordie and OneStop DevShop.  After briefing Geordie, 
                                    he understood the core of our vision, talked us through building our first clickable prototype, so that we can 
                                    have something cost effective, but also concrete to show our investors. This helped us during our initial raise
                                    while keeping our expenses down. Once we raised our initial funds, Geordie introduced us to his offshore remote team.
                                    Having had some bad experiences in using offshore teams before, we were a little leary about communications problems, 
                                    but due to OneStop's priority on effective communications this was never a problem. We were able to launch a sophisticated
                                    web and mobile MVP using Microsoft .net stack, react native and azure <a>cloud service</a>.  All on-time and on-budget. Their 
                                    team bent over backwards to make sure they were always on time with their weekly deliverables, while also providing helpful 
                                    technology suggestions. It was hugely important for our team that we selected a partner that we could both easily resolve 
                                    potential miscommunications, while taking an active interest in our project; always asking thoughtful and intelligent 
                                    questions & making suggestions. I plan to work with them more in the future and can't recommend them highly enough. "</p>
                                </CollapsableContent>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="content">
                        <img className="podcast-profile-img" src={podcastProfile}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonSection;