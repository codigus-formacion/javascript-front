async function createPost(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const response = await fetch(`/post/new`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    alert("Post has been saved!");
    window.location.href = "/";
  } else {
    alert("Failed to create post. Please try again.");
  }
}

async function deletePost(postId) {
  const response = await fetch(`/post/${postId}/delete`);

  if (response.ok) {
    alert("Post has been deleted!");
    window.location.href = "/";
  } else {
    alert("Failed to delete post. Please try again.");
  }
}
