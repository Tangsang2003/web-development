# 8. Git, Github and Version Control
[**A great Resource to learn git.**](https://learngitbranching.js.org/)
## 8.1 Basic Git Commands
1. We use `git init` to initialize a repository.
2. In the repository, to track changes, we need to add files to the intermediary staging area.
3. To see, which files are in the staging area (i.e are being tracked), we use `git status` command.
4. To add to the staging are we use `git add __FILENAME__`.
5. We use `git commit -m "YOUR CUSTOM COMMIT MESSAGES"`, to commit changes or create a `save point`.
   1. It is very important to be as specific as we can during commits. i.e. what changes did we actually make.
   2. Commit messages are usually written using present tense. It is best practice. Written in Imperative mood. `Fix Bug` is good. `Fixed Bug` and `Fixes bug` is not good.
6. We use `git log` to see what commits have been made.
7. We use `git diff __FILENAME.txt__` to see what changes have been made to a file from the last commit.
8. We use `git checkout __FILENAME.txt__` will rollback `__FILENAME.txt__` to the state that it was in last commit before modifications. 

## 8.2 Remote Repo (GitHub)
1.  In order to push an existing repository from local to GitHub, we use: `git remote add origin <GITHUB HTTPS repo URL>`.
    - Then, `git push -u origin main` if pushing for the first time. Else, `git push origin main`.
    - The `-u` flag tells git to track a remote branch when pushing for the first time. It is used to setup upstream. So, simple `git push` or `git pull` will be enough. If `-u` is not present, then, we have to specify explicitely in each push or pull, i.e. `git push origin main` or `git pull origin main`.
    - `origin` is the name of the remote. We can name it anything, but it is usually named `origin`.
    - `main` is the branch name. It is the default.

## 8.3 GitIgnore
- Gitignore file is used to ignore files for pushing to remote.
- The files listed in gitignore is neither tracked nor pushed to remote.
- The file should be `.gitignore` 
- Wildcards: `*.txt`. If we add `*.txt` in our gitignore file, all the txt files will be ignored.

## 8.4 Cloning
- `git clone <__HTTPS__URL__OF__REMOTE__REPOSITORY__>`.
  
## 8.5 Branching and Merging
- While working on our project, we can branch out from our main or master branch to work on a different feature or experiment on a new one.
- We can continue working on our main branch as well. And, after finishing our task in alternative branch, if we want to merge or add those new features that we worked on, we can merge to the main.
- To create a new branch we use `git branch __NEW__BRANCH__NAME`.
- To see what different branches we have, we use `git branch`.
  - The `*` shows the branch that we currently are on.
- We use `git checkout __BRANCH__NAME` to switch to `__BRANCH__NAME` branch.
- We use `git branch -r` to see all the remote branches.
- We use `git branch -a` to list all remote as well as local branches.
- To merge, we first go to the `master` or `main` branch.
- And, `git merge __BRANCH__NAME__` to merge.

## 8.6 Forking and Pull requests
- Forking is done when we don't have direct writing permissions on a remote repository.
- So, in order to contribute to such repositories, we first need to fork that repo onto our own github account.
- Then, we need to clone that forked repo and do our work.
- After we are happy with our contributions, then, we can submit a pull request to the original repository to pull our contributions or changes.
- If approved, it will be added.