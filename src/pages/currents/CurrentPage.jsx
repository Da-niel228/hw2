import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Current.css'

const CurrentPage = () => {

    const token = 'Grk0TrZWZ5qR2yUlDmRzblOcpqHeR9rtJefCPjcW5defc344'
    const[data, setData] = useState([])
    const[isLoading, setIsLoading] = useState(false)

    const getCurrent = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('https://data.fx.kg/api/v1/current', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            let filteredData = response.data
            filteredData = filteredData.filter(item => item.id < 21 )
            setData(filteredData)
            console.log(response.data);  
            console.log(response);  
        } catch (e) {
            console.log(e);
        }finally{
           setIsLoading(false)
        }
    }

    useEffect(() => {
       getCurrent()
    },[])


  return (
    
    <div>
        
        <h2>Курс Валют</h2>
        { isLoading ? 
            <div>Loading...</div>
            :
            <div>
                {data.map((item,idx) => {
                    return(
                        <div key={idx}>
                           <div className='Current-wrap'>
                           
                            <div>{item.title}</div>
                            <div> {item.rates[0].buy_usd}$</div>
                            <div> {item.rates[0].buy_rub}P</div>
                            <div> {item.rates[0].buy_eur}E</div>
                           </div>
                        </div>
                    )
                })}
            </div>
         }
         <a href="/"><input type="button" value="На Главную"/></a>
    </div>
  )
}

export default CurrentPage