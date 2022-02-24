import React, {useContext} from 'react'
import {Grid, Box, Text} from '@chakra-ui/react'

import {SocketContext} from '../../pages/SocketContext'

const VideoPlayer = () => {
  const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)

  return (
    <Grid justifyContent={'center'} flexDirection='column' >
      
      {/* Our own video */}

      {!!stream && (
          <Box padding={'10px'} border='2px solid black' margin='10px'>
            <Grid xs={12} md={6} >
              <Text>{name || 'Name'}</Text>
              <video playsInline muted ref={myVideo} autoPlay />
            </Grid>
          </Box>
      )}  

      {/* User's video */}

      {callAccepted && !callEnded && (
        <Box padding={'10px'} border='2px solid black' margin='10px'>
          <Grid xs={12} md={6} >
            <Text>{call.name || 'Name'}</Text>
            <video playsInline  ref={userVideo} autoPlay />
          </Grid>
        </Box>
      )}


    </Grid>
  )
}

export default VideoPlayer