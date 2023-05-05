# Welcome to Meet Me At Frontend app  
<p aling="center"><img src="./MeetMeAt/src/assets/mainpicture.jpg"/></p>

<details>
  <summary>Index</summary>
  <ol>
    <li><a href="#about-this-project">About this project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#local-instalation">Local installation</a></li>
    <li><a href="#how-do-we-do-it">How do we do it</a></li>
    <li><a href="#known-bugs">Known bugs</a></li>
    <li><a href="#future-functionalities">Future funtionalities</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#webgraphy">Webgraphy</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About this project 🎯

<p align="center">The product department GeeksHubs request to create the frontend corresponding to the appointment management system for a Dental Clinic to be connected with a backend created in the last proyect. 
The patient must be able to register in the application, login and access to their client area. In your patient area you should be able to see a list of appointments that has to, in the future and past, create appointments and view the own profile.
There will also be a doctor area with your personal data, which can only be seen by himself and view all patients.
Admin is the las user area w can have acces to all personal data in the app.</p>
<p aling="center"><img src="GIF"></p>

## Stack
<div align="center">
<a href="https://www.reactjs.com/">
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 <a href="https://redux.js.org/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808568-89a147ae-a047-4b1c-8065-9de44bd9bcb2.svg"/>
</a>
<a href="https://react-bootstrap.github.io/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808594-021a15ab-7e14-454b-b977-4a5ade8287ed.svg"/>
</a>
<a href="https://nodejs.org/en">
    <img src= "https://user-images.githubusercontent.com/121863208/227808607-7170e528-cc5d-4a04-a7ec-edfad90e2a1e.svg"/>
</a>
<a href="https://github.com/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808612-8d3f0fee-99d9-45d8-8274-6584c9ac0b38.svg"/>
</a>
<a href="https://git-scm.com/downloads">
    <img src= "https://user-images.githubusercontent.com/121863208/227808620-cd6e5d5c-dd63-4a9d-b19d-0983807cae95.svg"/>
</a>
<a href="https://aws.amazon.com/es/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808635-e232785c-0d4c-4067-ad94-c33a707c3d17.svg"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/CSS">
    <img src= "https://user-images.githubusercontent.com/121863208/227808642-a8dcfecb-74b9-4796-8b2b-7bfe5cf1b4ba.svg"/>
</a>
<a href="https://nextjs.org/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808660-c8b59b3d-34bd-446f-83e1-8157f5a09b98.svg"/>
</a>
<a href="https://expressjs.com/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808665-1bf127e8-1ad3-4836-b42e-92bb5844a260.svg"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>

## Local installation
######This is for backend project:
 Clone the project on your computer
    ` $ git clone 'url-repository' `
 Install all dependencies
    ` $ npm install `
 Create a .env with the credentials on the .env.example
 Start server with:
   ``` $ npm run dev ```
 Connect with the database following:
    ``` $ npx sequelize-cli db:create ```
    ``` $ npx sequelize-cli db:migrate ```
    ``` $ npx sequelize-cli db:seed:all ```
Now is time for frontend project:
 Clone the project on your computer
    ` $ git clone 'url-repository' `
 Install all dependencies
    ` $ npm i `
 Start server with:
   ``` $ npm run dev ```
Last step download the dataBase:
[Data base git hub](https://github.com/LauraSanchezLucas/lsl-fsd-val-dentalclinic)

## How do we do it
For the app of the dental clinic we have implemented different technologies already mentioned above in "Stack" such as JavaScript, NodeJS, React, etc. Firstable I created a plan to face my project in terms of requirements that I wanted to have in our app and marked all the final points of the project, as you can see in the following picture:
<p aling="center"><img src="./dentalclinic/src/assets/readme.jpg"/></p>
Once I created the project I started connecting to the backend and then started manipulating the data to render it into my frontend project.
Finally I shaped the visual part of the project through Bootstrap React.

During the process I had few issues, the two most important with the navbar 

During the process I had some issues, the two most important was the dynamic rendering of the Navbar because I was not formulate the ternary functions correctly with the information that the token brought me was not correct, another of the difficulties that I had was the selector of doctors and treatments in book appointment without showing an ID number and with the name of services.

## Known bugs
✅ Pictures into carrusel are not correct adjust.  
⬜ The password in the register area is not encrypted
⬜ Missing the correct instractions for the credentials  

## Future funtionalities
✅ Create the functionality to delete a user by the admin
⬜ Be able to delete appointments by a user and by an admin
⬜ Be able to see the detail of a user and an      appointment by the admin and the doctor  
⬜ Modify both a citation and the profile by the user

## Licencia
This project is belonging to license Creative Commons Legal Code.

## Webgrafia:
To achieve the goal we have collected information from:
  [React documentation](https://www.reactjs.com/)
  [React-bootstrap GeeksHubs](https://react-bootstrap.github.io/)
  [dental clinic website-vitaldent](https://www.vitaldent.com/es/?gclid=c304c159cd09182a4974a55d1f0295ef&gclsrc=3p.ds&)


## Contacto

<a href = "laura:lausnclu@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/laura-sanchez-lucas-5b2222251" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="https://github.com/LauraSanchezLucas" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>  
</p>