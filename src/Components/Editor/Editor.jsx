import React from "react";
import MonacoEditor from "react-monaco-editor";

const options = {
    selectOnLineNumbers: true
};

const Editor = props => (
    <MonacoEditor
        width="100%"
        height="100%"
        language={props.mode}
        theme="vs-dark"
        value={props.value}
        options={options}
        onChange={props.change}
        editorDidMount={props.editorDidMount}
    />
);

export default Editor;
