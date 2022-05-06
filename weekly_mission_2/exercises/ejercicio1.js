const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return 
    }
}

const Issue={
    title: "Issue",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 4,
    labels: "bug",
    author: "Gomez50057",
    dateCreated: "05/05/2022",
    lastUpdated: "05/05/2022",
    getTitleAndAuthor(){
        return `title: ${this.title}  author: ${this.author}`
    },
    getGeneralInfo(){
        return `Issue ${this.name} fue creado por ${this.author} bajo el label de ${this.labels}`
    }
}
   
const PullRequest ={
    title: "Ejercicio",
    branchName: "master",
    dateCreated: "05/05/2022",
    status: "En revisión",
    repositoryNameAssociated: "LauncXCopia",
    getStatus(){
        return `El pull_request ${this.title} se encuentra ${this.status}`
    },
    getTitleAndAuthor(){
        return `title: ${this.title}  author: ${this.author}`
    }
}


//Twitter
const TwitterUser={
    user: "@gomez50057",
    username: "@gomez50057",
    bio: "Vivimos en un arcoíris de caos",
    dateCreated: "02/09/2022",
    followers: 50,
    following: 50,
}

const TwitterHashTag={
    Theme:["Para ti","Tendencias","COVID-19","Noticias","Entretenimiento"]
}

//Facebook
const FacebookUser={
    user: "Gabriel Gomez",
    friends: 628,
    theme:["Publicaciones","Información","Amigos","Fotos","Videos","Registros","Más"],
}
const FacebookPost={
    user: "Gabriel Gomez",
    dateCreated: "Ayer",
    message: "Pase de abordar",
    picture: "foto pase",
    reactions:{
        like: 15,
        corazon: 20,
        divertido: 0,
        triste: 0,
        enojado: 0
    }
}
const FacebookBiography={
    friends:["Todos los amigos","Cumpleaños","Ciudad actual","Ciudad de origen","Seguidores","Seguidos"],
    fotos:["Fotos en las que apareces","Tus fotos","Álbumes"],
}

//Uber
const UberProfile={
    name: "Gabriel Gomez",
    puntuacion: 4.5,
    cajas:{
        Ayuda:["Ayuda con un viaje","Cuenta y opciones de pago","Más","Tu guía Uber","Uber Rewards","Regístrate","Accesibilidad","Emergencia","Uber Moto","información sobre el pase"],
        Pago: ["Efectivo","Agregar método de pago","Cupones","Agregar código del cupón","Agregar un código de promo"],
    },
    Mensajes:[],
    Configuracion:[],
    Legal:[]
} 
console.log(UberProfile);
console.log(TwitterUser);
console.log(FacebookUser);
