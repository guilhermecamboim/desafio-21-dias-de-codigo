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

  input, label, select, option {
    margin-top: 10px;
    font-size: 22px;
    width: 50%;
  }
`

export const Calculator = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  border: 1px solid;
  color: #FFFFFF;

  background: #000000;
  h1 { 
    color: #aeaeae;
    font-size: 40px;
  }
  div {
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    .result {
      font-size: 50px;
      width: 50%;
    }
  }

  select { 
    background: #FE9400;
    width: 52%;
    height: 32px;
  }

  label { 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input, select { 
    display: flex;
    align-items: center;
    justify-content: center;
  }

`