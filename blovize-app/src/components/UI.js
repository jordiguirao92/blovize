import styled from 'styled-components';
import theme from '../styles/theme';

const Flex = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : 'auto'};
  background-color: ${props => props.backColor ? props.backColor : ''};
`

const FlexStyled = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : 'auto'};
  border: 5px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '10px'};
  color: ${props => props.color ? props.color : theme.colors.black};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.white};
  box-shadow: ${props => props.shadow ? props.shadow : '5px 5px 5px grey'};
  background-image: ${props => props.backImage ? props.backImage : ''};
`

const LandingStyle = styled(Flex)`
  background-image: linear-gradient(180deg, #171923 0%, #0707FF 47.92%);
`


const Spacer = styled.div`
  height: ${props => {
    if (props.height) {
      return props.height;
    } else {
      return '20px';
    }
  }};
`

const H1 = styled.h1`
    color:  ${props => props.color ? props.color : theme.colors.white};
 
`
const H3 = styled.h3`
    color:  ${props => props.color ? props.color : theme.colors.grey};
`

const Button = styled.button`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  margin: ${props => props.margin ? props.margin : 'auto'};
  border: 3px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};
  color: ${props => props.color ? props.color : theme.colors.white};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.primary};
  cursor: pointer;
`

const Input = styled.input`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  border: 1px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};;
`

const A = styled.a`
  text-decoration: none;
`

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.black};
`

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.grey};
`

const ImageStyled = styled.img`
  height: ${props => props.height ? props.height : '150px'};
  width: ${props => props.height ? props.height : ''};
  

`

export {
  Flex,
  FlexStyled,
  Spacer, 
  H1,
  H3,
  A, 
  Button,
  FooterStyled,
  Input,
  HeaderStyled,
  ImageStyled,
  LandingStyle
}
