import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Text,
    Image,
    FormControl,
    Input,
    FormLabel,
  } from '@chakra-ui/react'
  import {Link} from "react-router-dom"
  import Signup from './Signup'
  

  
  
  const Login = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div>
         <Text p='4px 30px' _hover={{bg:""}} textAlign="center" fontSize={'15px'} onClick={onOpen}
        bg="white"
                // h="31px"
                // w="9.5%"
                // p='0px 20px'
                fontWeight="700"
                color="#2874f0"
                ml="19px"
                // pt="2px"
                borderRadius="2px"
                cursor="pointer"
                // border={'1px solid #dbdbdb'}

        >Login</Text>
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        padding="0px"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalBody padding="-1.5">
            <ModalCloseButton
              size="lg"
              color="white"
              marginRight="-3.5rem"
              marginTop="-4"
            />
            <div style={{ display: 'flex' }}>
              <Box height="32rem" bg="#2874f0" width="16rem" padding="35px">
                <Text fontWeight="500" color="white" fontSize="3xl">
                  Login
                </Text>
                <Text
                  fontWeight="500"
                  marginTop="15px"
                  color="#Dbdbdb"
                  fontSize="1xl"
                >
                  Get access to your <br /> Orders, Wishlist and Recommendations
                </Text>
                <Image
                  marginTop="10rem"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  aend="image"
                />
              </Box>
              <Box height="32rem" padding="35" width="24rem" color="#878787">
                <FormControl>
                 
                    <>
                     
                      <FormLabel>Email address</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="email"
                        variant="flushed"
                        placeholder="Enter Email"
                        
                       
                        required
                      />
                      <Text color="red" fontSize="xs">
                      ----
                      </Text>
                    </>
                 

                    <>
                      <FormLabel marginTop="5">Password</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="password"
                        type="password"
                        variant="flushed"
                        placeholder="Enter Password"
                        required
                      />
                      <Text color="red" fontSize="xs">
                      ----
                      </Text>
                    </>
             

                  <Text marginTop="5" fontSize="xs">
                    By continuing, you agree to Flipkart's{' '}
                    <Link color="#2f74f0" href="">
                      Terms of Use
                    </Link>
                    and
                    <Link color="#2f74f0" href="">
                      Privacy Policy.
                    </Link>
                  </Text>

        
                    <Button
    
                      borderRadius="0.5"
                      marginTop="4"
                      padding="6"
                      color="white"
                      bg="#fb641b"
                      width="19.7rem"
                    >
                      Login
                    </Button>
              
                  <Text marginTop="2" marginBottom="2" textAlign="center">
                    OR
                  </Text>
                 
             
                  <Link>
                    <Text
                     display={"flex"}
                     justifyContent="center"
                     alignItems="center"
                      marginTop="2"
                      bg="white"
                      textAlign="center"
                      color="#2f74f0"
                    >
                      New to Flipkart? {<Signup onClose={onClose} />}{' '}
                    </Text>{' '}
                  </Link>
                </FormControl>
              </Box>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      </div>
    )
  }
  
  export default Login