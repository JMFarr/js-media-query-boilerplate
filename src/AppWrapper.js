import React from 'react';
import { connect } from 'react-redux';
import {breakpoints} from './utils/responsiveHelpers';
import setActiveBreakpoint from './store/actions/setActiveBreakpoint';
import PropTypes from 'prop-types';

class AppWrapper extends React.Component {
	constructor (props) {
		super(props);

		this.mediaQueryState = [];
	}

	componentDidMount () {
		
		Object.keys(breakpoints).forEach(key => {
			const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`);
			query.breakpoint = breakpoints[key];
			query.name = key;		

			function breakpointChange() {				
				this.dispatchActiveQuery();
			}

			query.addListener(breakpointChange.bind(this));

			this.mediaQueryState.push(query);
		});
	}

	dispatchActiveQuery () {
		const { dispatch } = this.props;

		const activeQuery = this.mediaQueryState.reduce((prev, curr) => {
			return curr.matches ? curr : prev && prev.matches ? prev : null;			 
		});

		const breakpointName = activeQuery ? activeQuery.name : 'default';

		const breakpointSize = activeQuery && activeQuery.breakpoint;

		dispatch(setActiveBreakpoint(breakpointName, breakpointSize));		
	}

	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

AppWrapper.propTypes = {
	dispatch: PropTypes.func
}

export default connect()(AppWrapper);