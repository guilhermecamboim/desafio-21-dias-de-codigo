import { Container, LoadingContainer, LoadingProgressBar } from "./styles";

export function DayNine() {
  return (
    <Container>
      <h1>Loading Bar</h1>
      <LoadingContainer>
        <LoadingProgressBar />
      </LoadingContainer>
    </Container>
  )
}