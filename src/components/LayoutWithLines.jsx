import dashedLine1 from '../assets/dashed-line-1.svg';
import dashedLineSmall from '../assets/dashed-line-small.svg';

function LayoutWithLines(props) {
    return (
        <div className={`section ${props.colorClass}`}>
        <div className='container'>
            <div className={`wrapper ${props.wrapper}`}>
                {props.lines === 'big' || props.lines === 'both' ? <div className='line-wrapper'>
                    <img className='dashed-line' src={dashedLine1} />
                </div> : ''}
                {props.children}
                {props.lines === 'small' || props.lines === 'both' ? <div className='line-wrapper small-line-wrapper'>
                    <img className="dashed-line small" src={dashedLineSmall}></img>
                </div> : ''}
                </div>
            </div>
        </div>
    )
}

export default LayoutWithLines;