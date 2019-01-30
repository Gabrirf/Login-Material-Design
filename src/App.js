import React, { Component } from 'react';
import './App.css';
import { Button } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <img/>
          </div>
          <div>
          <TextField label="standard..." />
          </div>
          <div>
            <Button>Hello World</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
