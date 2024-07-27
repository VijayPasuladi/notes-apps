**Note-Taking Application**

__Overview__

*The Note-Taking Application is a simple yet powerful tool designed to help users save, list, and delete notes efficiently. Built using Node.js, React.js, Express.js, and SQLite, this application offers a seamless experience for managing notes with ease.*

**Features**
_Save Notes: Users can save notes with a title and content._
_List Notes: Users can view a list of all saved notes._
*Delete Notes: Users have the option to delete any note from the list.*

**Technologies Used**
**Backend**: *Node.js, Express.js, SQLite*
**Frontend**: *React.js*
**Styling**: *CSS*

**Completion Instructions**

*To build a note-taking application using Node.js with Express.js for the backend, SQLite for database storage, and React.js for the frontend, follow these steps:*

**Step 1: Setting Up the Project**

**Backend Setup:**
*Initialize a new Node.js project:* ``mkdir notes-app && cd notes-app && npm init -y``.
*Install dependencies:* ``npm install express sqlite3 cors``.

**Frontend Setup:**
*Create a new React app:* `npx create-react-app client`.
Change directory to the client folder: `cd client`.
Install Axios for making HTTP requests: `npm install axios`.

**Step 2: Backend Development**

**Database Initialization:**
*Create a new file `db.js` in the root of your backend directory.*
*Initialize SQLite and create a table for notes if it doesn't exist.*

**Express Server Setup:**
*Create a new file `server.js` in the root of your backend directory.*
*Set up Express and define routes for saving, listing, and deleting notes.*

**Step 3: Frontend Development**

**React Components:**
*In the `client/src` directory, create components for inputting notes, listing them, and deleting them.*

**Step 4: Running the Application**

**Start the Backend Server:**

*In the root directory of your backend, run* `node server.js`.

**Start the Frontend Application:**

*In the client directory, run* `npm start`.

**Respurces**

__Colors__: `#0056b3`,`#f9f9f9`,`#dc3545`,` #ffffff`,`#007bff`,`#61dafb`,` #282c34`,` #333`,`#f5f5f5`,


**Font-Families**:
`roboto`,`san-serif`