import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import CardSection from './CardSection';

const ListItem = ({ selectLib, library: { id, title } }) => {
	return (
		<TouchableWithoutFeedback onPress={() => selectLib(id)}>
			<View>
				<CardSection>
					<Text style={styles.title}>{title}</Text>
				</CardSection>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		paddingLeft: 15,
	},
});

export default ListItem;
