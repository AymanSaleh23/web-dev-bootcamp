console.log("Connected Well")

let mainTag = document.body.childNodes[3]
let itemsContainer = mainTag.childNodes[3]
let itemCardsContainer = itemsContainer.childNodes[3]
const scearchQuiry = 'search?q=';
let hrefs = ['Michael Jackson', 'Johnny Depp', 'Rowan Atkinson', 'Jackie Chan', 'Robert Downey Jr.',
    'Will Smith', 'Morgan Freeman', 'Megan Fox', 'Beyoncé', 'Leonardo DiCaprio',
    'Taylor Swift', 'Brad Pitt', 'Angelina Jolie', 'Chris Hemsworth', 'Rihanna',
    'Tom Cruise', 'Jennifer Lawrence', 'Dwayne "The Rock" Johnson',
    'Selena Gomez', 'Keanu Reeves', 'Scarlett Johansson', 'Robert Downey Jr.', 'Kim Kardashian',
    'Zendaya', 'Will Smith', 'Emma Watson', 'Justin Bieber', 'Margot Robbie'
]
let mcu_location = [
    'Tokyo, Japan', 'Cape Town, S. Africa', 'Sydney, Australia', 'Reykjavik, Iceland', 'Machu Picchu, Peru',
    'Paris, France', 'Cairo, Egypt', 'Banff N.P., Canada', 'Santorini, Greece', 'Dubai, UAE',
    'Mount Everest, Nepal', 'NYC, USA', 'Venice, Italy', 'Bora Bora, French Polynesia', 'Rio de Janeiro, Brazil',
    'Marrakech, Morocco', 'Amsterdam, Netherlands', 'Petra, Jordan', 'Kyoto, Japan', 'Istanbul, Turkey'
]
let otaMCU = [];

function collectotaMCUData() {
    let max = Math.floor(Math.random() * 18) + 1;
    for (let i = 0; i < max; i++) {
        let titleOfLocationIndex = (Math.floor(Math.random() * 18));
        let deviceObj = {
            img: `./ota-location-imgs/location-${i + 1}.jpg`,
            title: `Device @  ${mcu_location[i]} by ${hrefs[titleOfLocationIndex]} `,
            paragraph: `This is a dummy data for IOT Device '${i + 1}' to enable remote monitoring features.`,
            anchorHref: `https://www.google.com/${scearchQuiry}${mcu_location[titleOfLocationIndex]}`,
            anchorText: `Show Details: ${mcu_location[titleOfLocationIndex]}`
        };
        otaMCU.push(deviceObj);
    }
}

function ViewDeviece() {
    for (let device of otaMCU) {
        let cardElement = document.createElement('div')
        cardElement.setAttribute('class', 'card m-2 ')
        cardElement.setAttribute('style', 'height: 30rem;width: 20rem')

        let cardImg = document.createElement('img')
        cardImg.setAttribute('src', device["img"])
        cardImg.setAttribute('class', 'card-img-top');
        cardImg.setAttribute('style', 'height: 15rem; object-fit: cover;');
        cardImg.setAttribute('alt', 'not found');

        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        let cardHeader = document.createElement('h5')
        cardHeader.setAttribute('class', 'card-title')

        let cardHeaderTitle = document.createTextNode(device["title"]);

        let cardHeaderParagraph = document.createElement('p')
        cardHeaderParagraph.setAttribute('class', 'card-text')

        let cardHeaderParagraphContent = document.createTextNode(device["paragraph"]);

        let cardLink = document.createElement('a')
        cardLink.setAttribute('class', 'btn btn-primary')
        cardLink.setAttribute('href', device["anchorHref"])
        let cardLinkText = document.createTextNode(device["anchorText"])

        cardLink.appendChild(cardLinkText)
        cardHeaderParagraph.appendChild(cardHeaderParagraphContent)
        cardHeader.appendChild(cardHeaderTitle)

        cardBody.appendChild(cardHeader)
        cardBody.appendChild(cardHeaderParagraph)
        cardBody.appendChild(cardLink)

        cardElement.appendChild(cardImg)
        cardElement.appendChild(cardBody)

        itemCardsContainer.appendChild(cardElement)
    }

}

collectotaMCUData()
ViewDeviece()
