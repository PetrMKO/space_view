import styled, {css} from 'styled-components';

export const ModalWrapper = styled.div`
  width: 437px;
  height: 394px;
  border-radius: 60px;
  background: ${({theme})=>theme.invertBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

export const Text = styled.span`
  color: ${({theme})=>theme.invertText};

  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  margin-bottom: 31px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
`

export const buttonFragment = css`
  padding: 14px 50px;
  border-radius: 30px;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`