import { useState } from "react";
import { Box, Button, Container, CountdownContainer, Span } from "./styles";

export function DaySeven() {
  const [number, setNumber] = useState(0)

  function handleSumOneToAll() {
    setNumber(number + 1)
  }
  return (
    <Container>
      <Box>
        <CountdownContainer>
          <Span>{number}</Span>
          <Button 
            onClick={handleSumOneToAll} 
          >
            Adicionar
          </Button>
        </CountdownContainer>
      </Box>
    </Container>
  )
}