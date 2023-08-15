import Container from "components/Container"
import Header from "components/Header"
import Footer from "components/Footer"
import Favorites from "pages/Favorites"
import Home from "pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritesProvider from "contexts/FavoritesContext"
import Player from "pages/Player"
import NotFound from "pages/NotFound"
import Base from "pages/Base"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favoritos" element={<Favorites />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes