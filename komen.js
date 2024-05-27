document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var commentText = document.getElementById('comment').value;
    if (commentText.trim() !== '') {
        var comment = document.createElement('div');
        comment.classList.add('comment');
        var now = new Date();
        var timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        comment.innerHTML = '<p>' + commentText + '</p><p class="timestamp">' + timestamp + '</p>';
        document.getElementById('comments').appendChild(comment);
        document.getElementById('comment').value = '';
    }
});
