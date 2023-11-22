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
// import { Route, NavLink, Router, Routes } from "react-router-dom";
import List from "./components/List";
import Cart from "./components/Cart";
import NavBar from "./components/Navbar";
import { Context } from "./context/Context";
import { data } from "./data";
import { Route, NavLink } from 'react-router-dom';


function App() {
  // const products = [
  //   {
  //     id: 1,
  //     img_src: "/assets/images/d.png",
  //     name: "man hoodie",
  //     describtion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eumearum commodi`,
  //     size: "s",
  //     price: "500",
  //     type: "white",
  //   },
  //   {
  //     id: 2,
  //     img_src: "/assets/images/w.png",
  //     name: "man jaecket",
  //     describtion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eumearum commodi`,
  //     size: "m",
  //     price: "200",
  //     type: "black",
  //   },
  //   {
  //     id: 3,
  //     img_src: "/assets/images/d.png",
  //     name: "white hoodie",
  //     describtion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eumearum commodi`,
  //     size: "l",
  //     price: "100",
  //     type: "white",
  //   },
  // ];

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

  return (
    <>
      {/* <Props products={products} /> */}

      {/* <NavBar /> */}
      <Context.Provider
        value={{ state: state, AddToCart, increase, decrease, removeItem }}
      >
        <NavBar />
       <List />

      </Context.Provider>
    </>
  );
}

export default App;
