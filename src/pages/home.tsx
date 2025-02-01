import {  Box, Image } from "@chakra-ui/react";


export function Home(){
    return(
        <Box
      width="100vw" // 100% da largura da viewport
      height="100vh" // 100% da altura da viewport
      overflow="hidden" // Para evitar barras de rolagem
    >
      <Image
        src="public/images/kame.jpg" // URL da imagem
        alt="Imagem de fundo"
        objectFit="cover" // Faz a imagem cobrir todo o espaço disponível
        width="100%"
        height="100%"
      />
    </Box>
    )
}