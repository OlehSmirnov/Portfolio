# My portfolio website

**Overview:**

My portfolio app.

After opening the app it sends some requests to GitHub and Netlify APIs to get necessary data about my projects.
After all necessary data is gathered a user can see all of my projects that are deployed to Netlify.
There are 4 buttons on each project card:
* GitHub repo - redirects to corresponding GitHub repository of a project
* Live version - redirects to live version of a project
* Project notes - shows project notes by parsing corresponding GitHub readme.md file
* Close button - visible only after clicking "project notes button", hides project notes

The app is dynamic, meaning that after deleting/adding/updating some project(s) on Netlify 
all the necessary changes will be reflected in the app and no additional coding is needed.

**Technical difficulties:**

* Set up proper API integrations and gather/display data dynamically
* Figure out how to get and parse the correct GitHub readme file

[Live version](https://oleh-smirnov-portfolio.netlify.app/)
