const setActiveBreakpoint = (breakpointName, breakpointSize) => ({
	type: 'SET_ACTIVE_BREAKPOINT', 
	breakpointName, 
	breakpointSize
});

export default setActiveBreakpoint;