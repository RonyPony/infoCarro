
import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarServiceService } from '../../services/carService.service';
import {MatDialog} from '@angular/material/dialog';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-carFinder',
  templateUrl: './carFinder.component.html',
  styleUrls: ['./carFinder.component.scss']
})
export class CarFinderComponent implements OnInit {

  constructor(private carService:CarServiceService,private modalService: MatDialog) { }
  vim: string = '';
  year: string = '';
  errorCode: string = '';
  errorMessage: string = '';
  carInfo: Car = {
    Count: 0,
    Message: '',
    SearchCriteria: ''
  };
  ngOnInit() {
  }
  public openModal() : void
    {
        let dialog = this.modalService.open(FooterComponent);
    }

  loadInfo() {
    // class DialogElementsExampleDialog {}
    // this.dialog.open(DialogElementsExampleDialog);
    if (this.vim!=''&&this.year!='') {
      this.carService.getVimWithYear(this.vim, this.year).subscribe(response => {
        this.carInfo = response;
        this.carInfo.Results?.forEach(element => {
          console.log("Server Response CODE >>> " + element.ErrorCode)
          this.errorCode = element.ErrorCode;
          this.errorMessage = element.ErrorText;
        })

      });
    } else {
      // alert("Information is not complete");
      this.errorCode = '99';
      this.errorMessage = 'Los campos no estan completos';
      console.log("Information is not complete");
    }
  }

}
