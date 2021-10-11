import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageLayout from './Components/Layout';

// Pages
import HomePage from './Components/Pages/Home';
import DisplayEvidencePage from './Components/Pages/DisplayEvidence';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <>
        <Router>
          <PageLayout>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/" component={DisplayEvidencePage} />
            </Switch>
          </PageLayout>
        </Router>
      </>
    );
  }
}

export default App;

