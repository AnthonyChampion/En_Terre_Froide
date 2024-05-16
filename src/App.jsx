import { Outlet } from 'react-router-dom';
import './App.css';
// composants
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}
