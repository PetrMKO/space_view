import styled, {RuleSet} from 'styled-components';

export type Props = {
  fragment?: RuleSet
}

export const Button = styled.button<Props>`
  cursor: pointer;
  width: 100%;
  color: ${({theme})=>theme.mainText};
  background-color: ${({theme})=>theme.mainBackground};
  border: none;
  border-radius: 30px;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: normal;  ${({fragment})=> fragment ?? ''};
`