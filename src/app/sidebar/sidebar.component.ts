import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClick(id:any)  {
    if($('.subm'+id).hasClass('hide')) {
      $('.subm'+id).addClass('show');
      $('.subm'+id).removeClass('hide');
    } else {
      $('.subm'+id).addClass('hide');
      $('.subm'+id).removeClass('show');
    }
    // if($('.subm'+id).css('display') == 'block'){
    //   $('.sidebar-submenu'+id).css('display','none');
    // } else {
    //   $('.sidebar-submenu'+id).css('display','block');
    // }
  }

  onSideBarOpen() {
    $('#sidebar').toggleClass('active');
  }

}
