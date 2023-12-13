import {createBrowserRouter} from 'react-router-dom';

const config = [
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
]

export const router = createBrowserRouter(config);