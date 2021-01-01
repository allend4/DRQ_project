import React, { Component } from "react";
import Button from 'react-bootstrap/Button' // import button from bootstrap 

export default class ScrollToTop extends Component {

  scrollToTop() {
    window.scrollTo({ // scrolls page back to top smoothly
        top: 0, // back to top of the page, 0px
        behavior: "smooth" // smooth effect
      });
  }

render() {
    return ( // button on click activates the scrollToTop method, returning user to top of page
        <Button variant="info" onClick={() => this.scrollToTop()}>Scroll to top</Button> 
    );
  }

}
