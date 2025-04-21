import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import ItemDetail from './components/ItemDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/">
            <h1>CRUD Demo App</h1>
          </Link>
        </header>
        
        <main className="app-content">
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/items/new" element={<ItemForm />} />
            <Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/items/:id/edit" element={<ItemForm />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>CRUD Demo with React, FastAPI, and PostgreSQL</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;