# JobFolio

JobFolio is a front-end web application that displays and manages job postings. It is made using **React** and **TailwindCSS**. I made this to refresh my React knowledge, including hooks, props, components, wrapper components, routing, and data loaders. The project also uses several React libraries such as react-icons, react-toastify, react-spinners, and react-router-dom.

## Features

- A home screen displaying recent job postings pulled from a local development server (**Vite**)
- A detailed job view showing a job's information when given its ID
- Form-based screens for adding, updating, and deleting jobs utilising PUT, POST and DELETE requests as mock API calls to a local `json-server`

## Screenshots


## Installation and Running the Application

1. Clone the repository: <br/>
   `git clone https://github.com/YourUsername/JobFolio.git` <br/>
   `cd JobFolio`
2. Install dependencies: <br/>
   `npm install` <br/>
3. Start the json-server (in one terminal): <br/>
   `npm run server` <br/>
4. In a separate terminal, start the Vite development server: <br/>
   `npm run preview` <br/> 
5. Open your browser and navigate to the local address provided by Vite <br/>

##Project Structure

```
💼 JobFolio
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ images
│  │     └─ logo.png
│  ├─ components
│  │  ├─ Card.jsx
│  │  ├─ Hero.jsx
│  │  ├─ HomeCards.jsx
│  │  ├─ JobListing.jsx
│  │  ├─ JobListings.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Spinner.jsx
│  │  └─ ViewAllJobs.jsx
│  ├─ index.css
│  ├─ jobs.json
│  ├─ layouts
│  │  └─ MainLayout.jsx
│  ├─ main.jsx
│  └─ pages
│     ├─ AddJobPage.jsx
│     ├─ EditJobPage.jsx
│     ├─ HomePage.jsx
│     ├─ JobPage.jsx
│     ├─ JobsPage.jsx
│     └─ NotFoundPage.jsx
├─ tailwind.config.js
└─ vite.config.js
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

## License
This project is licensed under the MIT License.

## Contact
Malak Sadek - [https://malaksadekapps.com/](https://malaksadekapps.com/) <br/>
Project Link: [https://github.com/MalakSadek/JobFolio](https://github.com/MalakSadek/JobFolio)


