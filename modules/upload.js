function onUpload (e) {
  e.preventDefault();
  console.log(e);
  const formData = new FormData();
  formData.append("body", e.target[0].files[0]);

  fetch("http://localhost:3000/api/videos", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => console.log(data))
  ;
}

export default onUpload;