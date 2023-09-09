import { Box, Button, Heading, Stack} from "@chakra-ui/react";
import { Summary } from "./Summary";
import { LancamentosList } from "./Lancamentos/LancamentosList";
import { Top5 } from "./Top5";
export function Dashboard() {
    return (<>
        <Stack spacing={5}>
            <Heading as='h3' size='lg' margin="0 0 1rem 0 ">
                Dashboard
            </Heading>
        </Stack>
        <Summary />

        <Box bg="yellow.500" padding={"1rem"} margin={'1rem 0'} color={"gray.900"} borderRadius={"10px"}>
            <Heading as='h3' size='md'>
                O que você deseja fazer?
                <Button bg={'gray.900'} color={'gray.100'} _hover={{ bg: 'gray.700' }} variant="solid" size="sm" marginLeft={'1rem'}>
                    F2 - Lançamento
                </Button>
                <Button bg={'gray.900'} color={'gray.100'} _hover={{ bg: 'gray.700' }} variant="solid" size="sm" marginLeft={'1rem'}>
                    F3 - Ativar Cartão
                </Button>
                <Button bg={'gray.900'} color={'gray.100'} _hover={{ bg: 'gray.700' }} variant="solid" size="sm" marginLeft={'1rem'}>
                    F4 - Fechar cartão
                </Button>
                <Button bg={'gray.900'} color={'gray.100'} _hover={{ bg: 'gray.700' }} variant="solid" size="sm" marginLeft={'1rem'}>
                    F5 - Cadastrar Cliente
                </Button>
                <Button bg={'gray.900'} color={'gray.100'} _hover={{ bg: 'gray.700' }} variant="solid" size="sm" marginLeft={'1rem'}>
                    F6 - Estorno
                </Button>
            </Heading>
        </Box>
        <Stack spacing={'1rem'} direction={['column', 'row']} align={'stretch'}>
            <LancamentosList />
            <Top5 />
        </Stack>
    </>

    )

}