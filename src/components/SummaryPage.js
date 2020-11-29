import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SummaryPage.css";
import axios from "axios";

function SummaryPage() {
  const [cust, setCust] = useState([0]);

  useEffect(() => {
    axios
      .get(`https://indapi.kumba.io/webdev/assignment`)
      .then((res) => {
        console.log(res.data);
        setCust(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [rest, setRest] = useState([]);

  useEffect(() => {
    axios
      .get(`https://indapi.kumba.io/webdev/assignment`)
      .then((res) => {
      
        setRest(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="summary-box">
      <h1>User Sumary Page</h1>

      <div className="item-order">
        <h2>Resturant</h2>
        <p>{rest.name} </p>
        <p>{rest.street} {rest.city} {rest.state} </p>
        
      </div>
      <div>
        <h2>Item Order </h2>
        <ul>
        <li>Item Category:  {cust[0].category} </li>
        </ul>
        <ul>
          <li>Item Name: {cust[0].name} </li>
          
        </ul>

        <ul>
          <li>Tax:  {cust[0].tax_pct} </li>
          
         
        </ul>

        <ul>
          
  <li>Bills:  {cust[0].price}{cust[0].currency}</li>
         
        </ul>
        
      </div>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
}

export default SummaryPage;
