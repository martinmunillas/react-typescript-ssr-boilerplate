import styled from 'styled-components';
import { space } from '../../style/vars';

interface SpacerProps {
  size?: keyof typeof space
  direction?: 'row' | 'column'
}

const Spacer = styled.div<SpacerProps>`
  width: ${(props) => (props.direction == 'row' ? space[props.size!] : '100%')};
  min-width: ${(props) => (props.direction == 'row' ? space[props.size!] : '100%')};
  height: ${(props) => (props.direction == 'column' ? space[props.size!] : '100%')};
  min-height: ${(props) => (props.direction == 'column' ? space[props.size!] : '100%')};
`;

Spacer.defaultProps = {
  size: 'm',
  direction: 'column',
};

export default Spacer;
