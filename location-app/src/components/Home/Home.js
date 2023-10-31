import React from "react";

function Home(){
    const style = {
        fontSize: "24px",      
        fontWeight: "bold",   
        fontStyle: "italic", 
        color: "black",       
        backgroundColor: "white",  
        padding: "10px",      
        border: "2px solid black",     
        borderRadius: "5px",  
        textAlign: "center"    
    };
    return(
        <div style={style}>
            Welcomeee!!!
        </div>
    )
}

export default Home;