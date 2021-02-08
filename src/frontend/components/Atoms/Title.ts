import styled from 'styled-components';
import { colors } from '../../style/vars';

interface TitleProps {
  color?: keyof typeof colors;
}

const Title = styled.h1<TitleProps>`
  color: ${(props) => colors[props.color!]};
`;

Title.defaultProps = {
  color: 'black',
};

export default Title;
