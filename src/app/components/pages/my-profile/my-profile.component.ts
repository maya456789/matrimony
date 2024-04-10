import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards = [
    {
      img: 'assets/img/Rectangle 1916.png',
      id: '215AD95',
      view: '1214',
      name: 'Vishal Bompilwar',
      age:'26',
      education: 'MBA',
      occupation: 'Project Manager',
      location: 'Pune, India',
      marital_status: 'Never Married',
      height: '5.11',
      gotra1 : 'Chilkul',
      gotra2: 'Punyashil',
      special_cases: 'Abc',
      date_of_birth: '27/11/1998',
      blood_group: 'A+',
      annual_income: '5,000000',
      email_id: 'abc@email.com',
      candidates_mobile: '9874563210',
      parents_number: '9876543210',
      mother_tongue: 'Marathi',
      lifestyle: 'Vegetarian, No smoke, Pet lover',
      birth_name:'Abc',
      birth_place: 'Pune',
      time_of_birth: '12.00 AM',
      father_name:'Sudakar',
      father_occupation: 'Govermment Servant',    
      father_education: 'Bsc',
      mother_name:'Vanita',
      mother_occupation: 'Housewife',
      mother_education: 'B.com',
      number_of_brother: '0',
      brother_spourses: 'NA',
      number_of_sister: '1',
      sister_spourses: 'Payal Naliwar, Working as sr.Quality Engineer at TCS',
      diet_type: 'vegan',
      


    },
  ]

}
