import { createContext, ReactNode, useContext, useState } from 'react'

type Customer = {
  id: number
  fullName: string
  email: string
  phone: string
}

interface CustomerContextProps {
  customers: Customer[]
  addCustomer: (customer: Omit<Customer, 'id'>) => void
  updateCustomer: (customer: Customer) => void
  deleteCustomer: (id: number) => void
}

const CustomerContext = createContext<CustomerContextProps | undefined>(
  undefined,
)

interface CustomerProviderProps {
  children: ReactNode
}

let customerIdCounter = 1

export const CustomerProvider: React.FC<CustomerProviderProps> = ({
  children,
}) => {
  const [customers, setCustomers] = useState<Customer[]>([])

  const addCustomer = (customer: Omit<Customer, 'id'>) => {
    setCustomers([...customers, { ...customer, id: customerIdCounter++ }])
  }

  const updateCustomer = (updatedCustomer: Customer) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer,
      ),
    )
  }

  const deleteCustomer = (id: number) => {
    setCustomers(customers.filter((customer) => customer.id !== id))
  }

  return (
    <CustomerContext.Provider
      value={{ customers, addCustomer, updateCustomer, deleteCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

export const useCustomer = () => {
  const context = useContext(CustomerContext)
  if (!context) {
    throw new Error('useCustomer must be used within a CustomerProvider')
  }
  return context
}
