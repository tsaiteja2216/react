import { useEffect, useState } from 'react';
import './App.css';

import Search from './Search';
import TableWrapper from './TableWrapper';
import Details from './Details';

const UsersUrl = "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";


function App() {

  const [ list, setList] = useState([])
  const [ detail, setDetail] = useState(null)
 

  useEffect(() => {
    getUser(UsersUrl)
  },[])
  
const getUser = async (url) => {

  const response = await fetch(url)
  const data = await response.json()
  
  setList(data)
}


return (

  <main>
    <div className='table-section'>
      <Search setList={setList} list={list} />
      <TableWrapper users={list} setDetail={setDetail} detail={detail}/>
    </div>
    <Details detail={detail}/>
  </main>
)

}


export default App;
