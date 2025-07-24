import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import SearchResult from './components/SearchResults/SearchResult'
export const BASE_URL = "http://localhost:9000"

function App() {

  const [data, setData] = useState(null)
  const [loding, setLoadig] = useState(false)
  const [error, setError] = useState(null)
  const[filterdata,setFilterData ] =useState(null)
  const[selectedButton,setSelectedButton] = useState("all")


  ///useEffect For Showing Fatching Data From server.
  useEffect(() => {

    const fatchData = async () => {
      setLoadig(true)
      try {
        const response = await fetch(BASE_URL);
        const jsonData = await response.json()
        setData(jsonData);
        setFilterData(jsonData)
        setLoadig(false)
      }
      catch (err) {
        setError("Unable to fatch data")
      }
    }
    fatchData();

  },[])
  ///useEffect For Showing Fatching Data From server Ens Here.

  //Functionality of serch box
  const searchFood = (event)=>{
    const searchValue=event.target.value

  if(searchValue === ""){
    setFilterData(null);
  }

  const filter = data?.filter((food)=>
    food.name.toLowerCase().includes(searchValue.toLowerCase())
  )  
  setFilterData(filter)
}
 //Functionality of serch box ends Here..

 //Food Category selection by Button
 const filterFood =(type)=>{
  if (type === "all"){
    setFilterData(data);
    setSelectedButton("all")
    return;
  }
  const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
  )  
  setFilterData(filter)
  setSelectedButton(type)
 }
 //Food Category selection by Button ends Here..
 
 const filterBtns = [
  {
    name:"All",
    type:'all'
  },
  {
    name:"Breakfast",
    type:'breakfast'
  },
  {
    name:"Lunch",
    type:'lunch'
  },
  {
    name:"Dinner",
    type:'dinner'
  },
 ]
  if (error) return <div>{error}</div>
  if (loding) return <div>Loading...</div>

  return (<>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder='Search Food' />
        </div>
      </TopContainer>
      <FilterContainer>
        {
          filterBtns.map((value)=>(
            <Button isSelected={value.type === selectedButton} key={value.name} onClick={()=>filterFood(value.type)}>{value.name}</Button>
          ))
        }
        {/* <Button onClick={()=>filterFood("all")}>All</Button>
        <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
        <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
        <Button onClick={()=>filterFood("dinner")}>Dinner</Button> */}
      </FilterContainer>
    </Container>
    <SearchResult data={filterdata}/>
    </>
  )
}

export default App

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;

`
const TopContainer = styled.section`
height: 140px;
display: flex;
flex-direction: r;
justify-content: space-between;
padding: 16px;
align-items: center;
.search{
 input{
  border: 1px solid red;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder{
    color: white;
  }
 }
}
 @media (0 < width < 600px) {
  flex-direction: column;
  height: 80px;
 }
`
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 4px;
  box-sizing: border-box;
  gap: 12px;
  padding: 40px;
`
export const Button = styled.button` 
  background: ${({isSelected})=>(isSelected ? "#f22f2f" : "#ff4334")};
  outline: 1px solid ${({isSelected})=>(isSelected ? "white" : "#ff4334")} ;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  &:hover{
    background-color: #a91010;
  }
`
