import React, { useRef, useState } from "react";
import db from "../firebase";
import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";

function AddNewArticle() {
  const [addMode, setAddMode] = useState(false);
  const title= useRef();
  const body = useRef();

  const addArticle = async () => {
    setAddMode(false)
    await addDoc(collection(db, "articles"), {
      title:title.current.value,
      body:body.current.value
    });
  };

 return (
    addMode ? (
      <div className="m-4">
        <div class="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="article Title"

            ref={title}

          />
        </div>
        <div class="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="article Body"
            ref={body}
          />
        </div>
        <a onClick={() => addArticle()} className="btn btn-outline-success">
          Save
        </a>
      </div>
    ) : (
      <div className="text-end m-4">
        <a onClick={() =>setAddMode(true)} className="btn btn-outline-primary ms-auto">
          addNew
        </a>
      </div>
    )
    )
}

export default AddNewArticle;
