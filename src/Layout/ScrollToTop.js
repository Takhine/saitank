import React from 'react'
import { withRouter } from "react-router-dom"

class ScrollToTop extends React.Component {
    componentWillUpdate(prevProps) {
      if (this.props.location.pathname !== '/') {
        window.scrollTo(0, 0);
      }
    }
  
    render() {
      return this.props.children;
    }
  }
  
  export default withRouter(ScrollToTop); 
