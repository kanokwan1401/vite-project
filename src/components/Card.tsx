import { styled } from "@mui/material"
import { ProducType } from "../type"
import { Button } from "@mui/material"
import { Link } from 'react-router-dom';

const Card = ({ name, price, description, image, id }: ProducType) => {
  return (
    <Link to={`/product-details?id=${id}&${name}`} style={{textDecoration:'none', color:'darkslategray'}}>
      <Main>
        <img src={image} alt="product" style={{ objectFit: 'contain', width: '200px', borderRadius: '16px' }} />
        <div style={{ display: 'flex', gap: '45px', paddingTop: '10px' }}>
          <h3>{name}</h3>
          {price} THB
        </div>
        <div>{description}</div>
        <div style={{ paddingTop: '10px' }}>
          <Button variant="outlined">view</Button>
          <Button variant="outlined">Edit</Button>
        </div>
      </Main>
    </Link>

  )
}
export default Card

const Main = styled('div')({
  backgroundColor: '#fff',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '20px',
  width: '250px',
  height: '400px',
  gap: '10px',
})