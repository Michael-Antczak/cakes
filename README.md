# CAKELOVE

The project description can be found here:   
https://github.com/Michael-Antczak/cakes/blob/master/client/README.md 

# My implementation

1. React app sitting on top of Node.js server. 
1. All traffic goes to the React app, so it also handles missing pages.
1. Mobile first approach, so for wider screens CSS would have to adjusted with media queries. 
1. Live app can be viewed here: http://cakelove.eu-west-1.elasticbeanstalk.com/ 
1. Single repo on GitHub. 
1. I took the liberty of replacing the provided backend with Firebase Realtime database. In my opinion more 
suited in this case. The app listens for changes in the DB. Every time there is an update, the new data automatically 
updates the app state, which in turn rerenders the list of cakes on the main page. The API could be easily 
implemented with **axios**.
1. Build workflow: 
   run ```yarn build``` inside the **client** folder, then from the **root** folder commit the changes.
1. Deployment: An app is delivered through AWS CodePipeline on every commit to the master branch in GitHub repo. 
CodePipeline is connected to the Node.js server managed by AWS Elastic Beanstalk. Server is in an Auto-Scaling group with one server.
If the server is killed, it is automagically restarted. 
1. I have added an additional search cake functionality. Just type a few letters from the existing cake to see the 
list rerender. 
1. This app could be easily extended into a mobile app with React Native. 

## Acceptance Criteria

#### S1 

- [x] A simple list showing the image and name of the cake and nothing else   
**Simply go to the main page**

#### S2

- [x] I should be able add a cake from the list of all cakes view  
**Use plus sign in the header on the right hand side**
- [x] I should be taken to a view where I am able to specify the name a comment and a yum factor between 1 and 5.  
**See above. Also, the user can add a link to the image, which will be displayed if the link is valid**
- [x] I should be returned back to the list of cakes after submitting.  
**Basic form validation in play with error messages displayed to the user. Once data is in the form and ```Add cake``` 
button is clicked, data is sent to Firebase, the user is taken back to the main page that now also displays the newly 
added cake**

#### S3

- [x] I can select/click or tap any cake in the list and be taken to a view where I can see the comment/review made.  
**Just click on any cake in the list view**
- [x] I should be able to close or navigate back to the list of cakes once I’ve read the cake details.  
**Use the main logo to go back to the main page**
