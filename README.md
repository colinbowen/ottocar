# Ottocar Fullstack Challenge

## Getting Started

The web app is available through your browser or locally. To get the local version up you will need installed:

* Docker
* NodeJS
* Git
* Web Browser


## Hosted Version

Backend available via

[Heroku](https://shielded-basin-67477.herokuapp.com/)


Frontend available via

[Zeit Now](https://app.colinbowen.now.sh/index.html)


## Local Version

Download or clone git repo

Build server from folder root using

`docker-compose up --build`

Use postman to view api

`localhost:5000/api/v1/cars`

Run frontend with 

`npm start`

# API Requests Available

*Get Cars*

Send GET Request to

`https://shielded-basin-67477.herokuapp.com/api/v1/cars`

*Get Car By ID*

Send GET Request to

`https://shielded-basin-67477.herokuapp.com/api/v1/cars/<id>`

*Add Car to DB*

Send POST Request to 

`https://shielded-basin-67477.herokuapp.com/api/v1/cars`

*Delete Car By ID*

Send DELETE Request to 

`https://shielded-basin-67477.herokuapp.com/api/v1/cars/<id>`

*Update Car By ID*

Send PUT Request to 

`https://shielded-basin-67477.herokuapp.com/api/v1/cars/<id>`

*Count Cars in DB*

Send GET Request to

`https://shielded-basin-67477.herokuapp.com/api/v1/stats/count`


*Count Active / Inactive Cars*

Send GET Request to

`https://shielded-basin-67477.herokuapp.com/api/v1/stats/active`

*Get Stats*

Send GET Request to

`https://shielded-basin-67477.herokuapp.com/api/v1/stats/requests`



# Flask Monitoring Dashboard

https://shielded-basin-67477.herokuapp.com/stats

username: admin
password: admin

The Flask Monitoring Dashboard is designed to easily monitor your Flask application.

* Monitor the performance and utilization
* Profile requests and endpoints




# Built with
* Python 
* Flask
* ReactJS
* MongoDB
* Docker
* Heroku
* Zeit Now


# License
This project is licensed under the MIT License - see the LICENSE.md file for details

# TODO:
- Testing
- Frontend UX