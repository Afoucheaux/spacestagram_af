## Contact  

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555)](https://github.com/Afoucheaux) [![GitHub](https://img.shields.io/badge/GitHub-black.svg?&style=flat-square&logo=github&logoColor=white)](https://www.linkedin.com/in/aaron-foucheaux-891626207/) - Aaron Foucheaux

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Setup Instructions](#setup-instructions)
- [Learning Goals](#learning-goals)
- [Challenges/Wins](#challenges)
- [Functionality](#functionality)
- [Future Iterations](#future-iterations)
- [Contributors](#contributors)

## About the Project

This application allows a user to view random images from one of NASA's APIs. Each image provides additional information of the title, date and description. The user is able to like/unlike images by clicking the heart icon. Some highlights of this project are:

- Use of Context API and React hooks for global user state
- E2E test coverage of user flows using the Cypress library
- Custom built carousel component
- Deployment using Heroku
- [Deployed app](https://spacestagram-af.herokuapp.com/)
- [Project Brief](https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/edit#)

#### Built With:

- React w/hooks & Context API
- TypeScript
- HTML5
- CSS
- Cypress
- Heroku

## Setup Instructions

The site is deployed [here](https://spacestagram-af.herokuapp.com/)

1. Clone the repo [here](https://github.com/Afoucheaux/spacestagram_af)
2. Run `npm install`
3. Run `npm start`
4. Visit http://localhost:3000/
5. To run the tests, ensure the app is running on http://localhost:3000/ and run `npm run cypress`

## Goals

- Demonstrate my level of technical proficiency by achieving an MVP
- Create an intuitive user interface
- Test user flow

## Challenges/Wins

- Building of the carousel component

## Functionality

#### Basic run though
![Landing Screen](https://media.giphy.com/media/eBqI2nPuGTSjJ3ZWHN/giphy.gif?cid=790b761194716abd8a87a318ea06bb24dd6d79e2302d1604&rid=giphy.gif&ct=g)

#### Like/Unlike
![Like Functionality](https://media.giphy.com/media/LvLNtw6qTSEvdiVact/giphy.gif?cid=790b761176076af8b469a2fbb546b06d835e9974a1a846fd&rid=giphy.gif&ct=g)

#### Accessibility
<a href="https://ibb.co/dDwvcYC"><img src="https://i.ibb.co/Hqfy28w/spacestagram-accessibility.png" alt="spacestagram-accessibility" border="0"></a>

## Future Iterations

1. CI implementation
2. User login screen with the ability to load by date and number of images
3. Improved sad path testing
4. Utilization of LocalStorage to persist a user's liked images
5. Display a default image when returned API data does not contain a valid image URL

## Contributors

* [Aaron Foucheaux](https://github.com/Afoucheaux) - Application FE Co-creator
