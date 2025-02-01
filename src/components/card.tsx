import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Card } from '../interfaces/interface';

interface CardGridProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

const CardGrid: React.FC<CardGridProps> = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Box
      onClick={handleClick}
      w="100%"
      h="0"
      pb="100%"
      position="relative"
      cursor="pointer"
    >
      <Image
        src={flipped ? card.src : 'public/images/card.png'}
        alt="card"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        borderRadius="8px"
        boxShadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
      />
    </Box>
  );
};

export default CardGrid;