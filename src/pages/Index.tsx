import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-minecraft-green">
      {/* Header */}
      <header className="bg-minecraft-brown shadow-minecraft border-b-4 border-minecraft-dark-green">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white animate-glow">
              KASAMUIHI MINECRAFT SERVER
            </h1>
            <div className="flex items-center space-x-4">
              <Badge className="bg-minecraft-green text-white px-4 py-2 animate-bounce-minecraft">
                🟢 Онлайн
              </Badge>
              <Badge className="bg-minecraft-gold text-black px-4 py-2">
                👥 Небольшое комьюнити
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <img
              src="/img/95818501-ab9a-40af-bf55-b304baf89299.jpg"
              alt="Minecraft landscape"
              className="mx-auto mb-8 shadow-minecraft rounded-pixel w-full max-w-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-pixel flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-white mb-4 animate-glow">
                  Добро пожаловать!
                </h2>
                <p className="text-xl text-white mb-8">
                  Уютный сервер для творчества и приключений
                </p>
                <Button
                  size="lg"
                  className="bg-minecraft-green hover:bg-minecraft-dark-green text-white shadow-minecraft text-lg px-8 py-4 animate-bounce-minecraft"
                >
                  <Icon name="Play" className="mr-2" />
                  Начать играть
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* О сервере */}
          <Card className="bg-minecraft-brown text-white shadow-minecraft border-4 border-minecraft-dark-green">
            <CardHeader>
              <CardTitle className="text-2xl text-minecraft-gold flex items-center">
                <Icon name="Info" className="mr-2" />О сервере
              </CardTitle>
              <CardDescription className="text-gray-300">
                Узнайте больше о нашем уютном мире
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img
                    src="/img/fc906aef-b8db-41d1-a8ca-fbb0283a9701.jpg"
                    alt="Creeper"
                    className="w-8 h-8 rounded-pixel"
                  />
                  <span>Стример: Kasamuihi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="w-5 h-5 text-minecraft-gold" />
                  <span>Небольшое дружное комьюнити</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" className="w-5 h-5 text-minecraft-gold" />
                  <span>Без доната - для всех!</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Gamepad2"
                    className="w-5 h-5 text-minecraft-gold"
                  />
                  <span>Survival + Creative режимы</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Как подключиться */}
          <Card className="bg-minecraft-stone text-white shadow-minecraft border-4 border-minecraft-dark-green">
            <CardHeader>
              <CardTitle className="text-2xl text-minecraft-gold flex items-center">
                <Icon name="Zap" className="mr-2" />
                Как подключиться
              </CardTitle>
              <CardDescription className="text-gray-300">
                Простые шаги для входа на сервер
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-minecraft-dark-green p-4 rounded-pixel">
                  <div className="text-sm text-gray-300 mb-2">
                    IP адрес сервера:
                  </div>
                  <div className="font-mono text-lg text-minecraft-gold">
                    kasamuihi.minecraft.ru
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-minecraft-green rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      1
                    </span>
                    <span>Запустите Minecraft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-minecraft-green rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      2
                    </span>
                    <span>Выберите "Сетевая игра"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-minecraft-green rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      3
                    </span>
                    <span>Добавьте наш сервер</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-minecraft-green hover:bg-minecraft-dark-green"
                  onClick={() =>
                    navigator.clipboard.writeText("kasamuihi.minecraft.ru")
                  }
                >
                  <Icon name="Copy" className="mr-2" />
                  Скопировать IP
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Правила */}
          <Card className="bg-minecraft-dirt text-white shadow-minecraft border-4 border-minecraft-dark-green md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl text-minecraft-gold flex items-center">
                <Icon name="ScrollText" className="mr-2" />
                Правила сервера
              </CardTitle>
              <CardDescription className="text-gray-300">
                Простые правила для комфортной игры
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <img
                    src="/img/625b6912-d9ba-4e5a-b8dc-e3ceaaa9da7e.jpg"
                    alt="Sword"
                    className="w-6 h-6 rounded-pixel mt-1"
                  />
                  <div>
                    <div className="font-semibold text-minecraft-gold">
                      Будь дружелюбным
                    </div>
                    <div className="text-sm text-gray-300">
                      Уважай других игроков
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Home"
                    className="w-6 h-6 text-minecraft-gold mt-1"
                  />
                  <div>
                    <div className="font-semibold text-minecraft-gold">
                      Не разрушай чужие постройки
                    </div>
                    <div className="text-sm text-gray-300">
                      Стройте только на своей территории
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MessageSquare"
                    className="w-6 h-6 text-minecraft-gold mt-1"
                  />
                  <div>
                    <div className="font-semibold text-minecraft-gold">
                      Приятное общение
                    </div>
                    <div className="text-sm text-gray-300">
                      Без мата и токсичности
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Shield"
                    className="w-6 h-6 text-minecraft-gold mt-1"
                  />
                  <div>
                    <div className="font-semibold text-minecraft-gold">
                      Без читов
                    </div>
                    <div className="text-sm text-gray-300">
                      Играем честно и справедливо
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Стример секция */}
        <div className="mt-16 text-center">
          <Card className="bg-minecraft-brown text-white shadow-minecraft border-4 border-minecraft-dark-green max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-minecraft-gold flex items-center justify-center">
                <Icon name="Tv" className="mr-2" />
                Стример Kasamuihi
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Создатель нашего уютного мира
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Присоединяйтесь к нашему небольшому, но дружному комьюнити!
                  Здесь каждый может найти друзей и создать что-то удивительное.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-minecraft">
                    <Icon name="Twitch" className="mr-2" />
                    Смотреть стримы
                  </Button>
                  <Button
                    variant="outline"
                    className="border-minecraft-gold text-minecraft-gold hover:bg-minecraft-gold hover:text-black shadow-minecraft"
                  >
                    <Icon name="MessageCircle" className="mr-2" />
                    Связаться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-minecraft-dark-green text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <div className="flex items-center space-x-2">
              <Icon name="Users" className="w-5 h-5" />
              <span>Игроков онлайн: 12/50</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Server" className="w-5 h-5" />
              <span>Версия: 1.21</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="w-5 h-5" />
              <span>Время работы: 24/7</span>
            </div>
          </div>
          <p className="text-minecraft-gold">
            © 2024 Kasamuihi Minecraft Server. Создано с ❤️ для комьюнити
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
