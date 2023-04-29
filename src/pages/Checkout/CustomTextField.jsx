import React from 'react'
import {TextField,Grid} from '@mui/material'
import { useFormContext,Controller } from 'react-hook-form'
const FormInput = ({name,label}) => {
    const {control}=useFormContext()
  return (
    <Grid item xs={12} sm={6}>
        <Controller

        // control={control}
        // fullWidth
        // name={name}
        // label={label}
        // required={required}
        defaultValue=""

    control={control}
    name={name}

    // rules={{required:required}}
    render={()=>(<TextField label={label} required={true}/>)}

        />
    </Grid>
  )
}

export default FormInput