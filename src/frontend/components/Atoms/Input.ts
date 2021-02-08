import styled from 'styled-components';
import { colors } from '../../style/vars';

export interface MyInputProps {
  color?: keyof typeof colors
}

const Input = styled.input<MyInputProps>`
  border: 2px solid ${(props) => colors[props.color!]};
  color: ${(props) => colors[props.color!]};
  border-radius: 50px;
  padding: 10px 20px;
  width: 100%;
  font-size: 18px;
  outline: none;
  background: transparent;
`;

Input.defaultProps = { color: 'black' };


export default Input;
