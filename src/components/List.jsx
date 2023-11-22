import React from "react";
import { Context, useContext } from "../context/Context";
import  ListItem  from "./ListItem";
import { SimpleGrid, Container } from "@chakra-ui/react";
const List = () => {
  const { state } = useContext(Context);

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
          {state.data.map((product) => (
            <ListItem key={product.id} product={product} cart={state.cart} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default List;
