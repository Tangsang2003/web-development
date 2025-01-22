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