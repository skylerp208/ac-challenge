import React from 'react';

export default class ErrorBoundary extends React.Component {

  state = { error: null, errorInfo: null }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return <h1> Something went wrong </h1>
    }

    return this.props.children
  }
};
