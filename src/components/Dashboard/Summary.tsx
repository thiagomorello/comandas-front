import { Box, Center, Flex, Icon, Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";

import { FaMoneyBillTrendUp, FaMoneyCheck } from "react-icons/fa6";
export function Summary(){
    return <StatGroup display={'flex'} gap={"1rem"}>
    <Stat padding={'1rem'} bg={'gray.800'} borderRadius={"10px"}>
        <Flex gap={"1rem"}>
            <Center>
                <Icon as={FaMoneyBillTrendUp} color={'yellow.400'} fontSize={'2rem'} />
            </Center>
            <Box>
                <StatLabel>Vendas hoje</StatLabel>
                <StatNumber>R$ 340,00</StatNumber>
            </Box>
        </Flex>

    </Stat>

    <Stat padding={'1rem'} bg={'gray.800'} borderRadius={"10px"}>
        <Flex gap={"1rem"}>
            <Center>
                <Icon as={FaMoneyBillTrendUp} color={'green.500'} fontSize={'2rem'} />
            </Center>
            <Box>
                <StatLabel>Vendas esse mês</StatLabel>
                <StatNumber>R$ 10.340,00</StatNumber>
            </Box>
        </Flex>

    </Stat>
    <Stat padding={'1rem'} bg={'gray.800'} borderRadius={"10px"}>
        <Flex gap={"1rem"}>
            <Center>
                <Icon as={FaMoneyCheck} color={'blue.400'} fontSize={'2rem'} />
            </Center>
            <Box>
                <StatLabel>Cartões Ativos</StatLabel>
                <StatNumber>10</StatNumber>
            </Box>
        </Flex>

    </Stat>
</StatGroup>
}