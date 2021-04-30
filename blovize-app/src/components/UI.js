import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../styles/theme';

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
  border: 5px solid ${props => props.colorBorder ? props.colorBorder : theme.colors.primary};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '10px'};
  color: ${props => props.color ? props.color : theme.colors.black};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.white};
  box-shadow: ${props => props.shadow ? props.shadow : '5px 5px 5px grey'};
  background-image: ${props => props.backImage ? props.backImage : ''};
  cursor: ${props => props.cursor ? props.cursor : ''};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
`

export const LandingStyle = styled(Flex)`
  background-image: linear-gradient(180deg, #171923 0%, #0707FF 47.92%);
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
`

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  background-color: ${props => props.backColor ? props.backColor : theme.colors.black};
  position: absolute;
  left:0;
  bottom: 0;
  right:0;
`

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
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

export const iconSize = 35;

