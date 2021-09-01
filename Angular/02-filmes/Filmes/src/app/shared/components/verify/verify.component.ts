import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  API_URL: string = "http://localhost:8000/Users";
  data: any;
  constructor(
    private http: CrudService
  ) { }

  ngOnInit(): void {
    this.http.returnList(this.API_URL).subscribe(
      res => this.data = res
    )
  }

}
