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
import "./clock.css";
import { GrAccessibility, GrFormNext } from "react-icons/gr";
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
      "http://img5a.flixcart.com/image/watch/s/y/x/co6394a1-cobra-paris-original-imae3ewvtzeazghm.jpeg",
    brand: "Rochees",
    retail_price: 18995,
  },
  {
    id: 2,
    image:
      "http://img5a.flixcart.com/image/watch/a/y/m/r8851116001-maserati-time-original-imaeafe6hf6zvhmm.jpeg",
    brand: "Aries",
    retail_price: 24400,
  },
  //Second image url
  {
    id: 3,
    image:
      "http://img6a.flixcart.com/image/watch/d/3/d/uft-tsw-005-bk-br-t-star-original-imaecgzggrcdhm5x.jpeg",
    brand: "Camerii",
    retail_price: 999,
  },
  {
    id: 4,
    image:
      "http://img5a.flixcart.com/image/watch/a/y/m/r8851116001-maserati-time-original-imaeafe6hf6zvhmm.jpeg",
    brand: "Vizion",
    retail_price: 24400,
  },
  {
    id: 5,
    image:
      "http://img5a.flixcart.com/image/watch/d/n/h/apple-shaped-led-rich-club-original-imaeczhwqgtvecwn.jpeg",
    brand: "Aries",
    retail_price: 999,
  },
  {
    id: 6,
    image:
      "http://img5a.flixcart.com/image/watch/e/j/g/wy16b-alfajr-original-imaecgzzfywury4r.jpeg",
    brand: "Alfajr",
    retail_price: 5495,
  },
  {
    id: 7,
    image:
      "http://img6a.flixcart.com/image/watch/d/r/c/colat-m08-colat-original-imae2ruyfg9zunzb.jpeg",
    brand: "Alfajr",
    retail_price: 4999,
  },
  {
    id: 8,
    image:
      "http://img6a.flixcart.com/image/watch/e/k/d/chrono-blue-oxter-original-imaecv84zttgkfm4.jpeg",
    brand: "Alfajr",
    retail_price: 999,
  },
];

function Deal() {
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <Box onClick={() => onClick()} border="1px solid red">
        <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}>
          {" "}
          <GrFormNext />{" "}
        </h1>
      </Box>
    );
  };

  const CustomRightArrow = ({ className, onClick }) => {
    return (
      <Box onClick={() => onClick()} className={className}>
        <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}>
          {" "}
          <GrFormNext />{" "}
        </h1>
      </Box>
    );
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        {" "}
        // remember to give it position:absolute
        <Button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        />
        <Button onClick={() => next()} />
        <Button onClick={() => goToSlide(currentSlide + 1)}>
          {" "}
          Go to any slide{" "}
        </Button>
      </div>
    );
  };

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
            Pick Your Styles
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
              //customLeftArrow={<CustomRightArrow />}
              dotListClass="custom-dot-list-style"
              //arrows={false}
              //customButtonGroup={<ButtonGroup />}
            >
              {sliderImageUrl.map((imageUrl, index) => {
                return (
                  <div className="slider" key={index}>
                    <div className="slider4">
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

export default Deal;
