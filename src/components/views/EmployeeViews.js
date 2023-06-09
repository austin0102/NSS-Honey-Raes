import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerDetails } from "../Customers/CustomerDetails.js"
import { TicketContainer } from "../tickets/TicketContainer.js"
import { EmployeeList } from "../Employees/EmployeeList.js"
import { EmployeeDetails } from "../Employees/EmployeeDetails.js"
import { CustomerList } from "../Customers/CustomerList.js"
import { Profile } from "../Profile/Profile.js"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketContainer />} />
                <Route path="employees" element={ <EmployeeList />} />
                <Route path="employees/:employeeId" element={<EmployeeDetails/>} />
                <Route path="customers" element={ <CustomerList />} />
                <Route path="customers/:customerId" element={<CustomerDetails/>} />
                <Route path="profile" element={<Profile />} />
				
            </Route>
        </Routes>
    )
}