import "./App.css";
import { News } from "./components/news/news";

function App() {
  const name = "Antek";

 const newsList = [
    {
      title: "Spotkanie w Nigerri z Epsteinem",
      description:
        "Odbyło się spotkanie światowych liderów w Monachium dotyczące bezpieczeństwa i współpracy międzynarodowej.",
    },
    {
      title: "Nowa misja Epsteina",
      description:
        "Europejska Agencja Kosmiczna ogłosiła start nowej misji badawczej na Marsa.66666666667777776667776",
    },
    {
      title: "Rekord na giełdzie 67 coinów",
      description:
        "Warszawska giełda odnotowała najwyższy wzrost indeksu WIG w tym kwartale. donald trumango mango mango mango mango",
    },
    {
      title: "Przełom w medycynie stworzony przez zakladniczke epsteina",
      description:
        "Naukowcy opracowali nową metodę wczesnego wykrywania chorób serca. mango 6767676666666666666667767",
    },
    {
      title: "Nowe technologie na wyspie Epsteina",
      description:
        "Powstał innowacyjny model sztucznej inteligencji wspierający edukację i analizę danych.6666666666777777766677",
    },
    {
      title: "Zmiany klimatyczne na wielkiej wyspie tego chorego czlowieka",
      description:
        "Opublikowano raport wskazujący na przyspieszone tempo topnienia lodowców.666666666677777777677777766666666",
    },
  ];

  return (
    <>

      <h1 className="animated-title">HELLO {name}!</h1>

      <main>
        {newsList.map((news, index) => (
          <News
            key={index}
            title={news.title}
            description={news.description}
          ></News>
        ))}
      </main>
    </>
  );
}

export default App;