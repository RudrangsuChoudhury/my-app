import React from 'react'
import { Flex,Image,Box,Text,useColorMode } from '@chakra-ui/react'
import Color from './Color'
import { RxCross1 } from 'react-icons/rx';

import { removeFromCompare } from '../reducers/compareSlice';
import { useDispatch } from 'react-redux';
import ReactStars from 'react-rating-stars-component';


const CompareCard = (props) => {
    const { colorMode } = useColorMode();
    const str = props.color;
const strArr = str.split(' ');
const dispatch = useDispatch();

const handleRemove = () => {

  dispatch(removeFromCompare(props.id))
}
  return (
    <Flex
          px="20px"
          py="10px"
          bgGradient={
            colorMode === 'light'
              ? 'linear(to-r,white,white)'
              : 'linear(90deg, rgb(40 134 134) 0%, rgb(22 85 102) 100%)'
          }
          w="300px"
          borderRadius={10}
          direction="column"
          position="relative"
          rowGap={5}
          align="start"
        >
          <Image
            src={props.src}
            boxSize="70%"
            alignSelf="center"
          />
          <Box
            as={RxCross1}
            w="20px"
            h="20px"
            ml="10px"
            mt="10px"
            cursor="pointer"
            position="absolute"
            top="2%"
            left="83%"
            onClick={()=>handleRemove()}
          />
          <Text
            color="1c1c1b"
            fontSize="15px"
            lineHeight="22px"
            fontWeight="500"
          >
           {props.name}
          </Text>

          <Text fontSize="15px" lineHeight="22px" fontWeight="400">
        {props.price}
          </Text>

            <Flex
              justify="space-between"
              align="center"
              p="10px 0px"
               w='100%'
              borderTop="1px solid rgba(0,0,0,0.1)"
            >
                <Text fontWeight='bold'>Brand</Text>
                <Text>{props.brand}</Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              p="10px 0px"
               w='100%'
              borderTop="1px solid rgba(0,0,0,0.1)"
            >
                <Text fontWeight='bold'>Type</Text>
                <Text>{props.Type}</Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              p="10px 0px"
               w='100%'
              borderTop="1px solid rgba(0,0,0,0.1)"
            >
               <Text fontWeight='bold'>Rating</Text>
               <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={props.rating}
                isHalf={true}
                edit={false}
              />
            </Flex>

            <Flex

              align="center"
              p="10px 0px"
              borderTop="1px solid rgba(0,0,0,0.1)"
              w='100%'
              justify='space-between'


            >
                <Text fontWeight='bold'>Color</Text>
                <Box display='flex' columnGap={2}>
                {
                    strArr.map((item,index)=>{

                        return <Color color={item} key={index}/>
                    })

                }
                </Box>

            </Flex>



        </Flex>
  )
}

export default CompareCard