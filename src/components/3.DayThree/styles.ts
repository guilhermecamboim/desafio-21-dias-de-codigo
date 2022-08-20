import styled from 'styled-components'

export const Container = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  padding-left: 50px;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: calc(150vh - 10rem);
  background-color: #eaebed;
`

export const ButtonDiferentao = styled.button`
  position: absolute;
  border-style: outset;
  border: 2px solid rgba( 255, 255, 255, 0.4 );
  width: 300px;
  height: 150px;
  border-radius: 15px;
  text-shadow: red -2px 0, cyan 2px 0;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 25px;
  color: #343330;

  background: rgba( 255, 255, 255, 0.1 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );

  &:hover {
    background: rgba( 255, 255, 255, 0.2 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    transform: scale( 1.01);
    transition: 300ms;
  }
`