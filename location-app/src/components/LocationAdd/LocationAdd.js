import React, { useState, useEffect }from "react";
import PostForm from "../PostForm/PostForm";

function LocationAdd(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [message, setMessage] = useState("");

    const handleAdd = (city, district, pop) => {
        console.log("City:", city);
        console.log("District:", district);
        console.log("Pop:", pop);
        
        fetch('/api/locations',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                city: city,
                district: district,
                pop: pop
            })
        })
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setMessage(result);
            },
            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
        )
    };
    if(error){
        return(
            <div>
                <div>Error!!</div>
                <PostForm onAdd={handleAdd}></PostForm>
                
            </div>
        ) 
    }else{
        return(
            <div>
                {isLoaded && message && (
                    <div className="message">{message.message}</div>
                )}
                <PostForm onAdd={handleAdd}></PostForm>
                
            </div>
        )
    }
   
}

export default LocationAdd;