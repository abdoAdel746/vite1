import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import { DragHandleIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Context, useContext } from "../context/Context";

import Cart from "./Cart";
import { FaCartShopping } from "react-icons/fa6";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { cartItemCount,cartItemTotalPrice } = useContext(Context);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} px={"3rem"}>
          <Box textTransform={"capitalize"} fontWeight={"bolder"}>
            shooping website
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Popover>
                <PopoverTrigger>
                  <Button variant={"ghost"} leftIcon={<FaCartShopping />}>
                    Cart
                  </Button>
                </PopoverTrigger>
                <PopoverContent w="30em">
                  <PopoverHeader>Shopping Cart</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Flex direction="column" align="stretch">
                      <Cart />
                    </Flex>
                  </PopoverBody>
                  <PopoverFooter>
                    <Flex
                      direction="row"
                      align={"center"}
                      justifyContent={"space-between"}
                    >
                      <Text>the total item is {cartItemCount} and total quantitu is {cartItemTotalPrice}$</Text>
                      <Button size="sm" colorScheme="teal" isFullWidth>
                        Checkout
                      </Button>
                    </Flex>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
