import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 0px;
`;

export const ListItem = styled.li`
  background: #fff;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.8);
  border-radius: 3px 3px 0px 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  cursor: pointer;

  .li + .li {
    margin-top: 5px;
  }

  strong {
    font-size: 13px;
    color: #333;
  }

  span {
    font-size: 14px;
    color: #999;
    margin-top: 2px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  max-height: 30px;
  margin-bottom: 20px;
`;

export const RouteButton = styled.button`
  height: 40px;
  display: block;
  width: 80%;
  border: 0;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.8);
  border-radius: 0px 0px 0px 3px;
  background: #206a5d;

  font-size: 15px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s;
  text-align: center;

  :hover {
    opacity: 0.8;
  }
`;

export const DeleteButton = styled.button`
  height: 40px;
  display: block;
  width: 20%;
  border: 0;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.8);
  border-radius: 0px 0px 3px 0px;
  background: #e8505b;

  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s;
  text-align: center;
  font-size: 12px;

  :hover {
    opacity: 0.8;
  }
`;
