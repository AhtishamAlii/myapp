import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text"><span>REACT</span>-AXIOM</h1>
                        <p>The spread of education among the people is a very important indicator of a nation’s strength.
                         If a nation has a poor rate of literacy, and its citizens are not educated,
                         the country will lack social, economic and political well-being.</p>
                         <div className="contact">
                             <span><i className="phone"> 0333---34--33-456-777777</i></span>
                             <span><i className="email">axiom@gmail.com</i></span>
                         </div>
                         <div className="social">
                             <a href="#"><i className="facebook">Facebook</i></a>
                             <a href="#"><i className="insta">Instagram</i></a>
                             <a href="#"><i className="twiter">Twiter</i></a>
                             <a href="#"><i className="youtube">Youtube</i></a>
                         </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2> <br />
                        <ul>
                            <a href="#"><li>Events</li></a>
                            <a href="#"><li>teams</li></a>
                            <a href="#"><li>gallery</li></a>
                            <a href="#"><li>Mentores</li></a>
                            <a href="#"><li>Terms & Condition</li></a>
                        </ul>
                    </div>
                    <div className="footer-section contact-item">
                        <h2>Contact US</h2> <br />
                        <form action="index.html" method="post">
                            <input type="email" name="email" className="email-id" placeholder="Your email Address....." />
                            <textarea className="area" name="area" placeholder="Your message....."></textarea>
                            <button type="submit" className="button">Send</button>
                             
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">AXIOM | Design by AAA</div>
            </div>
        )
    }
}


export default Footer;