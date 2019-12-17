
[![Greenkeeper badge](https://badges.greenkeeper.io/DESQOL/MyCoeliac.svg)](https://greenkeeper.io/)
<img width="100%" alt="atomic design" src="https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png">

### Atoms 

<img width="152" alt="atoms" src="https://user-images.githubusercontent.com/4838076/33235102-b310bc56-d218-11e7-83e1-f5f819bab789.png">

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.


### Molecules

<img width="654" alt="molecules" src="https://user-images.githubusercontent.com/4838076/33235103-b352cc2c-d218-11e7-84e1-17d1bc8e4517.png">

They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.


### Organisms

<img width="1356" alt="organisms" src="https://user-images.githubusercontent.com/4838076/33235104-b3a247ca-d218-11e7-9c0e-4b7f18a48627.png">

Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content. 

## React + Atomic Design
This project uses atomic design

- The Atomic Design should have a file of variables and it must be imported by each component;
- The atoms should be written without margins and positions;
- Only the molecules and organisms can set the positions of atoms, but these stacks can’t have any styles of margins and positions;

## Scripts

| Script | Desc |
| ---- | ---- |
|`$ npm install`| Start a simple webpack server |
|`$ npx react-native run-android`| Create a server to development at port 5000 |
|`$ npm storybook`| Start Storybook with the stories imported |


## Libraries

- Storybook
  - Storybook Info
- Project
  - ESLint

## Contributors
[@linh]()
[@martijn]()
[@jordy]()
[@jeffrey]()
