import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends React.Component {
  renderItem(library) {
    return <ListItem library={library}></ListItem>;
  }
  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {data: state.libraries};
};
export default connect(mapStateToProps)(LibraryList);
