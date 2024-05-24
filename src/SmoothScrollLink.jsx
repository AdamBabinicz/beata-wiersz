import React from "react";
import { Link } from "react-router-dom";

const SmoothScrollLink = ({ to, children, onClick, ...props }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (!to || typeof to !== "string" || to.trim() === "") {
      console.warn(`ID "${to}" is undefined, empty, or not a string.`);
      return;
    }
    const element = document.getElementById(to);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      if (onClick) {
        onClick(); // Call the onClick function passed as a prop
      }
    } else {
      console.warn(`Element with ID "${to}" not found.`);
    }
  };

  return (
    <Link to={`#${to}`} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
