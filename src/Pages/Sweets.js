import React, { useState } from 'react';
import { Carousel, Card, Button, Modal, ListGroup, Badge } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/c1.jpeg';
import img2 from './images/w2.jpeg';
import img3 from './images/w4.jpeg';
import u1 from './images/icons8-horizontal-line-100.png';
import Video from '../Pages/images/video.mp4';
import a1 from './images/health1.jpeg';
import a2 from './images/health2.jpeg';
import a3 from './images/health3.jpeg';
import a4 from './images/health4.jpeg';
import a5 from './images/health5.jpeg';
import a6 from './images/health6.jpeg';
import a7 from './images/health7.jpeg';
import a8 from './images/health8.jpeg';
import ci1 from './images/cimg1.jpeg';
import ci2 from './images/cimg2.jpeg';
import ci3 from './images/cimg3.jpeg';
import ci4 from './images/cimg4.jpeg';
import d1 from './images/spl1.jpeg';
import d2 from './images/spl2.jpeg';
import d3 from './images/spl3.jpeg';
import d4 from './images/spl4.jpeg';
import d5 from './images/spl5.jpeg';
import card1 from './images/card1.jpeg';
import g1 from './images/gift.jpeg';
import h1 from './images/icons8-open-box-30.png';
import h2 from './images/icons8-clock-30.png';
import h3 from './images/icons8-earth-planet-30.png';
import h4 from './images/icons8-leaf-30.png';

const Sweets = () => {

  // Shopping Cart Component
  const ShoppingCart = ({ cartItems, handleCloseCart, handleRemove, handleQuantityChange }) => {
    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
      <Modal show={true} onHide={handleCloseCart} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }}
                  />
                  <div className="ms-3">
                    <div>{item.title}</div>
                    <div>₹{item.price}</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="secondary" size="sm" onClick={() => handleQuantityChange(item.id, 'decrease')}>
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="secondary" size="sm" onClick={() => handleQuantityChange(item.id, 'increase')}>
                    +
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-3"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-3 d-flex justify-content-between">
            <h5>Total: ₹{getTotalPrice()}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Buy Later
          </Button>
          <Button variant="primary">Proceed to Checkout</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Subscribed with ${email}`);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId, action) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      
      <Button
        variant="outline-dark"
        onClick={handleOpenCart}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          fontSize: '20px',
          padding: '5px 5px',
          zIndex: 1000,
          color: 'white',
          backgroundColor: 'black',
        }}
      >
        🛒
        <Badge pill bg="danger" style={{ position: 'absolute', top: '-9px', right: '-9px' }}>
          {cart.length}
        </Badge>
      </Button>

      <Button
        variant="outline-dark"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '60px',
          right: '20px',
          fontSize: '20px',
          padding: '5px 5px',
          zIndex: 1000,
          color: 'white',
          borderRadius: '10%',
          backgroundColor: 'black',
        }}
      >
        ↑
      </Button>

      {showCart && (
        <ShoppingCart
          cartItems={cart}
          handleCloseCart={handleCloseCart}
          handleRemove={handleRemoveFromCart}
          handleQuantityChange={handleQuantityChange}
        />
      )}

      <Carousel interval={2000}>
        <Carousel.Item>
          <br />
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <br />
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <br />
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* content */}
      <br /><br />
      <div>
        <center>
        <h3 style={{color:'black',fontWeight:"bolder"}}><u>Keeping The Tradition Intract</u></h3>
          <br />
          <h5 style={{color:'black',fontWeight:"bolder"}}>It brings you the taste of authentic Indian Sweets & Snacks directly from</h5>
          <h5 style={{color:'black',fontWeight:"bolder"}}>The origin to your doorstep.</h5>
          <img src={u1} />
        </center>
      </div>
      
      {/* Video Section */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div>
          <br />
          <h2 style={{ textAlign: 'center', color: 'black',fontWeight:'bolder' }}>"Love at First Bite, Keep Calm and Eat Sweets"</h2>
          <video width="800" height="500" controls muted autoPlay>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    {/* organic img */}
<div>
<br></br><br></br><u><h2 style={{ textAlign: 'center' , color: 'black',fontweight:'bolder'}}>"Introducing Our Healthy Indulgence"</h2></u>
</div>
{/* 2nd product card */}
      <br></br><div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
          <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a1}  // Imported image
          alt=""
        /><div>
        <br></br><center><h4 style={{color:'black',fontWeight:"bold"}}>Dry Fruit Laddu</h4>
        <div style={{color: 'blue' , fontWeight: '600' , fontSize: '20px'}}>225g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 399
        (Shipping and Tax included).</a></center>
      </div></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a2}  // Imported image
          alt=""
        /><br></br><center><h4 style={{color:'black',fontWeight:"bold"}}>Gond Laddu</h4>
        <div style={{color: 'blue' , fontWeight: '600' , fontSize: '20px'}}>225g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 249
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a3}  // Imported image
          alt=""
        /><br></br><center><h4 style={{color:'black',fontWeight:"bold"}}>Ragi Laddu</h4>
        <div style={{color: 'blue' , fontWeight: '600' , fontSize: '20px'}}>260g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 295
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a4} // Imported image
          alt=""
        /><br></br><center><h4 style={{color:'black',fontWeight:"bold"}}>Dink Laddu</h4>
        <div style={{color: 'blue' , fontWeight: '600' , fontSize: '20px'}}>220g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 249
        (Shipping and Tax included).</a></center></div></div></div><br></br><hr></hr><br></br>
{/* 2nd product cart-2nd line */}
<div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
          <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a5}  // Imported image
          alt=""
        /><div>
        <br></br><center><h4 style={{color:'black',fontWeight:"bold"}}>Cacao Hazelnut Laddu</h4>
        <div style={{color: 'blue' , fontWeight: '600' , fontSize: '20px'}}>200g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 349
        (Shipping and Tax included).</a></center>
      </div></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a6}  // Imported image
          alt=""
        /><br></br><center><h4 style={{color:'black',fontWeight:"bold"}}>Gift Box</h4>
        <div style={{color: 'blue' , fontWeight: '600' , fontSize: '20px'}}>1kg</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 2000
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a7}  // Imported image
          alt=""
        /><br></br><center><h4 style={{color:'black',fontWeight:"bold"}}>Millet Laddu</h4>
        <div style={{color: 'blue' , fontWeight: '600' , fontSize: '20px'}}>225g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 310
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a8} // Imported image
          alt=""
        /><br></br><center><h4 style={{color:'black',fontWeight:"bold"}}><b></b>Flax Seed Laddu</h4>
        <div style={{color: 'blue ' , fontWeight: '600' , fontSize: '20px'}}>220g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 295
        (Shipping and Tax included).</a></center></div></div></div><br></br><br></br>
        {/* content */}
        <center><br></br><div style={{color: 'purple' , fontWeight: '600' , fontSize: '40px'}}>In The News</div><br></br>
        <div style={{fontSize: '20px' , fontWeight: '500'}}>The essence of ANAND captured in published stories</div>
        <br></br><div><br></br>
        <img src={ci1} style={{ width: '130px', height: '30px'  }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={ci2} style={{ width: '130px', height: '30px' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={ci3} style={{ width: '130px', height: '30px' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
         <img src={ci4} style={{ width: '130px', height: '30px' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </center><br></br><br></br><br></br>
{/* Gift */}
<div><center><img src={g1}/></center></div><br></br><br></br>
{/* down image */}
<div class="container-fluid" style={{backgroundColor: 'gainsboro'}}>
<br></br><center><h1>Shop Other Categories</h1></center>
        <br></br><div class="row">
          <div class="col-md-2">
          <img
          className="d-block w-100"
          src={d1}  // Imported image
          alt=""
        /><div>
        <br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>South Indian Special</h5>
        </center>
      </div></div>
      <div class="col-md-2">
      <img
          className="d-block w-100"
          src={d2}  // Imported image
          alt=""
        /><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>Indian Bakery</h5>
        </center></div>
      <div class="col-md-2">
      <img
          className="d-block w-100"
          src={d3}  // Imported image
          alt=""
        /><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>Indian Cookies</h5>
        </center></div>
      <div class="col-md-2">
      <img
          className="d-block w-100"
          src={d4} // Imported image
          alt=""
        /><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>Tea Time Snacks</h5>
        </center></div>
        <div class="col-md-2">
      <img
          className="d-block w-100"
          src={d5} // Imported image
          alt=""
        /><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>North Indian Special</h5>
        </center></div>
        <div class="col-md-2">
      <img
          className="d-block w-100"
          src={d2}  // Imported image
          alt=""
        /><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>Indian Bakery</h5>
        </center></div></div></div><br></br><br></br>{/* Shipping */}
<div class="container-fluid" style={{backgroundColor: 'white',padding: '10px'}}>
<br></br>
        <br></br><div class="row">
          <div class="col-md-3">
          <center><img
          className="d-block"
          src={h1}  // Imported image
          alt="" style={{width:'50px', height: '50px'}}
        /></center><div>
        <br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>National Shipping in 3-5 days</h5>
        </center>
      </div></div>
      <div class="col-md-3">
      <center><img
          className="d-block"
          src={h2}  // Imported image
          alt="" style={{width:'50px', height: '50px'}}
        /></center><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>15 Days Shelf Life</h5>
        </center></div>
      <div class="col-md-3" w-100>
      <center><img
          className="d-block"
          src={h3}  // Imported image
          alt="" style={{width:'50px', height: '50px'}}
        /></center><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>International Shipping in 5-7 Days</h5>
        </center></div>
        <div class="col-md-3">
      <center><img
          className="d-block"
          src={h4}  // Imported image
          alt="" style={{width:'50px', height: '50px'}}
        /></center><br></br><center><h5 style={{color:'black',fontWeight:"bolder"}}>No Preservatives</h5>
        </center></div></div></div><br></br>


  
   {/* footer */}
<footer>
  <div class="footer-container">
    <div class="column">
      <h3><u>Our Range</u></h3><br></br>
      <p>Sweets</p>
      <p>Dry Fruits</p>
      <p>Gifting</p>
      <p>Indian Bakery</p>
      <p>Indian Cookies</p>
      <p>Savouries</p>
    </div>
    <div class="column">
      <h3><u>About Us</u></h3><br></br>
      <p>Company</p>
      <p>Our Brands</p>
      <p>Global Footprint</p>
      <p>Contact</p>
      <p>Login</p>
      <p>Track Your Order</p>
    </div>
    <div class="column">
      <h3><u>Legal</u></h3><br></br>
      <p>Terms and Conditions</p>
      <p>Return/Exchange Request</p>
      <p>Shipping, Return & Refund Policy</p>
      <p>Site Map</p>
      <p>Privacy Policy</p>
    </div>
    <div class="column">
      <h3><u>Timing :</u></h3>
      <p>Mon to Sat - 10:00 AM to 6:00 PM</p><br></br>
      <div class="subscribe-section">
        <h2>We,d Be Happy To</h2> 
        <center><h2>Assist You!</h2></center>
        <form onSubmit={handleSubscribe}>
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit" class="subscribe-btn">Subscribe</button>
        </form>
      </div>
      </div>
{/* Payment Methods and Copyright Section  */}
<div class="footer-bottom">
    <div class="payment-methods">
      <br></br><h4>Payment Methods</h4>
      <img src={card1} style={{width: '200px' , height: '40px'}} alt="Payment Methods"/>
    </div>
   <hr></hr><div class="copyright">
      <h5>&copy; 2024 New Kannan Sweets Shop Private Limited. All Rights Reserved.</h5>
    </div>
  </div>
  </div>
</footer>
    </>
  );
};

export default Sweets;
