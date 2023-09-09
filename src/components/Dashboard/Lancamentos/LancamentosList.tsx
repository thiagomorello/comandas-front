import { Box, Flex, Heading, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { FaArrowRightArrowLeft } from "react-icons/fa6"

export function LancamentosList(){
    return (
            <Box bg="gray.800" shadow={'sm'} padding={"1rem"} color={"gray.100"} borderRadius={"10px"}>
                <Heading as='h3' size='sm' margin="0 0 1rem 0 ">
                    <Flex gap={'1rem'}>
                        <Icon as={FaArrowRightArrowLeft} color={'green.100'} fontSize={'1.3rem'} />
                        <Text>Últimos  Lançamentos</Text>
                    </Flex>
                </Heading>
                <TableContainer>
                    <Table variant='simple' borderColor={"gray.700"}>
                        <Thead color={'gray.100'} borderColor={"gray.700"}>
                            <Tr borderColor={"gray.700"}>
                                <Th color={"gray.100"} borderBottom={'1px'} borderColor={"gray.700"} textAlign={"left"} width={5}>Data</Th>
                                <Th color={"gray.100"} borderBottom={'1px'} borderColor={"gray.700"} textAlign={"left"}>Descrição</Th>
                                <Th isNumeric color={"gray.100"} borderColor={"gray.700"} textAlign={'right'}>Valor</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td borderColor={"gray.700"} width={10}>12/08/2021 12:00:00</Td>
                                <Td borderColor={"gray.700"}>Lucas pegou 1 Vodka Absolut 1000ml Cartão 0001</Td>
                                <Td isNumeric borderColor={"gray.700"} color={'red.300'}>R$ 80,00</Td>
                            </Tr>
                            <Tr>
                                <Td borderColor={"gray.700"} width={10}>12/08/2021 12:02:00</Td>
                                <Td borderColor={"gray.700"}>Lucas pegou 1 Suco Del Valle Uva Cartão 0001</Td>
                                <Td isNumeric borderColor={"gray.700"} color={'red.300'}>R$ 12,00</Td>
                            </Tr>
                            <Tr>
                                <Td borderColor={"gray.700"} width={10}>12/08/2021 12:02:00</Td>
                                <Td borderColor={"gray.700"}>Guilherme fechou o Cartão 0002</Td>
                                <Td isNumeric borderColor={"gray.700"} color={'green.300'}>R$ 150,00</Td>
                            </Tr>
                            <Tr>
                                <Td borderColor={"gray.700"} width={10}>12/08/2021 12:02:00</Td>
                                <Td borderColor={"gray.700"}>Lorena pegou 1 Suco Del Valle Uva Cartão 0001</Td>
                                <Td isNumeric borderColor={"gray.700"} color={'red.300'}>R$ 12,00</Td>
                            </Tr>
                            <Tr>
                                <Td borderColor={"gray.700"} width={10}>12/08/2021 12:02:00</Td>
                                <Td borderColor={"gray.700"}>Lucas pegou 1 Suco Del Valle Uva Cartão 0001</Td>
                                <Td isNumeric borderColor={"gray.700"} color={'red.300'}>R$ 12,00</Td>
                            </Tr>
                            <Tr>
                                <Td borderColor={"gray.700"} width={10}>12/08/2021 12:02:00</Td>
                                <Td borderColor={"gray.700"}>Lucas pegou 1 Suco Del Valle Uva Cartão 0001</Td>
                                <Td isNumeric borderColor={"gray.700"} color={'red.300'}>R$ 12,00</Td>
                            </Tr>

                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>)
}