import dashedLineSmall from '../../assets/dashed-line-small.svg';
import paper from '../../assets/paper.svg';
import idea from '../../assets/idea.svg';

function ReadyToStartSection() {
    return (
        <div className='section'>
            <div className='wrapper'>
            <div className='container column'>
                <div className='line-wrapper c-line-wrapper'>
                    <img className="dashed-line small" src={dashedLineSmall}></img>
                </div>
                    <div className='content'>
                        <div className='pre-title'>Ready To Start In 48 Hours</div>
                        <h2>Start In 48 Hours OR Let Us Guide You To Getting Ready</h2>
                    </div>
                    <div className='content'>
                        <p className='p-20'>We have two types of customers and we can handle them bothseamlessly.</p>
                    </div>
                    <div className='wrapper top'>
                        <div className='content _50'>
                            <img className='icon-small' src={paper}></img>
                            <h3>Those that already have an existing project, or a fully mapped out project.</h3>
                            <p className='p-20'>We work with you to determine your exact software project needs. We have 
                            development teams that can handle your website, SaaS, mobile application or strictest design needs; 
                            frontend, back end, full stack, UI/UX designers, react.js, angular.js, react native, PHP for Wordpress, 
                            SEO, copy writing. We have teams that can do it all</p>
                        </div>
                        <div className='content _50'>
                        <img className='icon-small' src={idea}></img>
                            <h3>Those that have an idea, and funding but no mapped out project specs.</h3>
                            <p className='p-20'>Whether you are experienced building software or not, you'll need 
                            some project specifications . All we need is 5 days and we can take the vision you have, 
                            map it out into“User Stories”, something one of our senior engineers can understand to translate 
                            it features, functionalities and benefits for your customers, and at the end have a stand alone 
                            Powerpoint, or Keynote presentation that you keep to use as you need.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyToStartSection