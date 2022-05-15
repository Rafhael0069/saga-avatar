export class Poster {
  constructor(
    public titulo: string,
    public imgPosterUrl: string,
    public diretor: string,
    public imdb: string,
    public genero: string,
    public ano: string,
    public buttonDisable1: boolean = false,
    public buttonDisable2: boolean = false,
    public buttonDisable3: boolean = false,
    public buttonDisable4: boolean = false,
    public buttonDisable5: boolean = false) {
  }
}
