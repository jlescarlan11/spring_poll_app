package com.example.app.spring_poll_app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Vote {
    private Long pollId;
    private int optionIndex;
}
