import styled, { css } from 'styled-components';

import colors from '../../assets/colors';

export default styled.button`
  background-color: ${colors.white};
  ${({ noBorder }) => {
    if (noBorder) return '';

    return css`
      border: 1px solid ${colors.btn.border};
    `;
  }};
  border-radius: 4px;
  cursor: pointer;
  line-height: 1.4;
  padding: 8px 16px;
  text-decoration: none;
  text-align: center;
  color: ${colors.black65};

  &:hover,
  &:focus {
    outline: 0;
    color: ${colors.btn.hover};
    border-color: ${colors.btn.hover};
  }

  ${({ primary }) => {
    if (primary) {
      return css`
        color: ${colors.white};
        background-color: ${colors.primary};
        border-color: ${colors.primary};

        &:hover {
          background-color: ${colors.btn.primary.hover};
        }
      `;
    }

    return '';
  }};
`;
