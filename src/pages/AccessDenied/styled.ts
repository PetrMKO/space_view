import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  color: ${({theme})=>theme.invertText};
`