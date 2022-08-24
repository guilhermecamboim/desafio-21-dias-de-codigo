import styled from 'styled-components'

export const Container = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100vw;
  height: calc(150vh - 10rem);
  background-color: #eaebed;
  font-family: 'Roboto Mono', monospace;
`
export const LoadingContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  background: #AEAEAE;
  border-radius: 8px;
`

export const LoadingProgressBar = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  animation-name: progress;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: 2;

  @keyframes progress{
    0% {
      width: 0%;
      background: #d00000;
    }

    10% {
      width: 10%;
      background: #dc2f02;
    }

    20% {
      width: 20%;
      background: #e85d04;
    }

    30% {
      width: 30%;
      background: #f48c06;
    }

    40% {
      width: 40%;
      background: #faa307;
    }

    50% {
      width: 50%;
      background: #ffba08;

    }

    60% {
      width: 60%;
      background: #AACC00;
    }

    70% {
      width: 70%;
      background: #80B918;
    }

    80% {
      width: 80%;
      background: #55A630;
    }

    90% {
      width: 90%;
      background: #2B9348;
    }

    100% {
      width: 100%;
      background: #007F5F;
    }
  }
`
