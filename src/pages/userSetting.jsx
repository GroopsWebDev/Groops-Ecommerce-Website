import React from 'react';

const UserSettings = () => {
  const formStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px'
  };

  const sectionStyle = {
    flexBasis: 'calc(33.33% - 20px)'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>User Settings</h1>
      <form style={formStyle}>
        <div style={sectionStyle}>
          <h2>Change Password</h2>
          <label htmlFor="oldPassword">Old Password</label>
          <input type="password" id="oldPassword" name="oldPassword" />
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" name="newPassword" />
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <div style={sectionStyle}>
          <h2>Profile Settings</h2>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />
          <label htmlFor="profilePicture">Profile Picture (stored to cloud)</label>
          <input type="file" id="profilePicture" name="profilePicture" />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />
          <label htmlFor="paymentMethod">Payment Method</label>
          <select id="paymentMethod" name="paymentMethod">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="applePay">Visa</option>
          </select>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="postcode">Postcode</label>
          <input type="text" id="postcode" name="postcode" />
        </div>
       
        <button type="submit" style={{ marginTop: '20px' }}>Save Changes</button>
      </form>
    </div>
  );
};

export default UserSettings;




