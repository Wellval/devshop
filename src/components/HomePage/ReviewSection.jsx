import reviewImg from '../../assets/review-img.svg';
import reviewPortrait from '../../assets/review-portrait.jpg';
import LayoutWithLines from '../LayoutWithLines';

function ReviewSection() {
    return (
        <LayoutWithLines colorClass='blue' lines='both'>
            <div className='container reverse'>
                <div className='content bg-shape'>
                    <img src={reviewImg}></img>
                </div>
                <div className='content'>
                    <h2>Would you trust a high school dropout to perform brain surgery on you?</h2>
                    <p>Absolutely not, you don't even need to think about it. Well, why is it any
                        different with your software project? You've worked hard on your idea, you've got everything
                        together. Why trust the job to just anyone?</p>
                    <div className='testimonial-wrapper'>
                        <img className='portrait' src={reviewPortrait}></img>
                        <div className='testimonial-text-wrapper'>
                            <p className='testimonial-text'>
                                "We have been working with the OneStopDevShop team since 2014 and we couldn't have gotten
                                Clarity Wave where we are today without their help. They made sure to fully understand what we needed
                                and they took ownership of the project. We immediately felt like we were working with a partner rather than a vendor."
                            </p>
                            <div className='testimonial-name'>Robert Moutal</div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWithLines>

    )
}

export default ReviewSection;