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

export const Box = styled.div`
  background: #D6EDFF;
  width: 350px;
  height: 200px;
  border: 20px solid #ACD7EC;
  border-style: outset;
`

export const CountdownContainer = styled.div`
  display: grid;
  grid-template-areas:
  "span"
  "button";
  grid-row-gap: 1rem;
  font-family: 'Roboto Mono', monospace;
  justify-content: center;
`;

export const Span = styled.span`
  grid-area: "span";
  margin-top: 1rem;
  font-size: 5rem;
  line-height: 2rem;
  width: 150px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #8B95C9;
  padding: 2rem 1rem;
  border-radius: 8px;
  flex: 1;
`;

export const Button = styled.button`
  background: #478978;
  border-radius: 4px;
  color: #2F0A28;
  grid-area: "button";
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 50px;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  cursor: pointer;
`;