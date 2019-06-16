import React from 'react'

function logProps(WrappedComponent) {
  const WrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log(WrappedComponentName+'old', prevProps)
      console.log(WrappedComponentName+'new', this.props)
    }
    render() {
      const {forwardRef, ...rest} = this.props
      return <WrappedComponent ref={forwardRef} {...rest} />
    }
  }

  function forwardRef(props, ref) {
    return <LogProps {...props}  forwardRef={ref} />
  }
  return React.forwardRef(forwardRef)
}

export default logProps
