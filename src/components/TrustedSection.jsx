import londonStock from '../assets/london-stock.png';
import royalMail from '../assets/royal-mail.png';
import profitDrive from '../assets/profit-drive.png';
import blackbook from '../assets/blackbook.png';
import olimpicCommittee from '../assets/olympic-committee.png';
import dayYear from '../assets/90-day-year.png';
import wavereview from '../assets/wavereview.png';
import wave from '../assets/wave.png';
import ecobee from '../assets/ecobee.png';
import juicemobile from '../assets/juice-mobile.png';
import freckle from '../assets/freckle-logo.png';

function TrustedSection() {
    const images = [
        londonStock,
        royalMail,
        profitDrive,
        blackbook,
        olimpicCommittee,
        dayYear,
        wavereview,
        wave,
        ecobee,
        juicemobile,
        freckle
    ]
    return (
        <div className="section blue">
            <div className="container">
                <div className="content logo-content">
                    <h4 className="astrustedby">As trusted by</h4>
                    <div className="wrapper">
                        {
                            images.map(image => <img alt="" key={image} className={image === olimpicCommittee ? 'logo-trusted-by small' : 'logo-trusted-by'} src={image}></img>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedSection;