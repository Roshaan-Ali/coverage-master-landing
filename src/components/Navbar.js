import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { useRouteMatch, useLocation } from "react-router-dom";
import { frontEndBaseUrl } from "../config.json";

const Navbar = React.forwardRef((props, ref) => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const navBarLinks = [
    { title: "Home", link: "/" },
    { title: "How it Works", link: "/how-it-works" },
    { title: "Solutions", link: "/solutions" },
    { title: "Why Us?", link: "/why-us" },
    { title: "Pricing", link: "/pricing" },
    // { title: "Blog", link: "#" },
    { title: `Help & Advice`, link: "/help-and-advice" },
  ];
  let location = useLocation();

  const activeLink = () => {
    switch (location.pathname) {
      case "/":
        setSelectedLink("Home");
        break;
      case "/why-us":
        setSelectedLink("Why Us?");
        break;
      case "/pricing":
        setSelectedLink("Pricing");
        break;
      case "/how-it-works":
        setSelectedLink("How it Works");
        break;
      case "/solutions":
        setSelectedLink("Solutions");
        break;
      // case "/help-and-advice":
      //   setSelectedLink("Help & Advice");
      //   break;
      default:
        setSelectedLink("Help & Advice");
        break;
    }
  };
  useEffect(() => {
    activeLink(location);
  }, [location]);

  return (
    <>
      <header ref={ref} className="header-main container-header" id="top">
        <nav className="header-absolute navbar navbar-default navbar-expand-lg container-header">
          <Link className="navbar-brand" to="/">
            <img alt="" src={Logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto nav-mine">
              {navBarLinks.map((item, i) => {
                return (
                  <li
                    onClick={() => setSelectedLink(item.title)}
                    key={i}
                    className="nav-item"
                  >
                    <Link
                      className={`nav-link ${
                        selectedLink === item.title && "active"
                      }`}
                      to={item.link}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              className="btn-head btn-no-bg btn-norm"
              onClick={() => (window.location = frontEndBaseUrl)}
            >
              Sign In
            </Link>
            <button
              className="btn-head btn-norm"
              onClick={() => (window.location.href = `${frontEndBaseUrl}/signup`)}
            >
              Start Free Trial
            </button>
          </div>
        </nav>
      </header>
    </>
  );
});

export default Navbar;
