import { useEffect, useState } from 'react';
import { Button, Typography } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface CarOption {
    year: number;
    // Add other properties as needed
  }

const CarAdvanceSearch = () => {
   const router = useRouter();
   const [selectedCar, setSelectedCar] = useState<any>('');
    const carOptions = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }
      ];
     
    const handleCarSelection = (event: any, value: CarOption | null) =>{
        if(value) {
            setSelectedCar(value.year)
        }
    }

    const handleSearch = () => {
        console.log("selectedCar",selectedCar)
       // router.push('/carLists')
        //<CarLists obj={selectedCar} />
    }

    return(
        <>
        <Typography variant='h6'>Serach For Car</Typography>        
            
            <Autocomplete
            disablePortal
            options={carOptions}
            sx={{ width: 300 }}
            onChange= {handleCarSelection}
            renderInput={(params) => <TextField {...params} label="Select Cars" />} />
            <Button name="Search" variant="contained" value="Search"><Link
            href={{
                pathname: '/carLists',
                query: {
                    search: selectedCar,
                  },
            }}
            >
            Some text  
            </Link></Button>    
        </>
    );
}
export default CarAdvanceSearch;