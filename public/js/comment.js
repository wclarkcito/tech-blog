async function commentFormHandler(event) {
    event.preventDefault();

    const blogId = document.querySelector('input[name="post-id"]').value.trim();
    const body = document.querySelector('input[name="comment-body"]').value.trim();

    if (blogId && body) {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                blogId,
                body,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#newComment').addEventListener('submit', commentFormHandler);