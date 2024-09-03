import {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

export default function Product() {
	const location = useLocation()
	const params = useParams()

	const [data, setData] = useState({})

	useEffect( ()=>{
		const fetchProduct = async () => {
			const resp = await fetch(`https://dummyjson.com/products/${params.id}`)
			const result = await resp.json()
			setData(result)
		}
		fetchProduct()
	}, [] )
	return (
		<div>
			<h1 className="text-4xl">Product Page</h1>
			<hr />
			<p>useLocation</p>
			<pre>{JSON.stringify(location, null, 2)}</pre>
			<p>you are in {location.pathname}</p>
			<hr />
			<p>useParams</p>
			<pre>{JSON.stringify(params, null, 2)}</pre>
			<p>ID = {params.id}</p>
			<hr />
			<p>Product Data :</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
