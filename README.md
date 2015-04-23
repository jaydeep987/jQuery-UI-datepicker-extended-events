# jQuery-UI-datepicker-extended-events
Some events extended for more convenient use

jQuery UI datepicker comes with many functionalities. But here is something which seems missing in plugin. 

We might need some events in which we want to do something. Like here, these events either missing or inconvenient in the plugin:

<ul>
  <li> beforeShow  (Before datepciker render)
  <li> afterShow   (After datepicker rendered)
  <li> beforeChangeMonthYear (before changing month/year values in month/year select box)
  <li> beforeAdjustDate (before adjust date, i.e. on click of < or > buttons)
</ul>

Use this code and you will get those events to be fired on particular point. 

Usage is simple:

For e.g.
<code>
$("#calendarDiv").datepicker(
{
  beforeShow: function(input, inst)
	{
	  //do something
	},
	afterShow: function(date, inst, td)
	{
		//do something
	},
	beforeChangeMonthYear: function(inst, select)
	{
		//do something
	},
	beforeAdjustDate: function(inst, offset, period)
	{
		//do something
	}
});
<code>

