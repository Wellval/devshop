import dashedLineSmall from '../../assets/dashed-line-small.svg';
import team from '../../assets/team.svg';
import Button from '../Button';

function BecomeATeamSection() {
    return (
        <div className='section wave2'>
            <div className='wrapper'>
                <div className='container column'>
                    <div className='line-wrapper c'>
                        <img className="dashed-line small" src={dashedLineSmall}></img>
                    </div>
                    <div className='content'>
                        <img className='icon-large' src={team}></img>
                    </div>
                    <div className='content'>
                        <h2>Become A Team</h2>
                        <p className='p-20'>Make Your Developers A Full Time Or Part Time Part Of Your Team.</p>
                        <p className='p-20'>Ideally, by the time your software project is done, you’ll be able 
                        to make your developers a permanent part of your team.</p>
                        <p className='p-20'>Our development teams are very much used to working full time with their 
                        customers, growing the software projects. In fact, this is their preferred type of client, a 
                        client that they know well, and that they know the project well. Wouldn’t this be ideal for you 
                        as well? You won’t need to worry about taxes, health insurance, staff calling in sick. Just dutiful 
                        remote team members that can build full-time or on an as-needed basis. Terminate at any time, without 
                        the risk of having to pay severance, or hire them back when the project warrants. Zero risks, and zero 
                        obligations. What are you waiting for?</p>
                        <p className='p-20'>Speak with one of our software entrepreneurs with experience on dozens of software 
                        projects. Don’t have a mock-up on slide presentation or user stories of your idea? No problem, we’ll 
                        discuss the easiest way you can get one. Be working within 48 hours with atop rated team. Choose your 
                        technology, we have programmers for all types of projects</p>
                        <Button classname="btn" content="Speak With A Software Entrepreneur Now" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BecomeATeamSection