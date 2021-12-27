import { ErrorUrlPage } from "../ErrorPages/ErrorUrlPage";
import { ItemPage } from "../Pages/ItemPage";
import { MainPage } from "../Pages/MainPage";
import { SingleFilmPage } from "../Pages/SingleFilmPage";
import { SinglePage } from "../Pages/SinglePage";


export const RoutesArray = [
    {path: '/', element: MainPage, exact: true},
    {path: '/:pathItem', element: ItemPage, exact: true},
    {path: '/films/:id', element: SingleFilmPage, exact: true},
    // {path: '/people/:id', element: SingleCharacterPage, exact: true},
    {path: '*', element: ErrorUrlPage, exact: true},
    {path: '/:pathItem/:id', element: SinglePage, exact: true},
]