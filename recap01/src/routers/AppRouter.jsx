import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import MemeList from '../pages/MemeList'
import MemeDetail from '../pages/MemeDetail'
import Header from '../pages/Header'

const guestRouter = createBrowserRouter([
	{ path : '/',
		element : <>
			<Header />
			<Outlet />
		</>,
		children: [
			{ path : "", element : <MemeList /> },
			{ path : "/login", element : <h1>Login page</h1> },
			{ path : "/meme/:id", element : <MemeDetail />}
		]
	 }
])
export default function AppRouter() {
	return (
		<RouterProvider router={guestRouter} />
	)
}
