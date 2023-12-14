import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageOfDay = styled.img`
  width: 40%;
  border-radius: 10px;
  display: block;
  margin: 20px 0;
  cursor: pointer;
  transform-origin: center;
  transition: all .2s;
  
  &:hover{
    transform: scale(1.03);
  }
`
