import styled, { css } from "styled-components";

export const VideoContainer = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24rem;
  width: 48rem;
  background-color: #f1f1f1;
  transition: width 0.5s ease-in-out;

  ${(props) =>
    props.isFullWidth &&
    css`
      width: 100vw;
      height: 100vh;
    `}
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
