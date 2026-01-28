
export const ResultCards = ({item}) => {
  return (
    <div className="h-80 w-[18vw] relative">
        <div className="h-full">
            {item.type == 'photos' ? <img className="h-full w-full object-cover object-center rounded-md shadow-md shadow-gray-600" src={item.src} alt={item.title} />: ''}
            {item.type == 'videos' ? <video className="h-full w-full object-cover object-center rounded-md shadow-md shadow-gray-600" autoPlay loop muted src={item.src}></video> : ''}
        </div>
        <div className="absolute bottom-0 p-3 bg-linear-to-t from-black to-transparent w-full font-semibold capitalize">{item.title}</div>
    </div>
  )
}

