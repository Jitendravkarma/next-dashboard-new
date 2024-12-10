import dynamic from "next/dynamic";
import { Component, ChangeEvent } from "react";
import ReactQuill, { Quill } from "react-quill";

import "react-quill/dist/quill.snow.css"; // Import Quill styles

const defaultContent = `
  <h1>Blog Heading</h1>
  <br/>
  <p>
    I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
  </p>
  <br/>
  <p>
    but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example.
  </p><br/>
  <p>
    Those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example.
  </p>
`;

class Editor extends Component {
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
      matchVisual: false,
    },
  };

   static formats = [
    "header", "font", "size",
    "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent",
    "link", "image", "video",
  ];

  constructor(props) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: "snow" };
  }

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  };

  handleThemeChange = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Editor;


