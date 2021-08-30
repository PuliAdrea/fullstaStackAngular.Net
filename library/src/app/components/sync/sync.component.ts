import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiclientService } from 'src/app/services/apicliente.service';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent implements OnInit {

  loading : boolean = true;
  url : string = '/api/SyncUp';
  error;
  constructor(
    private http: HttpClient
  ) {
   
}
   
  ngOnInit(): void {

  }

  sync(){
    
    this.http.get<any>(this.url).subscribe(data => {
      console.log(this.url)
      this.loading = data;
      console.log(data)
      if(data == false)
      {
        this.loading ==false; 
      }
   },error => this.error = error);
  }
}


