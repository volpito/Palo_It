import React from "react"
import PropTypes from "prop-types"
import "tailwindcss/tailwind.css"

class HelloWorld extends React.Component {
  render () {
    return (
      <div className='mt-10 mb-5'>
      <React.Fragment>
        Hello: {this.props.greeting}
      </React.Fragment>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
