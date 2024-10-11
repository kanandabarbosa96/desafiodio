class heroi{
    constructor(nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
    atacar(){
      let ataque;
  
      if(this.tipo === "mago"){
        ataque = "magia"
      }
      else if(this.tipo === "guerreiro"){
      ataque = "espada"
      }
      else if(this.tipo === "monge"){
        ataque = "artes marciais"
      }
      else if(this.tipo ==="ninja"){
        ataque = "shuriken"
      }
      console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
    
  }
  
  let heroi1 = new heroi("joao",27,"mago")
  let heroi2 = new heroi("lucas",24,"guerreiro")
  let heroi3 = new heroi('Joaquim',18,"monge")
  let heroi4 = new heroi("Pedro",30,"ninja")
   
  heroi1.atacar()
  heroi2.atacar()
  heroi3.atacar()
  heroi4.atacar()
  