import { Button, Heading, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CreateCustomer } from '../Customers/CreateCustomer'
export function MainMenu() {
  const [isCreateCustomerModalOpen, setIsCreateCustomerModalOpen] =
    useState(false)

  useEffect(() => {
    // on press F5 setIsCreateCustomerModalOpen(true)
    document.addEventListener('keydown', (event) => {
      if (event.key === 'F5') {
        event.preventDefault()
        setIsCreateCustomerModalOpen(true)
      }
    })
  }, [])

  function onClose() {
    setIsCreateCustomerModalOpen(false)
  }

  return (
    <>
      <Stack
        spacing={'1rem'}
        direction={['column', 'row']}
        align={'stretch'}
        bg="yellow.500"
        padding={'1rem'}
        margin={'1rem 0'}
        color={'gray.900'}
        borderRadius={'10px'}
      >
        <Heading as="h3" size="md">
          O que você deseja fazer?
        </Heading>
        <Button
          bg={'gray.900'}
          color={'gray.100'}
          _hover={{ bg: 'gray.700' }}
          variant="solid"
          size="sm"
          marginLeft={'1rem'}
        >
          F2 - Lançamento
        </Button>
        <Button
          bg={'gray.900'}
          color={'gray.100'}
          _hover={{ bg: 'gray.700' }}
          variant="solid"
          size="sm"
          marginLeft={'1rem'}
        >
          F3 - Ativar Cartão
        </Button>
        <Button
          bg={'gray.900'}
          color={'gray.100'}
          _hover={{ bg: 'gray.700' }}
          variant="solid"
          size="sm"
          marginLeft={'1rem'}
        >
          F4 - Fechar cartão
        </Button>
        <Button
          bg={'gray.900'}
          color={'gray.100'}
          _hover={{ bg: 'gray.700' }}
          variant="solid"
          size="sm"
          marginLeft={'1rem'}
        >
          F5 - Cadastrar Cliente
        </Button>
        <Button
          bg={'gray.900'}
          color={'gray.100'}
          _hover={{ bg: 'gray.700' }}
          variant="solid"
          size="sm"
          marginLeft={'1rem'}
        >
          F6 - Estorno
        </Button>
      </Stack>
      <CreateCustomer />
    </>
  )
}
