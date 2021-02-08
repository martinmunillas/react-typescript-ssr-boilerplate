import styled from 'styled-components';
import { colors } from '../../style/vars';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  color: keyof typeof colors;
}

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: 600;
  min-width: 100px;
  max-width: 300px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  ${(props) =>
    props.variant === 'secondary' &&
    `
  color: ${colors[props.color]};
  border: 2px solid ${colors[props.color]};
  `}

  ${(props) =>
    props.variant === 'primary' &&
    `
  color: ${colors['white']};
  background: ${colors[props.color]};
  `}
`;

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
