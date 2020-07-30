import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  flex-direction: column;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 850px), (max-height: 550px) {
    display: flex;
    flex-direction: column-reverse;

    aside {
      width: 100%;
      height: 10%;
    }
  }
`;

export const Sidebar = styled.aside`
  position: relative;
  flex-direction: column;
  z-index: 5;
  width: 300px;
  background: #eee;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  padding: 0px 20px;
  height: 100vh;
  float: left;

  h1 {
    margin-top: 20px;
    font-size: 20px;
  }

  @media (max-width: 850px) {
    position: unset;
  }
`;

export const MapWrapper = styled.div`
  @media (max-width: 850px) {
    height: 300px;
    width: auto;
  }
`;

export const FormWrapper = styled.div`
  overflow: hidden;
  height: 410px;
  border-bottom: 2px solid #eee;
  margin-bottom: 10px;
`;

export const ListWrapper = styled.div`
  overflow: auto;
  height: calc(100vh - 420px);

  @media (max-width: 850px) {
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
    margin-left: 5px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #eee;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #fff;
  }

  margin: 0px;
  padding: 2px;
`;
