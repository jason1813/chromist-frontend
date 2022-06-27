
import './BottomBar.css';
import { StyledButton } from '../../misc/js/StyledComponents'

function BottomBar(props) {
    return (
        <div className='BottomBar'>
            {props.isPrevious &&
                <StyledButton primary className='BottomBar-previous'>PREVIOUS</StyledButton>
            }

            {props.isNext &&
                <StyledButton primary className='BottomBar-next'>NEXT</StyledButton>
            }

        </div >
    )
}

export default BottomBar;
