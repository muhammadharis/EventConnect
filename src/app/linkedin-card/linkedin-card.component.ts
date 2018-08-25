import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-card',
  templateUrl: './linkedin-card.component.html',
  styleUrls: ['./linkedin-card.component.css']
})
export class LinkedinCardComponent implements OnInit {
  lookup = {
    "id": "yrZCpj2Z12",
    "firstName": {
      "localized": {
        "en_US": "Bob"
      },
      "preferredLocale": {
        "country": "US",
        "language": "en"
      }
    },
    "lastName": {
      "localized": {
        "en_US": "Smith"
      },
      "preferredLocale": {
        "country": "US",
        "language": "en"
      }
    },
    "location": {
      "countryCode": "us",
      "postalCode": "94101",
      "standardizedLocationUrn": "urn:li:standardizedLocationKey:(us,94101)"
    },
    "positions": {
      "660879450": {
        "companyName": {
          "localized": {
            "en_US": "LinkedIn"
          },
          "preferredLocale": {
            "country": "US",
            "language": "en"
          }
        },
        "id": 660879450,
        "title": {
          "localized": {
            "en_US": "Staff Software Engineer"
          },
          "preferredLocale": {
            "country": "US",
            "language": "en"
          }
        }
      }
    },
    "headline": {
      "localized": {
        "en_US": "API Enthusiast at LinkedIn"
      },
      "preferredLocale": {
        "country": "US",
        "language": "en"
      }
    }
  };

  positions = [];
  constructor() { }

  ngOnInit() {
    var self = this;
    for(var i in self.lookup.positions){
      console.log(self.lookup.positions);
      this.positions.push(
        {
          "company" : self.lookup.positions[i].companyName.localized.en_US,
          "position" : self.lookup.positions[i].title.localized.en_US
    });
    console.log(this.positions);
  }

}
