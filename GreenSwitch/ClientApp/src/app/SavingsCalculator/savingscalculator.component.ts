import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Services/http.service";

@Component({
  selector: 'app-savingscalculator',
  templateUrl: './savingscalculator.component.html',
  styleUrls: ['./savingscalculator.component.css']
})

export class SavingscalculatorComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  YearlyKwh : number = 0;
  saved : string = "loading...";
  handleSubmit()
  {
    const pricePerKwh = 0.145
    // @ts-ignore
    let address = document.getElementById('addr').value
    // @ts-ignore
    let capacity = document.getElementById('size').value

    this.httpService.getSolarHistorical(address, capacity)
      .subscribe(json => {
        this.YearlyKwh = json['outputs']['ac_annual'];
        this.saved = (this.YearlyKwh * pricePerKwh).toFixed(2)
        console.log(json['outputs']['ac_annual'])
      });;
  }
}
