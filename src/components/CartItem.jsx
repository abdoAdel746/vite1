import React from "react";
import { Context, useContext } from "../context/Context";
import { Flex, Text, Button, IconButton, Image, Input } from "@chakra-ui/react";
import { MinusIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";

const CartItem = (probs) => {
  const { product } = probs;
  const { increase, decrease, removeItem, cartItemCount } = useContext(Context);
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={2}
        borderBottom="1px solid #ccc"
      >
        <Image src={product.img_src} alt={product.name} boxSize="50px" />
        <Text>{product.name}</Text>
        <Text>{product.price * product.count}</Text>

        <Flex alignItems="center">
          <IconButton
            icon={<MinusIcon />}
            aria-label="Decrement"
            size="sm"
            onClick={() => decrease(product)}
          />

          <Input value={product.count} w="80px" isReadOnly textAlign="center" />
          <IconButton
            icon={<AddIcon />}
            aria-label="Increment"
            size="sm"
            onClick={() => increase(product)}
          />
        </Flex>

        <Button
          size="sm"
          variant="ghost"
          onClick={() => removeItem(product.id)}
        >
          {/* {cartItemCount} */}
          <CloseIcon />
        </Button>
      </Flex>


      {/* <CartCard imgSrc="image1.jpg" imgName="Product 1" imgQuantity={10} /> */}
    </>
  );
};

export default CartItem;
