import styled from 'styled-components';

import playerImage from '../images/player.png'
import institutionImage from '../images/institution.png'

const SignUpRoleStyle = styled.div`
    display: flex;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0px;
        cursor: pointer;
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.black};
        border: 5px solid ${props => props.theme.colors.primary};
        border-radius: 10px;
        width: 407px;
        height: 248px;

        img {
            width: 170px;
            height: 170px;
        }
    }
`

const SignUpRole = () => {
    return(
        <SignUpRoleStyle>
            <div onClick= {() => console.log('clickd')}>
                <h4>I am a sports player</h4>
                <img src={playerImage} alt='playerImage' />
            </div>
            <div>
                <h4>I am a sports institution</h4>
                <img src={institutionImage} alt='institutionImage'/>
            </div>
        </SignUpRoleStyle>

    )
}

export default SignUpRole;