import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  textoOriginal = '';
  textoTratado = '';

  tratamentoDoProcesso(textoOriginal) {

    const quantidadeCaracteres = 200;
    const pedacos = this.quebrarPedacos(textoOriginal, quantidadeCaracteres);
    this.textoTratado = this.tratarPedacos(pedacos);
  }

  private quebrarPedacos(textoOriginal: string, quantidadeCaracteres: number): string[] {
    let pedacos = [];
    let ind = 0;
    for (let i = 0; i < textoOriginal.length / quantidadeCaracteres; i++) {
      let pedacoTexto = textoOriginal.substring(ind, ind + quantidadeCaracteres);
      pedacos.push(pedacoTexto);
      ind += quantidadeCaracteres;
    }
    return pedacos;
  }

  private tratarPedacos(pedacos: any[]) {
    let montandoTexto = '';

    montandoTexto = montandoTexto + 'Este texto vem antes dos pedaços:\n';
    montandoTexto = montandoTexto + pedacos.toString();
    montandoTexto = montandoTexto + '\nEste texto vem depois';

    return montandoTexto;
  }
}


//title = 'app';
//novo = 'NOVO MUNDO';
//exemplo = 'Aqui estamos testando linkar e usar a vareavel no html component'

// titulo = 'alura';
//desc = 'vasco';
//url = 'https://correiopop.files.wordpress.com/2010/08/vasco.jpg?w=307&h=351';


//textoTratado = 'textoOriginal';

//rodarCodigo() {
//capturando = document.getElementById('textoOriginal').value;
//document.getElementById('textoTratado').innerHTML = capturando;
//  }


//tratarCodigo() {
//resultado = document.querySelector("#textoTratado").value;
//window.alert(this.textoOriginal)
// }
