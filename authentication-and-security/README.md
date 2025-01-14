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
