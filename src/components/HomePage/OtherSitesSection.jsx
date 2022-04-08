import LayoutWithLines from '../LayoutWithLines';
import sites from '../../assets/sites.svg';
import CollapsableContent from '../CollapsableContent';

function OtherSitesSection() {
    return (
        <LayoutWithLines colorClass='blue' lines='both'>
            <div className='container reverse'>
                <div className='content'>
                    <img src={sites}></img>
                </div>
                <div className='content'>
                    <div className='pre-title'>Use at your peril</div>
                    <h2 className='title-content'>Would you trust a high school dropout to perform brain surgery on you?</h2>
                    <CollapsableContent>
                        <p className='p-20'>If you think about it, freelancers are incentivized by churning and
                        burning through your project. Listen to an experience my friend Maxie had with her first
                        development team. <a>Keep in mind, the time</a> frame for this was November to May. That’s 
                        7 months for a software project that was meant to last 2 months!</p>
                        <p className='p-20'>I hired a programmer from Poland because I could get a very good rate. At the time I was
                        inexperienced and because he was left unmanaged, unsupervised and his work unchecked, caused me 
                        a lot of grief. He began in November and began building the product on React. For the next 2 months, 
                        I didn’t see any features being built. But I have advised patience as when anything new is being 
                        developed, there needs to be a lot of background work setting up the systems and such. So I didn’t 
                        think anything of it.</p>
                        <p className='p-20'>By January/February I began to see new features being developed. In the beginning, 
                        there were so many bugs. And there was a lot of resistance on how to fix these bugs. At the time, 
                        I was informed by my tech friend that it was normal to have lots of bugs in the beginning. So again, 
                        didn’t recognize any red flags. And as someone who couldn’t read code, there was no way I was going to 
                        know how bad the quality of code was.</p>
                        <p className='p-20'>By March/April – every feature that was built and every bug that was ‘fixed’ would 
                        create another 3 more bugs. It was at that time I started to realize something was wrong. Also, it had 
                        been 8 months and we’d only developed 1/5 of the features that were on the MVP. I was in panic mode.</p>
                        <p className='p-20'>Maxie’s project ended going even longer, and she was never able to salvage the project. 
                        The code was so bad, she had to write her investors and customers back, hat in hand, and scrap the entire 
                        project. She had lost everything.</p>
                    </CollapsableContent>
                    
                </div>
            </div>
        </LayoutWithLines>
    )
}

export default OtherSitesSection