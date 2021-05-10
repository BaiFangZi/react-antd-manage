import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'

// import htmlToDraft from 'html-to-draftjs'
import './index.less'
import React from 'react'
// console.log(React)
import { Card, Row, Col } from 'antd'

export default class RichEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState: editorState,
    })
  }
  render() {
    return (
      <div>
        <Card>
          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="rich-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
        <Row gutter={10}>
          <Col span={12}>
            <Card title="同步转换html" style={{ minHeight: 200 }}>
              {this.state.editorState &&
                draftToHtml(
                  convertToRaw(this.state.editorState.getCurrentContent())
                )}
            </Card>
          </Col>
          <Col span={12}>
            <Card title="同步转换markdown" style={{ minHeight: 200 }}>
              {this.state.editorState &&
                draftToMarkdown(
                  convertToRaw(this.state.editorState.getCurrentContent())
                )}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
