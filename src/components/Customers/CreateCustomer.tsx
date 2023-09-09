import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useCustomer } from '../../contexts/CustomerContext'
import { useState, useEffect } from 'react'
type Customer = {
  id: number
  fullName: string
  email: string
  phone: string
}

interface CreateCustomerProps {
  customer?: Customer
}
interface Error {
  message: string
}

export function CreateCustomer({ customer }: CreateCustomerProps) {
  const [fullName, setFullName] = useState(customer?.fullName || '')
  const [email, setEmail] = useState(customer?.email || '')
  const [phone, setPhone] = useState(customer?.phone || '')
  const { addCustomer, updateCustomer } = useCustomer()
  const [errorMsg, setErrorMsg] = useState<Error>()
  const [isCreateCustomerModalOpen, setIsCreateCustomerModalOpen] =
    useState(false)

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'F5') {
        event.preventDefault()
        setIsCreateCustomerModalOpen(true)
      }
    })
    // on press enter, verify required and if its ok, submit
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        // trigger click on submit button
        const submitButton = document.querySelector(
          'button[type="submit"]',
        ) as HTMLButtonElement
        submitButton.click()
      }
    })
  }, [])

  function onCloseCreateCustomerModal() {
    setIsCreateCustomerModalOpen(false)
  }

  const handleSubmit = () => {
    if (customer) {
      updateCustomer({ id: customer.id, fullName, email, phone })
    } else {
      if (!fullName || fullName === '') {
        setErrorMsg({ message: 'Nome é obrigatório' })
      } else if (!phone || phone === '') {
        setErrorMsg({ message: 'Telefone é obrigatório' })
      } else {
        setErrorMsg(undefined)
        addCustomer({ fullName, email, phone })
        setFullName('')
        setEmail('')
        setPhone('')
        onCloseCreateCustomerModal?.()
      }
    }
  }

  return (
    <>
      <Modal
        isOpen={isCreateCustomerModalOpen}
        onClose={onCloseCreateCustomerModal}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent bg={'gray.800'}>
          <ModalHeader>Cadastrar Cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" isRequired>
              <FormLabel>Nome Completo</FormLabel>
              <Input
                type="text"
                borderColor={'gray.500'}
                _focus={{
                  borderColor: 'yellow.500',
                  boxShadow: 'none',
                  outline: 'none',
                }}
                autoFocus={true}
                value={fullName}
                onInput={(e) => setFullName(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl id="name" margin={'1rem 0'} isRequired>
              <FormLabel>Telefone</FormLabel>
              <Input
                type="text"
                borderColor={'gray.500'}
                _focus={{
                  borderColor: 'yellow.500',
                  boxShadow: 'none',
                  outline: 'none',
                }}
                value={phone}
                onInput={(e) => setPhone(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl id="email" margin={'1rem 0'}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                borderColor={'gray.500'}
                _focus={{
                  borderColor: 'yellow.500',
                  boxShadow: 'none',
                  outline: 'none',
                }}
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
              />
            </FormControl>

            {errorMsg && (
              <Alert
                colorScheme="red"
                status="error"
                borderRadius={'10px'}
                color={'gray.900'}
                margin={'1rem 0'}
              >
                <AlertIcon />
                <AlertTitle mr={2}>Erro ao cadastrar cliente!</AlertTitle>
                <AlertDescription>
                  {errorMsg?.message || 'Erro desconhecido'}
                </AlertDescription>
              </Alert>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              type="submit"
              onClick={() => {
                handleSubmit()
              }}
              mr={3}
            >
              Cadastrar
            </Button>
            <Button colorScheme="red">Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
