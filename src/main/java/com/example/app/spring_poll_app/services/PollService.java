package com.example.app.spring_poll_app.services;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.app.spring_poll_app.entities.Poll;
import com.example.app.spring_poll_app.repositories.PollRepository;

@Service
public class PollService {

    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }


    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }
}
