import dashedLine1 from '../../assets/dashed-line-1.svg';
import bill from '../../assets/technologies/bill.jpg';
import fire from '../../assets/technologies/fire.jpg';

function WhyUsSection() {
    return (
        <div className='section blue'>
            <div className='wrapper'>
                <div className='line-wrapper'>
                    <img className='dashed-line' src={dashedLine1} />
                </div>
            <div className='container reverse text-content'>
                <div className='content _50'>
                    <h2 className='title-content'>At OneStopDevShop, we know it’s a hassle to find a good vendor that you can trust.</h2>
                    <p className='p-20'>One that you can work with on almost any item, no matter what the platform. That’s why we focus 
                    on a multi-dimensional, multi-platform approach.</p>
                    <p>
                        <img className='margin-img' src={bill}></img>
                        <br></br>
                        <img className='margin-img' src={fire}></img>
                    </p>
                </div>
                <div className='content _50'>
                    <h2 className='title-content'>Why us?</h2>
                    <p className='p-20'>Because after a decade of building our own software companies, working and developing 
                    our own software projects and for countless of our clients, building a network of hundreds of other 
                    founders, developer teams, we’re in a much stronger position than you are.</p>
                    <h2 className='title-content'>Wouldn’t you agree?</h2>
                    <p className='p-20'>Based upon your needs we’ll find you the right designer, UI expert, the best developer 
                    whether they be front end, back end, full stack, native mobile applications, database administrator, 
                    wordpress programmer, you name it, we have them on our team. Our <a href='#'>development teams</a> 
                    are custom tailored to fit your specific needs. Because we believe your idea is as unique as the  
                    <a href='#'> team that needs to put it together</a>.</p>
                    <p className='p-20'>We can listen and take in your specific needs and put together the perfect 
                    resource team to fit your custom needs.</p>
                    <p className='p-20'>Nope, <strong>not gonna leave you hanging with some flaky, freelancer </strong> 
                    that can vanish in the night leaving me, you, your code and your money in dust.</p>
                    <p className='p-20'>And while you may have heard of other agencies or sites that do the same, we’re 
                    confident that the front end of those services is likely mid-level-support specialists that regurgitate 
                    some corporate standard operating procedures during their kick-off call.</p>
                    <p className='p-20'>Not with Onestop Devshop.</p>
                    <p className='p-20'>When you speak with <a href='#'>Geordie Wardman</a>, you’ll be speaking with a proven 
                    software entrepreneur. Someone that has already gone through what you’re about to go through and is 
                    successful in their own right.</p>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default WhyUsSection