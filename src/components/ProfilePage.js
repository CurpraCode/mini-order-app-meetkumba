import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import axios from "axios";
//import { Context } from "../context";

function ProfilePage() {
  const [avat, setAvat] = useState([]);

  useEffect(() => {
    axios
      .get(`https://indapi.kumba.io/webdev/assignment`)
      .then((res) => {
        console.log(res.data);
        setAvat(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="profile-box">
      <h1>USER PAGE</h1>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.uo_hoPwUzv_ihIlvHstqtwHaK6&pid=Api&P=0&w=300&h=300"
        alt="man profile"
      />
      <div className="order-box">
        <h3> {avat.name}</h3>
        <p>{avat.about}</p>
        <p>{avat.address}</p>
        <p>{avat.phone}</p>

        <p className="para"> Food Choice</p>
        <ul>
          {avat.dislikes}
         
        </ul>

        <p className="para">Food Dislikes</p>
        <ul>
        {avat.likes}
        </ul>
      </div>
      <Link to="SummaryPage/">
        <button>Order Summary</button>
      </Link>
    </div>
  );
}

export default ProfilePage;
