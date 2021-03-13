function upload(e) {
  e.preventDefault();
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/crowdpleaser/video/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'kvcunjt8';
  
  console.log(e.target.files[0]);
  const file = e.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
 
  // eslint-disable-next-line no-undef
  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(res => {
    console.log(res);
    const text = res.data.secure_url;
    document.querySelector(".viewer").src = text;
    this.reset();
  }).catch(err => {
    console.log(err);
  });
}

export default upload;
