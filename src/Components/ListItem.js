import React from 'react';
import CardSection from './CardSection';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../Actions';

class ListItem extends React.Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const {descriptionStyle} = styles;
    if (this.props.library.item.id === this.props.data) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>
            {this.props.library.item.description}
          </Text>
        </CardSection>
      );
    }
  }
  render() {
    const {titleStyle} = styles;
    const {id, title, description} = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 15,
  },
};

const mapStateToProps = (state) => {
  return {data: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(ListItem);
