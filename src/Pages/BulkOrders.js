import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from './images/c5.jpeg'; 
import card1 from './images/card1.jpeg';

const BulkOrders = () => {
    const [quantity, setQuantity] = React.useState(1);
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        companyName: '',
        designation: '',
        phoneNumber: '',
        altPhoneNumber: '',
        email: '',
        message: '',
        productQuantity: 0,
    });

    const [errors, setErrors] = React.useState({});
    const [showPopup, setShowPopup] = React.useState(false);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        setFormData(prevData => ({ ...prevData, productQuantity: prevData.productQuantity + 1 }));
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            setFormData(prevData => ({ ...prevData, productQuantity: prevData.productQuantity - 1 }));
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required.';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required.';
        if (!formData.companyName) newErrors.companyName = 'Company Name is required.';
        if (!formData.designation) newErrors.designation = 'Designation is required.';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid E-mail Address is required.';
        if (!formData.productQuantity || formData.productQuantity <= 0) newErrors.productQuantity = 'Product Quantity must be greater than zero.';
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setShowPopup(true);  // Show success popup if no validation errors
        } else {
            setErrors(validationErrors);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;  // You can get the email input value
        // Add logic to handle the email (e.g., send to server, validate, etc.)
        alert(`Subscribed with ${email}`);
      };
    return (
        <div className="container-fluid">
            {/* Image */}
            <br />
            <img
                className="d-block w-100"
                src={i1}
                alt="Indian Cookies"
                style={{ width: '100%', height: '50%' }}
            />
<div>
<br></br><br></br><h1 style={{ textAlign: 'start' , color: 'teal' }}>Customise And Make Your Occasion More Special
</h1><br></br>
</div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 form-section">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-6 form-section">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 form-section">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                        {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                    </div>
                    <div className="col-md-6 form-section">
                        <label htmlFor="designation">Designation</label>
                        <input
                            type="text"
                            className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                            id="designation"
                            value={formData.designation}
                            onChange={handleChange}
                        />
                        {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 form-section">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                    </div>
                    <div className="col-md-6 form-section">
                        <label htmlFor="altPhoneNumber">Alternative Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="altPhoneNumber"
                            value={formData.altPhoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 form-section">
                        <label htmlFor="email">E-mail Address</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-md-6 form-section">
                        <label htmlFor="productQuantity">Product Quantity</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" onClick={handleDecrease}>-</button>
                            <input
                                type="text"
                                className={`form-control ${errors.productQuantity ? 'is-invalid' : ''}`}
                                id="productQuantity"
                                value={formData.productQuantity}
                                readOnly
                            />
                            <button className="btn btn-outline-secondary" type="button" onClick={handleIncrease}>+</button>
                        </div>
                        {errors.productQuantity && <div className="invalid-feedback">{errors.productQuantity}</div>}
                    </div>
                </div>

                <div className="form-section">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control message-box"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                </div>

                <div className="form-section">
                    <button type="submit" className="btn submit-btn">Submit</button>
                </div>
            </form>

            {/* Success Popup */}
            {showPopup && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                                <button type="button" className="btn-close" onClick={handleClosePopup}></button>
                            </div>
                            <div className="modal-body">
                                <p>Your form has been successfully submitted!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClosePopup}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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

export default BulkOrders;
