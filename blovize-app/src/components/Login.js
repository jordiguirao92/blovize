import styled from 'styled-components';


const LoginStyle = styled.div`
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

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
        </div>
        

    )
}

export default Login;