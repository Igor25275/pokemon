
// Objeto com cores para mudar o card do pokemon.
const coresTipos = {
    normal: { nome: "Normal", cor: "#A8A77A" },
    fire: { nome: "Fogo", cor: "#EE8130" },
    water: { nome: "Água", cor: "#6390F0" },
    electric: { nome: "Elétrico", cor: "#F7D02C" },
    grass: { nome: "Planta", cor: "#7AC74C" },
    ice: { nome: "Gelo", cor: "#96D9D6" },
    fighting: { nome: "Lutador", cor: "#C22E28" },
    poison: { nome: "Venenoso", cor: "#A33EA1" },
    ground: { nome: "Terrestre", cor: "#E2BF65" },
    flying: { nome: "Voador", cor: "#A98FF3" },
    psychic: { nome: "Psíquico", cor: "#F95587" },
    bug: { nome: "Inseto", cor: "#A6B91A" },
    rock: { nome: "Pedra", cor: "#B6A136" },
    ghost: { nome: "Fantasma", cor: "#735797" },
    dragon: { nome: "Dragão", cor: "#6F35FC" },
    steel: { nome: "Aço", cor: "#B7B7CE" },
    fairy: { nome: "Fada", cor: "#D685AD" },
    dark: { nome: "Sombrio", cor: "#705746" }
};

async function buscarPokemon() {
    const pokemon = document.getElementById("search").value.toLowerCase();

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!response.ok){
            alert("Pokemon não encontrado,, tente novamente!!..");
            return;
        }

        const data = await response.json();
        
        if(data.types && data.types.length > 0){
            showInfo({
                name: data.name,
                id: data.id,
                type: data.types[0].type.name,
            })

        }
        
        
        document.getElementById("search").value = "";
        document.getElementById("search").focus();

    }catch (erro){
        console.error("Erro", erro);
    }

        
}

function showInfo(data){
    // FAZ APARECER O CAR QUANDO O USUARIO PESQUISAR O POKEMON
    const card = document.getElementById("pokemon");
    card.style.display = "block";

    const tipoIngles = data.type;
    const infoTipo = coresTipos[tipoIngles];

    document.getElementById("name").innerHTML = `Nome: ${data.name}`;
    document.getElementById("id").innerHTML = `Id: ${data.id}`;
    document.getElementById("type").innerHTML = `Tipo: ${infoTipo.nome}`;
    document.getElementById("img").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    document.getElementById("pokemon").style.backgroundColor = infoTipo.cor + "80";

}
