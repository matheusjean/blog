import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: transparent;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
