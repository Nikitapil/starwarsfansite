import { ErrorUrlPage } from "../ErrorPages/ErrorUrlPage";
import { MainPage } from "../Pages/MainPage";
import { SingleFilmPage } from "../Pages/SingleFilmPage";


export const RoutesArray = [
    {path: '/', element: MainPage, exact: true},
    {path: '/films/:id', element: SingleFilmPage, exact: true},
    {path: '*', element: ErrorUrlPage, exact: true},
]