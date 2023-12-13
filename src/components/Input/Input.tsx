import styled, {RuleSet} from 'styled-components';

export type Props = {
  fragment?: RuleSet
}

export const Input = styled.input<Props>`
  width: 100%;
  border-radius: 30px;
  border: 1px solid #202854;
  background: #DBE5FF;
  color: #202854;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 17px;
  box-sizing: border-box;
`

export const InputLabel = styled.label`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  color: #202854;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`