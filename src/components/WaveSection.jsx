import wordpress from "../assets/wordpress.png";
import php from "../assets/php.png";
import net from "../assets/net.png";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import reactNative from "../assets/react-native.png";
import Button from "./Button";


function WaveSection() {
    const technologies = [
        wordpress,
        php,
        net,
        angular,
        react,
        reactNative
    ]
    return (
        <div className="section wave">
            <div className="container">
                <div className="content">
                    <Button classname="w-button" content="book a call" />
                    <div className="wrapper">
                        {technologies.map(tech => <div key={tech} className="tiny-wrapper"><img alt="" className="tiny" src={tech}></img></div>)}
                    </div>
                </div>
                <div className="wrapper top">
                    <div className="content _33">
                        <p className="p-20">Teams won’t disappear on you and leave your entire project in jeopardy of 
                        complete failure by having a single point of failure (1 freelancer that has all the knowledge of 
                        your program in his head).</p>
                    </div>
                    <div className="content _33">
                        <p className="p-20">Teams have multiple skillsets, by design, and can bounce ideas off of each other. 
                        Freelancers, even part of a paid-for-service site, can not.</p>
                    </div>
                    <div className="content _33">
                        <p className="p-20">Teams can help to re-balance your costs by hiring a senior developer for laying 
                        the foundation, a junior coder for more menial tasks, and a quality assurance person for bug testing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaveSection