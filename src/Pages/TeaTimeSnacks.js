import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button, Modal, ListGroup, Badge } from 'react-bootstrap';
import img1 from './images/c10.jpeg';
import B1 from './images/s1.jpeg';
import B2 from './images/s2.jpeg';
import B3 from './images/s3.jpeg';
import B4 from './images/s4.jpeg';
import B5 from './images/s5.jpeg';
import B6 from './images/s6.jpeg';
import B7 from './images/s7.jpeg';
import B8 from './images/s8.jpeg';
import B9 from './images/s9.jpeg';
import a1 from './images/health1.jpeg';
import a2 from './images/health2.jpeg';
import a3 from './images/health3.jpeg';
import a4 from './images/health4.jpeg';
import a5 from './images/health5.jpeg';
import a6 from './images/health6.jpeg';
import a7 from './images/health7.jpeg';
import a8 from './images/health8.jpeg';
import card1 from './images/card1.jpeg';



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

const IndianCookies = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;  // You can get the email input value
    // Add logic to handle the email (e.g., send to server, validate, etc.)
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

  // Function to scroll to the top of the page when the up arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    { id: 1, title: 'Pyaz Kachori: Rawat', price: 320, img: B1 },
    { id: 2, title: 'Ajwain Matar', price: 160, img: B2 },
    { id: 3, title: 'Pyar Kachori: Sodhani', price: 300, img: B3 },
    { id: 4, title: 'Dal Kachori', price: 225, img: B4 },
    { id: 5, title: 'Chakli', price: 145, img: B5 },
    { id: 6, title: 'Methi Mathri', price: 175, img: B6 },
    { id: 7, title: 'Mini Samosa', price: 165, img: B7 },
    { id: 8, title: 'Dry Fruit Kachori', price: 180, img: B8 },
    { id: 9, title: 'Mawa Kachori', price: 275, img: B9 },
  ];

  return (
    <div>
      <img
        className="d-block w-100"
        src={img1}
        alt="Indian Cookies"
        style={{ width: '60%', height: '50%' }}
      />
   <br></br><br></br>   <h1 className="text-center" style={{ color: 'teal' }}>Our Products</h1>

      {/* Shopping Cart Button - positioned at the bottom right with black background and white icon */}
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
          color: 'white', // White icon color
          backgroundColor: 'black', // Black background
        }}
      >
        🛒
        <Badge pill bg="danger" style={{ position: 'absolute', top: '-9px', right: '-9px'}}>
          {cart.length}
        </Badge>
      </Button>

      {/* Up Arrow Button - positioned at the bottom left, scrolls to top with black background and white icon */}
      <Button
        variant="outline-dark"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '60px', // Adjust this value as needed to keep some space between buttons
          right: '20px',
          fontSize: '20px',
          padding: '5px 5px',
          zIndex: 1000,
          color: 'white', // White icon color
          borderRadius: '10%',
          backgroundColor: 'black', // Black background
        }}
      >
        ↑
      </Button>

      {/* Product Carousel - Displaying products in sets of 3 */}
      <Carousel activeIndex={index} onSelect={handleSelect} controls={true} interval={null}>
        {products.reduce((resultArray, product, index, array) => {
          const chunkIndex = Math.floor(index / 3);
          if (!resultArray[chunkIndex]) resultArray[chunkIndex] = []; // Start a new chunk
          resultArray[chunkIndex].push(product);
          return resultArray;
        }, []).map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-center flex-wrap">
              {chunk.map((product, productIdx) => (
                <Card key={productIdx} style={{ width: '15rem', margin: '10px', borderRadius: '15px' }}>
                  <Card.Img variant="top" src={product.img} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <div>
                      <select>
                        <option value="1kg">300g</option>
                        <option value="2Kg">500g</option>
                        <option value="3Kg">750g</option>
                        <option value="4kg">1kg</option>
                        <option value="5Kg">2Kg</option>
                      </select>
                      <span style={{ fontWeight: 'bolder', fontSize: '20px' }}> ₹{product.price}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: '500', fontSize: '20px', color: 'orangered' }}>4.5&#9733;</span>
                    </div>
                    {/* "Order Now" button aligned to the left */}
                    <Button variant="primary" onClick={() => handleAddToCart(product)} style={{ float: 'left' }}>
                      Order Now
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Show Shopping Cart */}
      {showCart && (
        <ShoppingCart
          cartItems={cart}
          handleCloseCart={handleCloseCart}
          handleRemove={handleRemoveFromCart}
          handleQuantityChange={handleQuantityChange}
        />
      )}
     {/* 2nd product card */}
<br></br><br></br><center><h1>Introducing our Healthy Indulgence</h1></center><br></br>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
          <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a1}  // Imported image
          alt=""
        /><div>
        <br></br><center><h4>Dry Fruit Laddu</h4>
        <div style={{color: 'darkcyan' , fontWeight: '600' , fontSize: '17px'}}>225g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 399
        (Shipping and Tax included).</a></center>
      </div></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a2}  // Imported image
          alt=""
        /><br></br><center><h4>Gond Laddu</h4>
        <div style={{color: 'darkcyan' , fontWeight: '600' , fontSize: '17px'}}>225g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 249
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a3}  // Imported image
          alt=""
        /><br></br><center><h4>Ragi Laddu</h4>
        <div style={{color: 'darkcyan' , fontWeight: '600' , fontSize: '17px'}}>260g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 295
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a4} // Imported image
          alt=""
        /><br></br><center><h4>Dink Laddu</h4>
        <div style={{color: 'darkcyan' , fontWeight: '600' , fontSize: '17px'}}>220g</div>
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
        <br></br><center><h4>Cacao Hazelnut Laddu</h4>
        <div style={{color: 'darkcyan' , fontWeight: '600' , fontSize: '17px'}}>200g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 349
        (Shipping and Tax included).</a></center>
      </div></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a6}  // Imported image
          alt=""
        /><br></br><center><h4>Gift Box</h4>
        <div style={{color: 'darkcyan' , fontWeight: '600' , fontSize: '17px'}}>1kg</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 2000
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a7}  // Imported image
          alt=""
        /><br></br><center><h4>Millet Laddu</h4>
        <div style={{color: 'darkcyan' , fontWeight: '600' , fontSize: '17px'}}>225g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 310
        (Shipping and Tax included).</a></center></div>
      <div class="col-md-3">
      <img
          className="d-block w-100" style={{border:'2px solid black',borderRadius:'10%'}}
          src={a8} // Imported image
          alt=""
        /><br></br><center><h4>Flax Seed Laddu</h4>
        <div style={{color: 'darkcyan ' , fontWeight: '600' , fontSize: '17px'}}>220g</div>
        <a style={{fontWeight:'600' , fontSize: '20px' , color: 'black'}}>₹ 295
        (Shipping and Tax included).</a></center></div></div></div><br></br>
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
      <h5>&copy; 2024 Sweets Shop Private Limited. All Rights Reserved.</h5>
    </div>
  </div>
  </div>
</footer>










    </div>
  );
};

export default IndianCookies;
