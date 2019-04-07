import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
minutes = 25;
seconds = 0;
status = false;
breakLength = 5;
sessionLength = 25;
counting: any;
title = 'Session';
time = `${this.minutes}` + `:00`;
audio = new Audio('https://www.myinstants.com/media/sounds/gamecube_intro.mp3');
  constructor() { }

  ngOnInit() {
    this.time = `${this.minutes}` + `:00`;
  }

  // playAudio() {
  //   const audio = new Audio();
  //   audio.src = 'src/app/clock/Zodiac.mp3';
  //   audio.load();
  //   audio.play();
  // }

  timer() {
    // if (this.minutes === 0 && this.seconds === 1) {
    //   this.playAudio();
    //   }
    if (this.minutes === 0 && this.seconds === 0) {
      this.audio.play();
      if (this.title === 'Session') {
        this.title = 'Break';
        this.minutes = this.breakLength;
        this.time = `0${this.minutes}` + `:0` + `${this.seconds}`;
      } else if (this.title === 'Break') {
          this.title = 'Session';
          this.minutes = this.breakLength;
          this.time = `0${this.minutes}` + `:0` + `${this.seconds}`;
      }
      } else {
        if (this.seconds === 0) { this.seconds = 60; this.minutes--; }
        this.seconds--;
        if (this.seconds < 10) {
          this.time = `${this.minutes}` + `:0` + `${this.seconds}`;
          if (this.minutes === 0) {this.time = `0${this.minutes}` + `:0` + `${this.seconds}`; }
        } else if (this.minutes < 10) {
          this.time = `0` + `${this.minutes}` + `:` + `${this.seconds}`;
          if (this.seconds < 10 && this.minutes === 0) {
            this.time = `0${this.minutes}` + `:0` + `${this.seconds}`;
          }
        } else { this.time = `${this.minutes}` + `:` + `${this.seconds}`; }
      }
  }



  startTimer() {
    if (this.status === false) {
      this.counting = setInterval(this.timer.bind(this), 100);
      this.status = true;
      console.log(this.status);
    } else if (this.status === true) {
      clearInterval(this.counting);
      this.status = false;
    }
  }

  stopTimer() {
    this.status = false;
    clearInterval(this.counting);
    this.title = 'Session';
    this.minutes = this.sessionLength;

    this.sessionLength = 25;
    this.breakLength = 5;
    this.time = `${this.sessionLength}` + `:00`;
    // this.playAudio();
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  breakDecrement() {
    if (this.status === false) {
      if (this.breakLength > 1) {
        this.breakLength--;
        // this.title = 'Session';
        this.time = `${this.sessionLength}` + `:00`;
        if (this.sessionLength !== 60 || this.sessionLength < 10) { this.time = `0${this.sessionLength}` + `:00`; }
        this.seconds = 0;
        this.minutes = this.sessionLength;
      }
      if (this.title === 'Break') {
        this.minutes = this.breakLength;
        this.time = `0${this.minutes}` + `:00`;
        this.seconds = 0;
      }
    }
  }
  breakIncrement() {
    if (this.status === false) {
      if (this.breakLength < 60) {
        this.breakLength++;
        // this.title = 'Session';
        this.time = `${this.sessionLength}` + `:00`;
        if (this.sessionLength !== 60 || this.sessionLength < 10) { this.time = `0${this.sessionLength}` + `:00`; }
        this.seconds = 0;
        this.minutes = this.sessionLength;
      }
      if (this.title === 'Break') {
        this.minutes = this.breakLength;
        this.time = `0${this.minutes}` + `:00`;
      }
    }
  }
  sessionDecrement() {
    if (this.status === false) {
        if (this.sessionLength > 1) {
          this.sessionLength--;
          this.time = `${this.sessionLength}` + `:00`;
          this.title = 'Session';
          if (this.sessionLength < 10) { this.time = `0` + `${this.sessionLength}` + `:00`; }
          this.seconds = 0;
          this.minutes = this.sessionLength;
        }
    }
  }
  sessionIncrement() {
    if (this.status === false) {
      if (this.sessionLength < 60) {
        this.sessionLength++;
        this.time = `${this.sessionLength}` + `:00`;
        this.title = 'Session';
        if (this.sessionLength < 10) { this.time = `0` + `${this.sessionLength}` + `:00`; }
        this.seconds = 0;
        this.minutes = this.sessionLength;
      }
  }
  }




}
