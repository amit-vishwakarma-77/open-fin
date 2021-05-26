import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-financial';
  scroll = '';
  monthlyIncome = 0;
  monthlyExpences = 0;

  updateMonthExpences(e:any){
    this.monthlyExpences = e.target.value;
  }
  updateMonthIncome(e:any){
    this.monthlyIncome = e.target.value;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const offset =  document.documentElement.scrollTop  ;
    if(window.pageYOffset > 70 ){
      this.scroll = 'scroll-header';
    }else{
      this.scroll = '';
    }
    
  }

}
