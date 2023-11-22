import React from "react";
import { Context, useContext } from "../context/Context";
import {
  Flex,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  IconButton,
  Image,
  Input,
} from "@chakra-ui/react";
import {
  DragHandleIcon,
  MinusIcon,
  AddIcon,
  CloseIcon,
} from "@chakra-ui/icons";

const CartCard = ({ imgSrc, imgName, imgQuantity }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p={2}
      borderBottom="1px solid #ccc"
    >
      <Image src={imgSrc} alt={imgName} boxSize="50px" />
      <Text>{imgName}</Text>
      <Flex alignItems="center">
        <IconButton icon={<MinusIcon />} aria-label="Decrement" size="sm" />
        <Input value={imgQuantity} w="80px" isReadOnly textAlign="center" />
        <IconButton icon={<AddIcon />} aria-label="Increment" size="sm" />
      </Flex>
      <Button size="sm" variant="ghost">
        <CloseIcon />
      </Button>
    </Flex>
  );
};

const CartItem = (probs) => {
  const { product } = probs;
  const { increase, decrease, removeItem } = useContext(Context);
  return (
    <>
      {/* <img className="list-item-image" src={product.image} alt={product.name} />
      <div className="list-item-info">
        <span>
          <h3>{product.name}</h3>
          <small>{product.describtion}</small>
        </span>
        <span style={{ display: "flex" }}>
          <span>
            <b>Price:</b> ₺ {product.price} <br />
          </span>
          {product.count > 1 && (
            <>
              <span style={{ marginLeft: "1rem" }}>
                <b>Count: </b>x{product.count}
              </span>
              <span style={{ marginLeft: "1rem" }}>
                <b>Total:</b> ₺ {product.price * product.count}
              </span>
            </>
          )}
        </span>
        <div>
          <button onClick={() => decrease(product)} className="cart-btn">
            {" "}
            -{" "}
          </button>
          <button onClick={() => removeItem(product.id)} className="remove-btn">
            delete
          </button>
          <button onClick={() => increase(product)} className="cart-btn">
            {" "}
            +{" "}
          </button>
        </div>
      </div> */}

      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={2}
        borderBottom="1px solid #ccc"
      >
        <Image src={product.img_src} alt={product.name} boxSize="50px" />
        <Text>{product.name}</Text>
        <Text>
          {product.price * product.count}
        </Text>

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
          <CloseIcon />
        </Button>
      </Flex>

      {/* <CartCard imgSrc="image1.jpg" imgName="Product 1" imgQuantity={10} /> */}
    </>
  );
};

export default CartItem;
