import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent  {
	private jumboInfo:string;	
	private jumboHeader:string;
	private jumboBtn:string;
	private jumboBtnUrl:string;

	constructor(){
	this.jumboInfo ='This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.';
	this.jumboHeader = 'Hello, Rotational 2019!';
	this.jumboBtn = 'Learn more';
	this.jumboBtnUrl = "about";
	}

 }
