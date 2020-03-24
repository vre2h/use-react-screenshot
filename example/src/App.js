import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Download from './components/Download'
import Image from './components/Image'

export default () => {
  return (
    <Router>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link to='/download'> Download </Link> -{' '}
          <code>/components/Download.js</code>
        </li>{' '}
        <li>
          <Link to='/image'> Image </Link> - <code>/components/Image.js</code>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path='/download' component={Download} />
        <Route path='/image' component={Image} />
      </Switch>
    </Router>
  )
}
