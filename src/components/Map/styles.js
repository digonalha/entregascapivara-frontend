import styled from 'styled-components';

export const MapWrapper = styled.div`
  height: 100vh;
  width: auto;

  @media (max-width: 850px) {
    position: relative;
    display: block;
    aside {
      height: 10px;
    }
  }
`;
