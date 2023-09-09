import { BrowserRouter } from 'react-router-dom'
import { Router } from './system/Router'
import { CustomerProvider } from './contexts/CustomerContext'
function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CustomerProvider>
  )
}

export default App
