package com.example.app.spring_poll_app.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.spring_poll_app.entities.Poll;
import com.example.app.spring_poll_app.services.PollService;

@RestController
@RequestMapping("/api/polls")
public class PollController {
    private final PollService pollService;

    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

    // Create API
    @PostMapping
    public Poll createPoll(@RequestBody Poll poll) {
        return pollService.createPoll(poll); 
    }

    // Read All API
    @GetMapping
    public List<Poll> getAllPolls() {
        return pollService.getAllPolls();
    }

    // Read API
    @GetMapping("/{id}")
    public ResponseEntity<Poll> getPoll(@PathVariable Long id) {
        return pollService.getPollById(id)
                        .map(ResponseEntity::ok)
                        .orElse(ResponseEntity.notFound().build());
    }


}
