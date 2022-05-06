
class repor {
    constructor(name,author, title, titlepull, language){
    
    this.name = name
    this.author = author
    this.language = "JavaScript"
    this.numberOfCommits= 150
    this.stars= 20
    this.forks= 50,
    this.issues_open= 20
    this.issues_close= 20
   
    this.title= title
    this.repositoryNameAssociated= "repositoriodegomez50057"
    this.status= "open"
    this.numberOfComments= 34
    this.labels= "ayuda"
    this.dateCreated= "17-03-2018"
    this.lastUpdated= "05-05-2022"

    this.titlepull= titlepull
    this.branchName= "main"
    this.repositoryNameAssociated= "fromramirozs"
    }
   
    getInfo(){
       return `Nombre Organizacion: ${this.name} | Repositorio de:  ${this.author} | language:  ${this.language} | Total de commits: ${this.numberOfCommits} | Nombre Issue: ${this.title}   Status: ${this.status} |  NombrePull ${this.titlepull}   Status: ${this.status}`  
    }    
  
   }
   
   console.log("---------------clase-----------------")
   const myPR1 = new repor("LaunchX", "gomez50057", "live", "primerpull")
   console.log(myPR1.getInfo())
   
