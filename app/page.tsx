import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"

//SERVER COMPONENTS
const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h1 className="text-xl font-bold">Olá, Matheus</h1>
        <p>Segunda-feira , 10 de abril de 2026</p>

        <div className="flex items-center gap-2">
          <input placeholder="Faça sua busca..."/>
          <Button>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Home