import * as React from "react";
import fs = require("fs");
import path = require("path");

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {fileContent: "File content not yet loaded"};
  }

  render() {
    return (
      <div>
        <span>File content: {this.state.fileContent}</span>
      </div>
    );
  }

  componentDidMount() {
    fs.readFile(path.join(path.dirname("."), "package.json"), (error, data) => {
      if (error) {
        this.setState({
          fileContent: error.message
        })
      } else {
        this.setState({
          fileContent: data.toString("utf8")
        });
      }
    });
  }
}
