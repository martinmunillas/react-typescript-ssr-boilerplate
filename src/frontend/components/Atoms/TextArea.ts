import styled from 'styled-components';
import { colors, font } from '../../style/vars';

export interface MyTextAreaProps {
  color?: keyof typeof colors;
}

const TextArea = styled.textarea<MyTextAreaProps>`
  border: 2px solid ${(props) => colors[props.color!]};
  color: ${(props) => colors[props.color!]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  height: 200px;
  font-size: 18px;
  outline: none;
  background: transparent;
  font-family: ${font};
`;

TextArea.defaultProps = { color: 'black' };

export default TextArea;
