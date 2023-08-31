const ciudades = [
    {
        name:"Madrid",
        poblacion:"3M",
        pais:"España",
    },
    {
        name:"Argentina",
        poblacion:"48M",
        pais:"Bs.As",
    },
    {
        name:"Paris",
        poblacion:"10M",
        pais:"Francia",
    }
];
document.getElementById("show").addEventListener("click", function(){
    const name = document.getElementById("name").value;
    const city = ciudades.find( city => city.name === name );
    if(city){
        alert("La poblacion de ${name} es ${city.poblacion}");
    }else{
        alert ("No tenemos esa Ciudad");
    }
});