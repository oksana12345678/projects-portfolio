import styled from "styled-components";

export const ScrollAnimation = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollAnimation 2s infinite;

    @keyframes scrollAnimation {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  @media screen and (min-width: 768px) {
    bottom: 12%;
  }

  @media screen and (min-width: 1440px) {
    bottom: 25%;
  }
`;
