import { Component, OnInit } from '@angular/core';
import { Product, Review, Carousel } from 'lick-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lightbox_headerText = "Quilts"
  lightbox_descriptionText = "Below are the quilt images we currently offer. Select your favorite and have it placed on a t-shirt or coffee cup."
  prices2_headingText = "Most Popular";
  prices2_descriptionText = "NedRa Bonds is an activist who happens to create beautiful quilts from mixed media. You can now purchase a t-shirt with images of NedRa's work.";
  prices2_actionText = "Buy Now";
  video1_headingText = "NedRa Bonds Interview";
  video1_descriptionText = "NedRa provides background and explanation of her quilt designs.";
  video1_videoURL = "https://www.youtube.com/embed/eaL5L_dNTjA";
  video1_imageURL = "assets/images/nedra-video-splash.jpg";
  features1_headingText = "About NedRa Bonds";
  features1_descriptionText = "NedRa is known for her Quindaro Quilt, detailing the history of the  Quindaro neighborhood and its role as part of the National Underground Railroad System of Historic Trails. In her work as a community activist and educator, Bonds advocates for legislation teaches workshops and attends the United Nations conferences."
  features1_featureHeading1 = "Community"
  features1_featureDescription1 = "Born and raised in the Quindaro neighborhood of Kansas City Kansas, and is a practicing artist and retired teacher.";
  features1_featureIcon1 = "icon-home"
  features1_featureHeading2 = "Awards";
  features1_featureDescription2 = "NedRa received the Arts Council of Metropolitan Kansas City's Inspiration Grant, which she used to create a quilt celebrating the UMKC Women Center's 40th anniversary.";
  features1_featureIcon2 = "icon-trophy";
  features1_featureHeading3 = "Art";
  features1_featureDescription3 = "NedRa's work Juneteenth is on display at the Nelson-Atkins Museum of Art in Kansas City Missouri.";
  features1_featureIcon3 = "icon-picture";
  faq1_headingText = "Frequently Asked Questions";
  faq1_descriptionText = "Below are the most frequently asked questions regarding the order process. If you have an additional problem, you can reach us via the contact page.";
  faq1_faqHeading1 = "What type of material is the t-shirt?";
  faq1_faqDescription1 = "All t-shirts are 100% cotton.";
  faq1_faqHeading2 = "I have a problem with my order, who do I contact?";
  faq1_faqDescription2 = "You may contact us via the contact page, login, select your order, then click resolution. Or you can call and speak to a live person at the number listed below.";
  faq1_faqHeading3 = "How long does it take to get my order?";
  faq1_faqDescription3 = "Orders are shipped the next day, depending on your location between 2-5 days.";
  reviews2_headingText = "What people are saying?";
  reviews2_descriptionText = "Here is what customers are saying about their buying experience?";

  images = [
    {src : "assets/images/NedRa-Bonds-Quilt1.jpg", caption: "One", thumb: "assets/images/NedRa-Bonds-Quilt1-sm.jpg"},
    {src : "assets/images/NedRa-Bonds-Quilt2.jpg", caption: "Two", thumb: "assets/images/NedRa-Bonds-Quilt2-sm.jpg"},
    {src : "assets/images/NedRa-Bonds-Quilt3.jpg", caption: "Three", thumb: "assets/images/NedRa-Bonds-Quilt3-sm.jpg"},
    {src : "assets/images/NedRa-Bonds-Quilt4.jpg", caption: "Four", thumb: "assets/images/NedRa-Bonds-Quilt4-sm.jpg"},
  ];
  carousel: Carousel[] = [
    {
      "id" :  Math.floor(Math.random() * 1000).toString(),
      "name" : "Merchandise",
      "step" : 1,
      "textFont" : "Verdana",
      "headingTextColor" : "#000000",
      "textColor" : "#000000",
      "textBackgroundColor" : null,
      "textPosition" : "Left Bottom",
      "description" : "Your choice of merchandise. Select image and have us print on select merchandise. ",
      "url" : "assets/images/t-shirt1.jpeg",
      "link" : "/",
      "linkText" : "Buy Now",
      "lastUpdatedBy" : "System",
      "lastUpdated" : new Date(),
      "draft" : false,
      "deleted" : false,
      "keywords" : "NedRa Bonds",
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
      "name" : "Sizes",
      "step" : 2,
      "textFont" : "Verdana",
      "headingTextColor" : "#000000",
      "textColor" : "#000000",
      "textBackgroundColor" : null,
      "textPosition" : "Left Bottom",
      "description" : "Your choice of sizes.",
      "url" : "assets/images/t-shirt5.jpeg",
      "link" : "/",
      "linkText" : "Buy Now",
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
      "name" : "Quilts",
      "step" : 3,
      "textFont" : "Verdana",
      "headingTextColor" : "#000000",
      "textColor" : "#000000",
      "textBackgroundColor" : null,
      "textPosition" : "Left Bottom",
      "description" : "Select from a variety of quilt images from Kansas City quilt artist NedRa Bonds on your choice of merchandise.",
      "url" : "assets/images/t-shirt3.jpeg",
      "link" : "/",
      "linkText" : "Buy Now",
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
  prices2_products: Product[] = [
    {
      "name": "Lady's T",
      "id": Math.floor(Math.random() * 1000).toString(),
      "catalog_id": Math.floor(Math.random() * 1000).toString(),
      "store_id": Math.floor(Math.random() * 1000).toString(),
      "discontinued": false,
      "features": ["Medium", "Cotton"],
      "url": "assets/images/NedRa-Bonds-Quilt1.jpeg",
      "deliverable_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.",
      "longDescription": "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. ",
      "manufacturer": "System",
      "author": "NedRa Bonds",
      "category": "Best Value",
      "leadTime": Math.floor(Math.random() * 1000),
      "onSale": false,
      "salePrice": Math.floor(Math.random() * 1000),
      "orderQuantity": 1,
      "orderQuantityMeasure": "Order",
      "price": Math.floor(Math.random() * 1000),
      "hourlyRate": Math.floor(Math.random() * 1000),
      "reOrderLevel": Math.floor(Math.random() * 1000),
      "sku": Math.floor(Math.random() * 1000).toString(),
      "subscription": false,
      "weight": Math.floor(Math.random() * 1000),
      "height": Math.floor(Math.random() * 1000),
      "width": Math.floor(Math.random() * 1000),
      "length": Math.floor(Math.random() * 1000),
      "unitsOnOrder": Math.floor(Math.random() * 1000),
      "unitsInStock": Math.floor(Math.random() * 1000),
      "lastUpdatedBy": "System",
      "lastUpdated": new Date(),
      "draft": false,
      "deleted": false,
      "keywords": "service",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": true,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "System",
      "timeStamp": new Date(),
      "shared": true,
      "userImage": "https://via.placeholder.com/64x64.png",
      "publishedAt": new Date()
    },
    {
      "name": "Lady's Dress",
      "id": Math.floor(Math.random() * 1000).toString(),
      "catalog_id": Math.floor(Math.random() * 1000).toString(),
      "store_id": Math.floor(Math.random() * 1000).toString(),
      "discontinued": false,
      "features": ["Size 6", "Cotton"],
      "url": "assets/images/NedRa-Bonds-Quilt2.jpeg",
      "deliverable_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.",
      "longDescription": "Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. ",
      "manufacturer": "System",
      "author": "NedRa Bonds",
      "category": "Referral",
      "leadTime": Math.floor(Math.random() * 1000),
      "onSale": false,
      "salePrice": Math.floor(Math.random() * 1000),
      "orderQuantity": 1,
      "orderQuantityMeasure": "Order",
      "price": Math.floor(Math.random() * 1000),
      "hourlyRate": Math.floor(Math.random() * 1000),
      "reOrderLevel": Math.floor(Math.random() * 1000),
      "sku": Math.floor(Math.random() * 1000).toString(),
      "subscription": false,
      "weight": Math.floor(Math.random() * 1000),
      "height": Math.floor(Math.random() * 1000),
      "width": Math.floor(Math.random() * 1000),
      "length": Math.floor(Math.random() * 1000),
      "unitsOnOrder": Math.floor(Math.random() * 1000),
      "unitsInStock": Math.floor(Math.random() * 1000),
      "lastUpdatedBy": "System",
      "lastUpdated": new Date(),
      "draft": false,
      "deleted": false,
      "keywords": "service",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": true,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "System",
      "timeStamp": new Date(),
      "shared": true,
      "userImage": "https://via.placeholder.com/64x64.png",
      "publishedAt": new Date()
    },
    {
      "name": "Coffee Cup",
      "id": Math.floor(Math.random() * 1000).toString(),
      "catalog_id": Math.floor(Math.random() * 1000).toString(),
      "store_id": Math.floor(Math.random() * 1000).toString(),
      "discontinued": false,
      "features": ["Microwavable", "Large"],
      "url": "assets/images/NedRa-Bonds-Quilt4.jpeg",
      "deliverable_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "longDescription": "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. ",
      "manufacturer": "System",
      "author": "NedRa Bonds",
      "category": "Professional Service",
      "leadTime": Math.floor(Math.random() * 1000),
      "onSale": false,
      "salePrice": Math.floor(Math.random() * 1000),
      "orderQuantity": 1,
      "orderQuantityMeasure": "Order",
      "price": Math.floor(Math.random() * 1000),
      "hourlyRate": Math.floor(Math.random() * 1000),
      "reOrderLevel": Math.floor(Math.random() * 1000),
      "sku": Math.floor(Math.random() * 1000).toString(),
      "subscription": false,
      "weight": Math.floor(Math.random() * 1000),
      "height": Math.floor(Math.random() * 1000),
      "width": Math.floor(Math.random() * 1000),
      "length": Math.floor(Math.random() * 1000),
      "unitsOnOrder": Math.floor(Math.random() * 1000),
      "unitsInStock": Math.floor(Math.random() * 1000),
      "lastUpdatedBy": "System",
      "lastUpdated": new Date(),
      "draft": false,
      "deleted": false,
      "keywords": "service",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": true,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "System",
      "timeStamp": new Date(),
      "shared": true,
      "userImage": "https://via.placeholder.com/64x64.png",
      "publishedAt": new Date()
    },
  ];

  reviews: Review[] = [
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, true],
      "description": "We liked the quilts so much we purchased an original, now they're available on merchandise, GREAT!",
      "userName": "System",
      "profession": "Architect",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "assets/images/default-user.png",
      "shared": true,
      "name": "Tyrone Showers",
      "userImage": "assets/images/default-user.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "Wipro" }
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, true],
      "description": "Just learned about NedRa Bonds, glad I am able to support her work. Ordering was easy.",
      "userName": "Adrian Davis",
      "profession": "Restaurant Executive",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "assets/images/default-user.png",
      "shared": true,
      "name": "Adrian Davis",
      "userImage": "assets/images/default-user.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "Tim Hortons" }
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, true],
      "description": "I am glad to support such a great artist with a purchase. Keep up the good work NedRa. ",
      "userName": "Vikki Owens",
      "profession": "Business Owner",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "assets/images/default-user.png",
      "shared": true,
      "name": "Vikki Owens",
      "userImage": "assets/images/default-user.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "Taliferro IT Consulting" }
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  onPrices(item) : void {

  }

}
