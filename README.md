## Black in Ai - Workshop 2020

This project was created using Reactjs and Material UI as a styling component. 

- To construct the design, I created a component for each item.
- Each item was imported in a main page, that brings all the components together.
- Each component has its own style.
- The publication was made free of charge, using the vercel plataform.
- Any changes made to the main branch are automatically updated on the website already published. Due to the deployment integration with the vercel app platform. 

For content updates:
- All markdown files are loaded into BAI folder in `pages`.
- For update markdown files, there are inside the `post` folder.


```
── pages \\loading makdown files
│   ├── AcademicPrograms
│   │   └── index.js
│   ├── BAI
│   │   ├── cpf2020.js
│   │   ├── grants2020.js
│   │   ├── organizers2020.js
│   │   ├── programs2020.js
│   │   ├── sponsors2020.js
│   │   └── submissionsInstructions2020.js
|   |
├── posts \\Markdown Files
│   │ 
│   ├── bai2020
│   │   ├── CallForSubmissions2020.md
│   │   ├── Grants2020.md
│   │   ├── Organizers2020.md
│   │   ├── Programs2020.md
│   │   ├── Sponsors2020.md
│   │   └── SubmissionsInstructions2020.md
│   └── baiPrograms
│       └── AcademicPrograms.md
```

For the first time running in your local environment:
Clone the project and: 
`cd baiworkshop` use `yarn install` or `npm install`.

After installion: Run `yarn start` or `npm start`.

For deployment and update, just commit and push into to the main branch. 
**It is not necessary to use `run` and `deploy` commands. Vercel's tool already does that.** 