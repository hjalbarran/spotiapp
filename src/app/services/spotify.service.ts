import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log("Servicio listo")
   }

   getQuery (query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDRnUAkCKVDCg1ZNkrtGP1uNWU0KKE9habPdITMrrkRN0Pb0qwX9jb2ecX9F7VS64dJWqSf4gOQNb5gTZE'
    })
    return this.http.get(url, {headers});

   }

   getNewReleases() {
   
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( (data: any) => {
                  return data['albums'].items
                }))
   }

   getArtistas( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe( map( (data: any) => {
                  return data['artists'].items
                }))

              // en una sola linea
              // .pipe ( map ( ( data: any) => data['artists'].items ));
   }

   getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
              // en una sola linea
              // .pipe ( map ( ( data: any) => data['artists'].items ));
   }

   getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( (data: any) => {
                  return data['tracks']
                }))
              // en una sola linea
              // .pipe ( map ( ( data: any) => data['artists'].items ));
   }
}
