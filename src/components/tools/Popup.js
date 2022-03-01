import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';

const Popup = (props) => {

	const [popupAnimation, setPopupAnimation] = useState(props.show)
	const transitionPopupAnimation = useTransition(popupAnimation, {
		config: {
			duration: 250
		},
		from: { opacity: 0, position: 'fixed', zIndex: '1001', height: '100vh', width: '100%', top: '0px' },
		enter: { opacity: 1, position: 'fixed', zIndex: '1001', height: '100vh', width: '100%', top: '0px' },
		leave: { opacity: 0, position: 'fixed', zIndex: '1001', height: '100vh', width: '100%', top: '0px' },
	})

	if (popupAnimation !== props.show) {
		setPopupAnimation(props.show)
	}

	return (
		transitionPopupAnimation((style, visible) =>
			visible ?
				<animated.div style={style}>
					{props.children}
				</animated.div>
				: ''
		)
	);
}

export default Popup;