import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <Flex bg="black" p={2} color="white" justifyContent="space-between 20px" alignItems="center" gap={"-2px"} marginLeft={'px'} width={"100%"} marginRight={"20px"}>
            <Box  marginLeft={'80px'} flex="1" textAlign='start'>
                © Copyright 2023, All Rights <br/> Reserved by Exponance.
            </Box>
            <Flex justifyContent="flex-end" alignItems="center" flex="1" gap={"20px"} marginLeft={'5px'}>
                <IconButton
                    as={IoLogoInstagram}
                    aria-label="Instagram"
                    variant="ghost"
                    fontSize="40px"
                    color="white"
                    mr={2}
                />
                <IconButton
                    as={FaFacebook}
                    aria-label="Facebook"
                    variant="ghost"
                    fontSize="40px"
                    color="white"
                    mr={2}
                />
                <IconButton
                    as={IoLogoGithub}
                    aria-label="Github"
                    variant="ghost"
                    fontSize="40px"
                    color="white"
                    mr={2}
                />
                <IconButton
                    as={FaLinkedin}
                    aria-label="LinkedIn"
                    variant="ghost"
                    fontSize="40px"
                    color="white"
                />
            </Flex>
        </Flex>
    );
}

export default Footer;
