import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-practice',
  templateUrl: './carousel-practice.component.html',
  styleUrls: ['./carousel-practice.component.css']
})
export class CarouselPracticeComponent {
//  // Define your variables here
//  selected: any;
//  prev: any;
//  next: any;
//  prevSecond: any;
//  nextSecond: any;

//  // Constructor if needed
//  constructor() {
//    // Initialize your variables if needed
//  }

//  // Define the moveToSelected function
//  moveToSelected(element: string | any): void {
//    if (element == "next") {
//      this.selected = this.selected?.nextElementSibling;
//    } else if (element == "prev") {
//      this.selected = this.selected?.previousElementSibling;
//    } else {
//      this.selected = element;
//    }

//    this.next = this.selected?.nextElementSibling;
//    this.prev = this.selected?.previousElementSibling;
//    this.prevSecond = this.prev?.previousElementSibling;
//    this.nextSecond = this.next?.nextElementSibling;

//    this.selected?.classList.remove('prev', 'next', 'nextRightSecond', 'prevLeftSecond');
//    this.selected?.classList.add('selected');

//    this.prev?.classList.remove('selected', 'next', 'nextRightSecond', 'prevLeftSecond');
//    this.prev?.classList.add('prev');

//    this.next?.classList.remove('selected', 'prev', 'nextRightSecond', 'prevLeftSecond');
//    this.next?.classList.add('next');

//    this.nextSecond?.classList.remove('selected', 'prev', 'next', 'prevLeftSecond');
//    this.nextSecond?.classList.add('nextRightSecond');

//    this.prevSecond?.classList.remove('selected', 'next', 'prev', 'nextRightSecond');
//    this.prevSecond?.classList.add('prevLeftSecond');
//  }

//  // Define keydown event
//  @HostListener('document:keydown', ['$event'])
//  handleKeyboardEvent(event: KeyboardEvent): void {
//    switch (event.key) {
//      case 'ArrowLeft':
//        this.moveToSelected('prev');
//        break;
//      case 'ArrowRight':
//        this.moveToSelected('next');
//        break;
//      default:
//        return;
//    }
//    event.preventDefault();
//  }
// constructor(private elementRef: ElementRef) { }
// moveToSelected(element: string): void {
//   const carousel = this.elementRef.nativeElement.querySelector('#carousel');
//   const selected = carousel.querySelector('.selected');
//   const prev = carousel.querySelector('.prev');
//   const next = carousel.querySelector('.next');
//   const prevSecond = carousel.querySelector('.prevLeftSecond');
//   const nextSecond = carousel.querySelector('.nextRightSecond');

//   selected.classList.remove('selected');
//   prev.classList.remove('prev');
//   next.classList.remove('next');
//   prevSecond.classList.remove('prevLeftSecond');
//   nextSecond.classList.remove('nextRightSecond');

//   if (element === 'prev') {
//     selected.previousElementSibling?.classList.add('selected');
//     selected.previousElementSibling?.previousElementSibling?.classList.add('prevLeftSecond');
//     selected.nextElementSibling?.classList.add('next');
//     selected.nextElementSibling?.nextElementSibling?.classList.add('nextRightSecond');
//   } else if (element === 'next') {
//     selected.nextElementSibling?.classList.add('selected');
//     selected.nextElementSibling?.nextElementSibling?.classList.add('nextRightSecond');
//     selected.previousElementSibling?.classList.add('prev');
//     selected.previousElementSibling?.previousElementSibling?.classList.add('prevLeftSecond');
//   }
// }
// constructor(private elementRef: ElementRef) { }

  // moveToSelected(element: string): void {
  //   const carousel = this.elementRef.nativeElement.querySelector('#carousel');
  //   const selected = carousel.querySelector('.selected');
  //   const prev = carousel.querySelector('.prev');
  //   const next = carousel.querySelector('.next');
  //   const prevSecond = carousel.querySelector('.prevLeftSecond');
  //   const nextSecond = carousel.querySelector('.nextRightSecond');

  //   selected.classList.remove('selected');
  //   prev.classList.remove('prev');
  //   next.classList.remove('next');
  //   prevSecond.classList.remove('prevLeftSecond');
  //   nextSecond.classList.remove('nextRightSecond');

