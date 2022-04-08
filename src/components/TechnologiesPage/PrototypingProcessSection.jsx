import LayoutWithLines from "../LayoutWithLines";
import listIcon from '../../assets/list-icon.svg';

function PrototypingProcess() {
    const list = [
        'Idea Validation',
        'Market Research',
        'Defining the costs for each aspect of your MVP',
        'Feature vs Benefit Breakdown'
    ]
    return (
        <LayoutWithLines wrapper='' colorClass='blue' lines='both'>
            <div className="content center">
                <div className="pre-title">What we do</div>
                <h2 className="title-content no-right-margin">OneStop Slingshot Prototyping Process</h2>
            </div>
            <div className="wrapper top">
                <div className="content _50 bg-shape">
                    <p className="p-20">Whether you have software that’s already working but having problems with
                        your current developers, or you have just the fuzzy glimmer of an idea, we can help you.</p>
                    <p className="p-20">With our Onestop Slingshot Prototyping process (link to How not to gamble blog
                        post), we can take you from a simple idea to blown out, beautifully designed, clickable minimum
                        viable product mockup. All within 5 days from the time you start your first conversation with us.</p>
                    <p className="p-20">Believe me, by having this piece of gold, you could save yourself tens of
                        thousands of dollars in miscommunicated, misrepresented, malfunctioning, malfeasances. � You’ll truly be
                        on your way to slingshotting your project to success.</p>
                </div>
                <div className="content _50">
                    <h3>Things we can work on with you include:</h3>
                    {list.map(item => <li className="list-item"><p className="p-20"><img className="icon-list" src={listIcon}></img>{item}</p></li>)}
                    <p className="p-20"><strong>We can work on this as a stand-alone prototype to show other development teams,
                        or work through the entire project to completion.</strong></p>
                    <p className="p-20">To get a full breakdown of <strong>our Slingshot Prototyping Process.</strong></p>
                </div>
            </div>
            <div className="content _100"><h3>Whether you have software that’s already working but having problems with your current developers,
                or you have just the fuzzy glimmer of an idea, we can help you.</h3>
            </div>
        </LayoutWithLines>
    )
}

export default PrototypingProcess