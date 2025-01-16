console.log('Well Connected')

inputData = document.querySelector("#peopleId")
runButton = document.querySelector("#runId")

runButton.addEventListener(('click'), async function () {
    scearchFor = inputData.value;
    console.log(scearchFor);
    inputData.value = '';
    await axios.get(`https://swapi.dev/api/people/${scearchFor}/`)
        .then((res) => {
            let data = res.data
            let figure_birth_year = data.birth_year
            let figure_eye_color = data.eye_color
            let figure_gender = data.gender
            let figure_hair_color = data.hair_color
            let figure_height = data.height
            let figure_homeworld = data.homeworld
            let figure_mass = data.mass
            let figure_Name = data.name
            let figure_skin_color = data.skin_color

            console.log(`figure_Name: ${figure_Name}`)
            console.log(`figure_birth_year: ${figure_birth_year}`)
            console.log(`figure_eye_color: ${figure_eye_color}`)
            console.log(`figure_gender: ${figure_gender}`)
            console.log(`figure_hair_color: ${figure_hair_color}`)
            console.log(`figure_height: ${figure_height}`)
            console.log(`figure_homeworld: ${figure_homeworld}`)
            console.log(`figure_mass: ${figure_mass}`)
            console.log(`figure_skin_color: ${figure_skin_color}`)

            let figure_Name_DOM = document.createElement('h4')
            let figure_Details_DOM = document.createElement('p')


            figure_Name_DOM.append(`figure_Name: ${figure_Name}`)
            figure_Details_DOM.append(`
                figure_birth_year: ${figure_birth_year}
            ,figure_eye_color: ${figure_eye_color}
            ,figure_gender: ${figure_gender}
            ,figure_hair_color: ${figure_hair_color}
            ,figure_height: ${figure_height}
            ,figure_homeworld: ${figure_homeworld}
            ,figure_mass: ${figure_mass}
            ,figure_skin_color: ${figure_skin_color}`)

            document.body.appendChild(figure_Name_DOM);
            document.body.appendChild(figure_Details_DOM);
        })
        .catch((res) => {
            console.log('unresolved and Received this')
        })

})

function isAnagram(s, t) {
    if (s.length === t.length) {
        let charList = [];
        /*
        1:loop over the source string to make a frequancy list 
        as object of {chars : counter}
        */
        let chatCounter_s = {};
        for (let i of s) {
            if (chatCounter_s[i] === undefined) {
                chatCounter_s[i] = 1;
                charList.push(i);
            }
            else {
                chatCounter_s[i] += 1;
            }
        }
        // console.log(chatCounter_s);

        let chatCounter_t = {};
        for (let i of t) {
            if (chatCounter_t[i] === undefined) {
                chatCounter_t[i] = 1;
            }
            else {
                chatCounter_t[i] += 1;
            }
        }
        // console.log(chatCounter_t);

        for (let compare of charList) {
            if (chatCounter_t[compare] === chatCounter_s[compare]) {
                // console.log(compare);
                // console.log(chatCounter_s[compare]);
                // console.log(chatCounter_t[compare]);
                continue;
            }
            else {
                return false
            }
        }
        return true;
    }
    /*
    2: loop over the second string and compare the frequancy list*/
    else {
        return false;
    }
}
