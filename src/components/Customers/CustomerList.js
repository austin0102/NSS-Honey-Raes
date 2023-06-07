import { useEffect, useState } from "react"
import './Customers.css'
import { Customer } from "./Customers"


export const CustomerList = () => {
    const [customer, setCustomer] = useState([])

    useEffect(
        () => {
             fetch(`http://localhost:8088/customers?_expand=user`)
            .then(res => res.json())
            .then((customerArry) => {
                setCustomer(customerArry)
            })
        },
        []
    )

    return <article className="customers">
    {
        customer.map(customer => <Customer key={`customer--${customer.id}`}
            id={customer.id} 
            fullName={customer?.user?.fullName} 
            address={customer.address}
            phoneNumber={customer.phoneNumber}/>)
    }
    </article>
}