import React from "react";
import TableRow from "./TableRow";

const TableData = ({users,detail,setDetail}) => {

    return (

        <div id="table-data">
            <table>
                <tbody>

                {users.map((user) => {
                   return (<TableRow user={user} key={user.phone} setDetail={setDetail} detail={detail} />)
                })}

                </tbody>
            </table>
        </div>        

    )
                        

}

export default TableData