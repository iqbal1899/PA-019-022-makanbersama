import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../services/appointment.service';
import { NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
const KEY_TASK = "task"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  addBookingForm: FormGroup;
  id: any;
  taskList = [];
  taskName: string = "";
  
  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public navCtrl: NavController,
    public alertController: AlertController,
    private storage: Storage
  ) { 
      this.getTask();
  }

  getData(){
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.addBookingForm.setValue(res);
    });
  }

  ngOnInit() {}
  ionViewWillEnter(){
    this.getData();
  }
 
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.storage.set(KEY_TASK, JSON.stringify(this.taskList));
    }
  }

  getTask() {
    this.storage.get(KEY_TASK).then((hasil) => {
    if (hasil != null) {
    this.taskList = JSON.parse(hasil);
    console.log(this.taskList);
    } else {
    this.taskList = [];
    console.log('empty');
    }
    });
    return this.taskList;
    }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }
}
