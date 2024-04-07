declare type Movie = {
    id: string,
    title: string,
    duration: number,
    budget: string | number,
    release_date: string,
    box_office: string,
    cinematographers: string[],
    poster: string,
    producers: string[],
    summary: string,
};

export {
    Movie
}