import React from "react";
import TableHader from "./TableHeaders";
import TableData from "./TableData";

const TableWrapper = ({users,detail,setDetail}) => {

    return(
        <div id="table-wrapper">

         <TableHader />
         <TableData users={users} setDetail={setDetail} detail={detail}/>

        </div>
    )

}

export default TableWrapper 