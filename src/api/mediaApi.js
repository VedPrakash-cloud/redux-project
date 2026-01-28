import axios from "axios";


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY


export async function FetchPhotos(query, page=1, per_page=20){
    try{
            const res= await axios.get('https://api.unsplash.com/search/photos',{
                params:{query, page, per_page},
                headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
            }
            )
            return res.data
        } catch(err){
            console.error('unable to fetch images', err)
        }
}

export async function FetchVideos(query, page=1, per_page=20){
    try{
        const res = await axios.get('https://api.pexels.com/videos/search',{
            params:{query,page,per_page},
            headers:{Authorization:PEXELS_KEY}
        })
        return res.data;
    }catch(err){
        console.error('unable to fetch videos', err)
    }
}