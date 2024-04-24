import { ArticleContainer } from "./components/ArticleContainer/ArticleContainer"
import { Header } from "./components/Header/Header"
import { MainArticle } from "./components/MianArticle/MainArticle"
import { NewContainer } from "./components/NewContainer/NewContainer"

function App() {

  return (
    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20">
      <Header />
      <div className="md:flex md:gap-8 md:mb-10">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
    </main >
  )
}

export default App