  //   if (element === 'prev') {
  //     selected.previousElementSibling?.classList.add('selected');
  //     selected.previousElementSibling?.previousElementSibling?.classList.add('prevLeftSecond');
  //     selected.nextElementSibling?.classList.add('next');
  //     selected.nextElementSibling?.nextElementSibling?.classList.add('nextRightSecond');
  //   } else if (element === 'next') {
  //     selected.nextElementSibling?.classList.add('selected');
  //     selected.nextElementSibling?.nextElementSibling?.classList.add('nextRightSecond');
  //     selected.previousElementSibling?.classList.add('prev');
  //     selected.previousElementSibling?.previousElementSibling?.classList.add('prevLeftSecond');
  //   }
  // }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.moveToSelected('prev');
  //       break;
  //     case 'ArrowRight':
  //       this.moveToSelected('next');
  //       break;
  //     default:
  //       return;
  //   }
  //   event.preventDefault();
  // }
  // moveToSelected(element: string): void {
  //   const carousel = this.elementRef.nativeElement.querySelector('#carousel');
  //   const selected = carousel.querySelector('.selected');
  //   const prev = carousel.querySelector('.prev');
  //   const next = carousel.querySelector('.next');
  //   const prevSecond = carousel.querySelector('.prevLeftSecond');
  //   const nextSecond = carousel.querySelector('.nextRightSecond');

  //   selected.classList.remove('selected');
  //   prev.classList.remove('prev');
  //   next.classList.remove('next');
  //   prevSecond.classList.remove('prevLeftSecond');
  //   nextSecond.classList.remove('nextRightSecond');

  //   if (element === 'prev') {
  //     selected.previousElementSibling?.classList.add('selected');
  //     selected.previousElementSibling?.previousElementSibling?.classList.add('prevLeftSecond');
  //     selected.nextElementSibling?.classList.add('next');
  //     selected.nextElementSibling?.nextElementSibling?.classList.add('nextRightSecond');
  //   } else if (element === 'next') {
  //     selected.nextElementSibling?.classList.add('selected');
  //     selected.nextElementSibling?.nextElementSibling?.classList.add('nextRightSecond');
  //     selected.previousElementSibling?.classList.add('prev');
  //     selected.previousElementSibling?.previousElementSibling?.classList.add('prevLeftSecond');
  //   }
  // }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.moveToSelected('prev');
  //       break;
  //     case 'ArrowRight':
  //       this.moveToSelected('next');
  //       break;
  //     default:
  //       return;
  //   }
  //   event.preventDefault();
  // }

  // items = [
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg' }
  // ];

  // selectedIdx = 3; // Initially selected index

  // constructor(private elementRef: ElementRef) {}

  // ngOnInit(): void {
  //   this.updateClasses();
  // }

  // getClass(index: number): string {
  //   const diff = index - this.selectedIdx;
  //   if (diff === 0) return 'selected';
  //   if (diff === -1) return 'prev';
  //   if (diff === -2) return 'prevLeftSecond';
  //   if (diff === 1) return 'next';
  //   if (diff === 2) return 'nextRightSecond';
  //   return 'hide';
  // }

  // moveToSelected(element: string): void {
  //   if (element === 'prev' && this.selectedIdx > 0) {
  //     this.selectedIdx--;
  //   } else if (element === 'next' && this.selectedIdx < this.items.length - 1) {
  //     this.selectedIdx++;
  //   }
  //   this.updateClasses();
  // }

  // updateClasses(): void {
  //   const elements = this.elementRef.nativeElement.querySelectorAll('#carousel div');
  //   elements.forEach((element:any, index:any) => {
  //     const classes = this.getClass(index);
  //     element.className = classes;
  //   });
  // }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.moveToSelected('prev');
  //       break;
  //     case 'ArrowRight':
  //       this.moveToSelected('next');
  //       break;
  //     default:
  //       return;
  //   }
  //   event.preventDefault();
  // }




  // items = [
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg' }
  // ];

  // selectedIdx = 3; // Initially selected index

