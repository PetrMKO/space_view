import styled from 'styled-components';

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 22px 18px;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  transition: all .2s;
  cursor: pointer;

  &:hover{
    transform: scale(1.03);
  }
`

export const BatchDivider = styled.div`
  width: calc(100% - 46px);
  height: 0;
  border: 2px solid ${({ theme }) => theme.mainBackground};
  position: relative;
  
  &:before{
    content: '';
    position: absolute;
    left: -5px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.mainBackground};
    border-radius: 50%;
    top: -5px;
  }
  
  &:after{
    content: '';
    position: absolute;
    right: -5px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.mainBackground};
    border-radius: 50%;
    top: -5px;
  }
`