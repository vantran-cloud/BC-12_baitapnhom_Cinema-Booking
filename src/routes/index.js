import LichSuDatVe from "components/LichSuDatVe/LichSuDatVe"
import Application from "containers/client/Application/Application"
import Contact from "containers/client/Contact/Contact"
import Home from "containers/client/Home/Home"
import MovieDetail from "containers/client/MovieDetail/MovieDetail"
import News from "containers/client/News/News"
import SeatPlan from "containers/client/SeatPlan/SeatPlan"

export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        isPrivate: false,
    },
    {
        path:'/contact',
        component: Contact,
        exact: false,
        isPrivate: false,
    },
    {
        path:'/news',
        component: News,
        exact: false,
        isPrivate: false,
    },
    {
        path:'/application',
        component: Application,
        exact: false,
        isPrivate: false,
    },
    {
        path:'/movie-detail/:movieId',
        component: MovieDetail,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/seat-plan/:showtimeId',
        component: SeatPlan,
        exact: false,
        isPrivate: true,
    },
    {
        path: '/lichSuDatVe',
        component: LichSuDatVe,
        exact: false,
        isPrivate: true,
    },
   
];

