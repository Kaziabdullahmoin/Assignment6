const initApp = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then(data =>{
        listPlants = data;
        console.log(listPlants);
        
    });
    
}
initApp()