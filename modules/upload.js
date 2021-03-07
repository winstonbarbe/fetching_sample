function onUpload (e) {
  e.preventDefault();
  console.log(e);
  const formData = new FormData();
  formData.append("body", e.target[0].files[0]);

  fetch("http://localhost:3000/api/videos", {
    method: "POST",
    // headers: {
    //   "Content-Type ": "multipart/form-data"
    // },
    body: formData
  })
    .then(response => response.json())
    .then(data => console.log(data))
  ;
}

export default onUpload;