import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({theme})=>theme.invertBackground};
  color: ${({theme})=>theme.invertText};
`

export const Header = styled.header<{isAuth: boolean}>`
  width: 100%;
  box-sizing: border-box;
  height: 95px;
  background-color: ${({theme})=>theme.headerBackground};
  color: ${({theme})=>theme.headerText};
  display: flex;
  align-items: center;
  justify-content: ${({isAuth})=>isAuth ? 'space-between' : 'center'};
  padding-left: 96px;
`

export const HeaderTitle = styled.span`
  text-align: center;
  color: ${({theme})=>theme.headerText};
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const LogOutButton = styled.button`
  cursor: pointer;
  position: absolute;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  top: 100%;
  right: 40px;
  display: none;
  border: none;
  background-color: ${({theme})=>theme.mainBackground};
  color: ${({theme})=>theme.mainText};
  z-index: 1000;
  &:hover {
    display: block;
  }
`

export const Wrapper = styled.div`
  position: relative;
  &:hover ${LogOutButton} {
    display: block;
  }
`

export const ButtonImg = styled.img`
  width: 73px;
  height: 73px;
  margin-right: 23px;
  
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`