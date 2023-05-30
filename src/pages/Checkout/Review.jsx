import React,{useEffect, useState} from 'react'
import {Typography,List,ListItem,ListItemText} from '@mui/material'
import { Button, Input } from '@chakra-ui/react'

const Review = ({checkoutToken,ApplyCode}) => {
    const[code,setCode]=useState('')

    const [discountIds,setdiscountIds]=useState([])
    useEffect(()=>{

        if(checkoutToken.discount.product_ids && checkoutToken.discount.product_ids.length>0){

        setdiscountIds(()=>checkoutToken.discount.product_ids)
       
        }

    },[checkoutToken])




  return (
    <>
    <Input   variant='filled' border='1px solid black' borderRadius='10px'     placeholder='Have any discount code?'
    p='10px'
    _placeholder={{ opacity: 1, color: 'teal' }}
    color='teal'
    onChange={(e)=>setCode(e.target.value)}
    ></Input>
    <Button colorScheme='blue' variant='outline' borderRadius='10px' p='10px' m='10px'
    background='blue.50' onClick={()=>ApplyCode(checkoutToken.id,code)}>Apply</Button>
   <Typography variant='h6' gutterBottom>
            Order Summary
        </Typography>
        <List disablePadding>
            {checkoutToken.line_items.map((product)=>(
            <ListItem style={{padding:'10px 0'}} key={product.name}>
                <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>

                {
                   discountIds && discountIds.includes(product.product_id)?
                    (
                <Typography variant='body2'>{`₹${product.line_total.raw/2}`}</Typography>
                ):(<Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>)
}
                </ListItem>
            ))}
            <ListItem style={{padding:'10px 0'}}>
                <ListItemText primary='Total'/>
                <Typography variant='subtitle1' style={{fontWeight:700}}>
                    {checkoutToken.total.formatted_with_symbol}
                </Typography>
            </ListItem>

</List>
</>
    )
}

export default Review