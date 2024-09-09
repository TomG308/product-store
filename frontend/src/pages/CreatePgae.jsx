import { Box, Container, useColorModeValue, VStack, Heading, Button, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react'
import { useProductStore } from '../store/product';
import { set } from 'mongoose';

const CreatePgae = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast()

  const {createProduct} = useProductStore()
  const handleAddProduct = async () => {
    const {success,message} = await createProduct(newProduct)
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
    setNewProduct({name: "", price: "", image: ""})
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create new product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input 
              type='text'
              value={newProduct.name} 
              placeholder='Product Name' 
              name='name' 
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} 
          />
            <Input 
              type='number'
              value={newProduct.price} 
              placeholder='Product Price' 
              name='price' 
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} 
            />
            <Input 
              value={newProduct.image} 
              placeholder='image URL' 
              name='image' 
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} 
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePgae