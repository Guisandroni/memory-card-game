import { Box } from "@chakra-ui/react";

import Board from "./pages/gameCard";


export default function App() {

  



  return (
    <Box
      width="100vw" // 100% da largura da viewport
      height="100vh" // 100% da altura da viewport
      overflow="hidden" // Para evitar barras de rolagem
      backgroundImage='url("public/images/kame.jpg")'
      objectFit="cover"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"

    >


      <Box>

   

    <Board/>

      </Box>
    </Box>
  )
}
