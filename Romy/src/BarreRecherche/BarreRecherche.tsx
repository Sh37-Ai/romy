// src/components/Sidebar.tsx
import './BarreRecherche.css'

function BarreRecherche(): JSX.Element {
  return (
    <div className="sidebar">
      <div className="hamburger">☰</div>
      <ul className="menu">
        <li><a href="/HomePage">Accueil</a></li>
        <li><a href="/SeconePage">Page 2</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default BarreRecherche
