//ISRO api

var isroApiUrl = "https://isro.vercel.app/api/centres"

async function isroApi(){
    var urlFetch = await fetch(isroApiUrl)
    var data = urlFetch.json()
    var endResult = await data
    // console.log(endResult)

    for(let i of endResult.centres){
        var id  = i.id
        var name = i.name
        var place = i.Place
        var state = i.State
        // console.log(id,name,place,state)

        var parent = document.createElement('div')
        parent.setAttribute('class','card row col-lg-4 col-sm-12')
        parent.innerHTML = `
        
           <div class="card-header">    
           <h3>${name}</h3>
           </div>
           <div class="card-body">
             
               <p><b>ID:</b>${id}</p>
               <p><b>PLACE:</b>${place}</p>
               <p><b>STATE:</b>${state}</p>
           </div> 
           `

        document.querySelector('body').append(parent)
    }
}






isroApi()
