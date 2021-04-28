# [[Round 1] Frontend Engineer Assignment - FamPay](https://www.notion.so/Round-1-Frontend-Engineer-Assignment-FamPay-9f432c502ab64b909d9f5484406a2d90)

**Kickoff date:** Today

**Deadline:** < 48 hours

# Project Goal

Develop a progressive web app

# Description

This assignment is designed to be a test of your architectural style, your knowledge of reactive programming. You must complete this using ReactJS framework

# **Instructions**

The goal is to design a web app that allows the user to spin by tapping ‘Spin’and get the reward mentioned on the segment of wheel where it stops. Alternatively, you can hold and rotate the wheel anti-clockwise and increase the power of rotation which is visible in the arrow below the wheel and once you leave it after it crosses the black mark, it rotates with higher power clockwise as per the design specified [here](https://www.figma.com/file/6ippHe79ZmMo3JQNJmD8J7/Round-1-Frontend-Engineer-Assignment-FamPay?node-id=0%3A1). (To access the dimensions and download the assets please login in Figma)

**Expected Deliverables:**

- [ ]  Design should match as closely as possible to the one on [Figma](https://www.figma.com/file/6ippHe79ZmMo3JQNJmD8J7/Round-1-Frontend-Engineer-Assignment-FamPay?node-id=0%3A1)
- [ ]  Implement swipe down to refresh feature
- [ ]  Handle loading and error states
- [ ]  Write structured code with flexible and reusable components
- [ ]  Using [google sheets API](https://developers.google.com/sheets/api), post data (`web client`, `timestamp` and `spin_result_index`) on a google spreadsheet ([example](https://docs.google.com/spreadsheets/d/1AlswlDtP6DQDDuVwAfgKdG0fxfIVSOpCKi_ZzmOP3_U/edit?usp=sharing)) after every successful spin, where `spin_result_index` is the index of the  segment of the wheel which came as an outcome (result)
- [ ]  Build and deploy the code on [heroku](https://www.heroku.com/) or any free server instance available

**Brownie points**

- [ ]  The PWA if opened on desktop should only take a mobile sized container in the centre of the website

**How to get started**

- Write API logic
- Test with our given URL

**Submission**

- Try and keep your commit messages clean, and leave comments explaining what you are doing wherever it makes sense.
- Submission should have a `README` file containing instructions to run and test the app.
- Send your submission (Git repository) link at chitra@fampay.in
- Feel free to ask any questions you have, anytime!

## Resources

- Design: [https://www.figma.com/file/6ippHe79ZmMo3JQNJmD8J7/Round-1-Frontend-Engineer-Assignment-FamPay?node-id=0%3A1](https://www.figma.com/file/6ippHe79ZmMo3JQNJmD8J7/Round-1-Frontend-Engineer-Assignment-FamPay?node-id=0%3A1)
- Spinner Interaction and Animation: [https://drive.google.com/file/d/1wbDFh43j3T2sV5rT4uDq5GydkyEbt0_n/view?usp=sharing](https://drive.google.com/file/d/1wbDFh43j3T2sV5rT4uDq5GydkyEbt0_n/view?usp=sharing)