import React, { useState } from "react"

const YorumEkle = (props) => {
    
    const [yeniYorum, setYeniYorum] = useState ("")
    const {yeniYorumEkle, gonderId } = props;

return (
    <div>
        
            <input type ="text" onChange={(e) => setYeniYorum(e.target.value)}
            value={yeniYorum}/>
            <button onClick={()=> {
            yeniYorumEkle(gonderId, yeniYorum)
            setYeniYorum("")}
            }/>
        
           
       
    </div>
)
}   
export default YorumEkle