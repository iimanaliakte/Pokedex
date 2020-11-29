let Input = document.querySelector('.inputD');
let jsonF;
console.log(Input)
let pokemon;
let data1

 async function  fetchPokedex(){

    for(let i = 1; i<1032; i++){

    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
    .then(respon =>{
        return jsonF = respon.json();
        })
        .then(data =>{
             pokemon = {
                Name:data.forms[0].name,
                Ability:data.abilities[0].ability.name,
                Type:data.types.map((type) => type.type.name).join(', '),
                Weight:data.weight,
                Img:data.sprites.front_default
           };
             
           let div = document.createElement('div');
    
           let img = document.createElement('img');
           img.setAttribute("src",pokemon.Img);
     img.setAttribute("width", "304");
     img.setAttribute("height", "228");
     img.setAttribute("alt", "The Pulpit Rock");
               div.appendChild(img);
   
          let name = document.createElement('p');
          name.innerText = pokemon.Name.charAt(0).toUpperCase() + pokemon.Name.slice(1);
          
             name.className = "Search";

       div.appendChild(name);
   
               let ability = document.createElement('p');
               ability.innerText = "Ability: " +pokemon.Ability.charAt(0).toUpperCase() + pokemon.Ability.slice(1);
   
               div.appendChild(ability);
   
       let type = document.createElement('p');
       type.innerText =  "Type: " + pokemon.Type.charAt(0).toUpperCase() + pokemon.Type.slice(1);
   
           div.appendChild(type);
   
         let weight1 = document.createElement('p');
          weight1.innerText = "Weight: " + pokemon.Weight
   
           div.appendChild(weight1);
   
           div.className = data.types[0].type.name;
   
           document.body.appendChild(div);
   

          });

         

        } 
    
      }     
    
        
    

 fetchPokedex();

