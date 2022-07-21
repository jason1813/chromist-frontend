
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => props.primary ? "var(--honolulu)" : "white"};
  color: ${props => props.primary ? "white" : "var(--honolulu)"};

  opacity: ${props => props.disabled ? "0.2" : "1.0"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--honolulu);
  border-radius: 3px;
`;

const StyledSubmitButton = styled.input.attrs({
  type: 'submit'
})`
  background: ${props => props.primary ? "var(--honolulu)" : "white"};
  color: ${props => props.primary ? "white" : "var(--honolulu)"};
  opacity: ${props => props.disabled ? "0.5" : "1.0"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--honolulu);
  border-radius: 3px;
`;

const StyledCancelButton = styled.button`
  background: red;
  color: white;

  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px solid red;
  border-radius: 3px;
`;

export {
  StyledButton,
  StyledSubmitButton,
  StyledCancelButton
}
