import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import GloballLayout from "../Layout/GloballLauout"
import Home from "./Home/index";
import Customer from "./Customer/customer";
import Sale from "./Sale/sale";
import Lease from "./Lease/lease";
import Purchase from "./Purchase/purchase"
import Inventory from "./Inventory/inventory"
import Commodity from "./Commodity/commodity"
import Supplier from "./Supplier/supplier"

// console.log("Router進入");
function Router() {
  // console.log("Router內部進入");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<GloballLayout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Customer" element={<Customer />} />
          <Route path="Sale" element={<Sale />} />
          <Route path="Lease" element={<Lease />} />
          <Route path="Purchase" element={<Purchase />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Commodity" element={<Commodity />} />
          <Route path="Supplier" element={<Supplier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
