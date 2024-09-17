import CircleLoader from 'react-spinners/CircleLoader'
import PropTypes from 'prop-types'

const override = {
    display: 'block',
    margin: '100px auto',
}

const Spinner = ({loading}) => {
  return (
    <CircleLoader 
    color="#4338ca"
    loading={loading}
    size={150}
    cssOverride={override}
    />
  )
}

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Spinner