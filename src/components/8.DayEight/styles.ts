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
  background: ${props => props.theme.background.container};
  font-family: 'Roboto Mono', monospace;
  color: ${props => props.theme.colors.primary};
`