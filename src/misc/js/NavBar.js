
import '../css/NavBar.css';
import StyledButton from './StyledComponents'

function NavBar(props) {
  return (
    <div className='NavBar'>

      <div className='NavBar-left'>
        <img
          className='NavBar-crosshairs'
          src={require('../img/crosshairs.png')}
          alt="crosshairs"
        />

        <h3 className='Chromist-text'>CHROMIST</h3>
      </div>

      <div className='NavBar-right'>
        {
          props.isLoggedIn ? (
            <div>
              <img
                className='NavBar-pencil'
                src={require('../img/pencil.png')}
                alt="pencil"
              />
              <img
                className='NavBar-profile'
                src={require('../img/profile.png')}
                alt="pencil"
              />
            </div>
          ) : (
            <StyledButton primary>LOGIN / SIGNUP</StyledButton>
          )
        }
      </div>
    </div >
  )
}

export default NavBar;
