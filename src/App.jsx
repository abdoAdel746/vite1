// import { Props } from "./components/Props";
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
  Spacer,
  Image,
  Container,
  extendTheme,
  withDefaultColorScheme,
  background,
  ListItem,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import List from "./components/List";
import Cart from "./components/Cart";
import NavBar from "./components/Navbar";
import { Context } from "./context/Context";
import { data } from "./data";
import { Route, NavLink } from "react-router-dom";

function App() {
  const [state, setState] = useState({
    data: data,
    cart: [],
  });

  const AddToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });
  };

  const increase = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );

  const cartItemTotalPrice = state.cart.reduce(
    (acc, data) => (acc += data.price * data.count),
    0
  );

  return (
    <>
      <Context.Provider
        value={{
          state: state,
          AddToCart,
          increase,
          decrease,
          removeItem,
          cartItemCount: cartItemCount,
          cartItemTotalPrice: cartItemTotalPrice,
        }}
      >
        <NavBar />
        <List />
      </Context.Provider>
    </>
  );
}

export default App;
