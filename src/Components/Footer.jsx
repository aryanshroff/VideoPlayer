import React from 'react';
import {
  Box,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  Image,
  VStack,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react';

import { AiOutlineSend } from 'react-icons/ai';

const footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a
              target={'black'}
              href="https://www.youtube.com/channel/UCnRBIozA1oQmHhc3FbP3zGw"
            >
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.instagram.com/rn.shroff/">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/aryanshroff">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default footer;
