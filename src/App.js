import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageLayout from './Components/Layout';

// Pages
import HomePage from './Components/Pages/Home';
import DisplayEvidencePage from './Components/Pages/DisplayEvidence';
import SubmitPage from './Components/Pages/SubmitPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  // callAPI() {
  //     fetch("http://localhost:7000/evidence")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }

  render() {
    return (
      <>
        <Router>
          <PageLayout>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/displayEvidence" component={DisplayEvidencePage} />
              <Route path="/SubmitPage" component={SubmitPage} />
            </Switch>
          </PageLayout>
        </Router>

        {/* <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button>
      </div>
      
      <Router>
        <Route path='/disEvidence' component={DisplayEvidencePage} />
      </Router>
      */}
      </>
    );
  }
}

export default App;

