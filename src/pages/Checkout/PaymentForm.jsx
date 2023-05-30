import React from 'react'
import {Typography,Button,Divider} from '@mui/material'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Review from './Review'
import { useDispatch } from 'react-redux'
import { Flex,useToast} from '@chakra-ui/react'
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_public_key)
const PaymentForm = ({checkoutToken,backStep,handleCaptureCheckout,shippingData,nextStep,timeOut,ApplyCode}) => {
  const dispatch=useDispatch()
  const toast=useToast()

  const handleSubmit=async(event,elements,stripe)=>{
    event.preventDefault()
    if(!stripe || !elements) return
    const cardElement=elements.getElement(CardElement)
    const {error,paymentMethod}=await stripe.createPaymentMethod({type:'card',card:cardElement})
    if(error){
      console.log(error)
      toast({
        title: error.type,
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })

    }else{
      const orderData={
        line_items:checkoutToken.line_items,
        customer:{firstname:shippingData.firstName,lastname:shippingData.lastName,email:shippingData.email},
        shipping:{name:'Primary',
        street:shippingData.address1,
        town_city:shippingData.city,
        county_state:shippingData.shippingSubdivision,
        postal_zip_code:shippingData.zip,
        country:shippingData.shippingCountry,
      },
      fulfillment:{shipping_method:shippingData.shippingOption},
      payment:{
        gateway:'stripe',
        stripe:{
          payment_method_id:paymentMethod.id
        }
      }
      }
      dispatch(handleCaptureCheckout(checkoutToken.id,orderData))
      timeOut()
      nextStep()
    }
  }
  return (
    <>
    <Review checkoutToken={checkoutToken} ApplyCode={ApplyCode}/>
    <Divider/>
    <Typography variant="h6" gutterBottom style={{margin:'20px 0'}}>Payment Method</Typography>
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({elements,stripe})=>(
          <form onSubmit={(e)=>handleSubmit(e,elements,stripe)}>
            <CardElement/>
            <Flex justify='space-between' mt={4}>
            <Typography color='grey'>Hint:4242 4242 4242 4242</Typography>
            <Flex gap={2}>
            <Typography color='grey'>Hint:04/24</Typography>
            <Typography color='grey'>Hint:242</Typography>
            <Typography color='grey'>Hint:42424</Typography>
            </Flex>
            </Flex>
            <br/><br/>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.total.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
      </ElementsConsumer>
    </Elements>
    </>
  )
}
export default PaymentForm