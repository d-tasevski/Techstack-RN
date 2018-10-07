import React from 'react';
import { Text, StyleSheet } from 'react-native';

import CardSection from './CardSection';

const ListItem = props => {
	return (
		<CardSection>
			<Text style={styles.title}>{props.library.title}</Text>
		</CardSection>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		paddingLeft: 15,
	},
});

export default ListItem;
