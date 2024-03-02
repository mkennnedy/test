import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import profileImage from "./profile-image.jpg"; // Replace with your actual profile image path
import "./App.css";

function App() {
  const socialAccounts = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/yourusername",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/yourusername",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yourusername",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourusername",
      icon: <FaLinkedin />,
    },
    // Add more social accounts as needed
  ];

  return (
    <div className="App">
      <div className="profile-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>My Social Accounts</h1>
      </div>
      <div className="social-accounts">
        {socialAccounts.map((account, index) => (
          <div key={index} className="social-account">
            <a href={account.url} target="_blank" rel="noopener noreferrer">
              {account.icon}
            </a>
            <p>{account.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
