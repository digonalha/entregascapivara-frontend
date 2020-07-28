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
  height: 440px;
  border-bottom: 2px solid #eee;

  strong {
    font-size: 20px;
  }

  .Footer {
    margin-top: 15px;
  }
`;
