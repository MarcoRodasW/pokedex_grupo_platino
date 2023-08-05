import { Link } from 'wouter'

export default function Header() {
  return (
    <header className="p-5">
      <div className="navbar justify-center">
        <div className="navbar-center">
          <Link href="/">
            <a className="btn btn-ghost normal-case text-2xl text-slate-200">Pokedex App - Grupo Platino</a>
          </Link>
        </div>
      </div>
    </header>
  )
}
