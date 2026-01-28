import { useDispatch, useSelector } from 'react-redux';
import {FetchPhotos, FetchVideos} from '../api/mediaApi';
import {setResult, setLoading, setError} from '../redux/features/counterSlice'
import { useEffect } from 'react';
import { ResultCards } from './resultCards';


export const ResultGrid = () => {
    const {query, results, activeTab, loading, error} = useSelector((store)=> store.search);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!query) return;
        const getData = async()=>{
            try{
                let data =[];
                dispatch(setLoading())
                if(activeTab == 'photos'){
                let response = await FetchPhotos(query);
                data = response.results.map((items)=>({
                    id:items.id,
                    title:items.alt_description,
                    type:'photos',
                    thumbnail: items.urls.thumb,
                    src:items.urls.full
                }))   
            }
            if(activeTab == 'videos'){
                let response =await FetchVideos(query);
                data = response.videos.map((item)=>({
                    id:item.id,
                    type:'videos',
                    title:item.user.name,
                    thumbnail:item.url,
                    src:item.video_files[1].link
                }))
            }
            dispatch(setResult(data))
            } catch(err){
                dispatch(setError(err.message))
            }
        }
        getData()
    },[query,activeTab,dispatch])

    if(error) return <h1 className='text-center'>Error... while grabing the finest gems.</h1>
    if(loading) return <h1 className='text-center'>Loading...the fun things...</h1>

    
  return (
    <div className='flex flex-wrap justify-center gap-5 py-6'>
        {!loading &&
            results.map((item,index)=>{
                return(
                    <div key={index}>
                    <ResultCards item = {item}/>
                </div>
                )
            })
        }
    </div>
  )
}

export default ResultGrid;