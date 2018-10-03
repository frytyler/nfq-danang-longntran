import styled, { css } from 'styled-components';

import colors from '../../assets/colors';

export const Main = styled.div`
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 230px auto 50px;
  overflow: hidden;
`;

export const Header = styled.img`
  border-radius: 2px 2px 0 0;
  object-fit: cover;
  height: 230px;
`;

export const Body = styled.section`
  padding: 24px;
  overflow: hidden;
`;

export const Title = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  margin-top: 0;
  margin-bottom: 0.35em;
`;

export const Meta = styled.h6`
  margin-top: 0.25em;
  margin-bottom: 0.75em;
  color: rgba(0, 0, 0, 0.45);
`;

export const Content = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.875em;
  overflow: hidden;
  position: relative;
  max-height: 7em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;

  &::before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
`;

export const Actions = styled.div`
  display: grid;
  align-items: center;
  border-top: 1px solid #e8e8e8;
  background: #fafafa;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;

  &::after {
    ${({ last }) => {
      if (last) {
        return css`
          content: '';
        `;
      }

      return css`
        content: '|';
      `;
    }};
    position: absolute;
    right: 0;
    opacity: 0.2;
  }
`;

export const IconButton = styled.button`
  border: 0;
  border-radius: 4px;
  color: #2196f3;
  background: transparent;
  padding: 7px 8px;
  min-width: 64px;
  font-size: 0.8125rem;
  min-height: 32px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(33, 150, 243, 0.08);
  }
`;

export const Icon = styled.span.attrs({
  className: ({ name }) => (name ? `icon-${name}` : ''),
})`
  ${({ isFavorite }) => isFavorite && `${colors.red}`};
`;

export const Center = styled.div`
  text-align: center;
`;
