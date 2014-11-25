nodejsDemo - Express and Bootstrap
==========

I decided to pick node.js as a new technology to explore. Node.js is a recently new technology which enables you to create fully responsive webapps that are viewable in all sorts of devices. Previous to node.js all web technologies consisted of a client side code (html,javascript) and some sort of server side code (asp,jsp,php.. ect) this requires developers to have a different set of code for client and a different set for backend. 
Any object shared had to be serialized and sent back and foward between the client and the server. node.js changes this designe. node.js is a server application which executes and functions as a runtime code processor and sever too. with node.js you can code your own web server logic and handle requests in a different manner.Also making the client side code be responsive for all devices is solved by the implementaion of different "frameworks" which you can choose to start your webapp/website with. I encorege you to explore more because the applications are limitless.  For this example I choosed to follow two different tutorials and then mixthem up in my own example. I'm using Express framework to generate the website structure and by this I mean the views and there controllers (routers), for the look and feel this tutorial uses BootStrap CSS framework.

The first tutorial : http://techprd.com/how-to-develop-a-responsive-node-js-express-website-using-bootstrap/
this tutorial guied me into making a basic informative website with node.js using the express framework. After I had this tutorial up and running. I added a new view and called it Accounts. in this view I added the datagrid I managed to add using this tutorial : http://www.dhtmlx.com/blog/using-dhtmlxgrid-with-node-js/ it was very impressive that I managed to add a fully functional data grid with inser/update and delete options in a very short amount of time. 

****The only pre-requisite that's not included in those two tutorial is that you will need a mysql DB to run this example. 

You will have to change your settings in the app.js 
<img src="https://github.com/Attachoi/nodejsDemo/blob/master/adminApp/mySQL.png" >

You project should look like this : 
<img src="https://github.com/Attachoi/nodejsDemo/blob/master/adminApp/projExpl.png" >



This is what my site looks like after I finishing : 

<img src="https://github.com/Attachoi/nodejsDemo/blob/master/adminApp/Main.png" >

<br/>

This is the view I added with the Grid : 

<img src="https://github.com/Attachoi/nodejsDemo/blob/master/adminApp/Accounts.png" >



