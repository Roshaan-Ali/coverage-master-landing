import { Link } from "react-router-dom";
import { Logo } from "../assets";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { validateEmail } from "../Utils";
import { baseUrl } from "../config.json";
import axios from "axios";

const Footer = ({ scrollToTop }) => {
  const [subscribeEmail, setSubscribeEmail] = useState({
    email: "",
    error: "",
  });
  const [isApiCall, setisApiCall] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setSubscribeEmail({
      email: "",
      error: "",
    });
  }, [location.pathname]);

  const _newsLetterApi = async () => {
    setisApiCall(true);
    try {
      const response = await axios.post(`${baseUrl}/api/newsletter/create`, {
        newsletter_email: subscribeEmail.email,
      });
      if (response.data.status === false) {
        setSubscribeEmail({
          ...subscribeEmail,
          error: response.data.msg,
        });
      }else{
        setSubscribeEmail({
          email: "",
          error: "",
        });
      }
      setisApiCall(false);
    } catch (error) {
      setSubscribeEmail({
        ...subscribeEmail,
        error: "Network Error",
      });
      setisApiCall(false);
    }
  };

  const _subscribeNewsLetter = () => {
    if (subscribeEmail.email === "") {
      setSubscribeEmail({
        ...subscribeEmail,
        error: "Email is required",
      });
    } else if (!validateEmail(subscribeEmail.email)) {
      setSubscribeEmail({
        ...subscribeEmail,
        error: "Email is badly formatted",
      });
    } else {
      setSubscribeEmail({ ...subscribeEmail, error: "" });
      _newsLetterApi();
    }
  };

  return (
    <>
      <section className="footer">
        <div className="container-1200">
          <div className="subscribe-content">
            <span>Subscribe</span>
            <p>TO OUR NEWSLETTER</p>
          </div>
          <div className="input-with-btn">
            <input
              type="email"
              name=""
              placeholder="Email"
              value={subscribeEmail.email}
              onChange={(e) =>
                setSubscribeEmail({ ...subscribeEmail, email: e.target.value })
              }
              onFocus={() => {
                setSubscribeEmail({ ...subscribeEmail, error: "" });
              }}
              style={{ borderColor: subscribeEmail.error !== "" && "red" }}
            />
            <button
              onClick={() => {
                _subscribeNewsLetter();
              }}
              disabled={isApiCall}
            >
              Subscribe
            </button>
            {subscribeEmail.error !== "" && (
              <small
                className="d-block alert alert-danger w-100"
                role="alert"
                style={{ position: "absolute", marginBottom: "10px" }}
              >
                {subscribeEmail.error}
              </small>
            )}
          </div>
          <div className="straight-line">
            <a onClick={() => scrollToTop()}>
              <span className="fa fa-chevron-up fa-fw"></span>
            </a>
          </div>
          <div className="icon-social-logo">
            <div className="logo-footer">
              <img alt="" src={Logo} />
            </div>
            <div className="social-icons">
              <Link to="#">
                <span className="fab fa-facebook"></span>
              </Link>
              <Link to="#">
                <span className="fab fa-instagram"></span>
              </Link>
              <Link to="#">
                <span className="fab fa-twitter"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
