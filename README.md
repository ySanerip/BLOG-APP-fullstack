### Key Features


-   Create a user account.
-   Add new blog post.
-  Edit and delete post with JWT authentication


## ![computer](https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png) Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
-   Nodejs v8 or above.

You can check your node version using the following command:
```
  node --version
```


### Setup

Clone this repository to your desired directory:

```
 git clone https://github.com/ySanerip/BLOG-APP-fullstack
```

### Install

Install this project with:
```
 cd into dir
 npm install
```

### Usage

To run the project, execute the following command in each directory (api and client):

```
npm start
```
## Info

Welcome to my new project! A full stack BLOG developed with React.js, Node.js and mySQL.  

This time, the main goal of this project was to understand the process of "making" a real web page that integrates the front-end with a database using a well developed server. Which library should I use, how to architect the components used and how to solve the problems related to its creation.

For the front-end development I used JavaScript, with ReactJS, for the server it was used NodeJS, and the back-end was built on MySQL.

-   This is a blogging with user authentication and authorization, using JWT. 
-  The blog posts are displayed in the reverse chronological order by default.
-   The front-end of the app is built using React and I have used SASS to generate my local CSS styles.
-   It is a blog app that lets users read the existing blog posts without logging in, but it is only granted to users to add new posts and edit the one's made by them.


## Challenges faced

There were a few challenges that came up during the development of the application.

### Handling user authentication and user authorization

For authentication, I used a strategy that combines cookies and tokens. When accessed by login the server associates the user with a token created via JWT and sends it to the page as a cookie. Subsequently, the server to grant access to editing posts has to check if the user has this permission via token. It was necessary, in order to send and get the cookie, to secure credentials via CORS for the server, since this step made the whole authentication process impossible.

## Potential Improvements

-   Dashboard implementation for all registered users.
-   Add user image
-   Save drafts
- Make responsive CSS

Any more suggestions are always welcome in the PRs!

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

-   [mySQL](https://www.mysql.com/): MySQL is the world's most popular open source database..
-   [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Node.js](https://nodejs.org/en/): A runtime environment to help build fast server applications using JS.
-   [Express.js](https://expressjs.com/): A popular Node.js framework to build scalable server-side for web applications.
-   [Axios.js](https://mongoosejs.com/): Promise based HTTP client for the browser and node.js
-   [CORS](https://www.npmjs.com/package/cors): CORS is a node.js package for providing a [Connect](http://www.senchalabs.org/connect/)/[Express](http://expressjs.com/) middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options.
-   [JSON Web Tokens or JWTs](https://jwt.io/): A standard to securely authenticate HTTP requests

### [](https://github.com/ySanerip/crud-reactjs#credits)Credits

Thanks for the lessons.  
Lama Dev 
