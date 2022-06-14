fetch('./posts.json')
.then(results=>results.json())
.then(function(posts){
    console.log(posts.posts);
    const main = document.querySelector(".main");
    console.log(main);
    for(let i=0;i<21;i++){
    const card = document.createElement('div');
   
     console.log(posts.posts[0].title);
      
       

     // card.classList='card';

    const infocard = `
   <ul>
   <li>
    <img src="${posts.posts[i].img}" alt="">
    <div class="info" >
         <h3 id="info">${posts.posts[i].title}</h3>
         <span>${posts.posts[i].desc}
         </span>
         <ul>
         <h4>${posts.posts[i].author} </h4>
        <li><h4>${posts.posts[i].category}</h4></li>
        </ul>
    </div> 
    </li>  
    </ul>  
        `;
        

    //  //Infocard html is added using below line of code
    
     card.innerHTML+=infocard;
    main.appendChild(card);

    card.classList='card';
          
}
    });
