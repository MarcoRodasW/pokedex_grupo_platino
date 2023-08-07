import { Link } from 'wouter'

export default function Header() {
  return (
    <header className="lg:p-5 sm:p-3 md:p-4">
      <div className="navbar justify-center">
        <div className="navbar-center">
          <Link href="/">
            <a className="btn btn-ghost normal-case lg:text-2xl text-lg md:text-xl text-slate-200">
              Pokedex App - Grupo Platino
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
