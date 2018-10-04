import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: any[]; // Array mit beliebigen typ
  posts: any;
  isEdit = false;

  constructor(private dataService: DataService) {
    console.log('Konstruktor läuft...');
   }

  // Life-Cycle-Hook, läuft, wenn Component initialisiert wird
  ngOnInit() {
    console.log('ngOnInit läuft...');

    this.name = 'John Doe';
    this.age = 30; // nur Zahlen wegen Number
    this.address = {
      street: 'Teststreet',
      city: 'Testcity',
      state: 'NS'
    };
    this.hobbies = ['test1', 'test2', 'test3', 1, 2, 3];
    this.email = 'test@test.com';

    this.dataService.getPosts().subscribe((posts) => { // subscribe the service
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'René';
    this.hobbies.push('ich habe keine Hobbies');
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}
