import '../index.css'; 
import Navbar from './Navbar.jsx';
import card1 from '../assets/Card1.png';
import card2 from '../assets/Card2.png';
import Resources from './Resources.jsx';
import Carousel from './Carousel.jsx';
import Unlock from './Unlock.jsx';
import Navigate from './Navigate.jsx';
import Footer from './Footer.jsx';


function Description() {
  return (<>
    
    <div className="Description">
      <Navbar />
      <div className='imageandtext'>
        <div className="mainpagetext">
          <div>
            If you want <br />
            to grow,<br />
            just grow <br />
            Exponentially<br />
          </div>
          
          <button className="Startnow">Start Now --&gt;</button>
        </div>
        <div className="image-stack">
          <img className='image2' src={card1} alt="First Image" height={500} width={500} />
          <img className='image1' src={card2} alt="Second Image" height={500} width={500} />
        </div>
      </div>

    </div>
    <Resources/>
    <Carousel/>
    <Unlock/>
    <Navigate/>
    <Footer/>
    
    </>
  );
}

export default Description;
