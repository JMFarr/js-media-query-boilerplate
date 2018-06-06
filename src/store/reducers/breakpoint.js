export const breakpoint = (state = { 
	name: 'default', 
	size: null 
}, action) => {
	switch(action.type) {
		case 'SET_ACTIVE_BREAKPOINT': 
			return { 
				name: action.breakpointName, 
				size: action.breakpointSize 
			};
							
		default: { return state; }
	}
}