import { animateScroll as scroll } from 'react-scroll'
import Router from 'next/router'

export default function scrollBack() {
  if (Router.pathname == '/') {
    scroll.scrollToTop()
  } else {
    Router.push('/')
  }
}
