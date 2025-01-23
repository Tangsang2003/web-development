# 14. Authentication and Security

## 14.1 Level 1 Security
- Just saving customer's email and password in the database.
- And validating when user's enter their credentials whether they match or not.

## 14.2 Level 2 Security
- It involves the use of encryption.
- We have used `mongoose-encryption`.

### 14.2.1 dotenv
`npm install dotenv`
```javascript
require('dotenv').config();
const secret = process.env.VARIABLE_NAME;
```
- It is important convention that the VARIABLE NAME should be written in snake case.
- Also, It should be written like this:
`SECRET_KEY="This is my Secret Key."`

### 14.3 Level 3 Hashing Passwords
- Hashing helps to secure credentials without the need for encryption key.
- How do we decrypt? The answer is: We don't.
- Hash functions make it almost impossible to turn a hash backwards into plain text.
- We will implement it using `MD5`.
- `npm install md5`
```javascript
const md5 = require('md5');
password = md5(password);
 ```

### 14.4 Level 4 Salting and Hashing Passwords with Bcrypt
- Dictionary attacks and hash table attacks (if simple hashing).

#### 14.4.1 Salting
- A random unit or characters is combined with the password and then hashed.
- So, even the same passwords will have different hashes.
- Mitigates rainbow table attacks.

#### 14.4.2 Bcrypt
- Industry standard Hashing algorithm.
- Bcrypt has the concept of `salt rounds`.
- Salt rounds means:
  - In one round salt round, the password is added with a random salt and then the hash is generated.
  - In two round, the generated hash from one round is again salted with the same salt and then hashed again.
  - And so on.
### 14.5 Level 5 Cookies and Sessions
#### 14.5.1 What are Cookies?
- Cookies are used to save browsing sessions. 
- For example: Let's say we added something to our cart on `amazon.com`. Then, if there were no cookies, if we exit that website and go somewhere else or close the browser and open up the site again, then it will have forgotten our old cart (i.e. what we added to our cart).
- So, to handle that, we use cookies, that basically saves what we were doing. 
- Cookies are not only used to save at a particular site, but also it can be used in other sites to remind what we were looking for initially. 
- It consists of session tokens that can be used to fetch the task we left off.

In More tecnical terms: 
- Let's say we went to `amazon.com`, this will be a `GET` request for the html, css, js files, etc. 
- Now, let's say we add something to our cart. This will be equivalent to the `POST` request, so we tell the server what we are interested to buy.
- Now, as the response to the `POST` request, the server responds with the cookie that has the current information (i.e that I want to buy a certain item) and instructs the browser to save the cookie. 
- So, now even if I close the site, or exit from the brower and come back at a later time, when we make a `GET` request, we request along with the cookie, so all our previous information will be fetched.

#### 14.5.2 Session Cookies

There are different types of cookies. Session cookies are one of them.
- Session cookies are used to maintain the session where a user and server is interacting.
- So, if we login to a particular website, then a session cookie is created so that even if we open up a new tab or close the current tab and go back to the website, we are already logged in. 
- So, the server uses the session cookie to verify that we are already authenticated.
- And, when we log out, then the session cookie will be destroyed. 
