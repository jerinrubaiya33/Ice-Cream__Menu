import React, { useState } from "react";
import images from "../../constants/images";
import { data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";
import chair1 from "../../assets/chair1.png";
import chair2 from "../../assets/chair2.png";
import chair4 from "../../assets/chair4.png";
import chair6 from "../../assets/chair6.png";


const SpecialMenu = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTableOptions, setShowTableOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBookingClick = () => {
    setShowForm(true);
    setShowCalendar(false);
    setShowTableOptions(false);
    setConfirmationMessage("");
    setFormFilled(false);
  };

  const handleDateSelect = (event) => {
    setSelectedDate(event.target.value);
    setShowTableOptions(true);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-background" />

      <div className="app__specialMenu-title">
        <p>Menu that fits your plates..</p>
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu_menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Scoops & Swirls</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                tags={wine.tags}
                price={wine.price}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.knife} alt="menu_img" />
        </div>

        <div className="app__specialMenu_menu_cocktail flex__center">
          <p className="app__specialMenu_menu_heading">Creamy Classics</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="app__specialMenu-reservation">
        <p
          className="reservation-p"
          style={{ marginTop: "2rem", maxWidth: "600px", textAlign: "center" }}
        >
          <strong>Note:</strong> Delivery Our Ice-Cream is not possible as it
          will melt reaching your place. So, book a table and enjoy our place
          with your favorite one along with our delightful ice-cream!
        </p>

        <button
          onClick={handleBookingClick}
          style={{
            background: "#ffffff",
            padding: "0.3rem 2.5rem",
            color: "#fc4444",
            marginLeft: "-10px",
            marginTop: "30px",
            fontSize: "1.18rem",
            fontWeight: "900",
            position: "relative",
            cursor: "pointer",
          }}
          className="custom__button"
        >
          Book a Table
        </button>

        {showForm && !formFilled && (
          <div
            className="app__specialMenu-form"
            style={{ marginTop: "1.5rem" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button
              className="custom__button-table"
              style={{ marginTop: "1rem" }}
              onClick={() => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phoneRegex = /^[0-9]{7,15}$/;

                if (!customerName || !email || !phone) {
                  setErrorMessage("⚠ Please fill out all fields.");
                } else if (!emailRegex.test(email)) {
                  setErrorMessage("⚠ Please enter a valid email address.");
                } else if (!phoneRegex.test(phone)) {
                  setErrorMessage(
                    "⚠ Please enter a valid phone number (only digits, 7–15 characters)."
                  );
                } else {
                  setErrorMessage("");
                  setFormFilled(true);
                  setShowCalendar(true);
                }
              }}
            >
              Proceed to Choose Date
            </button>

            {errorMessage && (
              <p
                style={{
                  color: "#ff3636",
                  backgroundColor: "#fff0f0",
                  border: "1px solid #ff7b7b",
                  padding: "0.7rem 1rem",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "1rem",
                  maxWidth: "67%",
                  marginInline: "auto",
                  textAlign: "center",
                }}
              >
                {errorMessage}
              </p>
            )}
          </div>
        )}

        {showCalendar && (
          <div
            className="app__specialMenu-calendar"
            style={{ marginTop: "1rem" }}
          >
            <label style={{ fontSize: "1.3rem" }}>
              Select Date:{" "}
              <input
                type="date"
                onChange={handleDateSelect}
                value={selectedDate}
              />
            </label>
          </div>
        )}
        {showTableOptions && (
          <div style={{ marginTop: "1rem" }}>
            <p
              className="app__specialMenu-select-table"
              style={{ marginLeft: "22px",marginTop: "44px", fontSize: "1.7rem", fontWeight: "900" }}
            >
              Select a Table for {selectedDate}:
            </p>
            <div
              className="app__specialMenu-tables"
              style={{ gap: "2rem", flexWrap: "wrap" }}
            >
              {/* Chair for 1 */}
              <div
                className="chair-option"
                onClick={() =>
                  setConfirmationMessage("ก็็็็็ Table for 1 booked! See you soon!")
                }
              >
                <div className="chair-image-wrapper">
                  <img
                    src={chair1}
                    alt="Table for 1"
                    style={{
                      marginTop: "-94px",
                      marginRight: "-35px",
                      width: "164px",
                      height: "auto",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <span className="chair-label">Table for 1</span>
                </div>
              </div>

              {/* Chair for 2 */}
              <div
                className="chair-option"
                onClick={() =>
                  setConfirmationMessage(
                    "𐀪𐀪 Table for 2 booked! Sweet moments await!"
                  )
                }
              >
                <div className="chair-image-wrapper">
                  <img
                    src={chair2}
                    alt="Table for 2"
                    style={{
                      marginTop: "12px",
                      width: "162px",
                      height: "auto",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <span className="chair-label">Table for 2</span>
                </div>
              </div>

              {/* Chair for 4 */}
              <div
                className="chair-option"
                onClick={() =>
                  setConfirmationMessage(
                    "𐦂𖨆𐀪𖠋 Table for 4 booked! Bring your friends!"
                  )
                }
              >
                <div className="chair-image-wrapper">
                  <img
                    src={chair4}
                    alt="Table for 4"
                    style={{
                      marginTop: "2px",
                      width: "165px",
                      height: "auto",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <span className="chair-label">Table for 4</span>
                </div>
              </div>

              {/* Chair for 6 */}
              <div
                className="chair-option"
                onClick={() =>
                  setConfirmationMessage(
                    "𐦂𖨆𐀪𖠋𐀪𐀪 Table for 6 booked! Family time!"
                  )
                }
              >
                <div className="chair-image-wrapper">
                  <img
                    src={chair6}
                    alt="Table for 6"
                    style={{
                      marginTop: "13px",
                      width: "180px",
                      height: "auto",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <span className="chair-label">Table for 6</span>
                </div>
              </div>

              {/* Chair for Custom */}
              <div
                className="chair-option"
                title="Custom Booking"
                onClick={() =>
                  setConfirmationMessage(
                    "⌯⌲ Mail us for Custom number booking! We'll be ready!"
                  )
                }
              >
                <button
                  className="custom__button-table"
                  onClick={() =>
                    setConfirmationMessage(
                      "⌯⌲ Mail us for Custom number booking! We'll be ready!"
                    )
                  }
                >
                  Table for Custom Number
                </button>
              </div>
            </div>

            {confirmationMessage && (
              <p className="app__specialMenu-confirmation">
                {confirmationMessage}
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default SpecialMenu;