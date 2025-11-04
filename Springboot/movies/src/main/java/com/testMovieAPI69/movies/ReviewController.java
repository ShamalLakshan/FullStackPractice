package com.testMovieAPI69.movies;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    
    private final ReviewService service;

    // Constructor injection
    public ReviewController(ReviewService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<>(service.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.OK);
    }
}