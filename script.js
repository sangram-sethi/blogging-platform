// User authentication
function register() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully!");
}

function login() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "profile.html";
    } else {
        alert("Invalid credentials!");
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Blog CRUD
function createBlog() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let user = localStorage.getItem("loggedInUser");

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push({ title, content, author: user });
    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog created!");
    window.location.reload();
}

function displayBlogs() {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let blogList = document.getElementById("blog-list");

    if (blogList) {
        blogList.innerHTML = blogs.map(blog => `
            <div>
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
                <a href="blog.html">Read More</a>
            </div>
        `).join("");
    }
}

function displayUserBlogs() {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    let user = localStorage.getItem("loggedInUser");
    let blogList = document.getElementById("my-blog-list");

    if (blogList) {
        blogList.innerHTML = blogs.filter(blog => blog.author === user)
            .map(blog => `<h3>${blog.title}</h3><p>${blog.content}</p>`).join("");
    }
}

// Comments
function addComment() {
    let comment = document.getElementById("comment-input").value;
    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));

    document.getElementById("comments-list").innerHTML += `<p>${comment}</p>`;
}

// Load blogs
window.onload = function () {
    displayBlogs();
    displayUserBlogs();
};
