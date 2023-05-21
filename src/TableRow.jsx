import React from "react";

const TableRow = ({user,detail,setDetail}) => {

    return(
        
        <tr className="data-row" onClick={() => {setDetail(user)}}>
            <td className="column1">{user.id}</td>
            <td className="column1">{user.firstName}</td>
            <td className="column1">{user.lastName}</td>
            <td className="column1">S{user.email}</td>
            <td className="column1">{user.phone}</td>
         </tr>

    )
}

export default TableRow