import { Categories } from './Categories'
import SearchInput from './SearchInput'

export const FilterSection = () => {
  return (
    <section className="flex flex-col w-full">
      <SearchInput />
      <div className="divider">OR</div>
      <Categories />
    </section>
  )
}
