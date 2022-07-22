
import { useNavigate, Link } from 'react-router-dom';
import '../css/NavBar.css';
import { StyledButton } from './StyledComponents';

function NavBar(props) {

  const navigate = useNavigate()

  return (
    <div className='NavBar'>

      <Link to="../" className='NavBar-left'>
        <img
          className='NavBar-crosshairs'
          src={require('../img/crosshairs.png')}
          alt="crosshairs"
        />

        <h3 className='Chromist-text'>CHROMIST</h3>
      </Link>

      <div className='NavBar-right'>
        {
          props.isLoggedIn ? (
            <div>
              <Link to="/new-thread">
                <img
                  className='NavBar-pencil'
                  src={require('../img/pencil.png')}
                  alt="pencil"
                />
              </Link>
              <img
                className='NavBar-profile'
                src={require('../img/profile.png')}
                alt="pencil"
              />
            </div>
          ) : (
            <StyledButton primary onClick={() => navigate('/signin')}>LOGIN / SIGNUP</StyledButton>
          )
        }
      </div>
    </div >
  )
}

export default NavBar;
