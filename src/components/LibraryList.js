import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
	state = {
		selected: null,
	};
	// keyExtractor tells the list to use the ids for the react keys instead of the default key property.
	_keyExtractor = item => item.id;

	_renderItem = ({ item }) => (
		<ListItem
			library={item}
			onPressItem={this._onPressItem}
			selected={!!this.state.selected.get(item.id)}
		/>
	);

	render() {
		return (
			<View>
				<FlatList
					data={this.props.libraries}
					// By passing extraData={this.state} to FlatList we make sure FlatList itself will re-render when the state.selected changes.
					// Without setting this prop, FlatList would not know it needs to re-render any items because it is also a
					// PureComponent and the prop comparison will not show any changes.
					extraData={this.state}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ libraries }) => ({
	libraries,
});

export default connect(mapStateToProps)(LibraryList);
