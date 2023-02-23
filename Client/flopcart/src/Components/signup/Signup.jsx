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
    FormErrorMessage,
    Link,
    Select,
    HStack

  } from '@chakra-ui/react'

  import Login from './Login'

const Signup = () => {

    
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
         <Button
         mt="8px"
        _hover={{ bg: 'white' }}
        fontWeight="500"
        marginBottom="2"
        bg="white"
        textAlign="center"
        onClick={onOpen}
        color="#2874f0" fontSize='14px'
      >
        Sign Up
      </Button>
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
              <Box height="32rem" bg="#2874f0" width="16rem" p="35px">
                <Text fontWeight="600" color="white" fontSize="2xl">
                  Looks like you're new here!
                </Text>
                <Text
                  fontWeight="600"
                  marginTop="15px"
                  color="#Dbdbdb"
                  fontSize="1xl"
                >
                  Sign up with your email
                  <br /> address to get started
                </Text>
                <Image
                  marginTop="6rem"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  alt="image"
                />
              </Box>
              <Box  height="32rem" px="30px" pb="30px" pt="30px" maxW="28rem" color="#878787">
                <FormControl isRequired>
                    <HStack> <FormLabel fontSize="xs">First Name</FormLabel>
                  <Input
                    htmlSize={15} width='auto'
                   size="xs"
                    color="black"
                    marginTop="-3"
                    name="first "
                    variant="flushed"
                    placeholder="Enter First Name"
                
                    required
                  />
                  <FormLabel fontSize="xs" >Last Name</FormLabel>
                  <Input
                    htmlSize={15} width='auto'
                    size="xs"
                    color="black"
                    marginTop="-3"
                    name="Last Name "
                    variant="flushed"
                    placeholder="Enter Last Name"
                
                    required
                  />
                  
                   </HStack>
                 
                
                  

                  <FormLabel fontSize="xs" marginTop="5">Email</FormLabel>
                  <Input
                  htmlSize={25} width='auto'
                    size="xs"
                    type="email"
                    color="black"
                    marginTop="-3"
                    name="email"
                    variant="flushed"
                    placeholder="Enter Email Address"
                   
                    required
                  />
                 <FormErrorMessage>Email is required.</FormErrorMessage>
                  <FormLabel fontSize="xs" marginTop="5">Gender</FormLabel>
                  <Box w="150px"> <Select size="xs" placeholder='Select Gender'
                   color="black"
                   marginTop="-3"
                   variant="flushed"
                   
                  required>
                    <option  value='option1'>Male</option>
                    <option value='option2'>Female</option>
                    </Select></Box>
                 
                  {/* <Input
                    color="black"
                    marginTop="-3"
                    name="password"
                    variant="flushed"
                    placeholder="Enter Gener"
                   
                    required
                  /> */}
                 
                  <FormLabel fontSize="xs" marginTop="5"> Enter Mobile Number</FormLabel>
                  <Input
                   htmlSize={25} width='auto'
                   size="xs"
                   
                    color="black"
                    marginTop="-3"
                    name="mobile"
                    variant="flushed"
                    placeholder="Enter Mobile Number"
                    type="number"
                   
                    required
                  />
                 
                  <FormLabel fontSize="xs" marginTop="5">Password</FormLabel>
                  <Input
                   htmlSize={25} width='auto'
                   size="xs"
                    
                    color="black"
                    marginTop="-3"
                    name="password"
                    variant="flushed"
                    type="password"
                    placeholder="Enter Password"
                   
                    required
                  />
                

                  <Text marginTop="6"  fontSize="xs">
                    By continuing, you agree to Flipkart's{' '}
                    <Link color="#2f74f0" href="">
                      Terms of Use{' '}
                    </Link>
                    and{' '}
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
                    CONTINUE
                  </Button>
                  <Button
                  
                    marginTop="2"
                   
                    p="6"
                    rounded="md"
                    borderRadius="0.5"
                    padding="6"
                    color="#2f74f0"
                    bg="#fff"
                    width="16.7rem"
                    _hover={'#fff'}
                  >
                    Existing User?{<Login />}
                  </Button>
                </FormControl>
              </Box>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Signup