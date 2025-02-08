import React from 'react';
import { Button } from '@sample-platform/ui'
import {css} from '@sample-platform/styled/styled-system/css'

const buttonStyle = css({
  backgroundColor: 'red',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px'
})

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <p>display a styled button from a different package</p>
      <Button>I am a styled button</Button>
    </div>
  );
}

export default App;
