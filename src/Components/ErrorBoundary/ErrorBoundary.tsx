import React from 'react';


class ErrorBoundary extends React.Component {

  state = { hasError: false, error: '' }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message }
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
  }

 

  render() {
    const { error } = this.state;

    const fallback = (
      <div style={{width: '50%', position: 'absolute', top: '25%', left: '25%'}}>
        <div className="alert alert-danger" role="alert">
          Something went wrong: {error}
        </div>
      </div>
    )

    return this.state.hasError ? fallback : this.props.children
  }
}

export default ErrorBoundary;