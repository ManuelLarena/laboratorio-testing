import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border: none;
  text-decoration: none;
  color: #333;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const icon = css`
  display: inline-block;
  font-size: 5rem;
  margin-bottom: 20px;
`;

export const title = css`
  font-size: 1.5rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.334;
  letter-spacing: 0em;
`;

export const subtitle = css`
  margin-top: 20px;
`;
