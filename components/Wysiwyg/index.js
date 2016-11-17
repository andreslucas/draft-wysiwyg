/**
 * @license Copyright (c) UserZoom 2016. All Rights Reserved. http://www.userzoom.com/
 *
 * Proprietary and confidential
 *
 * NOTICE: All information contained herein is, and remains the property
 * of UserZoom Technologies SL. The intellectual and technical concepts
 * contained herein are proprietary to UserZoom Technologies SL and
 * may be covered by U.S. and Foreign Patents, patents in process, and are
 * protected by trade secret or copyright law. Dissemination of this
 * information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from UserZoom Technologies SL.
 *
 * @company UserZoom Technologies SL
 * @project draft-wysiwyg
 * @file    index
 * @author  UserZoom R&D
 * @email   rd@userzoom.com
 * @date    2016-11-17
 * @summary empty.
 */
import React from 'react';
import {Editor, EditorState, contentState} from 'draft-js';

class Wysiwyg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState, contentState) => this.setState(
      {
        editorState,
        contentState: editorState.getCurrentContent(),
      }
    );
  }
  render() {
    this.props.onUpdate ? this.props.onUpdate() : null;
    const {editorState} = this.state;
    return (
      <Editor
        editorState={editorState}
        onChange={this.onChange}
      />
    );
  }
}

Wysiwyg.propTypes = {
  onUpdate: React.PropTypes.func,
};

export { Wysiwyg };