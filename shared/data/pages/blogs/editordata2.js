import dynamic from "next/dynamic";
import { Component } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css"; // Import the styles for the Snow theme

const defaultContent = `

`;

class Editor1 extends Component {
   static modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

   static formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  constructor(props) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

   handleChange(html) {
    this.setState({ editorHtml: html });
  }

   handleThemeChange(newTheme) {
    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor1.modules}
          formats={Editor1.formats}
          bounds={".app"}
        // placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Editor1;
