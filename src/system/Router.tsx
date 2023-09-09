import { Routes, Route } from 'react-router-dom'
import SignIn from '../components/SignIn/SingIn'
import SidebarWithHeader from '../templates/SidebarWithHeader'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { CustomersDashboard } from '../components/Customers/CustomersDashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/auth" element={<SignIn />} />
      <Route element={<SidebarWithHeader />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<CustomersDashboard />} />
      </Route>
    </Routes>
  )
}
