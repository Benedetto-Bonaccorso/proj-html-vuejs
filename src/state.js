import {
    reactive
  } from 'vue'
  
  export const state = reactive({
    path: "/src/assets/",
    articles: [

      {
        img: "blog-46.jpg",
        title: "How To Take Concert Pictures in 30 Seconds",
        categories: ["photography"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "September 9/2018",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +0),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"
        
      },
      {
        img: "blog-47.jpg",
        title: "Gadgets That Make Your Smartphone Even Smarter",
        categories: ["gadgets", "technology", "photography"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "December 12/2019",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"

      },
      {
        img: "blog-48.jpg",
        title: "20 Top-Rated Tourists Attractions in Manhattan",
        categories: ["travel"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "August 8/2019",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"

      },
      {
        img: "blog-49.jpg",
        title: "The Best Way to Ride a Motorcycle",
        categories: ["lifestyle", "travel", "fashion"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "July 7/2017",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"

      },
      {
        img: "blog-50.jpg",
        title: "5 Fun Things to Do at the Beach",
        categories: ["travel", "lifestyle"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "June 6/2019",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"  
      },
      {
        img: "blog-51.jpg",
        title: "Amazingly Fresh Fruit And Herb Drinks For Summer",
        categories: ["recipes"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "April 4/2019",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"  
      },
      {
        img: "blog-66.jpg",
        title: "Tips to Help You Quickly Prepare Your Lunch",
        categories: ["recipes", "travel"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "May 5/2018",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"  
      },
      {
        img: "blog-67.jpg",
        title: "How To Properly wear an Apple Watch",
        categories: ["Technology", "Lifestyle", "fashion"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "March 3/2019",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Finn Martens",
        authorQuote: "Nothing is anything until it is something"  
      },
      {
        img: "blog-68.jpg",
        title: "The 10 Best VR Games",
        categories: ["Technology"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "January 1/2015",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Jake the Dog",
        authorQuote: "bro"

      },
      {
        img: "blog-69.jpg",
        title: "The Best Cake Recipe You Will Ever Bake",
        categories: ["recipes"],
        time: String(Math.floor(Math.random()*12 +1)) +":"+ String(Math.floor(Math.random()*60 +1)) + "AM",
        date: "February 2/2014",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique nobis ad esse ut, veritatis a perspiciatis cupiditate ratione officia aliquam? Autem nesciunt soluta sequi veritatis reiciendis dolorem aliquid ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat itaque dolore repudiandae ex deleniti laborum quod. Velit consequatur, itaque voluptatibus quia porro eaque repellendus, vero, omnis doloremque enim corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima, velit repudiandae officiis labore tempore commodi corporis ut eveniet quidem magnam nam veniam blanditiis tenetur eaque, esse et. Vero, corrupti.", 
        likes: Math.floor(Math.random()*500 +1),
        comments: Math.floor(Math.random()*30 +1),
        authorName: "Peter Parker",
        authorQuote: "i'm spiderman"
      },
    ],
    hotArticles: [],
    filteredHotArticles: [],
    maxHotArticles: 6,

    recentArticles: [],
    recentArticlesTemporaryArray: [],
    maxRecentArticles: 5,

    popularArticles: [],
    popularArticlesTemporaryArray: [],
    maxPopularArticles: 5,

    featuredPostRng: 1,
  })
