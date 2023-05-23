import { Component, HostListener, Input, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Qual é o meu personagem favorito?';
  tent = 'Tentativas';
  dic = 'PEDIR DICA';
  desist = 'desistir'
  @Input() valor: number = 0;
  @Input() qtd: number = 0;

  herois: string[] = [];
  heroi: string = "";

  dicas = ["Ele é da DC", "É Humano", "Usa máscara", "Não usa capa", "Não usa armas de fogo", "Branco e tem cabelo preto liso", "Não tem super poderes", "Membro dos Jovens Titãs", "É bilionário", "Tem uma cachorrinha de estimação", "Membro da Bat-Família", "Já foi um Robin"];
  new_dicas = ""

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.onAddHero()
  }

  resposta = "nightwing"
  resposta2 = "asa noturna"
  resposta3 = "asanoturna"
  resposta4 = "dick grayson"
  resposta5 = "dickgrayson"
  opacidadeImagem = 0

  onAddHero(){
    if (this.heroi != ""){
      const index = this.herois.findIndex((heroi)=>heroi.toLowerCase()==this.heroi.toLowerCase())
      if (index == -1){
        this.herois.push(this.heroi);
      this.valor++;
      } else {
        alert(`${this.heroi} já foi informado`);
      }
    }

    if (this.heroi.toLowerCase() == this.resposta || this.heroi.toLowerCase() == this.resposta2 || this.heroi.toLowerCase() == this.resposta3 || this.heroi.toLowerCase() == this.resposta4 || this.heroi.toLowerCase() == this.resposta5){
      alert("Acertou")
      this.opacidadeImagem = 1
      this.title = "ASA NOTURNA - Dick Grayson"
    }
    this.heroi = ""
  }

  ChamarDica(){
    if (this.dicas.length>0){
    this.new_dicas = this.dicas.shift();
    for (var i = 0; i < this.new_dicas.length; i++){
      this.opacidadeImagem = this.opacidadeImagem + 0.000650
    }
  this.qtd ++;
  }

  }

  Desistir(){
    this.opacidadeImagem = 1
    alert("Meu personagem favorito é o ASA NOTURNA")
    this.title = "ASA NOTURNA"
  }

  constructor(){}

  ngOnInit(): void {
  }
}
