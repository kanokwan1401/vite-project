import '../App.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavBarContainer from '../components/NavBar';
import RowRadioButtonsGroup from '../components/Radio'
import { Button } from '@mui/material';
import { ProductMockData } from '../PoductMockData';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ProducType } from '../type';
import { Link } from 'react-router-dom';
import NonLinearSlider from '../components/Slider'

const ProductDetails = () => {
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
      <ProductsContainer>
        <Box sx={{ width: '90%', display: 'flex', justifyContent: 'space-between', gap: '36px', paddingTop: '20px' }}>
          <div style={{ width: '550px', height: '550px' }}>
            <img src={data?.image} alt="product" style={{ objectFit: 'contain', width: '550px', borderRadius: '16px' }} />
            <NonLinearSlider/>
          </div>
          <div>
            <div style={{ width: '550px', height: '350px', border: '1px solid lightgray', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '15px', width: '100%' }}>
                <h1 style={{ paddingBottom: '20px' }}>{data?.name}</h1>
                <p style={{ paddingBottom: '10px' }}>{data?.description}</p>
                <p style={{ paddingBottom: '10px' }}><b>Price :</b> {data?.price} THB</p>
                <p style={{ paddingBottom: '20px' }}>Quantity:</p>
                <div
                  style={{ border: '1px solid lightgray', borderRadius: '8px', height: '30px', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                  1
                </div>
                <div style={{ paddingTop: '30px' }}> 
                  <Link to={`/product-cart?id=${data?.id}&name=${data?.name}`}>
                    <Button variant="contained">Add to Cart</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ width: '550px', border: '1px solid lightgray', borderRadius: '8px', marginBottom: '40px' }}>
              <div className='product-border header'>
                <p>Specifications</p>
              </div>
              <div className='product-border'>
                <p>color:</p>
              </div>
              <div className='product-border'>
                <p>color:</p>
              </div>
              <div className='product-border'>
                <p>color:</p>
              </div>
              <div className='product-border'>
                <p>color:</p>
              </div>
              <div className='product-border'>
                <p>color:</p>
              </div>
              <div style={{ height: '40px', display: 'flex', alignItems: 'center', paddingLeft: '15px' }}>
                <p>color:</p>
              </div>
            </div>
          </div>
        </Box>
        <Box sx={{ width: '90%' }}>
          <div style={{ width: '100%', height: '120px', border: '1px solid lightgray', borderRadius: '8px', marginBottom: '20px' }}>
            <div className='product-border header'>
              <p>Rate this Product</p>
            </div>
            <div style={{ padding: '15px', display: 'flex', alignItems: 'center' }}>
              <RowRadioButtonsGroup />
              <Button variant="contained">Submit Rating</Button>
            </div>
          </div>
          <div style={{ width: '100%', border: '1px solid lightgray', borderRadius: '8px' }}>
            <div className='product-border header'>
              <p>Reviews</p>
            </div>
            <div>
              <div className='product-reviews' style={{ borderBottom: '1px solid lightgray' }}>
                <p className='reviews'>John Doe</p>
                <p>Great product! I love design. Highly recommended!</p>
              </div>
              <div className='product-reviews'>
                <p className='reviews'>Jane Smith</p>
                <p>Amazing value for the price. Will buy again!</p>
              </div>
            </div>
          </div>
        </Box>
      </ProductsContainer>

    </Main>
  )
}

export default ProductDetails

const Main = styled('div')({
  color: 'darkslategray',
  backgroundColor: '#c5daed',
  width: '100%',
  height: '140dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ProductsContainer = styled('div')({
  backgroundColor: '#fff',
  width: '1280px',
  height: '125dvh',
  marginTop: '36px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})