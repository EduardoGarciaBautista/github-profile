import {createGlobalStyle} from "styled-components";

const GlobalStylesStyled = createGlobalStyle`
  :root {
    --white: #fffffe;
    --bg: #e6eef6;
    --grey: #394d70;
    --grey-1: #546686;
    --grey-2: #3f4954;
    --pink: #cc68a0;
    --yellow: #f1e05a;
    --purple: #563d7c;
    --headline1: 600 1.625rem/2rem Inter;
    --button: 500 0.875rem/1.5rem Inter;
    --headline2-semi-bold: 600 1.25rem/1.5rem Inter;
    --headline2-ligth: 300 1.25rem/1.5rem Inter;
    --body1-regular: 400 1rem/1.5rem Inter;
    --body1-semi-bold: 700 1rem/1.5rem Inter;
    --body2-regular: 400 0.875rem/1.5rem Inter;
    --body2-semi-bold: 600 0.875rem/1.5rem Inter;
    --caption-regular: 400 0.75rem/1.125rem Inter;
    --caption-medium: 500 0.75rem/1.125rem Inter;
    --btn-bg: #15223A;
    // Custom colors
    --dark-gray: #a1afbe;
    --darkest-grey: #9fb0c5;
    --white-card: #fffffe;
    --orange: #FF4C29;
  }

  body {
    background: var(--bg);
    color: var(--grey);
    font: var(--body1-regular);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #212121;
      --dark-gray: #1b1a1a;
      --white-card: #2b2b2b;
      --grey: #f1b13c;
    }
  }
`;

export default GlobalStylesStyled;
