#  Kanban Board (Trello-style Task Manager)

## live project link: 
https://kanban-board-pi-bay.vercel.app/

A modern Kanban board application built using React, inspired by tools like Trello.  
This project demonstrates task management with drag-and-drop, editing, deletion, and infinite scrolling.

## Features

-  Create, edit, and delete tasks
-  Drag and drop tasks across columns
-  Infinite scrolling per column (pagination)
-  LocalStorage persistence (data saved on refresh)
-  Clean and modern UI (glassmorphism design)
-  Task count per column

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- @dnd-kit (Drag & Drop)
- CSS (inline styling)


 ## Project Structure
 src/
├── components/
│ ├── Board.jsx
│ ├── Column.jsx
│ ├── TaskCard.jsx
│ ├── TaskForm.jsx
├── data/
│ └── seed.js
├── App.jsx


##  How It Works

- Tasks are stored in **React state** and synced with **localStorage**
- Drag-and-drop updates task status dynamically
- Each column implements **independent infinite scrolling**
- Seed data is used for initial demo and testing


##  Run Locally

```bash
npm install
npm run dev


