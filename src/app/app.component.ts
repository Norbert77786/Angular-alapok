import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesService],
})
export class AppComponent implements OnInit {
  //alapok
  title: string = '1.Introduction';
  myBtn: string = 'My Button';
  counter: number = 0;

  //gomb kikapcsolása
  isDisabled: boolean = false;
  angularImage: string = '';

  //stílus
  bgColor: string = 'blue';
  titleColor: string = 'white';
  description: string = 'font-size:30px; color:lightblue';
  myButtonbgColor: string = 'background-color:green';
  maxWidth: string = '20px';

  //osztály
  redText: boolean = false;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  inputText: string = 'Initial Value';

  //ngOsztályok
  message: string = 'This is a dangerous message';
  classes: string = 'danger text-size';

  //ngStílusok
  selectedColor: string = 'red';

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  isLoggedIn: boolean = false;
  username: string = 'Umair';

  names: string[] = ['umair', 'ali', 'john'];
  grade: string = 'A';

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  today: number = Date.now();
  currency: number = 1.3465;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  messages: string[] = [];
  posts: any[] = [];

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }

  ngOnInit() {
    this.messagesService.getPosts().subscribe(
      (Response) => {
        this.posts = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
