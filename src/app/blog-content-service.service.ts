import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogContentServiceService {

  constructor(private http: HttpClient) { }
  private url = 'http://15.206.253.239:3100/addshark';
  saveData(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url+'/addshark', data, { headers })
  }

  getData() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url+'/getshark')
  }

//   blogContentData =  [{
//     "HeaderTitle" : "How to Fix navbar on Top",
//     "paragraph" : [{
//       "contentType"  : "Article",
//       "content" : "To fix a navigation bar (navbar) to the top of a webpage, you can use CSS to set the position property of the navbar to 'fixed'. This will ensure that the navbar stays in the same position on the screen, even when the user scrolls down the page. Here is an example of how to do this:"
//     },{
//       "contentType"  : "code",
//       "content" : "nav{position:fixed;top:0 ;left: 0;width: 100%;}"
//     },
//     {
//       "contentType" : "Article", 
//       "content" : "This will fix the navbar to the top left corner of the page and make it take up the full width of the screen. You can adjust the values of top, left, and width to suit your needs.You can also add a z-index to make sure that the navigation bar is on top of other elements on the page."
//     },{
//       "contentType": "code",
//       "content": "nav{position: fixed;top: 0;left: 0;width: 100%;z-index: 1"
//    }
//    ,{
//     "contentType"  : "code",
//     "content" : "nav{position:fixed;top:0 ;left: 0;width: 100%;}"
//   },{
//     "contentType"  : "Article",
//     "content" : "To fix a navigation bar (navbar) to the top of a webpage, you can use CSS to set the position property of the navbar to 'fixed'. This will ensure that the navbar stays in the same position on the screen, even when the user scrolls down the page. Here is an example of how to do this:"
//   },
//   {
//     "contentType" : "Article", 
//     "content" : "This will fix the navbar to the top left corner of the page and make it take up the full width of the screen. You can adjust the values of top, left, and width to suit your needs.You can also add a z-index to make sure that the navigation bar is on top of other elements on the page."
//   },{
//     "contentType": "code",
//     "content": "nav{position: fixed;top: 0;left: 0;width: 100%;z-index: 1"
//  }
//   ]

//   },{
//     "HeaderTitle" : "How to Fix navbar on Top 2",
//     "paragraph" : [{
//       "contentType"  : "Article",
//       "content" : "To fix a navigation bar (navbar) to the top of a webpage, you can use CSS to set the position property of the navbar to 'fixed'. This will ensure that the navbar stays in the same position on the screen, even when the user scrolls down the page. Here is an example of how to do this:"
//     },{
//       "contentType"  : "code",
//       "content" : "nav{position:fixed;top:0 ;left: 0;width: 100%;}"
//     },
//     {
//       "contentType" : "Article", 
//       "content" : "This will fix the navbar to the top left corner of the page and make it take up the full width of the screen. You can adjust the values of top, left, and width to suit your needs.You can also add a z-index to make sure that the navigation bar is on top of other elements on the page."
//     },{
//       "contentType": "code",
//       "content": "nav{position: fixed;top: 0;left: 0;width: 100%;z-index: 1"
//    }
//    ,{
//     "contentType"  : "code",
//     "content" : "nav{position:fixed;top:0 ;left: 0;width: 100%;}"
//   },{
//     "contentType"  : "Article",
//     "content" : "To fix a navigation bar (navbar) to the top of a webpage, you can use CSS to set the position property of the navbar to 'fixed'. This will ensure that the navbar stays in the same position on the screen, even when the user scrolls down the page. Here is an example of how to do this:"
//   },
//   {
//     "contentType" : "Article", 
//     "content" : "This will fix the navbar to the top left corner of the page and make it take up the full width of the screen. You can adjust the values of top, left, and width to suit your needs.You can also add a z-index to make sure that the navigation bar is on top of other elements on the page."
//   },{
//     "contentType": "code",
//     "content": "nav{position: fixed;top: 0;left: 0;width: 100%;z-index: 1"
//  }
//   ]

//   },{
//     "HeaderTitle" : "How to Fix navbar on Top 3",
//     "paragraph" : [{
//       "contentType"  : "Article",
//       "content" : "To fix a navigation bar (navbar) to the top of a webpage, you can use CSS to set the position property of the navbar to 'fixed'. This will ensure that the navbar stays in the same position on the screen, even when the user scrolls down the page. Here is an example of how to do this:"
//     },{
//       "contentType"  : "code",
//       "content" : "nav{position:fixed;top:0 ;left: 0;width: 100%;}"
//     },
//     {
//       "contentType" : "Article", 
//       "content" : "This will fix the navbar to the top left corner of the page and make it take up the full width of the screen. You can adjust the values of top, left, and width to suit your needs.You can also add a z-index to make sure that the navigation bar is on top of other elements on the page."
//     },{
//       "contentType": "code",
//       "content": "nav{position: fixed;top: 0;left: 0;width: 100%;z-index: 1"
//    }
//    ,{
//     "contentType"  : "code",
//     "content" : "nav{position:fixed;top:0 ;left: 0;width: 100%;}"
//   },{
//     "contentType"  : "Article",
//     "content" : "To fix a navigation bar (navbar) to the top of a webpage, you can use CSS to set the position property of the navbar to 'fixed'. This will ensure that the navbar stays in the same position on the screen, even when the user scrolls down the page. Here is an example of how to do this:"
//   },
//   {
//     "contentType" : "Article", 
//     "content" : "This will fix the navbar to the top left corner of the page and make it take up the full width of the screen. You can adjust the values of top, left, and width to suit your needs.You can also add a z-index to make sure that the navigation bar is on top of other elements on the page."
//   },{
//     "contentType": "code",
//     "content": "nav{position: fixed;top: 0;left: 0;width: 100%;z-index: 1"
//  }
//   ]

//   }]
}

