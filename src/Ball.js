
import React, { Component } from 'react'
import { View, Animated } from 'react-native'

class Ball extends Component {

	componentWillMount() {

		const { x, y } = this.props.display
		this.position = new Animated.ValueXY(0, 0)
		Animated.spring(this.position, {
			toValue: { x, y }
		}).start()
	}

	render() {
		
		return (
			<Animated.View style={this.position.getLayout()}>
				<View style={styles.ball} />
			</Animated.View>
		)
	}
}

const styles = {
	ball: {
		height: 60, 
		width: 60, 
		borderRadius: 30, 
		borderWidth: 30, 
	}
}

export default Ball

