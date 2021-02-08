import styled from 'styled-components';
import { colors } from '../../style/vars';

interface TextProps {
  color?: keyof typeof colors;
  align?: 'center' | 'right' | 'left';
}

const Text = styled.p<TextProps>`
  color: ${(props) => colors[props.color!]};
  text-align: ${(props) => props.align};
`;

Text.defaultProps = {
  color: 'black',
  align: 'left',
};


export default Text;
