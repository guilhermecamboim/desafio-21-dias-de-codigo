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
  font-family : 'Roboto Mono', monospace;

  h1{ 
    position: absolute;
    z-index: 5;
    left: 750px;
    top: 550px;

    font-size: 30px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .squareOne {
    width: 390px;
    height: 290px;
    background: red;

    position: absolute;
    z-index: 4;
    left: 200px;
    top: 200px;
  }

  .squareTwo {
    width: 380px;
    height: 280px;
    background: blue;

    position: absolute;
    z-index: 3;
    left: 250px;
    top: 250px;
  }

  .squareThree {
    width: 370px;
    height: 270px;
    background: orange;

    position: absolute;
    z-index: 2;
    left: 300px;
    top: 300px;
  }

  .squareFour {
    width: 360px;
    height: 260px;
    background: green;

    position: absolute;
    z-index: 1;
    left: 350px;
    top: 350px;
  }

  .squareFive {
    width: 340px;
    height: 240px;
    background: purple;

    position: absolute;
    z-index: 0;
    left: 400px;
    top: 400px;
  }
`

export const Block = styled.div`
  width: 400px;
  height: 300px;
  background: #AEAEAE;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 5;
  left: 150px;
  top: 150px;

  p{
    font-size: 50px;
  }
`