import styled from 'styled-components';

import { space, rounded, shadow, colors } from '../../style/vars';
import { Measure, MeasureUnit } from '../../style/types';

type aligns = 's' | 'c' | 'e' | 'x';

interface BoxProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  color?: keyof typeof colors;
  direction?: 'column' | 'row';
  rounded?: keyof typeof rounded;
  padding?: keyof typeof space;
  align?: `${aligns}${aligns}`;
  width?: Measure<MeasureUnit>;
  height?: Measure<MeasureUnit>;
  shadow?: keyof typeof shadow;
}

const Box = styled.div<BoxProps>`
  overflow: hidden;
  border-radius: ${(props) => rounded[props.rounded!]};
  padding: ${(props) => space[props.padding!]};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-shadow: ${(props) => shadow[props.shadow!]};

  ${(props) => {
    if (props.variant === 'secondary') {
      return `border: 2px solid ${colors[props.color!]};`;
    } else if (props.variant === 'primary') {
      return `background: ${colors[props.color!]};`;
    }
    return '';
  }}

  display: flex;
  justify-content: ${(props) => {
    if (props.align![0] === 's') {
      return 'flex-start';
    } else if (props.align![0] === 'c') {
      return 'center';
    } else if (props.align![0] === 'e') {
      return 'flex-end';
    } else {
      return 'space-between';
    }
  }};
  align-items: ${(props) => {
    if (props.align![1] === 's') {
      return 'flex-start';
    } else if (props.align![1] === 'c') {
      return 'center';
    } else if (props.align![1] === 'e') {
      return 'flex-end';
    } else {
      return 'space-between';
    }
  }};

  flex-direction: ${(props) => props.direction};
`;

Box.defaultProps = {
  variant: 'tertiary',
  color: 'primary',
  direction: 'column',
  rounded: 'none',
  padding: 'none',
  align: 'cc',
  width: '100%',
  height: '100%',
  shadow: 'none',
};

export default Box;
