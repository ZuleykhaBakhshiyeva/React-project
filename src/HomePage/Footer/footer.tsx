/* eslint-disable jsx-a11y/alt-text */
import './footer.scss';
import photo1 from '../../assets/photo/phone2.svg'
import photo2 from '../../assets/photo/mail1.svg'
import photo3 from '../../assets/photo/youtube1.svg'
import photo4 from '../../assets/photo/facebook1.svg'
import photo5 from '../../assets/photo/instagram1.svg'


export const Footer=() =>{
    return(
        <footer>
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-contacts">
                        <div className="footer-contacts-title">Contacts</div>
                        <div className="footer-phone">
                            <a href="tel:+38(066)555-777-6"><img src={photo1}/></a>
                            <p>+38(066)555-777-6</p>
                        </div>
                        <div className="footer-mail">
                            <a href='mailto:cappadocia.tours@gmail.com'><img src={photo2}/></a>
                            <p>cappadocia.tours@gmail.com</p>
                        </div>  
                        <div className="footer-social-media">
                            <a href="http://www.youtube.com/"><img src={photo3} /></a>
                            <a href="http://www.facebook.com/"><img src={photo4}/></a>
                            <a href="http://www.instagram.com/"><img src={photo5}/></a>
                        </div> 
                    </div>
                    <div className="footer-title">
                        <p>Dreams come true</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}