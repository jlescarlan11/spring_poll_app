import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll';
import { Poll } from '../poll.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.html',
  styleUrl: './poll.css',
})
export class PollComponent implements OnInit {
  newPoll: Poll = {
    question: '',
    options: [
      { optionText: '', voteCount: 0 },
      { optionText: '', voteCount: 0 },
    ],
  } as Poll;

  polls: Poll[] = [];
  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (error) => {
        console.error('Error fetching polls: ', error);
      },
    });
  }

  createPoll() {
    this.pollService.createPoll(this.newPoll).subscribe({
      next: (createdPoll) => {
        this.polls.push(createdPoll);
        this.resetPoll();
      },
      error: (error) => {
        console.error('Error fetching polls: ', error);
      },
    });
  }

  resetPoll() {
    this.newPoll = {
      question: '',
      options: [
        { optionText: '', voteCount: 0 },
        { optionText: '', voteCount: 0 },
      ],
    } as Poll;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
