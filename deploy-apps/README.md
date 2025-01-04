# 11. Deploying apps using Vercel and MongoDB atlas.

## 11.1 Setting up MongoDB atlas
- Sign up for MongoDB atlas.
- Then, create a new cluster:
  - We will be using M0 sandbox cluster tier because it is free for learning purposes.
  - We will be going with AWS cloud provider.
- Once the cluster is created:
  - Go to the security tab and add a new database user.
  - Give atlas-admin priviliges.
  - For network access, add allow access from anywhere.
- Now, go to clusters tab again and click on connect.
- Then, choose `Shell` to connect.
  - Choose your appropriate version.
  - Now, we copy the URL that is given.
  - And, paste it into the command line.
  - Then, it will ask for password. We will use the password that we had set during creating the database user.
  - Now, it will get connected to the cloud based MongoDB database.
- Now, for testing:
  - Go to collections tab in the cluster.
  - There, add new data.
  - There, we will be able to add a new database as well as collections.
  - Now, we can add new documents by inserting a document.

## 11.2 Accessing MongoDB atlas from our node.js application
- While connecting, we will use VS code configuration and copy the URL provided.
- Replace appropriate placeholders.