import { Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import googlelogo from '../assets/Google.png';
import img1 from '../assets/img1.png';
// import { color } from 'framer-motion';

const Navbar = () => {
return (
<div style={styles.navbar}>
<div style={styles.navimg}>
<img src={img1} alt='Logo' style={styles.logo} />
</div>

  <Breadcrumb color="white" spacing='8px' separator='' style={styles.breadcrumb}>
    <BreadcrumbItem>
      <BreadcrumbLink href='#' style={styles.link}>Software</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href='#' style={styles.link}>Industries</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href='#' style={styles.link}>Contact us</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href='#' style={styles.link}>Careers</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>

  <div style={styles.buttonGroup}>
    <div style={styles.button}>Sign in</div>
    <Button colorScheme='blue' style={styles.button1}>Create free Account</Button>
    {/* <Button style={styles.googleButton}> */}
      <img src={googlelogo} alt="Google Logo" style={styles.googleLogo} />
    {/* </Button> */}
  </div>
</div>
);
};

const styles = {
navbar: {
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
// backgroundColor: '#282c34',
padding: '10px 20px',
color: 'white',
marginBottom:'60px',
marginTop:"20px"

},
navimg: {
display: 'flex',
alignItems: 'center',
},
logo: {
height: '40px',

},
breadcrumb: {
display: 'flex',
alignItems: 'center',
flexGrow: 1,
displayF:'Flex',
fontSize:'20px',
justifyContent: 'center',
marginRight:'20px',

},
link: {
textDecoration: 'none',
color: 'white',
padding: '0 10px',
fontWeight: 'bold',
cursor: 'pointer',
marginRight:'',

},
buttonGroup: {
display: 'flex',
alignItems: 'end',
marginBottom:'18px',
marginLeft:'350px',
},
button: {
margin: '0 5px',
marginLeft:'20px',
fontSize:'20px',
color:'white',
backgroundColor:'black',
},
button1: {
margin: '0 5px',
marginLeft:'20px',
fontSize:'20px',
color:'Black',
backgroundColor:'white',
borderRadius: '10px',
width: '200px',
},
googleButton: {
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
margin: '0 5px',
// padding: '0 10px',
background: 'black',
borderRadius: '20px',
},
googleLogo: {
height: '30px',
},
};

export default Navbar;