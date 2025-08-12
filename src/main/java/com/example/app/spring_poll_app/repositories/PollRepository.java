package com.example.app.spring_poll_app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.app.spring_poll_app.entities.Poll;

@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {


}
