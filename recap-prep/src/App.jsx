import axios from 'axios'
import {useState} from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [article, setArticle] = useState([])

  const hdlSearch = async e => {
    e.preventDefault()
    // const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
    // const result = await axios.get(url)
    // console.log(result)
    // setArticle(result.data)

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://Top-10000-Spotify-Songs-1960-now.proxy-production.allthingsdev.co/api/v1/spotify/search-artist?keyword=pitbull',
      headers: { 
         'x-app-version': '1.0.0', 
         'x-apihub-key': '', 
         'x-apihub-host': 'Top-10000-Spotify-Songs-1960-now.allthingsdev.co', 
         'x-apihub-endpoint': '790dee36-e470-445c-b29d-99dea984abef'
      }
   };
   
   axios.request(config)
   .then((response) => {
      console.log(JSON.stringify(response.data));
   })
   .catch((error) => {
      console.log(error);
   });
  }
  return (
    <div className='p-4 flex flex-col gap-4'>
      <h1 className="text-3xl font-bold text-pink-400">
        Wikipedia Search
      </h1>
      <form onSubmit={hdlSearch}>
        <input type="text" 
          className='input input-bordered w-full max-w-xs me-2' 
          value={searchTerm}
          onChange={e=>setSearchTerm(e.target.value)}
        />
        <button className='btn btn-primary'>Search</button>
      </form>
      <hr />
      <p>{JSON.stringify(article.query?.search[0].snippet, null, 2)}</p>
      <hr />
      <div dangerouslySetInnerHTML={
                { __html: article.query?.search[0].snippet }
             } />
    </div>
  )
}

export default App
