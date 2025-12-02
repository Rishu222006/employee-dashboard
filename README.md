# Description:
    - This project is a simple Frontend based project showing the management of an employee daashboard. 
    - My primary aim for creating this project is to showcase my skills of managing login and auth control.
    - The UI has been kept simple and clean.
    - The site stores employee data in local storage of machine, instead of a database.
    - I hope whoever is reading this will like this project.

    *** To run ***
         As the project is yet not complete you can preview it by following methods:
          - clone the repo and in you root directory and type following:
              npm install
              npm run dev
          - open github codespaces and then run:
              npm run dev

## Notice:

***Due to some bug the project is currently not working.*** 
    
# Tech Stack:
    - HTML
    - CSS  
    - JavaScript
    - React.js
    - Tailwind CSS

# File Structure:

📦 employee_dashboard
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── 📂 public
└── 📂 src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── tailwind.css
    ├── 📂 assets
    ├── 📂 components
    │   ├── 📂 Auth
    │   │   └── Login.jsx
    │   ├── 📂 Dashboard
    │   │   ├── AdminDashboard.jsx
    │   │   └── EmployeeDashboard.jsx
    │   └── 📂 TaskList
    │       ├── CompleteTask.jsx
    │       ├── FailedTask.jsx
    │       ├── NewTask.jsx
    │       ├── TaskAccept.jsx
    │       └── TaskList.jsx
    ├── 📂 context
    │   ├── AuthContext.jsx
    │   └── Authprovider.jsx
    ├── 📂 other
    │   ├── AllTask.jsx
    │   ├── CreateTask.jsx
    │   ├── Header.jsx
    │   └── TaskNumber.jsx
    └── 📂 utils
        ├── employees.json
        └── localstorage.jsx


## Directory Structure Explanation

- `src/`: Main source code directory
  - `components/`: React components organized by feature
    - `Auth/`: Authentication related components
    - `Dashboard/`: Dashboard components for admin and employees
    - `TaskList/`: Components for task management
  - `context/`: React context providers and consumers
  - `other/`: Miscellaneous components
  - `utils/`: Utility functions and data files

## Configuration Files
- `eslint.config.js`: ESLint configuration
- `postcss.config.js`: PostCSS configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `vite.config.js`: Vite build tool configuration