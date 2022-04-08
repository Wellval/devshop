import callImg from '../../assets/call.svg';
import dashedLine1 from '../../assets/dashed-line-1.svg';
import LayoutWithLines from '../LayoutWithLines';

function BookCallSection() {
    return (
        <LayoutWithLines colorClass='blue' lines='big'>
            <div className="container reverse">
                <div className="content">
                    <img src={callImg}></img>
                </div>
                <div className="content">
                    <div className="pre-title">Book a call with us</div>
                    <h2 className='title-content'>One Click Scheduling To Book Your Call</h2>
                    <p className="p-20">Schedule a call with one of our expert software entrepreneurs. People that
                        have built their own successful <a href="#">software companies</a>, that speak native English,
                        and work 12 hours per day for easy scheduling. Whether you’ve never built software yourself before,
                        or you are a Fortune 500 company, we have over 40 developers that are available within 48 hours to
                        start on your project. During your call, you will be asked a series of Project Discovery questions to
                        determine how far along you are in your project, and how soon you are able to start getting the busy
                        building.</p>
                </div>
            </div>
        </LayoutWithLines>

    )
}

export default BookCallSection