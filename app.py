#!/usr/bin/python
#Install bottle: pip install bottle
#run app: python app.py

import bottle

@bottle.route('/')
def index():
    return "<html><script src='xlr8.js' async></script><script src='app.js' async></script><h1>Header</h1><div id='app'><div id='View'><h1>Index Page</h1><a href='/p1' id='p1'>Page 1</a> <a href='/' id='index'>Index</a> <a href='/p2' id='p2'>Page 2</a></div></div><h1>Footer</h1></html>"
    
@bottle.route('/p1')
def p1():
    return "<html><script src='xlr8.js' async></script><script src='app.js' async></script><h1>Header</h1><div id='app'><div id='View'><h1>Page 2</h1><a href='/p1' id='p1'>Page 1</a> <a href='/' id='index'>Index</a> <a href='/p2' id='p2'>Page 2</a></div></div><h1>Footer</h1></html>"
    
@bottle.route('/p2')
def p2():
    return "<html><script src='xlr8.js' async></script><script src='app.js' async></script><h1>Header</h1><div id='app'><div id='View'><h1>Page 2</h1><a href='/p1' id='p1'>Page 1</a> <a href='/' id='index'>Index</a> <a href='/p2' id='p2'>Page 2</a></div></div><h1>Footer</h1></html>"
    
    
@bottle.route('/ajax/p1')
def ap1():
    return "<h1>Page 3</h1><a href='/p1' id='p1'>Page 1</a> <a href='/' id='index'>Index</a> <a href='/p2' id='p2'>Page 2</a>"
    
@bottle.route('/ajax/p2')
def ap2():
    return "<h1>Page 2</h1><a href='/p1' id='p1'>Page 1</a> <a href='/' id='index'>Index</a> <a href='/p2' id='p2'>Page 2</a>"
    
@bottle.route('/ajax/index')
def aindex():
    return "<h1>Index Page</h1><a href='/p1' id='p1'>Page 1</a> <a href='/' id='index'>Index</a> <a href='/p2' id='p2'>Page 2</a>"
    
@bottle.route('/<file>')
def stat(file):
    return bottle.static_file(filename=file,root='.')
bottle.run()
