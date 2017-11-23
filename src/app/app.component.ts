import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    $(document).ready(function() {
      $("#signup").click(function() {
        $.post( "/signup", $("#signupForm").serialize(),
                function(data) {
                  $("#signupSuccess").show();
                }
              )
              .error(function(xhr) {
                switch(xhr.status) {
                  case 409:
                    $("#signupDuplicate").show();
                    break;
                  default:
                    $("#signupError").show();
                }
              })
              .always(function() {
                $("#signupModal").modal('hide');
              });
      })
    })
  }
}
