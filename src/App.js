import React from 'react'
import { Box, Input, FormLabel, Heading, Textarea, Button, } from '@chakra-ui/react'
import { useFileUpload } from 'use-file-upload'
import './App.css'
const App = () => {
  const [file, selectFile] = useFileUpload()
  return (
    <>
      <Box
        backgroundColor={'#3182ce'}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={5}>
          <Box
            boxShadow={"0px 0px 10px #00000029;"}
            backgroundColor={"#fff"}
            width={"450px"}
            padding={"20px"}>
            <Box>
              <Heading>Contact Us</Heading>

              <Box >
                <FormLabel>Your Name</FormLabel>
                <Input placeholder='Your Name' />
              </Box>
              <Box mt={2}>
                <FormLabel>Phone No</FormLabel>
                <Input placeholder='Phone No' />
              </Box>
              <Box mt={2}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
              </Box>
              <Box mt={2}>
                <FormLabel>Address</FormLabel>
                <Textarea placeholder='Address' />
              </Box>
              <Box mt={2}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder='Message' />
              </Box>
              <Box mt={2}>
                <Button colorScheme='blue' variant='solid'
                  onClick={() => {
                    selectFile()
                  }}>Upload Image</Button>
              </Box>
              <Box mt={2}>
                {
                  file ? (
                    <Box
                      width={"150px"}
                      mt={2}>
                      <img src={file.source} alt='preview' />
                    </Box>
                  ) : null
                }
              </Box>
              <Box textAlign={"center"} mt={2}>
                <Button colorScheme='blue' variant='solid'>Submit</Button>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App