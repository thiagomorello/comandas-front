import { Box, Flex, Heading, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";

export function Top5(){
   return (
    <Box bg="gray.800" shadow={'sm'} padding={"1rem"} color={"gray.100"} borderRadius={"10px"}>
    <Heading as='h3' size='sm' margin="0 0 1rem 0 ">
        <Flex gap={'1rem'}>
            <Icon as={AiFillFire} color={'red.400'} fontSize={'1.3rem'} />
            <Text>Top 5 Clientes</Text>
        </Flex>
    </Heading>
    <TableContainer>
        <Table variant='simple' borderColor={"gray.700"}>
            <Thead color={'gray.100'} borderColor={"gray.700"}>
                <Tr borderColor={"gray.700"}>
                    <Th color={"gray.100"} borderBottom={'1px'} borderColor={"gray.700"} textAlign={"left"} width={5}>#</Th>
                    <Th color={"gray.100"} borderBottom={'1px'} borderColor={"gray.700"} textAlign={"left"}>Cliente</Th>
                    <Th isNumeric color={"gray.100"} borderColor={"gray.700"} textAlign={'right'}>Compras</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td borderColor={"gray.700"} width={10}>1</Td>
                    <Td borderColor={"gray.700"}>Lucas Rodigues</Td>
                    <Td isNumeric borderColor={"gray.700"}>R$ 1.560,00</Td>
                </Tr>
                <Tr>
                    <Td borderColor={"gray.700"} width={10}>2</Td>
                    <Td borderColor={"gray.700"}>Jefferson Backes</Td>
                    <Td isNumeric borderColor={"gray.700"}>R$ 1.460,00</Td>
                </Tr>
                <Tr>
                    <Td borderColor={"gray.700"} width={10}>3</Td>
                    <Td borderColor={"gray.700"}>Guilherme Rossi</Td>
                    <Td isNumeric borderColor={"gray.700"}>R$ 1.320,00</Td>
                </Tr>
                <Tr>
                    <Td borderColor={"gray.700"} width={10}>4</Td>
                    <Td borderColor={"gray.700"}>Lorena Patricia Araujo Peralta</Td>
                    <Td isNumeric borderColor={"gray.700"}>R$ 820,00</Td>
                </Tr>
                <Tr>
                    <Td borderColor={"gray.700"} width={10}>5</Td>
                    <Td borderColor={"gray.700"}>Thiago Roieski Maltezo</Td>
                    <Td isNumeric borderColor={"gray.700"}>R$ 720,00</Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
    </Box>
   ) 
}