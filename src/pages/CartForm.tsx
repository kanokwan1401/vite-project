import '../App.css'
import { styled } from '@mui/material/styles';
import NavBarContainer from '../components/NavBar';
import Box from '@mui/material/Box';
import CheckboxLabels from '../components/Checkbox';
import RowRadioPayment from '../components/RadioPayment';
import { ProductMockData } from '../PoductMockData';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ProducType } from '../type';

const CartForm = () => {
  const [searchParams] = useSearchParams()
  const productID = searchParams.get('id')
  const [data, setData] = useState<ProducType | null>(null)
  const newData = ProductMockData.filter((x: any) => x.id == productID)
  console.log(data);

  useEffect(() => {
    setData(newData[0])
  }, [])

  return (
    <Main>
      <NavBarContainer />
      <CartformContainer>
        <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px', margin: '5px' }}>
          <h1 style={{ paddingBottom: '20px' }}>Checkout form</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fugit modi voluptatum voluptas odit, quod qui expedita quaerat quisquam porro! Odio quibusdam sint in reiciendis est eaque quia consequuntur? Ea quis, qui quos consectetur.</p>
        </Box>
        <form style={{ display: 'flex', gap: '36px', margin: '15px' }}>

          <div className='address'>
            <div style={{ borderBottom: '1px solid lightgray', height: '500px' }}>
              <h2 style={{ paddingBottom: '20px' }}>Billing address</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div><label htmlFor="">First name</label></div>
                  <div><input type="text" style={{ width: '270px' }} /></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div><label htmlFor="">Last name</label></div>
                  <div><input type="text" style={{ width: '270px' }} /></div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Username' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='you@example.com' />
                <label htmlFor="">Address</label>
                <input type="text" placeholder='1234 Main St' />
                <label htmlFor="">Address2 (Optional)</label>
                <input type="text" placeholder='Apartment or suite' />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div>
                    <label htmlFor="">Country</label>
                  </div>
                  <div>
                    <select name="" id="" style={{ width: '220px' }}>
                      <option value="">Choose...</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="">State</label>
                  </div>
                  <div>
                    <select name="" id="" style={{ width: '190px' }}>
                      <option value="">Choose...</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="">Zip</label>
                  </div>
                  <div>
                    <input type="text" style={{ width: '100px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderBottom: '1px solid lightgray', marginTop: '12px', height: '80px' }}>
              <CheckboxLabels />
            </div>

            <div style={{ marginTop: '24px' }}>
              <h2>Payment</h2>
              <div style={{ marginTop: '8px' }}>
                <RowRadioPayment />
              </div>
            </div>

            <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div><label htmlFor="">Name on card</label></div>
                <div><input type="text" style={{ width: '270px' }} /></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div><label htmlFor="">Credit card number</label></div>
                <div><input type="text" style={{ width: '270px' }} /></div>
              </div>
            </div>
          </div>


          <div className='cart'>
            <h2 style={{ color: 'gray' }}>Your cart</h2>
            <div style={{ border: '1px solid lightgray', borderRadius: '4px', marginTop: '24px' }}>
              <div style={{ borderBottom: '1px solid lightgray', height: '100px'}}>
                <div style={{ padding: '18px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px' }}>
                    <h3>{data?.name}</h3>
                    <p>{data?.price}THB</p>
                  </div>
                  <p style={{width:'280px'}}>{data?.description}</p>
                </div>
              </div>
              <div style={{ height: '60px', display: 'flex', alignItems: 'center',justifyContent:'space-between', padding: '18px' }}>
                <h3>Total</h3>
                <p><b>{data?.price}THB</b></p>
              </div>
            </div>

            <div style={{ border: '1px solid lightgray', height: '60px', borderRadius: '4px', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <input type="text" placeholder='Promo code'
                  style={{ width: '260px', height: '40px', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }} />
                <button style={{ border: 'none', borderTopRightRadius: '4px', borderBottomRightRadius: '4px', backgroundColor: 'gray', color: '#fff', width: '90px', height: '40px' }}>Redeem</button>
              </div>
            </div>


          </div>

        </form>
      </CartformContainer>
    </Main>
  )
}

export default CartForm

const Main = styled('div')({
  color: 'darkslategray',
  backgroundColor: '#c5daed',
  width: '100%',
  height: '140dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const CartformContainer = styled('div')({
  backgroundColor: '#fff',
  width: '1280px',
  height: '115dvh',
  marginTop: '20px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})