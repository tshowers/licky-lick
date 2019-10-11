import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Carousel } from 'lick-data';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'licky-lick-marketing-carousel',
  templateUrl: './lick-marketing-carousel.component.html',
  styles: []
})
export class LickMarketingCarouselComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel;
  @Input() carousel: Carousel[] = [
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "name" : "Follow These Smartphone Habits of Successful Entrepreneurs",
      "step" : 1,
      "textFont" : "Verdana",
      "headingTextColor" : "#ffffff",
      "textColor" : "#ffffff",
      "textBackgroundColor" : null,
      "textPosition" : "Center",
      "description" : "Sed ocurreret iracundia expetendis ex. Te prima voluptaria sea, ius reque sonet ei.",
      "url" : "https://via.placeholder.com/1024x768.png",
      "link" : "/",
      "linkText" : "Learn More",
      "lastUpdatedBy" : "System",
      "lastUpdated" : new Date(),
      "draft" : false,
      "deleted" : false,
      "keywords" : "carousel",
      "user_id" : Math.floor(Math.random() * 1000).toString(),
      "blog_id" : null,
      "store_id" : null,
      "views" : Math.floor(Math.random() * 1000),
      "lastViewed" : new Date(),
      "userName" : "System",
      "timeStamp" : new Date(),
      "shared" : true,
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "name" : "3 Founders With Booming Businesses Share Stories About Their Difficult Early",
      "step" : 2,
      "textFont" : "Verdana",
      "headingTextColor" : "#ffffff",
      "textColor" : "#ffffff",
      "textBackgroundColor" : null,
      "textPosition" : "Center",
      "description" : "Lorem ipsum dolor sit amet, no harum tibique has, sed no ubique pertinacia consetetur, mea elitr tritani ponderum id.",
      "url" : "https://via.placeholder.com/1024x768.png",
      "link" : "/",
      "linkText" : "Learn More",
      "lastUpdatedBy" : "System",
      "lastUpdated" : new Date(),
      "draft" : false,
      "deleted" : false,
      "keywords" : "carousel",
      "user_id" : Math.floor(Math.random() * 1000).toString(),
      "blog_id" : null,
      "store_id" : null,
      "views" : Math.floor(Math.random() * 1000),
      "lastViewed" : new Date(),
      "userName" : "System",
      "timeStamp" : new Date(),
      "shared" : true,
    },
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "name" : "What Days and Hours are PH Online Shoppers Most Likely to Buy?",
      "step" : 3,
      "textFont" : "Verdana",
      "headingTextColor" : "#ffffff",
      "textColor" : "#ffffff",
      "textBackgroundColor" : null,
      "textPosition" : "Center",
      "description" : "Tritani pertinax interesset ad sea, ne sit antiopam mediocritatem.",
      "url" : "https://via.placeholder.com/1024x768.png",
      "link" : "/",
      "linkText" : "Learn More",
      "lastUpdatedBy" : "System",
      "lastUpdated" : new Date(),
      "draft" : false,
      "deleted" : false,
      "keywords" : "carousel",
      "user_id" : Math.floor(Math.random() * 1000).toString(),
      "blog_id" : null,
      "store_id" : null,
      "views" : Math.floor(Math.random() * 1000),
      "lastViewed" : new Date(),
      "userName" : "System",
      "timeStamp" : new Date(),
      "shared" : true,
    }


  ];
  @Input() animateOut = 'fadeOut';
  @Input() animateIn = 'fadeIn';
  @Input() dots = true;
  @Input() loop = true;
  @Input() playSpeed = 1500;
  @Input() hoverPause = true;
  @Input() navigation = true;
  @Input() nav = false;
  @Input() autoPlay = true;
  @Input() numberOfItemsToDisplay = 1;

  carouselOptions: any;
  @Input() defaultFont = 'Verdana';
  @Input() defaultColor = '#fff';
  @Input() defaultMaxWidth = '300px';
  @Input() defaultFontWeight = 'lighter';
  @Input() defaultPadding = '10px';
  @Input() defaultBorderRadius = '5px';

  @Input() rgba1_red = 58;
  @Input() rgba1_green = 152;
  @Input() rgba1_blue = 220;
  @Input() rgba2_red = 17;
  @Input() rgba2_green = 45;
  @Input() rgba2_blue = 58;
  @Input() isRadialBackground = false;

  @Output() pageEvent = new EventEmitter();

  images = [];


  constructor() { }

  ngOnInit() {
    this.setCarouselOptions();
    this.setCarouselItems();
  }

  fun() {
    this.owlElement.next([200])
  }

  private setCarouselItems() : void {
    this.carousel.forEach((c) => {
      this.images.push(c.url)
    })
  }

  private setCarouselOptions() : void {
    this.carouselOptions = {
      animateOut: this.animateOut,
      animateIn: this.animateIn,
      dots: this.dots,
      loop: this.loop,
      autoplaySpeed: this.playSpeed,
      autoplayHoverPause: this.hoverPause,
      navigation: this.navigation,
      nav: this.nav,
      autoplay: this.autoPlay,
      items: this.numberOfItemsToDisplay
    };
  }

  onPageEvent(link) : void {
    this.pageEvent.emit(link);
  }


}
