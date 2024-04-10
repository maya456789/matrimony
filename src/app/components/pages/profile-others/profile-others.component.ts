import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-others',
  templateUrl: './profile-others.component.html',
  styleUrls: ['./profile-others.component.css']
})
export class ProfileOthersComponent implements OnInit {
  router: any;
  pageStateService: any;

  constructor() { }

  ngOnInit(): void {
  
  }
  cards = [
    {
      img: 'assets/img/Rectangle 19.png',
      id: '215AD35',
      view: '1214',
      name: 'Sayali Bompilwar',
      age:'26',
      education: 'MBA',
      occupation: 'Project Manager',
      location: 'Pune, India',
      marital_status: 'Never Married',
      height: '5.11',
      gotra1 : 'Chilkul',
      gotra2: 'Punyashil',
      special_cases: '************',
      date_of_birth: '************',
      blood_group: 'A+',
      annual_income: '************',
      email_id: '************',
      candidates_mobile: '************',
      parents_number: '************',
      mother_tongue: 'Marathi',
      lifestyle: 'Vegetarian, No smoke, Pet lover',
      birth_name:'************',
      birth_place: '************',
      time_of_birth:'************',
      father_name:'************',
      father_occupation: '************',    
      father_education: '************',
      mediator_name:'************',
      mediator_number: '91-9850*****',    
      mediator_email: '*******@gmail.com',
      mother_name:'Vanita',
      mother_occupation: 'Housewife',
      mother_education: 'B.com',
      number_of_brother: '0',
      brother_spourses: 'NA',
      number_of_sister: '1',
      sister_spourses: 'Payal Nilawar Working as - Sr. Quality Engineer at TCS,Vijay Nilawar Working as - Sr. Quality Engineer at TCS',
      diet_type: 'vegan',
      


    },
  ]
  
  logout2(){
    this.pageStateService.logout();
this.router.navigate(['/homepage']);
  }
}
