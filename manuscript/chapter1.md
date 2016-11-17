# Chapter 1
## 1.1.- Overview
Draft.js is a framework for *building rich text editors* in React, powered by an immutable model and abstracting over cross-browser differences.

Draft.js makes it easy to build any type of rich text input, whether you're just looking to support a few inline text styles or building a complex text editor for composing long-form articles.

In Draft.js, everything is customizable – Facebook provides the building blocks to have full control over the user interface.

### 1.1.1.- Installation
Currently Draft.js is distributed via npm. It depends on React and React DOM which must also be installed.
```
npm install --save draft-js react react-dom
```

### 1.1.2.- Usage
```
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('container')
);
```
Because Draft.js supports unicode, you must have the following meta tag in the `<head></head>` block of your HTML file:
```
<meta charset="utf-8" />
```

## 1.2.- API Basics
 
