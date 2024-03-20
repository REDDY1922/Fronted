// Frontend: PreviousOrders.js
import React, { useEffect, useState } from "react";
import Navbarcomponent from "../navbar";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";

function PreviousOrders() {
  const { customerId } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!customerId) {
      console.error("Error: customerId is undefined");
      console.log("customerId:", customerId);
      return;
    }

    axios
      .get(`http://localhost:8182/customerBook/customerid/${customerId}`)
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, [customerId]);

  const calculateTotalFine = () => {
    return orders.reduce((total, order) => total + order.amount, 0);
  };

  return (
    <div
      style={{
        padding: 20,
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/book-stack-library-blurred-bookshelf-background-education-education-background-back_756748-17160.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>
        {`
          .table-transparent {
            background: rgba(255, 255, 255, 0.5); /* Set the desired level of transparency */
            border-collapse: collapse;
            width: 70%; /* Adjust the width as needed */
            margin: auto; /* Center the table */
          }

          .table-transparent th,
          .table-transparent td {
            background: transparent;
          }
        `}
      </style>
      <div>
        <Navbarcomponent />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <h1>Previous orders</h1>
      <Table className="table-transparent">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Issue Date</th>
            <th>Return Date</th>
            <th>Fine</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.issueDate}</td>
              <td>{order.returnDate}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3"></td>
            <td>Total Fine: {calculateTotalFine()}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PreviousOrders;
