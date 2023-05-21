import React,{ useState } from "react";

const Search = ({setList,list}) => {
    const [ searchTerm, setSearchTerm] = useState("")

    const userSearch = (e) => {

        const value = e.target.value
        setSearchTerm(value)

        if(searchTerm.length > 0){
            const filteredData = list.filter((user) => {
                return( user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
            })

            setList(filteredData)
        }
    }

    return (
        <form action="/">
            <img src='https://cdn-icons-png.flaticon.com/128/151/151773.png' alt="Search Icon" />
            <input type="text" placeholder="Enter something" name="search-box" id="search-box" onChange={userSearch}/>
        </form>
    )
}

export default Search