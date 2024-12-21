import React from 'react'

const Songs = () => {

    const gaana = [
        {
          name: "Blinding Lights",
          albumCover: "https://images.unsplash.com/photo-1515978581552-f62b9fa63a5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlnaHRzfGVufDB8fDB8fHww",
          description: "A synth-heavy track that captures the essence of 80s pop. The song blends nostalgia with modern beats."
        },
        {
          name: "Shape of You",
          albumCover: "https://plus.unsplash.com/premium_photo-1670966943758-a4f8c7480710?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hhcGUlMjBvZiUyMHlvdXxlbnwwfHwwfHx8MA%3D%3D",
          description: "A catchy dance-pop anthem by Ed Sheeran. It features a rhythmic, infectious beat with memorable lyrics."
        },
        {
          name: "Levitating",
          albumCover: "https://images.unsplash.com/photo-1483782817618-9804403024ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV2aXRhdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          description: "A feel-good, upbeat track from Dua Lipa, blending pop with retro influences. It encourages listeners to feel carefree."
        },
        {
          name: "Good 4 U",
          albumCover: "https://images.unsplash.com/photo-1610072947120-8736bbfc56e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZCUyMDQlMjB1fGVufDB8fDB8fHww",
          description: "A fast-paced, emotionally charged song by Olivia Rodrigo. It blends pop-punk energy with raw, honest lyrics."
        }
    ];
      
    const handleClick = () => {
        alert('Downloading...')
    }


return (
    <div className='h-screen w-full bg-zinc-300 flex items-center gap-10 justify-center'>
        {gaana.map((elem, index)=>(
            <div className='px-4 py-2 bg-white w-[20rem] h-[25em] flex flex-col gap-2 rounded-xl'>
            <img className='h-[10rem] mt-3  rounded-xl object-cover' src={elem.albumCover} alt="" />
            <h1 className='text-lg font-semibold'>{elem.name}</h1>
            <p className='text-sm '>{elem.description}</p>
            <button onClick={handleClick} className='px-2 py-1 bg-green-600 mt-16 rounded-lg text-white'>Download Now</button>
        </div>
        ))}
        
    </div>
  )
}

export default Songs