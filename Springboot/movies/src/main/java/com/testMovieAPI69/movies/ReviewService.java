package com.testMovieAPI69.movies;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ReviewService {
    
    private final ReviewRepository repository;
    private final MongoTemplate mongoTemplate;

    // Constructor injection
    public ReviewService(ReviewRepository repository, MongoTemplate mongoTemplate) {
        this.repository = repository;
        this.mongoTemplate = mongoTemplate;
    }

    public Review createReview(String reviewBody, String imdbId) {
        Review review = repository.insert(new Review(reviewBody, LocalDateTime.now(), LocalDateTime.now()));

        mongoTemplate.update(Movie.class)
            .matching(Criteria.where("imdbId").is(imdbId))
            .apply(new Update().push("reviews").value(review))
            .first();
        return review;
    }
}