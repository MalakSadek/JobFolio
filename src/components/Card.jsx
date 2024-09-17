import React from 'react'
import PropTypes from 'prop-types'


const Card = ({children, bg="bg-grey-100" }) => {

    return (
    <div className = {`${bg} p-6 rounded-lg shadow-md`}> 
    {children}
    </div> )
  
};

Card.propTypes = () => {
    return {
      children: PropTypes.node.isRequired,
      bg: PropTypes.string
    }
  }

export default Card