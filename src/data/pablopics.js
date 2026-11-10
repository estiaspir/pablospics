const pablopics = [
    {
        id: 1,
        name: "Pablo as a puppy",
        date: "14.2.26",
        image:
            "/pablo.jpg",
        description:
            "His ears are so cute! They are so big and floppy. He is a very happy puppy."
    },
    {
    id: 2,
    name: "Pablo my puppy dog",
    date: "1.2.26",
    image:
      "/pablo1.jpg",
    description:
      "Sitting on the grass",
    }, 
   
    {
    id: 3,
    name: "Pablo as a puppy",
    date: "3.2.26",
    image:
      "/pablo2.jpg",
    description:
     " We went out when it was dark",
  },
    
    {
    id: 4,
    name: "Pablo with is bone",
    date: "16.1.26",
    image:
      "/pablo3.jpg",
    description:
     " He's chewing his bone.",
  },
    
     {
    id: 5,
    name: "Will his ears be pointig up or dropping down?",
    date: "29.11.25",
    image:
      "/pablo4.jpg",
    description:
     " He's so cute.",
    },
]

export function getPics() {
  return pablopics;
}

export function getPicById(id) {
  return pablopics.find((pic) => pic.id === Number(id));
}