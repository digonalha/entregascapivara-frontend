import styled from 'styled-components';
// import { Breakpoints } from '../Typograph';

export const ButtonSubmit = styled.button.attrs({
  type: 'submit',
  value: 'Submit',
})`
  width: 100%;
  border: 0;
  border-radius: 3px;
  margin-top: 30px;
  background: #1f4068;
  padding: 10px 20px;
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

export const InputGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 5px;
  margin-top: 0px;
`;

export const InputBlock = styled.div`
  margin-top: 20px;
  border: 0;
  border-bottom: 1px solid #ddd;

  span {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    background: #fff;
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
  }
`;

export const Container = styled.form`
  svg {
    cursor: pointer;
  }
`;
