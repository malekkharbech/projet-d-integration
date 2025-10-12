🧠 1. Git Basics
Command	Description
git init	Initialize a new Git repository
git clone <url>	Clone an existing repository
git status	Show the current state of the working directory
git add <file>	Stage changes for commit
git add .	Stage all modified/deleted/new files
git commit -m "message"	Commit staged changes
git commit -am "message"	Add & commit tracked files at once
git diff	Show changes not yet staged
git diff --staged	Show changes between staging area and last commit
git log	Show commit history
git log --oneline	Compact commit history view
git show <commit>	Show details of a specific commit
🌿 2. Branching & Merging
Command	Description
git branch	List branches
git branch <name>	Create a new branch
git checkout <name>	Switch to another branch
git checkout -b <name>	Create and switch to a new branch
git merge <branch>	Merge another branch into the current one
git rebase <branch>	Reapply commits on top of another base branch
git branch -d <name>	Delete a branch (safe)
git branch -D <name>	Force delete a branch
🌍 3. Remote Repositories
Command	Description
git remote -v	View remote connections
git remote add origin <url>	Add a remote repo
git fetch	Fetch updates from remote without merging
git pull	Fetch and merge updates from remote
git push	Push commits to remote
git push -u origin <branch>	Set upstream branch and push
git push origin --delete <branch>	Delete a remote branch
⚙️ 4. Undoing Changes
Command	Description
git restore <file>	Discard changes in working directory
git restore --staged <file>	Unstage a file
git reset <commit>	Move HEAD to a specific commit
git reset --hard <commit>	Reset working dir and index to commit
git revert <commit>	Create a new commit that undoes a previous one
🔍 5. Stashing & Cleaning
Command	Description
git stash	Save uncommitted changes temporarily
git stash pop	Apply last stash and remove it
git stash apply	Apply last stash (keep it saved)
git stash list	List stashes
git clean -fd	Remove untracked files and directories
🏷️ 6. Tags
Command	Description
git tag	List all tags
git tag <name>	Create a lightweight tag
git tag -a <name> -m "message"	Create an annotated tag
git push origin <tag>	Push tag to remote
git push origin --tags	Push all tags to remote
🧩 7. GitHub CLI (gh) Commands

(Install GitHub CLI: https://cli.github.com/
)

Command	Description
gh auth login	Authenticate with GitHub
gh repo create	Create a new GitHub repository
gh repo clone <repo>	Clone a GitHub repo
gh repo fork <repo>	Fork a repo
gh repo view	View details of current repo
gh issue list	List issues
gh issue create	Create a new issue
gh pr list	List pull requests
gh pr create	Create a pull request
gh pr checkout <id>	Checkout a pull request
gh pr merge	Merge a pull request
gh release create <tag>	Create a new release
gh release view <tag>	View a release
🧰 8. Configuration
Command	Description
git config --global user.name "Your Name"	Set username
git config --global user.email "email@example.com"	Set email
git config --list	Show all settings
git config --global core.editor "code --wait"	Set default editor (VS Code)
💾 9. Advanced / Miscellaneous
Command	Description
git blame <file>	Show who last modified each line
git cherry-pick <commit>	Apply specific commit from another branch
git reflog	View reference log of all actions
git shortlog -sn	Show contributor stats
git archive --format=zip HEAD > archive.zip	Export repo as ZIP
