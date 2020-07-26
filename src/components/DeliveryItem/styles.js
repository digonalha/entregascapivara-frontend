import styled from 'styled-components';

export const ListItem = styled.li`
  background: #fff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 10px;
  cursor: pointer;

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
