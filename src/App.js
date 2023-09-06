import './App.css';
import 'font-awesome/css/font-awesome.min.css'



import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import one from './components/one.jpg'
import two from './components/two.jpg'
import three from './components/three.jpg'
import four from './components/four.jpg'
import five from './components/five.jpg'
import six from './components/six.jpg'
import seven from './components/seven.jpg'
import eight from './components/eight.jpg'
import nine from './components/nine.jpg'


import Modal from './components/Modal';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Loginhotel from './components/Loginhotel';
import About from './components/About';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Register from './components/Register';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Carousel from './components/Carousel';


function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      img: one,
      title: "ABC Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: two,
      title: "XYZ Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: three,
      title: "StayVacay Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: four,
      title: "MNO Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: five,
      title: "Restly Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: six,
      title: "CareHere Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: seven,
      title: "Funnn Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: eight,
      title: "ABCD Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: nine,
      title: "Sumino Hotel",
      description: "Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);


  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 6000);
  // }

  const [rowToEdit, setRowToEdit] = useState(null);
  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };


  const handleSubmitCard = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
        rows.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newRow;
        })
      );
  };



  return (
    <>

      <div className='container-fluid'>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            {modalOpen && (
              <Modal
                closeModal={() => {
                  setModalOpen(false);
                  setRowToEdit(null);
                }}
                onSubmit={handleSubmitCard}
                defaultValue={rowToEdit !== null && rows[rowToEdit]}
              />

            )}
          </div>
          
          <Routes>
            <Route exact path="/" element={<Cards rows={rows} editRow={handleEditRow} />} />
            <Route exact path="/login" element={<Loginhotel />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>



      {/* <BrowserRouter>
        <Navbar title="Hotels"/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/edit" element={<Edit/>} /> */}
      {/* <Route exact path="/" element={<Hotel  mode={mode} showAlert={showAlert} />} /> */}
      {/* </Routes>
        <Modal/>
        </div>
      </BrowserRouter> */}





    </>
  );
}

export default App;
