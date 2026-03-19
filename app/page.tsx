import { Badge } from "@/components/ui/badge"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { SearchIcon } from "lucide-react"
import { Input } from "./_components/ui/input"

//SERVER
function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h1 className="text-xl font-bold">Olá, Matheus</h1>
        <p>Segunda-feira , 15 de abril de 2026</p>
        {/* Busca */}
        <div className="mt-6 flex items-center gap-1 mt-24px">
          <Input placeholder="Faça sua busca..." />
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
            className="rounded-xl object-cover" />
        </div>
        {/* Agendamento */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-2">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5">
              <Badge>Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-3">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia Vintage</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-7 ">
              <p className="text-sm">Março</p>
              <p className="text-2xl">19</p>
              <p className="text-sm">20:00</p>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Home
