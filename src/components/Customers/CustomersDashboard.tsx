import { Heading, Stack } from '@chakra-ui/react'
import { ListCustomers } from './ListCustomers'

export function CustomersDashboard() {
  return (
    <>
      <Stack spacing={5}>
        <Heading as="h3" size="lg" margin="0 0 1rem 0 ">
          Clientes
        </Heading>
      </Stack>
      <ListCustomers />
    </>
  )
}
