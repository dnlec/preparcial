interface Actor {
    id: string;
    name: string;
    photo: string;
    nationality: string;
    birthDate: Date;
    biography: string;
    movies: Movie[];
}

interface Movie {
    id: string;
    title: string;
    poster: string;
    duration: number;
    country: string;
    releaseDate: Date;
    popularity: number;
}