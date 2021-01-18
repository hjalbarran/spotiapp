import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  loading: any;

  artistas: any[] = [];

  constructor( private spotify: SpotifyService ) { 
    
  }

  buscar(termino: string) {
    if (termino === '') return
    this.loading = true;
    this.spotify.getArtistas(termino)
        .subscribe( (data: any) => {
          // console.log( data.artists.items );
          this.artistas = data;
          this.loading = false;
        });
  }


}
