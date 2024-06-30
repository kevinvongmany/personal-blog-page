// TODO: Create a variable that selects the main element
const main = document.querySelector("main");

// TODO: Create a function that builds an element and appends it to the DOM
const buildPost = (post) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const blockquote = document.createElement("blockquote");
    const p = document.createElement("p");

    h2.textContent = post.title;
    blockquote.innerHTML = `${post.content}`;
    p.textContent = `Posted by: ${post.user}`;

    article.appendChild(h2);
    article.appendChild(blockquote);
    article.appendChild(p);
    main.appendChild(article);
};


// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  main.innerHTML = "";
  const post = {
    title: "No blog posts to display",
    content: "Please check back later for new posts",
    user: "Admin"
  }
  buildPost(post);
}

// TODO: Create a function that reads from local storage and returns the data
function readFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// TODO: Call the function to render the list of blog posts
const posts = readFromLocalStorage("posts");


if (!posts || posts.length === 0) {
  noPosts();
} else {
    posts.forEach(buildPost);
}