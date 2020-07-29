import styled from 'styled-components';

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
`;

export const MapWrapper = styled.div`
  display: block;
  flex-direction: initial;
`;

export const FormWrapper = styled.div`
  overflow: auto;
  height: 390px;
  border-bottom: 2px solid #eee;
  margin-bottom: 10px;
`;
