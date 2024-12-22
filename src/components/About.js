
import '../styles/About.css'
import logo from '../images//KaneLogo.webp'


function About(){

    return(
        <div className='about-section'>
            <h1>About</h1>
            <p>Developed by Daniel Gino</p>
            <p> as part of second year homework</p>
            <img className='logo' src={logo} alt="logo"/>
        </div>

    )
}

export default About