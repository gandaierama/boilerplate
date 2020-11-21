import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const theme = {
  colors: {
    primary: '#00A857'
  }
}

export default class BaseApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
