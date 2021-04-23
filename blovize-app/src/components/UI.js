import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../styles/theme';

const Flex = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.width ? props.width : ''};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  color: ${props => props.color ? props.color : ''};
`

const FlexStyled = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : 'auto'};
  padding: ${props => props.padding ? props.padding : 'auto'};
  border: 5px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '10px'};
  color: ${props => props.color ? props.color : theme.colors.black};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.white};
  box-shadow: ${props => props.shadow ? props.shadow : '5px 5px 5px grey'};
  background-image: ${props => props.backImage ? props.backImage : ''};
  cursor: ${props => props.cursor ? props.cursor : ''};
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
  margin: ${props => props.margin ? props.margin : ''};
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
  display: flex;
  align-items: center;

`

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.black};
  position: absolute;
  left:0;
  bottom:0;
  right:0;
`

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  align-items: ${props => props.align ? props.align : 'center'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.grey};
`

const ImageStyled = styled.img`
  height: ${props => props.height ? props.height : '150px'};
  width: ${props => props.width ? props.width : ''};
  margin: ${props => props.margin ? props.margin : ''};
`
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${props => props.color ? props.color : ''}; 
`;

const LiStyled = styled.li`
  list-style: none;
`

const NavStyled = styled.nav`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  align-items: ${props => props.align ? props.align : 'stretch'};
  margin: ${props => props.margin ? props.margin : ''};
  padding: ${props => props.padding ? props.padding : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  color: ${props => props.color ? props.color : ''};
  top: 0;
  left: ${props => props.left ? props.left : '-100%'};;
  transition: 600ms;
  position: fixed;
`

const BurguerStyled = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;

    span {
      width: 2rem;
      height: 0.25rem;
      background: ${theme.colors.white};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      :nth-child(2) {
        opacity: ${props => props.open ? '0' : '1'};
        transform: ${props => props.open ? 'translateX(20px)' : 'translateX(0)'};
      }
      :nth-child(3) {
        transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }

`

const FullDiv = styled.div`
  width: ${props => props.width ? props.width : '25%'};
  height: ${props => props.width ? props.width : '100vh'};
  position: fixed;
  top: 0%;
`
const iconSize = 35;


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
  LandingStyle,
  LinkStyled,
  BurguerStyled, 
  LiStyled,
  NavStyled,
  FullDiv, 
  iconSize
}
