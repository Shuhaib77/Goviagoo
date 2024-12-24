import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Card1 from '../components/cards/Card1'
import Card3 from '../components/cards/Card3'
import Footer from '../components/Footer'
import Card4 from '../components/cards/Card4'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { destinationById } from '../../Redux/destinationSlice'

function Destinationdetail() {
  const {dataById}=useSelector((state)=>state.destination)
  const dispatch=useDispatch()
  const {id}=useParams()
   console.log(id,"kjj");
   
  useEffect(()=>{
    dispatch(destinationById(id))
  },[])
  
  console.log(dataById.name,"byy iddd");
  
  return (
    <>
        <div>
          <Header/>
        </div>
        <div>
          <Banner image={dataById.image}/>
        </div>
        
        <div>
          <Card1 heading={"Explore destinattion"}
          paragraph={"Facilisi vulputate malesuada libero vitae fusce placerat dignissim blandit. "}
          icons={{
            name: "Go toMap",
            icon: (
              <i
                class="fa-solid fa-arrow-right-long fa-xl ml-3"
                style={{ color: "#000000" }}
              ></i>
            ),
          }}/>
        </div>
        <div>
        <Card4  dataById={dataById}/>
        </div>
        <div>
        <Card3 />
        </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Destinationdetail