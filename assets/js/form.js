// TODO: Create a variable that selects the form element
const form = document.querySelector('form');

const getPosts = function () {
  return JSON.parse(localStorage.getItem('posts')) || [];
}
console.log(form)
// TODO: Create a function that handles the form submission. 
// Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. 
// If the form is submitted with missing data, display an error message to the user.
const handleFormSubmit = function (event) {
  event.preventDefault();

  const user = form.querySelector('#username').value;
  const title = form.querySelector('#title').value;
  const content = form.querySelector('#content').value;

  if (!user || !title || !content) {
    alert('Please fill out all fields.');
    return;
  }
  let posts = getPosts();
  const post = {
    user,
    title,
    content
  };

  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
  redirectPage('blog.html');
};

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

form.addEventListener('submit', handleFormSubmit);