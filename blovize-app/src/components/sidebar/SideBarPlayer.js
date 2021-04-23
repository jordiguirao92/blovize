import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {SidebarDataPlayer} from './SideBarDataPlayer';
import {LinkStyled, LiStyled, NavStyled, Spacer, A } from '../UI'


const SideBarPlayer = () => {
    
    const sidebar = useSelector(state => state.sidebar);

    return(
        <NavStyled left={sidebar === true ? '0%' : '-100%'} width='25%' padding='50px 30px' direction='column' justify='flex-start'  backColor={props => props.theme.colors.grey}>
            {SidebarDataPlayer.map((item, index) => {
                return (
                    <>
                    <LiStyled key={index}><LinkStyled to={item.path} color={props => props.theme.colors.white}><A>{item.icon}{item.title}</A></LinkStyled></LiStyled>
                    <Spacer height='30px' />
                    </>
                );
            })}
        </NavStyled>
    )
}

export default SideBarPlayer;