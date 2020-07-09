import React, { Component } from "react";
import { Editor, EditorState,convertToRaw } from "draft-js";
export default class Draftinput extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => {
      console.log(editorState.getCurrentContent().getPlainText())
      this.setState({ editorState })
    };
  }
  render() {
    return (
      <div>
        <p>TEST</p>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}
