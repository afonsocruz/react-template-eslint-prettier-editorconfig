import React from 'react';

function App() {
  return (
    <>
      <h1>Simple eslint, prettier and editorconfig setup</h1>
      <h3>Airbnb styleguide / JavaScript / React / No TypeScript</h3>
      <p>Everything working</p>
      <p>All you need to change is your vscode settings:</p>
      <p>
        &quot;editor.formatOnSave&quot;: true,
        <br />
        &quot;editor.codeActionsOnSave&quot;: {'{'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&quot;source.fixAll.eslint&quot;: true <br />
        {'}'}
      </p>
    </>
  );
}

export default App;
