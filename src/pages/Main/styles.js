import styled from 'styled-components';

export const Sidebar = styled.aside`
  position: relative;
  flex-direction: column;
  z-index: 5;
  width: 300px;
  background: #ebecf1;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  padding: 30px 20px;
  height: 100vh;
  float: left;

  strong {
    text-align: center;
    display: flex;
    color: #333;
  }
`;

export const MapWrapper = styled.div`
  display: block;
  flex-direction: initial;
`;

export const FormWrapper = styled.div`
  overflow: auto;
  height: 510px;
  border-bottom: 2px solid #eee;

  strong {
    font-size: 20px;
  }

  .Footer {
    margin-top: 15px;
  }
`;

export const ListWrapper = styled.div`
  overflow: auto;
  -ms-overflow-style: none;
  height: 40vh;

  scrollbar-width: none;
  margin: 0px;
  padding: 5px;

  ::-webkit-scrollbar {
    display: none;
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
