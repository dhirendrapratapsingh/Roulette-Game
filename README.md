### `Steps to create Project & add all dependencies in Ubntu18.04>`

shortcut way is just download whole project install npm >go inside project directory > npm start

`Install nodejs npm npx` <br>
sudo apt update<br>
sudo apt install nodejs npm<br>
sudo apt install npm<br>

npm install -g npx<br>
npx create-react-app [react-app/YourAppName]<br>
cd react-app<br>
npm start<br>

Then open http://localhost:3000/ to see your app.<br>
stop ctrl+c to add dependencies

`Installing Libraries & framework` <br>

npm install axios<br>
npm install sweetalert --save <br>

replace src and public folder in react-app  and copy the package.json then do npm install<br>

npm start<br>
open http://localhost:3000/ to run app again.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### Provided resources

- Problem Statement https://www.notion.so/Round-1-Frontend-Engineer-Assignment-FamPay-9f432c502ab64b909d9f5484406a2d90
- Sheet link   https://docs.google.com/spreadsheets/d/1AlswlDtP6DQDDuVwAfgKdG0fxfIVSOpCKi_ZzmOP3_U/edit#gid=0

### `Libraries & Resources used `

[React JS(UI)](https://reactjs.org/docs/getting-started.html),<br>
[axios](https://www.npmjs.com/package/axios): To handle API calls<br>
[sweetAlert](https://sweetalert.js.org/guides/), -Notify the user about pize won<br>
[npm](https://www.npmjs.com/): Package manager<br>


I used a Customizable React roulette wheel plugin with spinning animation from here
https://www.npmjs.com/package/react-custom-roulette#wheeldata


### Steps of API Initegration

In order to use Google sheets API to update a publically hosted spread sheet secured with Auth0 https://console.cloud.google.com/apis 
I added Google sheets API to my dashboard
I Created Client ID and API Key made origin configurations to Integrated methods to Update the sheet <br>

But because of some error from google side somehow even after provinding valid URI where the App runs kept on showing the error below
and could never coonec with the hosted Seet athough I have defined all the necessary params and methods globally and Inside Roulette component

```
details: "Not a valid origin for the client: http://localhost:8080 has not been registered for client ID dhirens-roulette-game.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and register this origin for your project's client ID."
error: "idpiframe_initialization_failed"
```
<br>

This is a know bug from google yet to be resolved. I tried all the solutions spent whole day Learning and fixing but none of them worked

https://stackoverflow.com/questions/42566296/google-api-authentication-not-valid-origin-for-the-client
https://stackoverflow.com/questions/52529360/how-to-solve-idpiframe-initialization-failed-for-localhost/53899196



### Google Shhets API

I learned about the syntax and methods to use this API from here
[Google sheets API documentation](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append).


### Items not implemented and reason

This is custom create roulette crated in Canvas which is vey complicated to rotate even if one is able to implent the drag functionality to raise power of rotation. The Increasing speed to of Roation is another complicated thing.
Its very difficult for experience professionals to take out time and Develop such mini projects. 
Since I took it as an Opportunity to learn Google Sheets API and Roulette, I spent 2 nights & 1 day on this.


### Extra Items implemented

- Sign In and Sign-out buttons are added and should be present to ensure there s no misuse of API only authorized person can do that
- Adde a sweet ttractive alert to give the player What prize he won

### Screeshots


<img width="959" alt="Roulettegame" src="https://user-images.githubusercontent.com/32532380/116330680-a4dc8280-a7eb-11eb-9727-76c35f7a0b20.png">

<img width="578" alt="swwetalert" src="https://user-images.githubusercontent.com/32532380/116330706-b32a9e80-a7eb-11eb-860f-42dfa01eb371.png">

<img width="733" alt="Mobileview" src="https://user-images.githubusercontent.com/32532380/116330714-b887e900-a7eb-11eb-9661-7c755bf775c9.png">

<img width="949" alt="roulettegameDesktop" src="https://user-images.githubusercontent.com/32532380/116330722-c0e02400-a7eb-11eb-9f7d-7c434cd9c6b2.png">


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)


### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### My lerning resource

I learned about spreadsheet API from here here: [https://www.youtube.com/watch?v=M0Jtp_0e70c](https://www.youtube.com/watch?v=M0Jtp_0e70c)
