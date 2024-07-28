import { ArrowDownIcon, ArrowLeftIcon, ArrowUpIcon, Box, Center, Heading, HStack, Icon, Input, InputField, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from "react-native";


function Item(): JSX.Element {

    const [type, setType] = useState("#0F7019");

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1} >
            <Box bgColor="#292B37" width="$full" height={282} borderBottomRightRadius={20} borderBottomLeftRadius={20} >
                <TouchableOpacity activeOpacity={0.5}>
                    <Box 
                        backgroundColor="#0F111D" width={50} height={50} borderRadius={50} 
                            justifyContent="center" alignItems="center"
                            top={20}
                            ml={20}
                        >
                        <Icon as={ArrowLeftIcon} size="xl" color="#fff"/>
                    </Box>
                </TouchableOpacity>

                <Box>
                    <Center>
                        <Heading color="#fff" fontSize={22}>
                            Controle de estoque
                        </Heading>
                        <Text my={10} fontWeight="bold" color="#fff" fontSize={20}>
                            FA-101-4197
                        </Text>
                    </Center>

                    <Box ml={25} gap={15} >
                        <Text color="#fff" fontWeight="bold" fontSize={17}>
                            Agulha de raqui
                        </Text>

                        <Text color="#fff" fontWeight="bold" fontSize={17}>
                            Quantidade padronizada: 5
                        </Text>

                        <Text color="#fff" fontWeight="bold" fontSize={17}>
                            Quantidade Atual: 5
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Center mt={60} width="$full">
                <HStack gap={40}>
                    <TouchableOpacity onPress={() => setType("#0F7019")}>
                    <Box backgroundColor="#0F7019" flexDirection="row" width={130} height={50} justifyContent="center" alignItems="center" borderRadius={8} gap={5}>
                        <Icon as={ArrowUpIcon} color="#fff" size="xl"/>                         
                        <Text color="#fff" fontWeight="bold" fontSize={17}>
                           Entrada
                        </Text>
                    </Box>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setType("#890000")}>
                    <Box backgroundColor="#890000" flexDirection="row" width={130} height={50} justifyContent="center" alignItems="center" borderRadius={8} gap={5}>
                        <Icon as={ArrowDownIcon} color="#fff" size="xl"/>                         
                        <Text color="#fff" fontWeight="bold" fontSize={17}>
                           Saída
                        </Text>
                    </Box>
                    </TouchableOpacity>
                </HStack>

                <Box my={30}>
                    <Input width={300} height={50} $focus-borderColor="#fff" borderRadius={8} bgColor="#ffff" >
                        <InputField placeholder="Quantidade de entrada ou saída"  fontWeight="bold" placeholderTextColor="#000" keyboardType="numeric"/>
                    </Input>
                </Box>
                
                <TouchableOpacity activeOpacity={0.6}>
                    <Box width={300} justifyContent="center" alignItems="center" backgroundColor="#292B37" height={50} borderRadius={8}>
                        <Text color={type} fontWeight="bold" fontSize={17}>
                            Confirmar
                        </Text>
                    </Box>
                </TouchableOpacity>
            </Center>
        </Box>
        </TouchableWithoutFeedback>
    );
}

export default Item;