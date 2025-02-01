import React, { useState, useEffect } from 'react';
import { Box, Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Card, GameState, GameType } from '../interfaces/interface';
import CardGrid from '../components/card';

const gameTypes: GameType[] = [
  {
    id: 1,
    name: 'Dragon Ball Z',
    cards: [
      { src: 'public/images/card-Boo.png', matched: false },
      { src: 'public/images/card-Cell.png', matched: false },
      { src: 'public/images/card-Freeza.png', matched: false },
      { src: 'public/images/card-Gohan.png', matched: false },
      { src: 'public/images/card-Goku.png', matched: false },
      { src: 'public/images/card-Kuririn.png', matched: false },
      { src: 'public/images/card-Piccolo.png', matched: false },
      { src: 'public/images/card-Satan.png', matched: false },
      { src: 'public/images/card-Trunks.png', matched: false },
      { src: 'public/images/card-Vegeta.png', matched: false },
    ],
  },
];

const Board: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    turns: 0,
    choiceOne: null,
    choiceTwo: null,
    disabled: false,
  });
  const [selectedGameType, setSelectedGameType] = useState<GameType | null>(null);

  // Embaralhar as cartas
  const shuffleCards = (cards: Card[]) => {
    const shuffledCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));

    setGameState((prevState) => ({
      ...prevState,
      cards: shuffledCards,
      turns: 0,
    }));
  };

  // Comparar duas cartas selecionadas
  useEffect(() => {
    if (gameState.choiceOne && gameState.choiceTwo) {
      setGameState((prevState) => ({ ...prevState, disabled: true }));

      if (gameState.choiceOne.src === gameState.choiceTwo.src) {
        setGameState((prevState) => ({
          ...prevState,
          cards: prevState.cards.map((card) =>
            card.src === gameState.choiceOne?.src ? { ...card, matched: true } : card
          ),
        }));
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [gameState.choiceOne, gameState.choiceTwo]);

  // Resetar as escolhas e aumentar o número de turnos
  const resetTurn = () => {
    setGameState((prevState) => ({
      ...prevState,
      choiceOne: null,
      choiceTwo: null,
      turns: prevState.turns + 1,
      disabled: false,
    }));
  };

  // Iniciar o jogo com um tipo selecionado
  const startGame = (gameType: GameType) => {
    setSelectedGameType(gameType);
    shuffleCards(gameType.cards);
  };

  // Lidar com a escolha de uma carta
  const handleChoice = (card: Card) => {
    if (gameState.choiceOne) {
      setGameState((prevState) => ({ ...prevState, choiceTwo: card }));
    } else {
      setGameState((prevState) => ({ ...prevState, choiceOne: card }));
    }
  };

  return (
    <Box textAlign="center" p={4}>
      <Text fontSize="2xl" mb={4} fontWeight="bold"
        color="gray.900"
      >
        Memory Game Card
      </Text>

      {!selectedGameType ? (
        <VStack>
          
          {gameTypes.map((gameType) => (
            <Button
              key={gameType.id}
              colorScheme="teal"
              onClick={() => startGame(gameType)}
            >
              {gameType.name}
            </Button>
          ))}
        </VStack>
      ) : (
        <>

          <Button colorScheme="teal" onClick={() => setSelectedGameType(null)} mb={4}>
            Voltar
          </Button>
           <Text mt={4}>Turnos: {gameState.turns}</Text>

           <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 4, xl: 4 }}  w="30%" mx="auto">
      {gameState.cards.slice(0, 20).map((card) => (
        <CardGrid
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={
            card === gameState.choiceOne ||
            card === gameState.choiceTwo ||
            card.matched
          }
          disabled={gameState.disabled}
        />
      ))}
    </SimpleGrid>

         
        </>
      )}
    </Box>
  );
};

export default Board;