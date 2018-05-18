let Data = {
  title: "Data",
  description: "All about data",
  URL: "http://data.se/",
  iconURL: "http://dataIcon.se",
  col: 4,
  style: [
    {
      color: "red",
      margin: "16px"
    }
  ]
}

let Internet = {
  title: "Internet",
  description: "All about the internet",
  URL: "http://internet.se/",
  iconURL: "http://internetIcon.se",
  col: 5,
  style: [
    {
      color: "black",
      padding: "4px"
    }
  ]

}

let Recruiter = {
  title: "recruiter",
  description: "Our recruiters",
  URL: "http://recruiter.se/",
  iconURL: "http://recruiterIcon.se",
  col: 2,
  style: [
    {
      color: "yellow",
      paddingTop: "0px"
    }
  ]
}

let Engenier = {
  title: "Engenier",
  description: "Our single Engenier",
  URL: "http://www.match.com/",
  iconURL: "http://builderIcon.se",
  col: 11,
  style: [
    {
      color: "pink",
      backgroundcolor: "purple"
    }
  ]
}

let CleaningLady = {
  title: "Esmeralda",
  description: "Origin: Spain",
  URL: null,
  iconURL: "http://maidIcon.com",
  col: 12,
  style: [
    {
      color: "white",
      margin: "20px"
    }
  ]
}

let Nordea = {
  title: "Nordea",
  description: "The bank in the munksjö tower",
  URL: "http://Nordea.se/",
  iconURL: "http://NordeaIcon.se",
  col: 3,
  style: [
    {
      color: null
    }
  ]
}

let Swedbank = {
  title: "Swedbank",
  description: "Swedens bank",
  URL: "http://swedbank.se/",
  iconURL: "http://swedbankIcon",
  col: 3,
  style: [
    {
      backgroundcolor: "orange"
    }
  ]
}

let Danskebank = {
  title: "Danskebank",
  description: "Denmarks bank",
  URL: "http://danskebank.dk",
  iconURL: "http://danskbankIcon.dk",
  col: 3,
  style: [
    {
      backgroundcolor: null
    }
  ]
}

let Handelsbanken = {
  title: "Handelsbanken",
  description: "handlarnas bank",
  URL: "http://handelsbanken.se",
  iconURL: "http://handelsbankenIcon.se",
  col: 3,
  style: [
    {

    }
  ]
}

let Snake = {
  title: "Snake",
  description: "popular Nokia3342 game",
  URL: "http://Snake.com/",
  iconURL: "http://SnakeIcon.com",
  col: 13,
  style: [
    {
      color: "White",
      backgroundcolor: "Black"
    }
  ]
}

let IT = {
  title: "IT",
  description: "All about IT",
  links: [
    {
      Data
    },
    {
      Internet
    }
  ]
}

let HR = {
  title: "Human resources",
  description: "Our human resources",
  links: [
    {
      Recruiter
    },
    {
      Engenier
    },
    {
      CleaningLady
    }
  ]
}

let Banks = {
  title: "Banks",
  description: "All the banks!",
  links: [
    {
      Nordea
    },
    {
      Swedbank
    },
    {
      Danskebank
    },
    {
      Handelsbanken
    }
  ]
}

let Games = {
  title: "Games",
  description: "only the most fun of games",
  links: [
    {
      Snake
    }
  ]
}

let Items = { cat: [ HR , IT , Banks , Games ] }

window["myData"] = Items;

// console.log(JSON.stringify(Items, null, 2));