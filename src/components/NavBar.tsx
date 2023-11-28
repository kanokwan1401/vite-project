import '../App.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const NavBarContainer = () => {
  return (
      <NavBar>
        <Box sx={{ width: '60%' }}>
          <div className='navbar-item'>
            <div>
              <Link to={`/`} className='logo'><h2 className='font-h2'>flowerfly</h2></Link>
            </div>
            <ul>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`/`}>Products</Link></li>
              <li><Link to={`/`}>Contact</Link></li>
            </ul>
          </div>
        </Box>
      </NavBar>
  )
}

export default NavBarContainer

const NavBar = styled('div')({
  width: '100%',
  height: '50px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent:'center'
})
