import PropTypes from 'prop-types'

const Hero = (props) => {
  const {as: Element, children} = props
  return (
    <Element className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {props.title}
          </h1>
          <p className="my-4 text-xl text-white">
            {props.subtitle}
            </p>
        </div>
      </div>
    </Element>
  )
}

Hero.PropTypes = () => {
  return {
    Element: PropTypes.node,
    children: PropTypes.node

  }

}

Hero.defaultProp = {as: "section"}

export default Hero