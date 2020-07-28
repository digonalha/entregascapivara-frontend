import styled from 'styled-components';
import { Breakpoints } from '../Typograph';

export const ButtonSubmit = styled.button.attrs({
  type: 'submit',
  value: 'Submit',
})`
  width: 100%;
  border: 0;
  border-radius: 3px;
  margin-top: 30px;
  background: #1f4068;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s;
  text-align: center;

  :hover {
    opacity: 0.8;
  }
`;

export const InputBlock = styled.div``;

export const Container = styled.div`
  .label-title {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    margin-top: 10px;
    padding: 0px;
  }

  form {
    margin-top: 20px;
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
    color: #333;
    margin: 3px;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  form .input-block input {
    padding: 15px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 1px solid #3333;
    border-radius: 6px;
  }
`;
