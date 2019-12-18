import { Component, OnInit, OnDestroy, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';
import { Order, Product, Invoice, ShoppingCart, ProductBundle } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { Subscription, Observable } from 'rxjs';
import { DataMediationService } from '../../../shared/services/data-mediation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  totalRecords : number = 0;

  FAQheadingText = "e-Commerce Dashboard";
  descriptionText = "Welcome to 16AHEAD e-Commerce. This page, over time, will turn into your sales dashboard. You can also think of this as your start page. Once you add products and receive orders, this page will show valuable information you should be aware of regarding your customers and products.";
  faqHeading1 = "Getting Started";
  faqDescription1 = "The application layout should be pretty familiar to you with some slight modifications. At the top is the application menu where you can always navigate back to the home page by clicking the 16AHEAD logo. The left hamburger icon reveals a left side information panel, while the right hamburger icon reveals page help.";
  faqHeading2 = "How to Setup";
  faqDescription2 = "First, you must create a store by clicking the new button above. Once you have a store created, you need to organize your products into catalogs. After the store is created, think about how you want to organize your products.";
  faqHeading3 = "How to Use";
  faqDescription3 = "Create catalogs to store products (catalogs group similar products). Next, add individual products and select the appropriate catalog. Finally, you can create product bundles (products sold together).";
  faqHeading4 = "The Secret Sause";
  faqDescription4 = "The magic happens in monitoring the products and customers in various systems such as your calendar, CRM system, or the news. 16AHEAD will offer suggestions on products and customers you should review and why.";

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: true },
      { name: "stores", link: "/application/stores", active: false },
      { name: "new", link: "/application/stores/new", active: false },
    ]
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'products'], {queryParams: { searchArgument: value}})
  }



}
