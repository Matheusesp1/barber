import { Badge, SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "@/components/ui/avatar"
// import { Input } from "./_components/ui/input" 

//SERVER
const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h1 className="text-xl font-bold">Olá, Matheus</h1>
        <p>Segunda-feira , 15 de abril de 2026</p>
        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
          <input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Imagem */}
        <div className="relative mt-6 h-[155px] w-full">
          <Image
            alt="Agende nos melhores com FSW"
            src="/Banner.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/* Agendamento */}
        <Card className="mt-6">
          <CardContent className="flex">
            {/* Esquerda */}
            <div className="relative h-[80px] w-[80px]">
              <Badge>Confirmado</Badge>
              <h3>Corte de Cabelo</h3>
              
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/Barbeiro.png" alt="Avatar do Barbeiro" />
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Home
