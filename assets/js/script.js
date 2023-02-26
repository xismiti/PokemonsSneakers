
//api

const fecthPokemon = async ()=>{
    
    
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonPromises = []
    for (let i = 1; i<=150; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }
    //pegando todas promises da api 
    const result = await Promise.all(pokemonPromises) //resolvendo todas promises ao mesmo tempo
    const pokemonsChoiced= result.filter((i)=> i.id===4 || i.id===25 || i.id===1 || i.id===7) //Filtrando os pokemons necesserios pelo id. 0-bulbasaur,1-charmander,2-squirtle e 3-píkachu

    //função que cria e injeta as templates (gostaria de dividir este trabalho porem não consegui pensar em outra logica)


    const pageCheck = () =>{
         //Pegando as div´s

         const divCharmander= document.querySelector(".pokeinfoCharmander");
         const divPikachu= document.querySelector(".pokeinfoPikachu");
         const divSquirtle= document.querySelector(".pokeinfoSquirtle");
         const divBulbasaur= document.querySelector(".pokeinfoBulbasaur");
 
         //setando os stats
         const charmanderStats = pokemonsChoiced[1].stats.map(stats => stats.base_stat);
         const pikachuStats = pokemonsChoiced[3].stats.map(stats => stats.base_stat);
         const squirtleStats= pokemonsChoiced[2].stats.map(stats => stats.base_stat);
         const bulbasaurStats = pokemonsChoiced[0].stats.map(stats => stats.base_stat);
 
         //Templates
 
         const charmander = `
             <li>Tipo: ${pokemonsChoiced[1].types.map(typeInfo => typeInfo.type.name)}  </li>
             <li>Hp: ${charmanderStats[0]} </li>
             <li>Atack: ${charmanderStats[1]} </li>
             <li>Defesa: ${charmanderStats[2]} </li>
             `
         const pikachu= `
             <li>Tipo: ${pokemonsChoiced[3].types.map(typeInfo => typeInfo.type.name)}  </li>
             <li>Hp: ${pikachuStats[0]} </li>
             <li>Atack: ${pikachuStats[1]} </li>
             <li>Defesa: ${pikachuStats[2]} </li>
             `
         const squirtle= `
             <li>Tipo: ${pokemonsChoiced[2].types.map(typeInfo => typeInfo.type.name)}  </li>
             <li>Hp: ${squirtleStats[0]} </li>
             <li>Atack: ${squirtleStats[1]} </li>
             <li>Defesa: ${squirtleStats[2]} </li>
             `
         const bulbasaur= `
             <li>Tipo: ${pokemonsChoiced[0].types.map(typeInfo => typeInfo.type.name)}  </li>
             <li>Hp: ${bulbasaurStats[0]} </li>
             <li>Atack: ${bulbasaurStats[1]} </li>
             <li>Defesa: ${bulbasaurStats[2]} </li>
             `
 

        if (document.title === "Bulbassauro"){
            divBulbasaur.innerHTML = bulbasaur;
        }else if (document.title === "Charmander"){
            divCharmander.innerHTML = charmander;
        }else if (document.title === "Pikachu"){
            divPikachu.innerHTML = pikachu;

        }else if (document.title === "Squirtle"){
            divSquirtle.innerHTML =squirtle;
        }
    
    }

pageCheck();
    
}





fecthPokemon();

//NOTAS: CRIAR AS POKE INFOS COM AS CLASSE CORRESPONDENTES, ADICIONAR OS POKEMNOS CORRETOS NO ARRAY E SETAR MAIS ALGUNS ATRIBUTOS PARA SEREM MOSTRADOS, COMO FORÇA OU ETC


/*PS: AOS DEVS, perdão por este codigo horrivel, sei que posso melhorar muitas coisas, como separar as funções em outras novas, para diminuir
a carga de uma unica função, assim como recriar este codigo que injeta o html pois ficou na cara que é uma gambiarra mal feita.
Porem me vejo preso ao .then da função async, e não sei uma forma de exportar estes dados dele, tentei usar return ou algo do tipo,
mas fiquei preso a ele e entao tive que por todo o codigo nele. Atualmente este é meu nivel de Js acredito que esqueci de conceitos importantes, funções e etc.
mas tendo em vista o ponto em que estou em meu curso, este codigo é considerado avançado. Aos demais obrigado por lerem até aqui, e perdão pelo codigo...
Conforme eu avançar meus estudos e ganhar experiencia, vou refatorando e arrumando ele. Obrigado! ass: o dev.

*/