  // getClass(index: number): string {
  //   const diff = index - this.selectedIdx;
  //   if (diff === 0) return 'selected';
  //   if (diff === -1) return 'prev';
  //   if (diff === -2) return 'prevLeftSecond';
  //   if (diff === 1) return 'next';
  //   if (diff === 2) return 'nextRightSecond';
  //   return 'hide';
  // }

  // moveToSelected(element: string): void {
  //   if (element === 'prev' && this.selectedIdx > 0) {
  //     this.selectedIdx--;
  //   } else if (element === 'next' && this.selectedIdx < this.items.length - 1) {
  //     this.selectedIdx++;
  //   }
  // }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.moveToSelected('prev');
  //       break;
  //     case 'ArrowRight':
  //       this.moveToSelected('next');
  //       break;
  //     default:
  //       return;
  //   }
  //   event.preventDefault();
  // }

  // selectedIdx = 0; // Initially selected index

  // getClass(index: number): string {
  //   const diff = index - this.selectedIdx;
  //   if (diff === 0) return 'selected';
  //   if (diff === -1) return 'prev';
  //   if (diff === -2) return 'prevLeftSecond';
  //   if (diff === 1) return 'next';
  //   if (diff === 2) return 'nextRightSecond';
  //   return 'hide';
  // }

  // moveToSelected(element: string): void {
  //   if (element === 'prev' && this.selectedIdx > 0) {
  //     this.selectedIdx--;
  //   } else if (element === 'next' && this.selectedIdx < this.items.length - 1) {
  //     this.selectedIdx++;
  //   }
  // }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.moveToSelected('prev');
  //       break;
  //     case 'ArrowRight':
  //       this.moveToSelected('next');
  //       break;
  //     default:
  //       return;
  //   }
  //   event.preventDefault();
  // }


  // items = [
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg' },
  //   { imageUrl: 'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg' }
  // ];

  // selectedIdx = 3; // Initially selected index

  // getClass(index: number): string {
  //   const diff = index - this.selectedIdx;
  //   if (diff === 0) return 'selected';
  //   if (diff === -1) return 'prev';
  //   if (diff === -2) return 'prevLeftSecond';
  //   if (diff === 1) return 'next';
  //   if (diff === 2) return 'nextRightSecond';
  //   return 'hide';
  // }

  // moveToSelected(element: string): void {
  //   if (element === 'prev' && this.selectedIdx > 0) {
  //     this.selectedIdx--;
  //   } else if (element === 'next' && this.selectedIdx < this.items.length - 1) {
  //     this.selectedIdx++;
  //   }
  // }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent): void {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.moveToSelected('prev');
  //       break;
  //     case 'ArrowRight':
  //       this.moveToSelected('next');
  //       break;
  //     default:
  //       return;
  //   }
  //   event.preventDefault();
  // }


  items = [
    { imageUrl: 'https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg' },
    { imageUrl: 'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg' },
    { imageUrl: 'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg' },
    { imageUrl: 'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg' },
    { imageUrl: 'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg' },
    { imageUrl: 'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg' },
    { imageUrl: 'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg' }
  ];

  selectedIdx = 3; // Initially selected index

  getClass(index: number): string {
    const diff = index - this.selectedIdx;
    if (diff === 0) return 'selected';
    if (diff === -1) return 'prev';
    if (diff === -2) return 'prevLeftSecond';
    if (diff === 1) return 'next';
    if (diff === 2) return 'nextRightSecond';
    return 'hide';
  }

  moveToSelected(element: string): void {
    if (element === 'prev' && this.selectedIdx > 0) {
      this.selectedIdx--;
    } else if (element === 'next' && this.selectedIdx < this.items.length - 1) {
      this.selectedIdx++;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        if (this.selectedIdx > 0) {
          this.moveToSelected('prev');
        }
        break;
      case 'ArrowRight':
        if (this.selectedIdx < this.items.length - 1) {
          this.moveToSelected('next');
        }
        break;
      default:
        return;
    }
    event.preventDefault();
  }




  cards3 = [
    {
      id:'01',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/05.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'02',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/05.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'03',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'04',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'05',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/07.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },
    {
      id:'06',
      title: 'Aim is to Reach My Goal With Best Plan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/img/05.png',
      auther:'anubhandh',
      date:'25th October 2022'
    },

  ];
}
