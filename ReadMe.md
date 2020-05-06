<h2>Express Route Manager</h2>
<p>
Writing and managing express routes can be tedious most times.
</p>
<p>Express Route Manager helps you organize your routes and middlewares in a JSON file, helping you group routes out of the box. Express Route Manager is instinctively read.</p>

<h3>Usage</h3>
<h4>Initialization</h4>
<code>const express  = require('express');</code><br>
<code>const expressRouteManager = require('expressroutemanager')(express,option);
</code>
<br/>
<h4>Options (object)</h4>
<table>
<tr>
	<td>option</td>
	<td>type</td>
	<td>description</td>
</tr>
<tr>
	<td>option.routeFile</td>
	<td>STRING (compulsory)</td>
	<td>Path to route file</td>
</tr>
<tr>
	<td>option.controllerDirectory</td>
	<td>STRING </td>
	<td>Path to controllers. Defaults <code>./</code></td>
</tr>
<tr>
	<td>option.middlewareDirectory</td>
	<td>STRING</td>
	<td>Path to controllers. Defaults <code>./</code></td>
</tr>
</table>

<br>

<h4>
	Route File Configuration
</h4>
<h5>Single Level</h5>
<code>
module.exports = {
<br>
 url: {  <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;middlewares: ['middleware1', 'middleware2']<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;      controller: {  <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    path: 'controller',  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  method: 'method'  <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },  <br> 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;verb: 'verb'  <br>
  }

</code>
<p>The above configuration would produce a url as thus:<code>
	/url
</code></p>
<h5>Multi-Level</h5>
<p>A multilevel configuration can be achieved as thus:</p>
<code>
module.exports = {
<br>
"url1": {  
		<br>
           &nbsp;&nbsp; middlewares: ['middleware1', 'middleware2'],  
            <br>
  &nbsp;&nbsp;"url2": {  <br>
&nbsp;&nbsp;"url3:params": {  <br>
          &nbsp;&nbsp;&nbsp;&nbsp;'url4': {  <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      controller: {  <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    path: 'auth',  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  method: 'login'  <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; },  <br> 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspverb: 'post'  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;}
<br>}
</code>
<p>The above configuration would produce a url as thus:<code>
	/url/url2/url3/url4
</code></p>
<p>The <b>middleware</b> property can be applied at any level and it takes effect from that level downwards </p>

<br/>
<h4>Options</h4>
<table>
<tr>
	<td>option</td>
	<td>type</td>
	<td>description</td>
</tr>
<tr>
	<td>url</td>
	<td>STRING or Property</td>
	<td>Url level. Takes all ExpressJs url format e.g <code>url/:params</code></td>
</tr>
<tr>
	<td>middlewares</td>
	<td>ARRAY </td>
	<td>Array of path to middlewares.  Note that this path is relative to the path set in <b>"middlewareDirectory"</b> in the initialization stage.</td>
</tr>
<tr>
	<td>controller</td>
	<td>OBJECT/FUNCTION</td>
	<td>Object configuration of the controller</td>
</tr>
<tr>
	<td>controller.path</td>
	<td>STRING</td>
	<td>Path to the controller file. Note that this path is relative to the path set in the initialization stage.</td>
</tr>
<tr>
	<td>controller.method</td>
	<td>STRING</td>
	<td>Array of path to middlewares.  Note that this path is relative to the path set in <b>"controllerDirectory"</b> in the initialization stage.</td>
</tr>
<tr>
	<td>verb</td>
	<td>STRING</td>
	<td>Verb of the path. Takes all ExpressJs availble verbs. E.g "Post", "Get", "Put".etc. <b>Defaults to "Get"</b></td>
</tr>
</table>


