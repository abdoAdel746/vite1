import React from "react";
import {
  SimpleGrid,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Image,
  Container,
} from "@chakra-ui/react";

export const Props = ({ products }) => {
  const size_product = ["s", "m", "l", "xl"];

  return (
    <>
      <Container
        p={"10em"}
        maxW={"100%"}
        h={"100%"}
        align={"center"}
        bg={"rgba(0, 0, 0, 0.04)"}
        sx={{
          "@media (max-width: 800px)": {
            padding: "5em",
            "padding-top": "10em",
          },
          "@media (min-width: 375px) and (max-width: 500px)": {
            padding: "2em",
            "padding-top": "10em",
          },
        }}
      >
        <SimpleGrid
          align="center"
          spacing={10}
          templateColumns="repeat(auto-fill, minmax(30%, 1fr))"
          gridRowGap={"10em"}
          sx={{
            "@media (max-width: 700px)": {
              "grid-template-columns": " repeat(auto-fill, minmax(50%, 1fr))",
            },
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              shadow={"0"}
              borderRadius="20"
              h={"32em"}
              bg={""}
              transition={".2s ease-in-out"}
              sx={{
                background: "transparent",
              }}
              _hover={{
                filter: " drop-shadow(11px 33px 20px #00000024)",
                background: "#d2b572",
                color: "white",
                cursor: "pointer",
                "& > .add_card": {
                  color: "#373737",
                },
              }}
            >
              <CardHeader
                h={"100%"}
                sx={{
                  top: "18em",
                }}
              >
                <Box h={"100%"} pos={"relative"}>
                  <Box
                    sx={{
                      height: "24px",
                      position: "absolute",
                      background:
                        "radial-gradient(circle, rgb(0 0 0 / 41%) 0%, rgb(0 0 0 / 0%) 83%)",
                      width: "73%",
                      left: "13%",
                      bottom: "0px",
                      "border-radius": "47% 51% 45% 50%/53% 54% 41% 45%",
                      // transform: "skewX(13deg)",
                    }}
                  >
                    <Image
                      objectFit="cover"
                      src={product.img_src}
                      alt="Chakra UI"
                      pos={"absolute"}
                      sx={{
                        position: "absolute",
                        top: "-19em",
                        height: "20em",
                        // "width": "38em",
                        overflow: "visible",

                        // filter: "drop-shadow(0 23px 11px rgba(0, 0, 0, 0.4))",
                      }}
                    />
                  </Box>
                </Box>
              </CardHeader>

              <CardBody>
                <Heading
                  size="lg"
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                >
                  {product.name}
                </Heading>
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  {product.describtion}
                </Text>
              </CardBody>

              <CardFooter sx={{}}>
                <Flex align="Center">
                  {size_product.map((s) => (
                    <Box
                      p="1"
                      textTransform={"uppercase"}
                      key={s}
                      borderBottom={
                        product.size == s ? "1px solid black" : "none"
                      }
                    >
                      {s}
                    </Box>
                  ))}
                </Flex>

                <Flex
                  align="Center"
                  sx={{
                    flex: "auto",
                    "justify-content": "flex-end",
                  }}
                >
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    {product.price}$
                  </Text>
                </Flex>
              </CardFooter>
              <Button
                className="add_card"
                borderRadius="10em"
                colorScheme="red"
                variant={"outline"}
                boxShadow={"2xl"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                alignItems={"center"}
                p={"1em"}
                sx={{
                  color: "#d2a32d",
                  width: "50%",
                  margin: "20px auto",
                }}
              >
                add to card
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* <Button_cart /> */}
    </>
  );
};
