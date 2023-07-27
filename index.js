let currentQuery = "business"
      let currentPage = 1;
      //fetch news
     const fetchNews = async (page, q)=>{ 
      //  console.log(`Fetching news for ${q} and page ${page}`)
       var url = 'https://newsapi.org/v2/everything?' +
          'q=' +q+
          '&from=2023-07-26&' +
          'pageSize=12&' +
          'language=en&' +
          'page=' +page+
          '&sortBy=relevancy&' +
          'apiKey=b00f13468ddd4591a97c16f1873dd825';

var req = new Request(url);

// fetch(req).then(function(response) {
//         console.log(response.json());
//     })

let a = await fetch(req)
let response = await a.json()


 let cards = ""
//  if(response.totalResults === 0){
//    return document.getElementsByClassName("searchBar").style.display = block;
//   }
// style="width: 18rem;" "height: 15rem;"
resultCount.innerHTML = response.totalResults
    response.articles.forEach((item)=>{
      cards = cards + `<div class="card my-4 mx-2 articales my-scroll" >
      <img src="${item.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
       <a class="nav-link" href="${item.url}"><h5 class="card-title">${item.title}</h5></a>
        <p class="card-text">${item.description}</p>
        <a href="${item.url}" class="btn btn-primary">More</a>
      </div>
    </div>`
    })
    document.querySelector(".content").innerHTML = cards
  }  
 fetchNews(1, currentQuery)
 //search the query;
 const searchNews = ()=>{
 search.addEventListener("click", (e)=>{
      e.preventDefault()
      let query = searchInput.value;
      // currentQuery = query;
      fetchNews(1, query)
})
}
searchNews();
//previous Button
const prev = ()=>{
 prevBtn.addEventListener("click", (e)=>{
     e.preventDefault()
     if(currentPage>1){
     currentPage = currentPage - 1
     let query = searchInput.value;
     fetchNews(currentPage, currentQuery);
     }
 })

}
prev();
// next button
const nxt = ()=>{
  nxtBtn.addEventListener("click", (e)=>{
    e.preventDefault()
     currentPage = currentPage + 1
     let query = searchInput.value;
     fetchNews(currentPage, currentQuery);
  })
}
nxt();

const sprt = () =>{
  navS.addEventListener('click',(e)=>{
    e.preventDefault();
    let query = 'sports';
    fetchNews(1,query);
  })
}
sprt();

const poli = () =>{
  politics.addEventListener('click',(e)=>{
    e.preventDefault();
    let query = 'politics';
    fetchNews(1,query)
  })
}
poli();

const movie = () =>{
  films.addEventListener('click',(e)=>{
    e.preventDefault();
    let query = 'movies';
    fetchNews(1,query);
  })
}
movie();

const it = ()=>{
   tech.addEventListener('click',(e)=>{
    e.preventDefault();
    let query = 'technology';
    fetchNews(1,query)
   })
}
it();



