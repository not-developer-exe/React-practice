import React from "react";

const Cards = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwb2hvbmV8ZW58MHx8MHx8fDA%3D",
      name: "Phone",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Dignissimos quas quidem ducimus, laboriosam",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGFibGV0fGVufDB8fDB8fHww",
      name: "Tablet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos quas quidem ducimus, laboriosam",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
      name: "Laptop",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quas quidem ducimus, laboriosam ",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBjfGVufDB8fDB8fHww",
      name: "PC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quas quidem ducimus, laboriosam",
      inStock: true,
    },
  ];

  return (
    <div>
      <div className="h-screen w-full bg-gray-500 flex gap-6 items-center justify-center">
        {data.map((elem, index) => (
          <div key={index} className="h-[30rem] w-[20rem] bg-white rounded-xl ">
            <div className="h-2/3 w-full ">
              <img
                className="h-full w-full object-cover rounded-t-xl"
                src={elem.image}
                alt=""
              />
            </div>
            <div className="bg-zinc-300 rounded-b-xl h-1/3 w-full p-4">
              <h1 className="text-lg font-semibold">{elem.name}</h1>
              <p className="text-xs mt-2 ">{elem.description}</p>
              <button className={`px-2 py-1 rounded mb-2 ${elem.inStock ? "bg-blue-500" : "bg-red-600"} text-white text-sm mt-2`}>
                {elem.inStock ? 'In Stock' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
