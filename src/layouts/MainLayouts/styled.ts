import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({theme})=>theme.invertBackground};
  color: ${({theme})=>theme.invertText};
`

export const Header = styled.header`
  width: 100%;
  height: 95px;
  background-color: ${({theme})=>theme.mainBackground};
  color: ${({theme})=>theme.headerText};
`