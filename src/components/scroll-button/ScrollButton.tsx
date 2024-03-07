import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowUp } from "react-bootstrap-icons";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50){
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top" style={{ zIndex: 1090 }}>
      {isVisible &&
        <Button variant="primary" className="rounded-circle " onClick={scrollToTop}>
          <ArrowUp/>
        </Button>
      }
    </div>
  );
}

export default ScrollButton;
