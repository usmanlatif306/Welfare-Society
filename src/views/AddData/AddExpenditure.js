import React, { useState, useRef, useEffect } from "react";
import { db } from "../../firebase";
import firebase from "firebase";
import Url from "src/components/Url";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
const custom_config = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "blockQuote",
      "insertTable",
      "|",
      "undo",
      "redo",
    ],
  },
};

function AddExpenditure() {
  const fileRef = useRef();
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);
  const [isPosted, setIsPosted] = useState(false);
  const [isImage, setisImage] = useState(false);
  const [state, setState] = useState({
    amount: "",
    details: "",
    post: "",
  });
  // Handle Change
  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  }
  const handleEditorChange = (e, editor) => {
    const data = editor.getData();
    setState({
      ...state,
      details: data,
    });
  };
  // Handle Image Change
  const handleImageChange = (e) => {
    var selected = e.target.files;
    for (let i = 0; i < selected.length; i++) {
      const newFile = selected[i];
      setImages((prevState) => [...prevState, newFile]);
    }
  };
  //
  useEffect(() => {
    if (urls.length === files.length && isPosted) {
      db.collection("expenditures")
        .add({
          amount: state.amount,
          details: state.details,
          post: state.post,
          images: urls,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          alert("Expenditures Added!");
          setState({
            amount: "",
            details: "",
            post: "",
          });
          setIsPosted(false);
          setImages([]);
          setUrls([]);
          fileRef.current.value = "";
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }, [progress, urls, isImage]);
  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setIsPosted(true);
    if (images.length === 0) {
      setisImage(!isImage);
    } else {
      setFiles(images);
    }
  }
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            name="amount"
            value={state.amount}
            onChange={handleChange}
            className="form-control shadow-none"
            placeholder="Amount"
            required
          />
        </div>
        <div className="form-group">
          <CKEditor
            editor={ClassicEditor}
            onChange={handleEditorChange}
            config={custom_config}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="post"
            value={state.post}
            onChange={handleChange}
            className="form-control shadow-none"
            placeholder="Post Link"
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control shadow-none"
            onChange={handleImageChange}
            multiple
            ref={fileRef}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mx-2 shadow-none"
            disabled={isPosted}
          >
            Submit
          </button>
        </div>
      </form>
      {files.length !== 0 && (
        <Url
          files={files}
          setfiles={setFiles}
          setUrls={setUrls}
          setProgress={setProgress}
        />
      )}
    </>
  );
}

export default AddExpenditure;
