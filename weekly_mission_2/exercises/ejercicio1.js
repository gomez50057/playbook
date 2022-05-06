const repo = {
    name: "LaunchX",
    author: "Ramiro",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
   
    title: "Live de Node",
    repositoryNameAssociated: "repositoriodeRamiro",
    status: "open",
    numberOfComments: 34,
    labels: "ayuda",
    dateCreated: "22-02-2022",
    lastUpdated: "22-02-2022",

    titlepull: "enviando pull",
    branchName: "main",
    repositoryNameAssociated: "fromramirozs",

   
   
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `Este repositorio ${this.name} fue creado por ${this.author}`
    },
    getTitleAndAuthor: function(){
        return `Clase de:  ${this.title} de ${this.author}`
      },

      getTitlePullAndAuthor: function(){
        return `Pull request: ${this.titlepull} de ${this.author}`
      },
    getStatus: function(){
        return `Estado del repositorio: ${this.status} `
      }



   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log("Nombre de Issue: " + repo.getTitleAndAuthor())
   console.log(repo.getGeneralInfo())
   
   console.log(repo.getTitlePullAndAuthor())
   console.log(repo.getStatus())

   
