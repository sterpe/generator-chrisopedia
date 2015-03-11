# How to Contribute

Third-party patches are essential for keeping open-source software great.
In the spirit of keeping it as simple as possible to contribute changes that
get things working in your environment, here are a few guidelines that
contributors should follow.  As [Nicholas Gallagher](http://github.com/necolas/normalize.css/blob/master/CONTRIBUTING.md) put it in his contributing
guidelines:

> Following these guidelines helps to communicate that you respect the time
> of the developers managing and developing […]. In return, they should
> reciprocate that respect in addressing your issue or assessing your patches
> and features.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Bug Reports](#bug-reports)
3. [Feature Requests](#feature-requests)
4. [Pull Requests](#pull-requests)
    1. [The Process](#the-process)
    2. [Gotchas](#gotchas)
5. [Additional Resources](#additional-resources)

## Getting Started

1. Make sure you have a [GitHub account](https://github.com/signup/free).
2. Read the [Style Guide](https://github.com/chrisopedia/styleguide) docs in the Wiki.  I won't accept any pull request that doesn't adhere, so be forewarned.
3. Please [ask before](https://twitter.com/chrisohpedia) making significant changes.  I'd hate for you to put in a lot of work for something that doesn't align with the vision of this project.
4. This project uses [Grunt](http://gruntjs.com/) to concat, minify, version, hash, and compile among other things.  So if you're not comfortable with using this, it may be difficult for you to contribute.

## Bug Reports

Bugs are small, testable and demonstratable problems caused by the code.  A good report will be able to easily outline the problem and steps to recreate.  If you're going to submit a bug, please verify you've done everything on this list.

1. [Search](https://github.com/chrisopedia/<%= name %>/search) for the issue.  This means you may have to read through the issue(s) in order to determine if your particular issue has already been created.
2. Check if the issue has been fixed by trying to reproduce the issue in a fresh repo off the `master` branch.
3. Create a [reduced test case](http://css-tricks.com/reduced-test-cases/) as outlined by @chriscoyier of [CSS Tricks](http://css-tricks.com/).  Link to the [Code Pen](http://codepen.io), [JS Bin](http://jsbin.com), or whatever you use, as long as its publicly accessible.
4. If you've followed the above, and you're still seeing the problem, congratulations, you've just found a bug.

Now its time to [submit a ticket](https://github.com/chrisopedia/<%= name %>/issues/new).  Bug reports should be thorough and not leave me wondering or questioning what you were thinking.  I shouldn't have to ask you anything or require further clarification.  Github allows you to fill out a title and a comment.  The title should be concise and descriptive; I should be able to know what you're issue is at a glance.  For the comment section, there are some very specific fields I'd like to see within there.  The first few lines should be a description or summary of the issue; don't be afraid to go into detail.  No one ever said too much detail was a problem, and if they did, it wasn't me.  I would like a few other things listed as such:

1. **Browser & OS**: Always include the browser(s) and version(s) along with the OS(es) where you found the issue.  If, for example its Chrome on a Mac, version 22 and above, you can simply put Chrome 22+ (OSX 10.8.3).
2. **Steps to Reproduce**: Please include the steps you followed to find this bug.  This will make my life so much easier to help fix the issue.  Screenshots can be a big help as well along with the steps.
3. **URL to Test Case**: This is not always a requirement, but is never a bad idea.  Think logically; if this is a major bug, this would be a big help, but if its something small like a color is off, then probably don't need a test case.  Use your best judgement, but don't be surprised if I ask for one.
4. **Line(s) of Code**: Definitely not a requirement, but doesn't hurt if you've already pin pointed the issue.
5. **Library Version**: What version of the library are you running?

For the comment section, please follow the example below and you'll be on the right path.  Let's assume that a bug is causing the entire page to turn the background red, here's an example.

Example:

```
Missing clear float on body tag appears to be causing a red background to show

Browser & OS: Chrome 22+ (OSX 10.8.3), Safari 5+ (OSX 10.8.3), Firefox 20+ (OSX 10.8.3)
Steps to Reproduce:
1.  Open [http://google.com](http://google.com) and click the debug button.
2.  Notice that column 1 and column 2 are floated and the red bg is showing between
Test Case: [http://codepen.io/blah](http://codepen.io/blah)
Line(s) of Code: 204 on common.css
Library Version: 1.0.0
```

## Feature Requests

I'm always open for new ideas, so don't be afraid to issue a feature request, but please stop and think about the intent of the project.  Maybe its better in another independent project, or maybe not; there is no harm in asking, or filling out a feature request.  Before you do submit, please look at my [road map](/roadmap.md) to see if I've already thought of your feature.  If it's not there, you might try looking at my [features list](/features.md); there I'll generally list ideas to possibly solicit feedback or list out community features.  And remember, if I don't like the idea, doesn't mean you can't fork the project.

## Pull Requests

### The Process

1. [Fork It](https://github.com/chrisopedia/<%= name %>/fork)
2. Clone the repo (`git clone https://github.com/<username>/<%= name %>`)
3. Configure the remote.

    ```
    cd <%= name %>
    git remote add upstream https://github.com/chrisopedia/<%= name %>
    ```

    4. If you've cloned previously, then get latest changes.

    ```
    git checkout master
    git pull upstream master
    ```

5. Create your feature branch (`git checkout -b feature/my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-new-feature`)
5. Create new [Pull Request](https://github.com/chrisopedia/<%= name %>/compare)

**IMPORTANT**: By submitting a patch, you agree to the same license as that used by the project.

### Gotchas

- Please avoid working directly on the `master` branch.
- Make commits of logical units.
- Check for unnecessary whitespace with `git diff --check` before committing.
- Make sure your commit messages are in the [proper format](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

````
    Add new pattern to check for block-level elements within inline elements

    More detailed explanatory text, if necessary.  Wrap it to about 72
    characters or so.  In some contexts, the first line is treated as the
    subject of an email and the rest of the text as the body.  The blank
    line separating the summary from the body is critical (unless you omit
    the body entirely); tools like rebase can get confused if you run the
    two together.

    Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
    or "Fixes bug."  This convention matches up with commit messages generated
    by commands like git merge and git revert.

    Further paragraphs come after blank lines.

    - Bullet points are okay, too
    - Typically a hyphen or asterisk is used for the bullet, preceded by a
      single space, with blank lines in between, but conventions vary here
    - Use a hanging indent
````

# Additional Resources

- [Reduced Test Cases](http://css-tricks.com/reduced-test-cases/)
- [General GitHub documentation](http://help.github.com/)
- [GitHub Send Pull Request Documentation](http://help.github.com/send-pull-requests/)
- [GitHub Using Pull Request Documentation](https://help.github.com/articles/using-pull-requests/)
- [Forking a Github Repo](http://help.github.com/fork-a-repo/)
