import React, { useEffect, useState } from "react"
import emailjs from "emailjs-com"

// Components
import Header from "../components/Header"
import Carrousel from "../components/Carrousel"
import Footer from "../components/Footer"
import { Container, Row, Col } from "reactstrap"
import Modal from "../components/Modal"
import swal from "sweetalert"
import api from "../util/api"
import Head from "next/head"

// Images
const product = "/assets/images/product.png"
const product2 = "/assets/images/product2.png"
const product3 = "/assets/images/product3.png"
const product4 = "/assets/images/product4.png"
const lightColor = "/assets/images/light_color.png"
const comment = "/assets/images/comment.svg"
const infos = "/assets/images/infos.png"
const dimensions = "/assets/images/dimensions.png"
const texture = "/assets/images/texture.webp"
const table = "/assets/images/table.png"
const table2 = "/assets/images/table2.png"
const facts = "/assets/images/facts.png"
const bulb = "/assets/images/bulb.png"
const bulb2 = "/assets/images/bulb2.png"
const lamp = "/assets/images/lamp-separator.webp"

function Home() {
  const [image, setImage] = useState(product)
  const [select, setSelect] = useState(99.99)
  const [each, setEach] = useState(4)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const [firstNameReq, setFirstNameReq] = useState(false)
  const [lastNameReq, setLastNameReq] = useState(false)
  const [emailReq, setEmailReq] = useState(false)
  const [phoneReq, setPhoneReq] = useState(false)
  const [messageReq, setMessageReq] = useState(false)

  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  const [verificated, setVerificated] = useState(false)
  console.log(verificated)

  useEffect(() => {
    setVerificated(
      firstNameReq || lastNameReq || emailReq || phoneReq || messageReq
    )
  }, [firstNameReq, lastNameReq, emailReq, phoneReq, messageReq])

  const [modal, setModal] = useState(false)

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    emailjs
      .sendForm(
        "service_999gj9h",
        "template_fxxkuid",
        e.target,
        "user_vRr5mCPMzCAmYSuS3kw3f"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const contactus = async (e) => {
    e.preventDefault()
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      await swal("Atention!", "Fill in all fields", "warning")
      return false
    }
    api
      .post("/api/contact-us", {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: email,
        message: message,
      })
      .then(async (response) => {
        if (response.data.type === "success") {
          await swal("Success!", response.data.text, "success")
        } else {
          await swal("Error!", response.data.text, "error")
        }
      })
      .catch(async (e) => {
        await swal(
          "Error!",
          "Trouble sending message. Please try again",
          "error"
        )
      })
  }

  const requiredVerify = (value, nome) => {
    if (nome === "firstName") {
      if (value.length === 0) {
        setFirstNameReq(true)
      } else {
        setFirstNameReq(false)
      }
    } else if (nome === "lastName") {
      if (value.length === 0) {
        setLastNameReq(true)
      } else {
        setLastNameReq(false)
      }
    } else if (nome === "email") {
      if (value.length === 0) {
        setEmailReq(true)
      } else {
        setEmailReq(false)
      }
    } else if (nome === "phone") {
      if (value.length === 0 || value.length < 10) {
        setPhoneReq(true)
      } else {
        setPhoneReq(false)
      }
    } else if (nome === "message") {
      if (value.length === 0) {
        setMessageReq(true)
      } else {
        setMessageReq(false)
      }
    }
  }
  useEffect(() => {
    switch (select) {
      case 99.99:
        setEach(4)
        break
      case 249.99:
        setEach(3.33)
        break
      case 349.99:
        setEach(2.8)
        break
    }
  }, [select])
  return (
    <>
      <Head>
        <title>LedLamp Liquidators - Home</title>
      </Head>
      <Header />
      <Carrousel />
      <div className="section2">
        <Container>
          <Row>
            <Col id="specification" md={6} sm={12}>
              <h1>CASE OF 25 - LED 4'GLASS TUBE 4000K - LED</h1>
              <img style={{ marginBottom: 20 }} src={image} width="100%" />
              <Row className="image-control">
                <Col>
                  <img
                    onMouseOver={() => setImage(product2)}
                    onMouseLeave={() => setImage(product)}
                    src={product2}
                    width="100%"
                  />
                </Col>
                <Col>
                  <img
                    onMouseOver={() => setImage(product3)}
                    onMouseLeave={() => setImage(product)}
                    src={product3}
                    width="100%"
                  />
                </Col>
                <Col>
                  <img
                    onMouseOver={() => setImage(product4)}
                    onMouseLeave={() => setImage(product)}
                    src={product4}
                    width="100%"
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: 20 }}>
                <Col sm={12} md={12}>
                  <img src={lightColor} width="100%" />
                </Col>
              </Row>
            </Col>
            <Col id="buy" className="right-column" md={6} sm={12}>
              <h1>CASE OF 25 - LED 4’GLASS TUBE 4000K - LED</h1>
              <h1>SPECIFICATION</h1>
              <p>
                The <b>15 watt 1800 lumen LED 4’ Glass</b> tubes offer
                exceptional performance for precision lighting applications.
                These 4’ linear LED tubes are high quality replacements for
                fluorescent lamps. They are UL listed for use in damp locations
                and are RoHS complaint with no lead or mercury. Non-dimmable.
                Pre-owned. Suitable for installations from - 13°F to 113°F. DLC
                Certified*
              </p>
              <p>
                *There are rebates available for DLC certified led lights{" "}
                <a href="/rebates">Check Here</a>
              </p>

              <p>
                <b>1 box 25 T8 bulbs $4.00 each: $99.99*</b>
              </p>
              <p>
                <b>3 box 25 T8 bulbs $3.33 each: $249.99*</b>
              </p>
              <p>
                <b>5 box 25 T8 Bulbs $2.80 each: $349.99* </b>
              </p>
              <p id="tiny">*Plus Shipping</p>
              <Row className="prices-container">
                <Col className="prices-item">
                  <h2>${each.toFixed(2)} each</h2>
                  <h3 id="red">${select}</h3>
                </Col>
                <Col>
                  <select
                    className="form-select"
                    onChange={(e) => setSelect(Number(e.target.value))}
                    value={select}
                    required
                    aria-label="Select an option "
                  >
                    <option selected value="none">
                      Please select an option:
                    </option>
                    <option value={99.99}>
                      1 box 25 T8 bulbs $4.00 each: $99.99*
                    </option>
                    <option value={249.99}>
                      3 box 25 T8 bulbs $3.33 each: $249.99*
                    </option>
                    <option value={349.99}>
                      5 box 25 T8 Bulbs $2.80 each: $349.99*
                    </option>
                  </select>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <h2 id="green">${select}</h2>
                </Col>
              </Row>
              <Row style={{ marginTop: 40, marginBottom: 40 }}>
                <Col className="btn-form-selection">
                  <button
                    style={{ marginRight: 20, marginBottom: 10 }}
                    onClick={(e) => {
                      window.location.href = "/#"
                      setModal(true)
                      setPositionX(e.clientX)
                      setPositionY(e.target.offsetTop)
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => (window.location.href = "/#contact")}
                    style={{ width: 90 }}
                  >
                    <img src={comment} width="30px" />
                  </button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={infos} width="100%" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="dimensions" style={{ marginTop: 30 }}>
            <Col className="list-or" md={4}>
              <h1>KEY FEATURES</h1>
              <ul>
                <li>15 watt Low Power and High Performance</li>
                <li>1800 Lumens</li>
                <li>80 CRI</li>
                <li>4000K</li>
                <li>UL-Damp and Dry Location</li>
                <li>Rated Lifetime: 50.000 hours</li>
                <li>Wire to one endcap0</li>
              </ul>
            </Col>
            <Col md={4}>
              <img src={dimensions} width="70%" />
            </Col>
            <Col md={4}>
              <h1>APPLICATIONS</h1>
              <p>
                Typical applications for the LED tubes include retrofitting
                existing fluorescent fixtures. Includes; homes, museums,
                galleries, shop windows, restaurants, meeting rooms and
                hotel/motel locations.
              </p>
            </Col>
          </Row>
        </Container>
        <div
          id="ordering"
          className="texture-stripe"
          style={{ backgroundImage: `url(${texture})` }}
        >
          <div className="green-border" />
          <div className="title-text">
            <span>
              <span style={{ fontWeight: "bold" }}>ORDERING</span> INFORMATION
            </span>
          </div>
        </div>
        <Container>
          <Row style={{ marginTop: 80 }}>
            <Col>
              <img src={table} width="100%" />
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col className="btn-form-selection center">
              <button
                onClick={() => (window.location.href = "/#buy")}
                style={{ marginRight: 20 }}
              >
                Buy Now
              </button>
              <button
                onClick={() => (window.location.href = "/#contact")}
                style={{ width: 90 }}
              >
                <img src={comment} width="30px" />
              </button>
            </Col>
          </Row>
        </Container>
        <div id="shipping" className="green-home-stripe">
          <div className="black-border" />
          <span>
            <b>SHIPPING</b> INFORMATION
          </span>
        </div>
        <Container>
          <Row style={{ marginTop: 50, marginBottom: 30 }}>
            <Col>
              <img src={table2} width="100%" />
            </Col>
          </Row>
          <Row style={{ marginBottom: 60 }}>
            <Col md={4}>
              <img src={facts} width="80%" />
            </Col>
            <Col md={4}>
              <img src={bulb} width="80%" />
            </Col>
            <Col md={4}>
              <img src={bulb2} width="50%" />
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col className="btn-form-selection center">
              <button
                onClick={() => (window.location.href = "/#buy")}
                style={{ marginRight: 20 }}
              >
                Buy Now
              </button>
              <button
                onClick={() => (window.location.href = "/#contact")}
                style={{ width: 90 }}
              >
                <img src={comment} width="30px" />
              </button>
            </Col>
          </Row>
        </Container>
        <div id="faq" className="bulb-container">
          <div
            style={{ backgroundImage: `url(${lamp})` }}
            className="bulb-image"
          />
          <div
            style={{
              backgroundImage: `url(${texture})`,
              position: "absolute",
              width: "100%",
            }}
            className="strip-texture-bulb"
          >
            <div className="green-border" />
            <span>
              <b>FREQUENTLY</b> ASKED <br /> QUESTIONS
            </span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20, marginBottom: 120 }} />
      <Container>
        <Row className="asked-questions">
          <Col md={6}>
            <h5>1. IS THERE ANY WARRANTY?</h5>
            <p>Yes, we offer a 12 Month Limited Warranty</p>
          </Col>
          <Col md={6}>
            <h5>2. HOW DO WE SHIP?</h5>
            <p>
              We ship using any shipping company, UPS, Fedex, DHL, RL Carriers
              or if you would like any specific company, we can tend to any
              available.
            </p>
          </Col>
        </Row>
        <Row className="asked-questions">
          <Col md={6}>
            <h5>3. ARE THEY READY FOR USE?</h5>
            <p>Yes, the bulbs are plug and play for immediate use.</p>
          </Col>
          <Col md={6}>
            <h5>4. CAN I CARRY THEM OUT LOCALLY?</h5>
            <p>
              Yes, if notified we will be able to have the quantity that you
              need ready for local pickup.
            </p>
          </Col>
        </Row>
      </Container>
      <div
        style={{ marginBottom: 40 }}
        id="contact"
        className="green-home-stripe with-padding"
      >
        <div className="black-border" />
        <span>
          <b>CONTACT</b> FORM
        </span>
      </div>
      <Container style={{ marginBottom: 60 }}>
        <form onSubmit={handleSubmit}>
          <Row style={{ marginBottom: 20 }}>
            <Col>
              <h2>CONTACT US</h2>
              <p>
                Let us know your question, suggestion and concers by filling out
                the concepts bellow.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={2}>
              <p>Your name:*</p>
            </Col>
            <Col className="label-float" md={5}>
              <input
                reqprop={firstNameReq ? "yes" : ""}
                onChange={(e) => {
                  setFirstName(e.target.value)
                  requiredVerify(firstName, "firstName")
                  handleChange
                }}
                name="firstname"
                value={firstName}
                type="text"
                placeholder="First name"
                maxLength="15"
                onBlur={() => requiredVerify(firstName, "firstName")}
              />
              <div className="count">
                <p>{firstNameReq ? "Name is required" : ""}</p>
                <p id="normal">{firstName.length}/15</p>
              </div>
            </Col>
            <Col className="label-float" md={5}>
              <input
                reqprop={lastNameReq ? "yes" : ""}
                onChange={(e) => {
                  setLastName(e.target.value)
                  requiredVerify(lastName, "lastName")
                  handleChange
                }}
                name="lastname"
                value={lastName}
                type="text"
                placeholder="Last name"
                maxLength="15"
                onBlur={() => requiredVerify(lastName, "lastName")}
              />
              <div className="count">
                <p>{lastNameReq ? "Name is required" : ""}</p>
                <p id="normal">{lastName.length}/15</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={2}>
              <p>Contact info:*</p>
            </Col>
            <Col className="label-float" md={5}>
              <input
                reqprop={emailReq ? "yes" : ""}
                onChange={(e) => {
                  setEmail(e.target.value)
                  requiredVerify(email, "email")
                  handleChange
                }}
                value={email}
                name="email"
                type="text"
                placeholder="E-mail"
                onBlur={() => requiredVerify(email, "email")}
              />
              <div className="count">
                <p>{emailReq ? "E-mail is required" : ""}</p>
                <p style={{ color: "transparent" }}>.</p>
              </div>
            </Col>
            <Col className="label-float" md={5}>
              <input
                reqprop={phoneReq || phone.length > 10 ? "yes" : ""}
                onChange={(e) => {
                  setPhone(e.target.value)
                  requiredVerify(phone, "phone")
                  handleChange
                }}
                name="phone"
                value={phone}
                type="text"
                maxLength="10"
                placeholder="Phone"
                onBlur={() => requiredVerify(phone, "phone")}
              />
              <div className="count">
                <p>
                  {phoneReq ? "Phone must be valid" : ""}
                  {phone.length > 10 ? "Phone must be valid" : ""}
                </p>
                <p style={{ color: "transparent" }}>.</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={2}>
              <p>Message:*</p>
            </Col>
            <Col className="label-float" md={10}>
              <textarea
                reqprop={messageReq ? "yes" : ""}
                onChange={(e) => {
                  setMessage(e.target.value)
                  requiredVerify(message, "message")
                  handleChange
                }}
                value={message}
                type="text"
                placeholder="Message"
                style={{ height: 90, resize: "none" }}
                onBlur={() => requiredVerify(message, "message")}
              />
              <input
                name="message"
                value={message}
                type="text"
                style={{ display: "none" }}
              />
              <div className="count">
                <p>{messageReq ? "Message is required" : ""}</p>
                <p style={{ color: "transparent" }}>.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center submit-btn">
            <Col className="center">
              <button
                disabled={verificated}
                onClick={contactus}
                style={{ width: 230, height: 45 }}
              >
                Submit Form
              </button>
            </Col>
          </Row>
        </form>
      </Container>
      <Footer />
      {modal ? <Modal select={select} set={setModal} /> : <div />}
    </>
  )
}

export default Home
