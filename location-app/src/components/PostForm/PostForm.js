import React, { useState, useEffect }from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function PostForm({onAdd}) {
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [pop, setPop] = useState("");

    const handlePopChange = (event) => {
        setPop(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    
    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

    const isButtonDisabled = city === "" || district === "" || pop ==="";

    const handleAddClick = () => {
        if (!isButtonDisabled) {
          onAdd(city, district, pop);
          setCity(""); 
          setDistrict("");
          setPop("");
        }
      };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height: '100vh' }}>
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 4, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-city" label="City" variant="outlined" value={city} onChange={handleCityChange}/>
            <TextField id="outlined-district" label="District" variant="outlined" value={district} onChange={handleDistrictChange}/>
            <TextField id="outlined-pop" label="Pop" variant="outlined" value={pop} onChange={handlePopChange}/>
        </Box>
        <Stack spacing={2} direction="row">
            <Button variant="contained" disabled={isButtonDisabled} onClick={handleAddClick}>Add</Button>
        </Stack>
        </div>
    );
}

export default PostForm;
