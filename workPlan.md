## 25/4/23
<hr/>

_Work on BookScreen and NotFoundScreen Styles_

### Morning question

- How to pass book data to the BookScreen component?
<hr/>

### BookScreen

We're gonna need: 
- Back to discover Link
- Show img, title, author, publishedAt, categories, description
- Review: rating + comment + submit
- Buttons for save the book in the bookshelf
- The body of the show page must be centered and have the book data
- NavBar and Footer?

### NotFoundScreen

- Back to discover Link

<hr/>

## 26/4/23

<hr/>

_Work in show received data in bookScreen_

We're gonna need:

### BookScreen
- Pass data to bookScreen and find the book by id.
- Restructure the page styles regarging data to show.

### ExploreBooks
- Fix the images and the styles.
- Loading spinner.
- Full page loading spinner.

## 27/4/23
<hr/>

_React folder structutre (youtube material)_

The three levels are defined in relation to the large of the project rather than the dev's expertise level. 

### BEGINNER

Folders: 
- __tests__
- __components__ 
- __hooks__

In the components folder there are all the components of the app, from the simpliest button to the more complex things like HomePage. This is fine for smaller projects. If you have 10/20 components you can put it in this folder and is going to be easy to understand whats happening.
When the app starts to scale up, the folder component is gonna get really huge. So many components in one single folder and you don't know which of them are full pages and which are smaller components, what are stateful components and what are presentation components.
The src folder is gonna get very large if you have all the utils in there too, without an utils folder, or the context files too.
The test folder contains the tests for everything in one folder(components, hooks, etc). Hard to know which tests are asociated with which files. You're tests are not anywhere near your components. This is fine for small projects. But if this scale is a better aproach to put them next to the actual code that it's testing.

### INTERMEDIATE

Folders:
- __assets:__ contains things like images, svg's, global css. Any kind of asset that you import and isn't javascript code. All your files in this location easy to access.
- __components:__ now we have different folders instead of being a bunch of files. In the example there are: tests, form(with tests inside), ui(with tests inside).
- __context:__ any context that you have. In here we have a test folder, and inside of it a js file with the same name of the context file. The test as close as posibilly to the file that's testing.
- __data:__ any store json file that you have
- __hooks:__ same as before but we have the tests folder inside.
- __pages:__ every page in the app is going to have some components that are _share_ and some components that are _unique_. All that components that are share between different pages have to be in the __components__. All that are unique for the specific page needs to be in the specific page folder. One folder in this folder for each page in your screen. You put all the code that's unique for that page inside of the folder(even if it's a hook or a context file), all that stuff that's only for that particular page. Each folder have the tests folder inside. 
- __utils__: utility functions that we have before in the src folder. We have a tests folder here too. The code that put in here is generally very small and simply functions, generally pure functions.

More folders, less files in the src folder. Src folder much more cleaner and allows us to separate concerns of our files.

__components__ and __pages__ links to each other. In __components__ we have general and small components. A lot of times there are only presentational components, there no need to store any state, you give them data and then it renders some output to the screen, and you use them in several parts of you app. 
The __pages__ folder is for each individual page in your screen. Even if you have a small component, if it's used only in this page, should be in this folder. Same for the contexts, hooks, utils.

## 25/4/23
<hr/>

What is the problem with this approach which leads to the next level?
When you scale up to a really large enterprise style app, with tons of different features and a tons of different additions, you'll quickly run into problems in this structure.
- More and more things will be shared across multiple pages. You add more components so you need to pull things out of your pages folder and put them into components, because they can be shared across the entire app.
- This is a problem because as your app grows your pages folder becomes more simpler and your components folder becomes more complex, which is the problem we're trying to avoid.

### ADVANCED

******************************************************

_How to structure the auth/unauth app architecture?_

- _assets:_ you know, images and so on.

- _components:_ button, form, formModal, searchInput, resultCard, review, navbar?, showCard. 

- _hooks:_ same as assets, hooks used in diff places of app. 

- _pages:_ Explore, Show, Login, NotFound.

- _utils:_ client, fakeDB.

