import './App.css'
import Card from './components/Card'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { ProductMockData } from './PoductMockData';
import NavBarContainer from './components/NavBar'

function App() {
  return (
    <Main>
      <NavBarContainer/>
      <Topic>
        <Box sx={{ width: '80%' }}>
          <h1 className="font-h1">flowerfly</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fugit modi voluptatum voluptas odit, quod qui expedita quaerat quisquam porro! Odio quibusdam sint in reiciendis est eaque quia consequuntur? Ea quis, qui quos consectetur ipsam rerum iusto itaque voluptates dolorem?</p>
        </Box>
        <Box sx={boxStyle}>
          <Button variant="contained">Main</Button>
          <Button variant="outlined">Secondary</Button>
        </Box>
      </Topic>

      <CardList>
        {ProductMockData?.map(({name,image,price,description,id},index:number)=>(
          <Card name={name} image={image} price={price} description={description} key={index} id={id}/>
        ))}
      </CardList>
    </Main>
  )
}



export default App

const boxStyle = { display: 'flex', gap: '16px', width: '100%', justifyContent: 'center', marginTop: '20px' }

const Main = styled('div')({
  color: 'darkslategray',
  backgroundColor: '#c5daed',
  width: '100%',
  height: '140dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap:'36px'
});

const Topic = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '28px',
  textAlign: 'center',
  width: '60%',
  height: '250px',
  borderRadius:'20px'
});

const CardList = styled('div') ({
  width: '1280px',
  height: 'auto',
  display:'grid',
  gridTemplateColumns: '250px 250px 250px',
  justifyItems:'center',
  justifyContent:'center',
  gap:'50px',
  
});