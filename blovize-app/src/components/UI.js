import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../styles/theme';
import image from '../images/landing/trophy1.jpeg';
import homeImage from '../images/landing/sports3.jpeg';
import mainImage from '../images/landing/sports2.jpeg';


export const Wrapper = styled.div`
  width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : '100vh'};
`

export const Flex = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : ''};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : ''};
  padding: ${props => props.padding ? props.padding : ''};
  background-color: ${props => props.backColor ? props.backColor : ''};
  color: ${props => props.color ? props.color : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
`

export const FlexStyled = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : 'auto'};
  padding: ${props => props.padding ? props.padding : 'auto'};
  border: ${props => props.borderSize ? props.borderSize : '5px'} solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '10px'};
  color: ${props => props.color ? props.color : theme.colors.black};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.white};
  box-shadow: ${props => props.shadow ? props.shadow : '5px 5px 5px grey'};
  background-image: ${props => props.backImage ? props.backImage : ''};
  cursor: ${props => props.cursor ? props.cursor : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
`

export const LandingStyle = styled(Flex)`
  background-image: url(${image});
  background-size: 100% 130%;
  background-repeat: no-repeat;
  /*background-image: linear-gradient(180deg, #171923 0%, #0707FF 47.92%);*/
`
export const HomeImage = styled(Flex)`
  background-image: url(${homeImage});
  background-size: 100% 130%;
  background-repeat: no-repeat;
`

export const MainImage = styled(Flex)`
  background-image: url(${mainImage});
  background-size: 100% 120%;
  background-repeat: no-repeat;
`


export const Spacer = styled.div`
  height: ${props => {
    if (props.height) {
      return props.height;
    } else {
      return '20px';
    }
  }};
`

export const H1 = styled.h1`
    color:  ${props => props.color ? props.color : theme.colors.white};
    margin: ${props => props.margin ? props.margin : '0px'};
 
`

export const H2 = styled.h2`
    color:  ${props => props.color ? props.color : theme.colors.black};
    margin: ${props => props.margin ? props.margin : 'auto'};
 
`

export const H3 = styled.h3`
    color:  ${props => props.color ? props.color : theme.colors.grey};
    margin: ${props => props.margin ? props.margin : 'auto'};
`

export const H4 = styled.h4`
    color:  ${props => props.color ? props.color : theme.colors.black};
    margin: ${props => props.margin ? props.margin : 'auto'};
`

export const Button = styled.button`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};
  border: 3px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};
  color: ${props => props.color ? props.color : theme.colors.white};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.backColor ? theme.hoverColors.secondary : theme.hoverColors.primary};
  }
`

export const Input = styled.input`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  border: 1px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};;
`
export const TextArea = styled.textarea`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  border: 1px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};;
`

export const InputImage = styled.input`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  border: 1px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};
  padding: 5px 8px;
  cursor: pointer;
  
`

export const Select = styled.select`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  border: 1px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '7px'};;
`

export const A = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;

`
export const P = styled.p`
  color: ${props => props.color ? props.color : theme.colors.black};
  margin: ${props => props.margin ? props.margin : '5px'};
  font-weight: ${props => props.bold ? props.bold : ''};
  text-align: ${props => props.align ? props.align : ''};
`

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.black};
  height: ${props => props.height ? props.height : '100px'};
  /*
  position: fixed;
  bottom: 0;
  left:0;
  right: 0;
  margin-top: auto;
  */
`

export const WrapperDiv = styled.div`
  min-height: 100vh;
`

export const HeaderStyled = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.grey};
`

export const ImageStyled = styled.img`
  height: ${props => props.height ? props.height : '150px'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
  width: ${props => props.width ? props.width : ''};
  margin: ${props => props.margin ? props.margin : ''};
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${props => props.color ? props.color : ''}; 
`;

export const LiStyled = styled.li`
  list-style: none;
`

export const NavStyled = styled.nav`
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

export const FullDiv = styled.div`
  width: ${props => props.width ? props.width : '25%'};
  height: ${props => props.width ? props.width : '100vh'};
  position: fixed;
  top: 0%;
  left: ${props => props.left ? props.left : '-100%'};;
  transition: 600ms;
`

export const BurguerStyled = styled.button`
    display: flex;
    margin: 0px 50px;
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

export const ModalBg = styled.div`
  position: absolute;
  top: ${props => props.show ? 0 : '100%'};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transition: opacity 0.5s;
  opacity: ${props => props.show ? 0.97 : 0};
  z-index: ${props => props.show ? 0 : -1};
`
export const ModalContent = styled.div`
  position: absolute;
  top: ${props => props.show ? '50%' : '200%'};
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  background-color: white;
  padding: 20px;
  transition: all 0.5s;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`


export const iconSize = 35;

