import React, { useRef, useState } from "react";
import db from "../firebase";
import { doc, deleteDoc, collection, setDoc } from "firebase/firestore";

function Article(props) {
  const { title, body, id } = props.article;
  const updatedTitle = useRef();
  const updatedBody = useRef();

  const [updateMode, setUpdateMode] = useState(false);

  const deleteArticle = async () => {
    await deleteDoc(doc(db, "articles", id));
  };

  const updateArticle = async () => {
    setUpdateMode(false);
    await setDoc(doc(db, "articles", id), {
      body: updatedBody.current.value,
      title: updatedTitle.current.value,
    });
  };

  return (
    <div className="card m-4">
      <div className="card-body">
        <h5 className="card-title fs-5">{title}</h5>
        <p className="card-text text-secondary fs-6">{body}</p>
        <a onClick={() => setUpdateMode(true)} className="btn btn-outline-success mx-2">
          Update
        </a>
        <a onClick={() => deleteArticle(id)} className="btn btn-outline-danger mx-2">
          Delete{" "}
        </a>
      </div>
      {updateMode ? (
        <div className="m-2">
          <div class="mb-3">
            <input
              ref={updatedTitle}
              type="email"
              className="form-control"
              defaultValue={title}
            />
          </div>
          <div class="mb-3">
            <textarea
              ref={updatedBody}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              defaultValue={body}
            />
          </div>
          <a onClick={() => updateArticle(id)} className="btn btn-outline-success">
            save
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default Article;
