import React from 'react';
import { Tabs, Tab, TextInput } from 'carbon-components-react';
import props from 'prop-types';

export default function Main() {
  return (
    <div>
      <div>
        <Tabs type="container">
          <Tab label="Tab label 1">
            <div className="some-content">
              <p>Content for first tab goes here.</p>
            </div>
          </Tab>
          <Tab label="Tab label 2">
            <div className="some-content">
              <p>Content for second tab goes here.</p>
            </div>
          </Tab>
          <Tab
            label="Tab label 3 renders content only when selected"
            title="Tab label 3 renders content only when selected"
          >
            <div className="some-content">
              <p>Content for third tab goes here.</p>
            </div>
          </Tab>
          <Tab label="Tab label 3 renders content only when selected">
            <div className="some-content">
              <p>Content for fourth tab goes here.</p>
              <TextInput light id="sample-input" labelText="Text Input Label" />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
