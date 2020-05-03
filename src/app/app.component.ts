import { Component, OnInit } from '@angular/core';
import { AppudateService } from './services/appudate.service';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { MessagingService } from './services/firebase/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PatientEngagement';

  message;

  form: FormGroup;
  error: string;

  constructor(
    // private messagingService: MessagingService,
    private appUpdate: AppudateService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: '',
      password: ''
    })

    // const userId = 'user001';
    // this.messagingService.requestPermission(userId)
    // this.messagingService.receiveMessage()
    // this.message = this.messagingService.currentMessage
  }



  submit() { }
}
