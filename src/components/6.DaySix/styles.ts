
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

export const ContainerCard = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background: transparent;
`

export const ImageCard = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 2em #0CCA4A;
  }
  
`

export const Description = styled.button`
  position: absolute;
  top: 475px;
  border-top: 1px solid rgba( 255, 255, 255, 0.4 );
  border: none;
  width: 400px;
  height: 150px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;

  background: rgba( 255, 255, 255, 0.1 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );

  h1 { 
    font-size: 25px;
    color: #000000;
  }

  p{ 
    font-size: 14px;
    color: #0CCA4A;
  }
`