import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router'

import HomePage from './index.jsx'

const context = {}

test('Link matches snapshot', () => {
    const component = renderer.create(
      <StaticRouter location="/displayEvidence" context={context}>
        <Link to="/displayEvidence" />
      </StaticRouter>
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });