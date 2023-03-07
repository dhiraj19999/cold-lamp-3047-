import React from "react";
import {
  Box,
  Button,
  Image,
  Img,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Bed.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    id: 1,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kzx1a4w0/track-pant/2/6/n/xl-trackpant9013-vitaan-original-imagbtf2jbm9dygg.jpeg?q=70",
    brand: "FabHomeDecor",
    retail_price: 32157,
  },

  //Second image url
  {
    id: 2,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/slipper-flip-flop/b/k/q/6-slides-a-611bk-footup-black-original-imagm6r3uu8xzcm4.jpeg?q=70",
    brand: "SANTOSH ROYAL FASHION",
    retail_price: 2699,
  },
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/image/200/200/l4a7pu80/mosquito-net/x/v/a/double-bed-machhardani-double-bed-size-6-5ft-x-200-6-5ft-x-145-original-imagf73brgggghtz.jpeg?q=70",
    brand: "Jaipur Print",
    retail_price: 2599,
  },
  {
    id: 4,
    image:
      "https://rukminim1.flixcart.com/image/200/200/jl8bzbk0/glass/c/c/w/stainless-steel-g4-12-limetro-original-imaf8a3zu5mnzfex.jpeg?q=70",
    brand: "Jaipur Print",
    retail_price: 2599,
  },
  {
    id: 5,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
    brand: "FabHomeDecor",
    retail_price: 32157,
  },
  {
    id: 6,
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/cap/k/s/r/free-sticker-speqta-original-imaghxe8gdzca344.jpeg?q=70",
    brand: "JDX",
    retail_price: 5299,
  },
  {
    id: 7,
    image:
      "https://rukminim1.flixcart.com/image/200/200/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70",
    brand: "K&P",
    retail_price: 3579,
  },
];

function Bed() {
  return (
    <div>
      <Box
        display={"flex"}
        mt="30px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        bg="white"
      >
        <Stack
          justifyContent={"space-between"}
          width="25%"
          m="auto"
          textAlign={"center"}
          className="dealsBox"
        >
          <Text
            paddingTop={{ base: "120px", md: "120px", lg: "40px" }}
            fontSize={{ base: "10px", md: "20px", lg: "30px" }}
          >
            Top Deals on Home Decors
          </Text>

          <WrapItem pt="30px">
            <Button
              fontSize={{ base: "6px", md: "9px", lg: "12px" }}
              m={"auto"}
              colorScheme="messenger"
            >
              VIEW ALL
            </Button>
          </WrapItem>
          <Img
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90"
            alt="fg"
            width={"100%"}
          />
        </Stack>
        <Box
          w={{ base: "80%", md: "75%", lg: "84%" }}
          m="auto"
          className="OffSlider"
          h="300px"
        >
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
                    <div className="slider9">
                      <Image
                        src={imageUrl.image}
                        alt="movie"
                        height={"200px"}
                        objectFit="contain"
                        width={"100%"}
                        _hover={{
                          transform: "scale(1.1)",
                          transition: "400ms",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        margin: "auto",
                        marginTop: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Text color={"#388e3c"}>{imageUrl.brand}</Text>
                      <Text color="#A9A9A9">From ₹{imageUrl.retail_price}</Text>
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

export default Bed;
