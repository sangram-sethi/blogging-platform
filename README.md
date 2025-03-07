# Blogging Platform

A simple blogging platform where users can sign up, create, edit, and delete blog posts. It also includes a comment section for user interaction.

## Features
- User registration and login
- Create, read, update, and delete (CRUD) blog posts
- Comment section for each blog post
- Responsive design for mobile and desktop
- Uses `localStorage` for storing user and post data

## Technologies Used
- **HTML**: Structure of the pages
- **CSS**: Styling and responsiveness
- **JavaScript**: Logic for authentication, CRUD operations, and comments
- **LocalStorage**: Temporary data storage

## Installation and Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/blogging-platform.git
cd blogging-platform
```

### 2. Open the Project in a Browser
#### Option 1: Open Directly
- Double-click `index.html` to open in a browser.

#### Option 2: Use Live Server (Recommended)
- Open the project in **VS Code**
- Install the **Live Server** extension
- Right-click `index.html` → Select **"Open with Live Server"**

#### Option 3: Run a Local HTTP Server
##### Using Python:
```sh
python -m http.server 5500
```
##### Using Node.js:
```sh
npm install -g http-server
http-server -p 5500
```
Then, open `http://localhost:5500/index.html` in a browser.

## Usage
1. **Register/Login**: Go to `login.html` to create an account or log in.
2. **Create Blog**: After logging in, go to `profile.html` to create a blog post.
3. **View Blogs**: See all blogs on `index.html`.
4. **Comment on Blogs**: Open a blog post (`blog.html`) and add comments.
5. **Logout**: Click the logout button on the profile page.

## Deployment (Optional)
To deploy on **GitHub Pages**:
1. Go to **Settings** → **Pages**.
2. Under **Branch**, select `main` and save.
3. Your site will be live at `https://your-username.github.io/blogging-platform/`.

## Contributing
Feel free to contribute by submitting a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

