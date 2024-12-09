import Home from "../pages/Home"
import Folllowing from "../pages/Following"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"
import Search from "../components/Layout/Header/Search"
import { HeaderOnly } from "../components/Layout"
import Live from "../pages/Live"

const publicRoutes = [
{path: '/', component: Home},
{path: '/following', component: Folllowing},
{path: '/:nickname', component: Profile },
{path: '/profile', component: Profile},
{path: '/upload', component: Upload, layout: HeaderOnly},
{ path: '/search', component: Search, layout: null },
{ path: '/live', component: Live},
]
const privateRoutes=[

]
export { privateRoutes, publicRoutes}