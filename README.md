# xlr8
Is a lightweight framework written in pure Js to create SPA application or merge SPA features into existing ones.
## xlr8 Hello World
Create __index.html__ and __app.js__ 
put in your __index.html__
    
    <html>
    <script src='xlr8.js' async></script>
    <script src='app.js' async></script>
    <h1>Header</h1>
    
    <div id='app'>
    <div id='View'>
    
    <h1>Index Page</h1>
    <a href='/p1'>Page 1</a> <a href='/' >Index</a> <a href='/p2'>Page 2</a>
    
    </div>
    </div>
    
    <h1>Footer</h1>
    </html>
   
###### Notice
  __app__ and __View__ are importent for the framework the should contain the body excluding the none-changeing parts

put in your __app.js__


    pages={
        '/p1':function(){return Change_View('html for page 1','page 1','/p1');},
        '/p2':function(){return Change_View('html for page 2','Page 2','/p2');},
        '/':function(){return Change_View('html for index page','Index Page','/');}
    }
   


## What if the user disabeld JS?
it should work just fine (without being an SPA of course)

## How Does it Work?
First __\_refresh()__ is called to replace href with a hash sign, then an onClick element is added to destroy and build __View__ on demand.

## And That is about it!!
If you like this repo please Give me Your feedback, and I am working on some helping tools in the future.
###### Contact
[Facebook](https://www.facebook.com/mohamad.emad.7393)

