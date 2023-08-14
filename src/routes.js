import Container from "components/Container"
import Header from "components/Header"
import Footer from "components/Footer"
import Favorites from "pages/Favorites"
import Home from "pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritesProvider from "contexts/FavoritesContext"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favoritos" element={<Favorites />}></Route>
                </Routes>
                </FavoritesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes