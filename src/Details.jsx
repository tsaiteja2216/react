import React from "react";

const Details = ({detail}) => {

   return(
    <div id="info-wrapper">
    <h1>Details</h1>
    
        {detail !== null ? ( 
            <div id="info-content">
                <div><b>User selected:</b> {`${detail.firstName} ${detail.lastName}`}</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readOnly value={detail.description}></textarea>
                    
                </div>
                <div><b>Address:</b> {detail.address.streetAddress}</div>
                <div><b>City:</b> {detail.address.city}</div>
                <div><b>State:</b> {detail.address.state}</div>
                <div><b>Zip:</b> {detail.address.zip}</div>
            </div>
        ) : (
            <p>Click on a table item to get detailed information</p>
        )}

    </div>

   )
}

export default Details