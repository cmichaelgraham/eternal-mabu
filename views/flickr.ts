import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Model} from 'views/model';

@inject(HttpClient,Model)
export class Flickr{
  model;
  heading = 'Flickr';
  images = [];
  url;
  http:HttpClient;
  constructor(http:HttpClient,model){
    this.http = http;
    this.model = model;
    this.url='http://api.flickr.com/services/feeds/photos_public.gne?tags='+this.model.search+'&tagmode=any&format=json';
  }

  activate(){
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
