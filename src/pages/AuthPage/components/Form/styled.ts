import styled, {css} from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 50px;
`

export const Header = styled.span`
  color: ${({theme})=>theme.invertText};
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const LabelSpan = styled.span`
  margin-left: 20px;
  color: ${({theme})=>theme.invertText};
`

export const submitButtonFragment = css({
  width: 'auto',
  padding: '20px 28px'
})

export const ErrorHint = styled.div`
color: indianred;
`