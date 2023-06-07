import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList.js"
import { TicketForm } from "../tickets/TicketForm.js"
import { CustomerForm } from "../Profile/CustomerForm.js"
import { TicketEdit } from "../tickets/TicketEdit.js"



export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketList />} />
                <Route path="profile" element={ <CustomerForm />} />
				<Route path="ticket/create" element={ < TicketForm />}/>
                <Route path="tickets/:ticketId/edit" element={ < TicketEdit /> } />
            </Route>
        </Routes>
    )
}