
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	flowFactory = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'flow-gmean', function tests() {
	'use strict';

	it( 'should export a factory function', function test() {
		expect( flowFactory ).to.be.a( 'function' );
	});

	it( 'should provide a method to get the initial accumulator value', function test() {
		var tStream = flowFactory();
		expect( tStream.value() ).to.be.a( 'number' );
	});

	it( 'should provide a method to set the initial accumulator value', function test() {
		var tStream = flowFactory();
		tStream.value( 5 );
		assert.strictEqual( tStream.value(), 5 );
	});

	it( 'should not allow a non-numeric initial accumulator value', function test() {
		var tStream = flowFactory();
		
		expect( badValue( '5' ) ).to.throw( Error );
		expect( badValue( [] ) ).to.throw( Error );
		expect( badValue( {} ) ).to.throw( Error );
		expect( badValue( null ) ).to.throw( Error );
		expect( badValue( undefined ) ).to.throw( Error );
		expect( badValue( NaN ) ).to.throw( Error );
		expect( badValue( function(){} ) ).to.throw( Error );

		function badValue( value ) {
			return function() {
				tStream.value( value );
			};
		}
	});

});