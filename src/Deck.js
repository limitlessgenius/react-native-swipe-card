
import React, { Component } from 'react'
import { View, Animated, Text } from 'react-native'


class Deck extends Component {

	renderCards() {
		return this.props.cardData.map(card => {
			return (
				this.props.renderCard(card)
			)
		})
	}

	render() {
		return (
			<View>
				{this.renderCards()}
			</View>
		)
	}
}

export default Deck
