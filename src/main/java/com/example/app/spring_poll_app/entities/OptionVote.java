package com.example.app.spring_poll_app.entities;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Embeddable
public class OptionVote {

    private String voteOption;
    private Long voteCount = 0L;
}
