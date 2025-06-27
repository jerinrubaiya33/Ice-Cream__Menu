import React from 'react';
import { SubHeading } from "../../components";
import "./Map.css";

const MapComponent = () => (
  <div className="app__findus-container" id="contact">
    {/* Google Maps Embed */}
    <iframe
      title="Google Map"
      className="app__map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.8677061072016!2d-89.65014812432756!3d39.78172147156208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887524780a3586c1%3A0xfdfd56a64df1bb38!2s1234%20Elm%20St%2C%20Springfield%2C%20IL%2062704%2C%20USA!5e0!3m2!1sen!2sbd!4v1719123456789!5m2!1sen!2sbd"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default MapComponent;
