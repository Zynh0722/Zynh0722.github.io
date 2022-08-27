---
title: 'Atelier Backend'
---

After being exposed to the frontent of this website, I got to experience the... *tragedy* that was the backend api. It was horrendously slow,
would randomly error out, and overall wasn't suitable for production use.

So what followed was an invitation to fix the aforementioned *awful* backend. This was a reasonable system design problem. What me and my
team landed on was a microservice architecture, breaking the backend in 3 core components. The Q&A api, the products API, and the reviews API. My responsibility was the Products API. 

Step one was getting the data into a database. I went with postgres due to it both being an industry standard 
as well as my preferred solution for using a Relational Database. The primary reason I went with a RDBMS as opposed to a NoSQL solution like Mongo was
the fact that the data was already conveniently stored in CSV files with id based key relationships. I also had to do some mild data cleanup as there
were duplicate keys and invalid CSV data in my original dataset.

Step two was creating the Database queries. I wanted to stray away from using an ORM like Sequalize so that i could familiarize myself with a 
language agnostic solution to interacting with SQL databases. As such I had to write my JSON aggregate functions by hand. If you want to see
the resulting SQL queries you can look <a href="https://github.com/Zynh0722/atelier-products/blob/main/server/db/queries.js">here</a>. And for a view
of the form of the API you can find the <a href="https://github.com/Zynh0722/atelier-products">repository here</a>. This not only shows you how to 
create an instance of this api, but also contains the API documentation.

Lastly was the problem of deployment. I started by creating a single AWS EC2 image containing a fully installed and ready to start version of the
products microservice. I also set up a seperate EC2 machine running postgres. I wanted to keep the DB image seperate early in prep for 
running multiple instances of the products microservice. Lastly I setup an nginx server as middle man to handle requests from the internet, and
direct them to each individual instance of the products microservice. This setup works great and was able to handle thousands of requests per
second whilst remaining entirely on t.2micro AWS machines. If I were take another crack at the deployment architecture, I would probably have
dockerized the microservice and handled it via kubernetes.

