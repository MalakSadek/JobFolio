import React from 'react'
import PropTypes from 'prop-types'


const Card = (props) => {

  const {as: Element, children} = props

    return (
    <Element className = {`${children.bg} p-6 rounded-lg shadow-md`}> 
    {children}
    </Element> )
  
};

Card.propTypes = () => {
    return {
      children: PropTypes.node.isRequired,
      bg: PropTypes.string
    }
  }

  Card.defaultProps = {
    as: 'div'
  }

export default Card