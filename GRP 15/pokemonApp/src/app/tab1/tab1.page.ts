import { Component } from '@angular/core';
import { PokeAPIService } from'./../services/poke-api.service';
import { ViaCEPService } from './../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
	areaBuscarPokemon: string = '52011210';
	areaBusca: any = {
		bairro: '',
		localidade: '',
		logradouro: '',
		uf: ''
	};
	constructor(
		private pokeAPIService: PokeAPIService,
		private viaCEPService: ViaCEPService
	) { }
	buscarPokemon() {
		this.viaCEPService.consultarCEP(this.areaBuscarPokemon)
			.subscribe((value) => {
				this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
				this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))["bairro"];
				this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
				this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];
			});
		this.pokeAPIService.getPokeAPIService();
	}
}