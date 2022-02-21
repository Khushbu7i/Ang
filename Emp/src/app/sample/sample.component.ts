import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent implements OnInit {
  ngOnInit(): void {
  }

  EmployeeForm: any = FormGroup;

  employee = {                            //new object created
    "Fname": "",
    "Lname": "",
    "Email": "",
    "Contact": "",
    "Address": "",

  };

  editIndex = -1;

  list:any = [];                        //array for storing fields

  myValue: any;


  crud() {
    this.list.push({
      "Fname": this.employee.Fname,
      "Lname": this.employee.Lname,
      "Email": this.employee.Email,
      "Contact": this.employee.Contact,
      "Address": this.employee.Address,

    });
  }
    editform(index:any){                    //edit the record
     this.employee.Fname=this.list[index].Fname;
     this.employee.Lname=this.list[index].Lname;
     this.employee.Email=this.list[index].Email;
     this.employee.Contact=this.list[index].Contact;
     this.employee.Address=this.list[index].Address;

     this.editIndex=index;


    }
     Delete(index: any){                   // delete the record
       this.list.splice(index,1);
       alert("Record Deleted ")

     }

    Update(){                               //Update the record
    let edit= this.myValue;

    for(let i=0; i< this.list.length; i++){

     if (i == edit){
     this.list[i].Fname=this.employee.Fname;
     this.list[i].Lname=this.employee.Lname;
     this.list[i].Email=this.employee.Email;
     this.list[i].Contact=this.employee.Contact;
     this.list[i].Address=this.employee.Address;

    this.employee.Fname="";
    this.employee.Lname="";
    this.employee.Email="";
    this.employee.Contact="";
    this.employee.Address="";

     alert("Record Updated Successfully..")
     }
    }
 }
}
