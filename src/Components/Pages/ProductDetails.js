import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Login from './Pages/ProfilePages/LoginPage'
import Register from './Pages/ProfilePages/RegisterPage'
import ShoppingCart from './Pages/ShoppingCart'
import EditProfile from './Pages/EditProfile/EditProfile'
import { createBrowserHistory } from "history";
import ProductDetails from './Pages/ProductDetails'
import SellerPage from './Pages/SellerPages/SellerPage'
import NewItem from './Components/SellerPages/SellerNewItem'
import { withRouter } from 'react-router-dom';
