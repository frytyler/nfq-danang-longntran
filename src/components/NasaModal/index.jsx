import React from 'react';
import PropTypes from 'prop-types';
import { SkyLightStateless as Modal } from 'react-skylight';

/* eslint-disable */
class NasaModal extends React.PureComponent {
  static defaultProps = {
    initialOn: false,
    onToggleModal: () => {},
  };

  static getDerivedStateFromProps(props) {
    return {
      active: props.initialOn,
    };
  }
  initialState = { active: this.props.initialOn };
  state = this.initialState;

  getStateHelper = () => ({
    active: this.state.active,
  });

  toggleModal = () =>
    this.setState(
      ({ active }) => ({ active: !active }),
      () => this.props.onToggleModal(this.state.active),
    );

  render() {
    const { active } = this.state;
    return (
      <Modal isVisible={active} onCloseClicked={this.toggleModal}>
        {this.props.children(this.getStateHelper())}
      </Modal>
    );
  }
}

NasaModal.propTypes = {
  initialOn: PropTypes.bool,
  onToggleModal: PropTypes.func,
  children: PropTypes.func.isRequired,
};

export default NasaModal;
