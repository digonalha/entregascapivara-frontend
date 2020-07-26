import styled from 'styled-components';

export const Sidebar = styled.aside`
  position: absolute;
  z-index: 5;
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 30px 20px;
  height: 100vh;

  strong {
    text-align: center;
    display: flex;
    color: #333;
  }
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
  height: 40vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0px;
  padding: 5px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
