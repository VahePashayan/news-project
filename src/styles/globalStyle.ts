import { createGlobalStyle } from 'styled-components';
import { ThemeType } from "./theme";

interface Props {
	theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props>`
  body{
    font-style: normal;
    background-color: ${({ theme }) => theme.black_russian};
    padding: 0;
    margin: 0;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5 ,h6 {
    margin: 0;
    padding: 0;
		margin-block-start: 0;
		margin-block-end: 0;
		margin-inline-start: 0;
		margin-inline-end: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  input {
    outline: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button, input, textarea {
    background: none;
    color: inherit;
    border-radius: 10px;
    padding: 0;
		margin: 0;
    font: inherit;
    cursor: pointer;
    outline: none;
		border: none;
		resize: none;
  }
	
	button {
		border: none;
	}

  a {
    text-decoration: none;
    color: unset;
  }

  .d-flex {
    display: flex;
  }

  .justify-center {
    justify-content: center;
  }

  .align-center {
    align-items: center;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .justify-between {
    justify-content: space-between;
  }

	.text-center {
		text-align: center;
	}

	.flex-column {
		flex-direction: column;
	}
`;

export default GlobalStyle;