package com.testMovieAPI69.movies;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    private final MovieRepository repository;

    // Constructor injection
    public MovieService(MovieRepository repository) {
        this.repository = repository;
    }

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }
    
    public Optional<Movie> findMovieByImdbId(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }
}