import React from "react";
import "./addPost.css";
import useForm from "./useForm";
import { useNavigate } from 'react-router';

export default function AddPost() {
  const [formData, setFormData] = useForm({
    title: '',
    body: ''
  })

  const navigate = useNavigate();

 async function submit(e) {
    e.preventDefault();

   try {
     const response = await fetch("http://localhost:8080/posts", {
       method: "POST",
       body: JSON.stringify(formData),
       headers: {
         "content-type": "application/json",
       },
       credentials: 'include'
     });

     if (!response.ok) {
       throw new Error(`${response.status} - ${response.statusText}`);
     }
     navigate('/')
   } catch (e) {
     console.log(e)
}
  }
  return (
    <form id="addPost" onSubmit={submit}>
      <label>
        Title:
        <input
          name="title"
          required
          value={formData.title}
          onChange={setFormData}
        />
      </label>
      <label>
        Content:
        <textarea
          name="body"
          value={formData.body}
          onChange={setFormData}
        ></textarea>
      </label>

      <button>Add Post</button>
    </form>
  );
}
