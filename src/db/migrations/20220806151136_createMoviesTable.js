/*
title: "Spirited Away",
    runtime_in_minutes: 125,
    rating: "PG",
    description:
        "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
    image_url:
        "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    },
*/




exports.up = function(knex) {
    return knex.schema.createTable("movies", (table) =>{
        table.increments("movie_id").primary();
        table.string("title");
        table.integer("runtime_in_minutes");
        table.string("rating");
        table.text("description");
        table.string("image_url");
        table.timestamp(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("movies")

};
