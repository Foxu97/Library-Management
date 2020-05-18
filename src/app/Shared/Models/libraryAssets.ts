import { Book } from './book';
import { Movie } from './movie';
import { Series } from './series';
import { Game } from './game';

export interface LibraryAssets {
    books: Book[];
    movies: Movie[];
    series: Series[];
    games: Game[];
}