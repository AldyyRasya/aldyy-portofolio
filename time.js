document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var now = new Date();
    var time = now.toLocaleString();
    var newComment = '<div class="comment"><p>' + comment + '</p><p class="meta">- ' + name + '</p><p class="meta">' + time + '</p></div>';
    document.getElementById("comments").insertAdjacentHTML('beforeend', newComment);
    document.getElementById("commentForm").reset();
});
