const con = document.getElementById('cont');
const butt = document.getElementById('butt');
const img = document.createElement('img');
con.appendChild(img);
const animal = async () => {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const animals = await res.json();
        console.log(animals[0].url);
        img.src = animals[0].url;
    } catch(error){
        console.log(error);
    }
};

butt.addEventListener('click', animal);
//animal();