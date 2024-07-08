import '../../App.css'
import styles from './HeroStyles.module.css';
import heroImage from '../../assets/Hero_Image.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';
function Hero() {

    const {theme,toggleTheme} =useTheme();
    const themeIcon =theme==='light'? sun : moon ;
    const twitterIcon =theme==='light'? twitterLight : twitterDark ;
    const linkedinIcon =theme==='light'? linkedinLight : linkedinDark ;
    const githubIcon =theme==='light'? githubLight : githubDark ;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img id='HeroImage' className={styles.hero} src={heroImage} alt='heroImage' styles={{}}/>
            <img className={styles.colorMode} src={themeIcon} alt='themeIcon' onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>RAJKUMAR<br/> PICHUGUNTLA</h1>
            <h2>Software Developer</h2>
            <span>
                <a href='http://www.twitter.com' target='_blank'>
                    <img src={githubIcon} alt='twitterIcon'/>
                </a>
                <a href='http://www.twitter.com' target='_blank'>
                    <img src={linkedinIcon} alt='linkedinIcon'/>
                </a>
                <a href='http://www.twitter.com' target='_blank'>
                    <img src={twitterIcon} alt='twitterIcon'/>
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern web apps for commercial bussiness.</p>
            <a href={CV}><button className='hover'>Resume</button></a>
        </div>
    </section>
  )
}

export default Hero;