import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { BiSolidUserPin } from 'react-icons/bi'
import { useCustomer } from '../../contexts/CustomerContext'
import { CreateCustomer } from './CreateCustomer'
export function ListCustomers() {
  const { customers } = useCustomer()
  return (
    <>
      <Box
        bg="gray.800"
        shadow={'sm'}
        padding={'1rem'}
        color={'gray.100'}
        borderRadius={'10px'}
      >
        <Heading as="h3" size="sm" margin="0 0 1rem 0 ">
          <Flex gap={'1rem'} justifyContent={'space-between'}>
            <Text display={'flex'} gap={'1rem'} alignItems={'center'}>
              <Icon
                as={BiSolidUserPin}
                color={'blue.100'}
                fontSize={'1.3rem'}
              />
              Clientes
            </Text>
            <Button
              colorScheme="yellow"
              onClick={() => {
                const event = new KeyboardEvent('keydown', { key: 'F5' })
                document.dispatchEvent(event)
              }}
            >
              Adicionar (F5)
            </Button>
          </Flex>
        </Heading>
        <TableContainer>
          <Table variant="simple" borderColor={'gray.700'}>
            <Thead color={'gray.100'} borderColor={'gray.700'}>
              <Tr borderColor={'gray.700'}>
                <Th
                  color={'gray.100'}
                  borderBottom={'1px'}
                  borderColor={'gray.700'}
                  textAlign={'left'}
                  width={5}
                >
                  ID
                </Th>
                <Th
                  color={'gray.100'}
                  borderBottom={'1px'}
                  borderColor={'gray.700'}
                  textAlign={'left'}
                >
                  Nome
                </Th>
                <Th
                  color={'gray.100'}
                  borderColor={'gray.700'}
                  textAlign={'left'}
                >
                  Email
                </Th>
                <Th
                  color={'gray.100'}
                  borderBottom={'1px'}
                  borderColor={'gray.700'}
                  textAlign={'right'}
                >
                  Telefone
                </Th>
                <Th
                  color={'gray.100'}
                  borderBottom={'1px'}
                  borderColor={'gray.700'}
                  textAlign={'left'}
                >
                  Ação
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers.map((customer) => (
                <Tr key={customer.id}>
                  <Td borderColor={'gray.700'} width={10}>
                    {customer.id}
                  </Td>
                  <Td borderColor={'gray.700'}>{customer.fullName}</Td>
                  <Td borderColor={'gray.700'}>{customer.email}</Td>
                  <Td isNumeric borderColor={'gray.700'}>
                    {customer.phone}
                  </Td>
                  <Td borderColor={'gray.700'}>aqui vai dropdown</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <CreateCustomer />
    </>
  )
}
