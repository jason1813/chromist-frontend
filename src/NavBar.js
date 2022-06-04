
import './css/NavBar.css';
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.primary ? "var(--honolulu)" : "white"};
  color: ${props => props.primary ? "white" : "var(--honolulu)"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--honolulu);
  border-radius: 3px;
`;

function NavBar(props) {
  return (
    <div className='NavBar'>

      <div className='NavBar-left'>
        <img
          className='NavBar-crosshairs'
          src={require('./img/crosshairs.png')}
          alt="crosshairs"
        />

        <h3 className='Chromist-text'>CHROMIST</h3>
      </div>

      <div className='NavBar-right'>
        <Button primary>LOGIN / SIGNUP</Button>
      </div>
    </div>
  )
}

export default NavBar;
