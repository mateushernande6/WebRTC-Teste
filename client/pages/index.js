import {Box, Text, Flex} from '@chakra-ui/react'
import VideoPlayer from '../src/components/VideoPlayer'
import Notifications from '../src/components/Notifications'
import Options from '../src/components/Options'


export default function Home() {
  return (
    <Flex direction='column' align='center'>
      <Box marginTop='20px' bgColor='#ffc' h='50px' w='300px' border='3px solid gray' borderRadius='20px' textAlign={'center'} lineHeight={'40px'}>
        <Text fontSize='30px' fontWeight='bold'>
          Video chat 
        </Text>
      </Box>

      <VideoPlayer/>

      <Options>
        <Notifications/>
      </Options>

    </Flex>
  )
}
