import { Heading, Stack } from '@chakra-ui/react'
import { Summary } from './Summary'
import { LancamentosList } from './Lancamentos/LancamentosList'
import { Top5 } from './Top5'
import { MainMenu } from './MainMenu'
export function Dashboard() {
  return (
    <>
      <Stack spacing={5}>
        <Heading as="h3" size="lg" margin="0 0 1rem 0 ">
          Dashboard
        </Heading>
      </Stack>
      <Summary />

      <MainMenu />

      <Stack spacing={'1rem'} direction={['column', 'row']} align={'stretch'}>
        <LancamentosList />
        <Top5 />
      </Stack>
    </>
  )
}
