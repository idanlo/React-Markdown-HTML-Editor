import React, { Component } from "react";
import "./App.css";
import SplitPane from "react-split-pane";
import Editor from "./Components/Editor/Editor";
import ReactMarkdown from "react-markdown";

class App extends Component {
    state = {
        markdownSrc: "# Hello World",
        mode: "markdown"
    };
    editor = null;

    MarkdownSrcChanged = val => {
        this.setState({ markdownSrc: val });
    };

    resize = () => {
        if (this.editor) {
            this.editor.layout();
        }
    };

    editorDidMount = editor => {
        this.editor = editor;
        editor.focus();
    };

    changeMode = e => {
        this.setState({ mode: e.target.value });
    };

    render() {
        return (
            <div>
                <SplitPane
                    split="vertical"
                    defaultSize="50%"
                    onDragFinished={this.resize}
                >
                    <div className="editor-pane">
                        <Editor
                            editorDidMount={this.editorDidMount}
                            className="editor"
                            value={this.state.markdownSrc}
                            change={this.MarkdownSrcChanged}
                            mode={this.state.mode}
                        />
                    </div>
                    <div className="view-pane">
                        <select onChange={this.changeMode}>
                            <option value="markdown">Markdown</option>
                            <option value="html">HTML</option>
                        </select>
                        {this.state.mode === "markdown" ? (
                            <ReactMarkdown source={this.state.markdownSrc} />
                        ) : (
                            <div
                                style={{ width: "100%", height: "100%" }}
                                dangerouslySetInnerHTML={{
                                    __html: this.state.markdownSrc
                                }}
                            />
                        )}
                    </div>
                </SplitPane>
            </div>
        );
    }
}

export default App;
