import React from "react";

const TableHader = () => {

    return (
        <div id="table-headers">
        <table>
            <thead>
                <tr>
                    <th className="column1">Id</th>
                    <th className="column2">FirstName</th>
                    <th className="column3">LastName</th>
                    <th className="column4">Email</th>
                    <th className="column5">Phone</th>
                </tr>
            </thead>
        </table>
    </div>
    )
}

export default TableHader