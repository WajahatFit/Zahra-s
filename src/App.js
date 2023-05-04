import React from "react";
import { Toaster } from "react-hot-toast";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options

        duration: 5000,
        style: {
          background: "var(--color-black)",
          color: "var(--color-golden)",
        },

        // Default options for specific types
        success: {
          duration: 5000,
          style: {
            background: "var(--color-black)",
            color: "var(--color-golden)",
            fontSize: "2rem",
            border: "1px solid var(--color-golden)",
            borderRadius: "5px",
            padding: "0.75rem 1rem",
          },
          theme: {
            primary: "black",
            secondary: "white",
          },
        },
      }}
    />
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
