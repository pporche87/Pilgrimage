const confirmDelete = (id) => {
  if (confirm('Are you sure you want to delete this post?')) {
    window.location = `/posts/post/${id}/delete`
  }
}
