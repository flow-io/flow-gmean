/**
*
*	STREAM: geometric mean
*
*
*	DESCRIPTION:
*		- Calculates the geometric mean of streamed data.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var reducer = require( 'flow-reduce' );
	var N = 0,
		rSumLogs = 0,
		pow = 0;

	// FUNCTIONS //

	/**
	* FUNCTION: reduce( gmean, data)
	*	Defines the data reduction.
	*
	* @param {number} data - numeric stream data
	* @returns {number} reduced data
	*/
	function reduce ( gmean, x ) {
		if ( x > 0 ) {
			N++;
			rSumLogs += Math.log(x);
			pow = rSumLogs / N;
			gmean = Math.pow(Math.E, pow); 
			return gmean;
		}
		else {
			console.log("Error: data <= 0, omitting value " + x );
		}

	} // end FUNCTION reduce()


	// STREAM //

	/**
	* FUNCTION: Stream()
	*	Stream constructor.
	*
	* @returns {Object} Stream instance
	*/
	function Stream() {
		this._value = 0;

		return this;
	} // end FUNCTION Stream()

	/**
	* METHOD: value ( value )
	*	Setter and getter for initial value from which to begin accumulation. If a value is provided, sets the initial accumulator value. If no value is provided, returns the initial accumulator value.
	*
	* @param {number} value - initial value
	* @returns {object|number} instance object or initial value
	*/
	Stream.prototype.value = function( value ) {
		if ( !arguments.length ) {
			return this._value;
		}
		if ( typeof value !== 'number' || value !== value ) {
			throw new Error( 'value()::invalid input argument. Initial value must be numeric.' );
		}
		this._value = value;
		return this;
	}; // end METHOD value()

	/**
	* METHOD: stream()
	*	Returns a JSON data reduction stream for calculating the geometric mean.
	*/
	Stream.prototype.stream = function() {
		var rStream = reducer()
			.reduce( reduce )
			.acc( this._value )
			.stream();
			return rStream;
	}; // end METHOD stream()


	// EXPORTS //

	module.exports = function createStream() {
		return new Stream();
	};

})();