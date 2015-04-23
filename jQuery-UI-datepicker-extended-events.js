(function ($) {
	$.extend($.datepicker, {

		/* Reference the orignal function so we can override it and call it later */
		_inlineDatepicker2: $.datepicker._inlineDatepicker,

		/* Override the _inlineDatepicker method */
		_inlineDatepicker: function (target, inst) {

		    // Call the original
		    this._inlineDatepicker2(target, inst);

		    var beforeShow = $.datepicker._get(inst, 'beforeShow');

		    if (beforeShow) {
			beforeShow.apply(target, [target, inst]);
		    }
		}
	});

	/* Keep original one */
	$.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;

	/* Add afterShow event which will be fired after datepicker is updated. */
	/* Override the _updateDatepicker method */
	$.datepicker._updateDatepicker = function(inst)	{
		$.datepicker._updateDatepicker_original(inst);
		var afterShow = this._get(inst, 'afterShow');
		if (afterShow) {
		    afterShow.apply((inst.input ? inst.input[0] : null),
		    		[(inst.input ? inst.input.val() : ''), inst, inst.dpDiv.find('td:has(a)')]);  // trigger custom callback
		}
	};

	/* 'before' Event for change month or year (called when value in select box change). */
	/* Keep original one */    
	$.datepicker._selectMonthYearOrig = $.datepicker._selectMonthYear;
	
	/* Override the _selectMonthYear method */
	$.datepicker._selectMonthYear = function(id, select, period) {
		var inst = this._getInst($(id)[0]);
		var beforeChange = $.datepicker._get(inst, 'beforeChangeMonthYear');
		if(beforeChange) {
			/* If event return true, then change to that month or year */
			if(beforeChange.apply(this, [inst, select])) {
				this._selectMonthYearOrig(id, select, period);
			}
			/* If false, then don't change and keep old month or year selected */
			else {
				$(select).val(period == 'M' ? inst.selectedMonth : inst.selectedYear);
			}
		}
		else {
			this._selectMonthYearOrig(id, select, period);
		}
	};

	/* 'before' Event for ajust date (called when < or > button clicked). */
	/* Keep original one */
	$.datepicker._adjustDateOrig = $.datepicker._adjustDate;

	/* Override the _adjustDate method */
	$.datepicker._adjustDate = function(id, offset, period)	{
		var inst = this._getInst($(id)[0]);
		var beforeAdjustDate = $.datepicker._get(inst, 'beforeAdjustDate');
		if(beforeAdjustDate) {
			if(beforeAdjustDate.apply(this, [inst, offset, period])) {
				this._adjustDateOrig(id, offset, period);
			}
		}
		else {
			this._adjustDateOrig(id, offset, period);
		}
	};
}(jQuery));
