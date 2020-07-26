import styled from 'styled-components';
import { Breakpoints } from '../Typograph';

export const ButtonWrapper = styled.div`
  /* height: 15px;
  background-color: blue;

  @media all and (min-width: ${Breakpoints.md}) {
    height: 40px;
    background-color: green;
  }

  @media all and (min-width: ${Breakpoints.lg}) {
    height: 50px;
    background-color: yellow;
  } */
`;

export const Container = styled.div`
  .label-title {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    margin-top: 20px;
  }

  form {
    margin-top: 30px;
  }

  form .input-block + .input-block {
    margin-top: 20px;
  }

  form .input-group {
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  form .input-group .input-block {
    margin-top: 0px;
  }

  form .input-block label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  form .input-block input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }

  form button[type='submit'] {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #12cad6;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.3s;
  }

  form button[type='submit']:hover {
    opacity: 0.8;
  }
`;
