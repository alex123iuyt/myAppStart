import styled, { css } from "styled-components";

export const VideoContainer = styled.div`
  flex-direction: column;
  padding: 2rem 0;
  display: flex;
  height: 48rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  transition: width 0.5s ease-in-out;
`;

export const Video = styled.video`
  width: 4rem;
  height: 8rem;
  object-fit: cover;
`;
