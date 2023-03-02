/* Array stores all of the blog posts */
let blogPosts = [
]

/* Everytime the page is reloaded, this function will run and will obtain all of the blog posts
   from local storage and populate it onto the blog */
export function populateBlog() {
    if (localStorage.blogPosts != null) {
        blogPosts = JSON.parse(localStorage.blogPosts);
        for (let i = 0; i < blogPosts.length; i++) {
            addElementToBlog(blogPosts[i][0], blogPosts[i][1], blogPosts[i][2], i);
        }
    }
}

/* Function is called whenever an element is added to the blog, whether through the "add post" button or
   during the initial populateBlog() function */
function addElementToBlog(title, date, summary, postNumber) {
    var blog = document.getElementById("blog");
    const blogPost = document.createElement("li");
    blogPost.setAttribute("id", "post" + postNumber);
    const postText = document.createTextNode(title + " (" + date + ") - " + summary + " ");

    const editButton = document.createElement("img");
    editButton.setAttribute("src", "./images/pencil-icon.png")
    editButton.setAttribute("id", postNumber + "e");
    editButton.setAttribute("onclick", "editButton(" + postNumber + ");");
    const editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);

    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "./images/trash-icon.png")
    deleteButton.setAttribute("id", postNumber + "d");
    deleteButton.setAttribute("onclick", "deleteButton(" + postNumber + ");");
    const deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);
    
    blogPost.appendChild(postText);
    blogPost.appendChild(editButton);
    blogPost.appendChild(deleteButton);
    blog.appendChild(blogPost);
}

/* Similar to the addElement, but only changes an existing element */
function editElementOnBlog(title, date, summary, postNumber) {
    var blogPost = document.getElementById("post" + postNumber);
    blogPost.innerHTML = title + " (" + date + ") - " + summary + " ";

    const editButton = document.createElement("img");
    editButton.setAttribute("src", "./images/pencil-icon.png")
    editButton.setAttribute("id", postNumber + "e");
    editButton.setAttribute("onclick", "editButton(" + postNumber + ");");
    const editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);

    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "./images/trash-icon.png")
    deleteButton.setAttribute("id", postNumber + "d");
    deleteButton.setAttribute("onclick", "deleteButton(" + postNumber + ");");
    const deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);

    blogPost.appendChild(editButton);
    blogPost.appendChild(deleteButton);
}

/* Called when the edit button is pressed. */
export function editButton(number) {
    var overlay = document.getElementById("overlay");
	overlay.style.display = "block";
    var editBlog = document.getElementById("editBlogTemplate");
	var clone = editBlog.content.cloneNode(true);

    var postTitle = clone.getElementById("editPostTitle");
    postTitle.setAttribute("value", blogPosts[number][0]);

    var postDate = clone.getElementById("editPostDate");
    postDate.setAttribute("value", blogPosts[number][1]);

    var postSummary = clone.getElementById("editPostSummary");
    const summaryText = document.createTextNode(blogPosts[number][2]);
    postSummary.appendChild(summaryText);

    var saveButton = clone.getElementById("editBlogSaveButton");
    saveButton.setAttribute("onclick", "editBlogSave(" + number + ")");

	document.body.appendChild(clone);  
}

/* Called when the delete button is pressed. */
export function deleteButton(number) {
    var overlay = document.getElementById("overlay");
	overlay.style.display = "block";
    var deleteBlog = document.getElementById("deleteBlogTemplate");
	var clone = deleteBlog.content.cloneNode(true);

    var okButton = clone.getElementById("deleteBlogOkButton");
    okButton.setAttribute("onclick", "deleteBlog(" + number + ")");

	document.body.appendChild(clone);  
}

/* Called when the the addBlog button is clicked. */
function addBlogFunc() {
    var overlay = document.getElementById("overlay");
	overlay.style.display = "block";
	var addBlog = document.getElementById("addBlogTemplate");
	var clone = addBlog.content.cloneNode(true);
	document.body.appendChild(clone);    
}

/* Called when the blog is saved during an edit */
export function blogSave() {
    var postTitle = document.getElementById("posttitle").value;
    var postDate = document.getElementById("postdate").value;
    var postSummary = document.getElementById("postsummary").value;
    if (postTitle == "" || postDate == "" || postSummary == "") {
        alert("You cannot have missing fields!");
    }
    else {
        var overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        addElementToBlog(postTitle, postDate, postSummary, blogPosts.length);
        blogPosts.push([postTitle, postDate, postSummary]);
        localStorage.blogPosts = JSON.stringify(blogPosts);
        var temp = document.getElementById("addBlogDialog");
        if (temp != null)
            document.body.removeChild(temp);
    }
}

/* Called when the cancel button is pressed, used to remove the add blog post dialog. */
export function blogCancel() {
    var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var temp = document.getElementById("addBlogDialog");
	if (temp != null)
		document.body.removeChild(temp);	    
}

/* Just adds click event listeners to the button on the page. */
export function allButtons() {
	var addBlog = document.getElementById("addBlogButton");
	addBlog.addEventListener("click", addBlogFunc);
}

/* Called when the edit blog dialog is saved. */
export function editBlogSave(number) {
    var postTitle = document.getElementById("editPostTitle").value;
    var postDate = document.getElementById("editPostDate").value;
    var postSummary = document.getElementById("editPostSummary").value;
    if (postTitle == "" || postDate == "" || postSummary == "") {
        alert("You cannot have missing fields!");
    }
    else {
        var overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        blogPosts[number] = [postTitle, postDate, postSummary];
        editElementOnBlog(postTitle, postDate, postSummary, number);
        localStorage.blogPosts = JSON.stringify(blogPosts);
        var temp = document.getElementById("editBlogDialog");
        if (temp != null)
            document.body.removeChild(temp);
    }
}

/* Called when the cancel button is pressed, used to remove the edit blog post dialog. */
export function editBlogCancel() {
    var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var temp = document.getElementById("editBlogDialog");
	if (temp != null)
		document.body.removeChild(temp);	    
}

/* Called when the cancel button is pressed, used to remove the delete blog post dialog. */
export function deleteBlogCancel() {
    var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var temp = document.getElementById("deleteBlogDialog");
	if (temp != null)
		document.body.removeChild(temp);	    
}

/* Called when the delete blog dialog is confirmed. */
export function deleteBlog(number) {
    var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
    blogPosts.splice(number, 1);

    var toDelete = document.getElementById("post" + number);
    var list = document.getElementById("blog");
    list.removeChild(toDelete);

    updateAllIndex(number);
    localStorage.blogPosts = JSON.stringify(blogPosts);

	var temp = document.getElementById("deleteBlogDialog");
	if (temp != null)
		document.body.removeChild(temp);	    
}

/* Used to update all of the indices for the rest of the blog posts once one is deleted to
   maintain consistency. */
function updateAllIndex(number) {
    for (let i = number; i < blogPosts.length; i++) {
        var temp_number = String(i + 1);
        var string_i = String(i);
        
        var selectPost = document.getElementById("post" + temp_number);
        selectPost.setAttribute("id", "post" + string_i);

        var editButton = document.getElementById(temp_number + 'e');
        editButton.setAttribute("id", i + 'e');
        editButton.setAttribute("onclick", "editButton(" + string_i + ")");

        var deleteButton = document.getElementById(temp_number + 'd')
        deleteButton.setAttribute("id", string_i + 'd');
        deleteButton.setAttribute("onclick", "deleteButton(" + string_i + ")");
    }
}


