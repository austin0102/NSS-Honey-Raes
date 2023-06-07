export const TicketSearch = ({setterFunction}) => {
    return ( 
        <div>

        <input
        onChange={
            (changeEvt) => {
                setterFunction(changeEvt.target.value)
            }
        }
        type="text" placeholder="Enter Search Terms" />
        </div>
    )
}