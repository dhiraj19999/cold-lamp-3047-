import React from 'react';
import { Box,Button, Img, Text, WrapItem} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./deal.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {id:1,
    image:
      "http://img5a.flixcart.com/image/short/6/2/h/altght-11-alisha-38-original-imaeh2d5uq9thnyg.jpeg",
      brand:"Alisha",
      retail_price:699
  },
  {id:2,
    image:
      "http://img5a.flixcart.com/image/short/5/z/c/altght4p-39-alisha-38-original-imaeh2d5ar6m55zd.jpeg",
      brand:"Alisha",
      retail_price:1199
  },
  //Second image url
  {id:3,
    image:
      "http://img5a.flixcart.com/image/short/m/g/y/altht-3p-18-alisha-34-original-imaeh2d5zgnh6vsb.jpeg",
      brand:"Alisha",
      retail_price:1000
  },
  {id:4,
    image:
      "http://img5a.flixcart.com/image/short/6/2/h/altght-11-alisha-38-original-imaeh2d5uq9thnyg.jpeg",
      brand:"Alisha",
      retail_price:699
  },
  {id:5,
    image:
      "http://img5a.flixcart.com/image/short/5/z/c/altght4p-39-alisha-38-original-imaeh2d5ar6m55zd.jpeg",
      brand:"Alisha",
      retail_price:1199
  },
  {id:6,
    image:
      "http://img5a.flixcart.com/image/short/u/4/a/altht-3p-21-alisha-38-original-imaeh2d5vm5zbtgg.jpeg",
      brand:"Alisha",
      retail_price:999
  }
  
];

function Deal() {

    return (
        <div> 
        <Box display={"flex"} mt="30px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" p='1' bg='white' >

            <Box width="25%" h="300px" m="auto" textAlign={"center"} className="dealsBox" border={"1px solid black"}>
                <Text paddingTop={{base:"120px", md:"120px", lg:"40px"}}  fontSize={{ base: '10px', md: '20px', lg: '30px' }}>Fashion Top Deals</Text>

                <WrapItem pt="30px">
                    <Button  fontSize={{ base: '6px', md: '9px', lg: '12px' }} m={"auto"} colorScheme='messenger'>
                   
                        VIEW ALL
                
                        </Button>
                </WrapItem>
                <Img   src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90" alt="fg" width={"100%"}/>

            </Box>
            <Box w={{ base: '80%', md: '75%', lg: '84%' }} m="auto" className="OffSlider" border={"1px solid black"} h="300px">
            <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
                <div className='slider3'>
              <img src={imageUrl.image} alt="movie"/>
              </div>
              <div style={{marginTop:"10px"}}>
              <p>{imageUrl.brand}</p>
              <p>From  ₹{imageUrl.retail_price}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
            </Box>
        </Box>
        
            </div>
    );
}

export default Deal;