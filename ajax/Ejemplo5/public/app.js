async function uploadImage(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const response = await fetch(`/upload_image`, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.valid) {
    alert(result.message);
    window.location = "/view_image";
  } else {
    alert(`Error: ${result.message}`);
  }
}
