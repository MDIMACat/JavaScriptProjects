const fixedValues = {
  classes: {
    body: ".quoteBody",
    author: "quoteAuthor"
  }
}

class Quote{
    constructor(){
      this.quoteBody = "";
      this.quoteAuthor = "";
      this.domElements  = {}
    }

    async initialize(){
      this.initializeElements()
      await this.getQoute()
    }

    initializeElements(){
      this.domElements.quote = document.querySelector(fixedValues.classes.body)
      this.domElements.author = document.querySelector(fixedValues.classes.author)
    }

    async getQoute() {
      const endPoint = "https://favqs.com/api/qotd";
    
      const response = await fetch(endPoint);
    
      const data = await response.json();
      this.domElements.quote = data.quote.body;
      this.domElements.author = data.quote.author;
   
    }
}


if(typeof document !== undefined){
  const quote = new Quote()
  quote.initialize()
}