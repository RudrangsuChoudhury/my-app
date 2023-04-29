import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  List,
  ListItem,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import{
  Stepper,
  Step,
  StepLabel,
  Typography,
    CircularProgress,
    Divider,
    Button,
    StepConnector,
    CssBaseline
} from'@mui/material'
import Paper from '@mui/material/Paper';
import { ChevronRightIcon } from "@chakra-ui/icons";
import React,{useState,useEffect} from "react";
// import useStyles from './styles'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import {commerce} from '../../lib/commerce'
import { fetchCart } from '../../reducers/cartSlice';
import {  useSelector,useDispatch } from 'react-redux';
import { handleCaptureCheckout } from "../../reducers/orderSlice";
import { Link,useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
const theme = createTheme();
const steps=['Shipping Address','Payment Details']
const Checkout = () => {
  const navigate=useNavigate()
   const dispatch = useDispatch();
  // handling cart
 const cart = useSelector((state) => state.cart);
 const error=useSelector((state)=>state.error)

    const order=useSelector((state)=>state.order)
const [shippingData,setShippingData]=useState({})
const[isFinished,setIsFinished]=useState(false)
const toast = useToast()
useEffect(() => {
    dispatch(fetchCart());
  },[]);
const[activeStep,setActiveStep]=useState(0)
let Confirmation=()=>order.customer ?(
 <>
 <div>
  <Typography>Thank you for your purchase, {order.customer.firstname}  {order.customer.lastname}</Typography>
  <Divider sx={{my:3}}/>
  <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>

  </div>
  <br/>
  <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>

  </>
):isFinished?(
   <>
 <div>
  <Typography>Thank you for your purchase</Typography>


  </div>
  <br/>
  <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>

  </>

)
:(
  <div>
    <CircularProgress/>
  </div>
);

if(error){
  <>
  <Typography variant="h5">Error:{error}</Typography>
  <br/>
  <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
  </>
}
const [checkoutToken,setCheckoutToken]=useState(null)
useEffect(()=>{
  const generateToken=async()=>{
    try{
      const token=await commerce.checkout.generateToken(cart.id,{type:'cart'})

      setCheckoutToken(token)
      console.log(token)
    }catch(error){

      navigate('/')
    }
  }
  generateToken()
},[cart])




const nextStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep+1)
const backStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep-1)
const next=(data)=>{
  setShippingData(data)
  nextStep()
}
  const timeOut=()=>{
      setTimeout(()=>{
        setIsFinished(true)
      },3000)
    }
const Form=()=>activeStep===0?<AddressForm checkoutToken={checkoutToken} next={next}/>:<PaymentForm
checkoutToken={checkoutToken}
    shippingData={shippingData}
    backStep={backStep}
    handleCaptureCheckout={handleCaptureCheckout}
    nextStep={nextStep}
    timeOut={timeOut}
    ApplyCode={ApplyCode}
    />


    //check discount code
    const ApplyCode=async(id,code)=>{
         try{
      const token=await commerce.checkout.checkDiscount(checkoutToken.id,{code:code})

      setCheckoutToken(token)
      console.log(token)
         }
    catch(error){
      toast({
        title: "An error occurred.",
        description: "Invalid Code",
        status: "error",
        duration: 3000,
        isClosable: true,
      })


    }
  }





  return (
    <>

<Flex  px={60}  >
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Flex  justify='center' p='50px' w='100%'>
           <Paper  sx={{padding:'20px',margin:'10px',marginTop:'3px',marginBottom:'2px',width:'75%'}}>
        <Typography  variant="h4" align="center" sx={{mb:'20px'}}>
          Checkout
        </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((step)=>(
            <Step key={step} sx={{display:'flex',alignItems:'center',fontSize:'20px'}}>
              <StepLabel >{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box mt="30px" mb="50px">
        {activeStep===steps.length?<Confirmation/>: checkoutToken &&<Form/>}
        </Box>
        </Paper>
        </Flex>
        </ThemeProvider>
        </Flex>
        </>
  );
};
export default Checkout;