# Intro to Form Validations in Express

## Set Up

```
npm install
nodemon
```
## Stories

### Users can create puppies

```
When a user goes to the site's homepage
And clicks "Add a Puppy"
And fills out the form
And clicks "Create Puppy"
Then they should see the created puppy on the puppies index page
And a success message should appear
```
![](wireframes/puppy.png)
![](wireframes/puppies3.png)

### Users can create people

```
When a user goes to the site's homepage
And clicks "Add a Person"
And fills out the form
And clicks "Create Person"
Then they should see the created person on the people index page
And a success message should appear
```
![](wireframes/person1.png)
![](wireframes/person3.png)

### Errors are displayed when a form is not filled out correctly

```
When a user fills out a form
And clicks "Submit"
When any of the form fields are blank (or invalid)
Then the 'new' template should be re-rendered and error messages should appear
```
![](wireframes/person2.png)
![](wireframes/puppy2.png)

## NOTE:

When you have completed this exercise walk an instructor through your app and have them mark you as finished.
# express-validations
