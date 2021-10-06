import styled, { css, keyframes } from "styled-components";
import FilteredPropsInputField from "../components/Formik/FilteredPropsInputField";
import img from '../img/login-background.jpg'

const shake = keyframes`
  
`;

export const LoginBody = styled.div`
    background-image: url(${img});
    height: 100vh;
    width: 100vw;
    padding-top: 150px;
    overflow: hidden;
    position: fixed;
`

export const PageWrapper = styled.section`
    &,
    & * {
      box-sizing: border-box;
      display: block;
    }

    hr {
        display: block;
        border: none;
        border-top: 1px solid lightgrey;

        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    font-family: system-ui;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    padding: 5rem 10rem;
    border-radius: 4px;
    background: #DFE6ED;
    overflow: hidden;

    display: flex;
    justify-content:center;
    align-items:center;
    height: 50vh; 
    width: 55vw; 
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.25rem;
  margin: 20px auto;
  text-align: center;
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`;

export const Input = styled(FilteredPropsInputField)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
}
`;

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Submit = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  background-color: #6558F5;
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;
  border: 0;

  ${({ animate }) =>
  animate && css`
  & {
    animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    background: #ff4133;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  `
  }

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }


`;