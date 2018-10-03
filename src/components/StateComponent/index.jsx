/* eslint-disable no-nested-ternary, no-underscore-dangle, react/sort-comp */
import React from 'react';
import { object, func, oneOfType, node, shape } from 'prop-types';

const cleanProps = props => {
  const {
    initialState,
    refs,
    getRefs,
    didMount,
    didUpdate,
    willUnmount,
    getSnapshotBeforeUpdate,
    shouldUpdate,
    render,
    ...rest
  } = props;
  return rest;
};

class Component extends React.Component {
  static propTypes = {
    initialState: shape(object),
    refs: shape(object),
    getRefs: func,
    didMount: func,
    didUpdate: func,
    willUnmount: func,
    getSnapshotBeforeUpdate: func,
    shouldUpdate: func,
    render: func,
    children: oneOfType([func, node]),
  };

  static defaultProps = {
    initialState: {},
    refs: {},
    getRefs: () => ({}),
    didMount: () => {},
    didUpdate: () => {},
    willUnmount: () => {},
    getSnapshotBeforeUpdate: () => {},
    shouldUpdate: () => {},
    render: () => {},
    children: () => {},
  };

  state = this.props.initialState;
  _refs = this.props.refs || this.props.getRefs(this.getArgs());
  _setState = (...args) => this.setState(...args);
  _forceUpdate = (...args) => this.forceUpdate(...args);

  getArgs() {
    const {
      state,
      props,
      _setState: setState,
      _forceUpdate: forceUpdate,
      _refs: refs,
    } = this;
    return {
      state,
      props: cleanProps(props),
      refs,
      setState,
      forceUpdate,
    };
  }

  componentDidMount() {
    if (this.props.didMount) this.props.didMount(this.getArgs());
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate({
        props: this.props,
        state: this.state,
        nextProps: cleanProps(nextProps),
        nextState,
      });
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.didUpdate) {
      this.props.didUpdate(
        Object.assign(this.getArgs(), {
          prevProps: cleanProps(prevProps),
          prevState,
        }),
        snapshot,
      );
    }
  }

  componentWillUnmount() {
    if (this.props.willUnmount) {
      this.props.willUnmount({
        state: this.state,
        props: cleanProps(this.props),
        refs: this._refs,
      });
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.getSnapshotBeforeUpdate) {
      return this.props.getSnapshotBeforeUpdate(
        Object.assign(this.getArgs(), {
          prevProps: cleanProps(prevProps),
          prevState,
        }),
      );
    }
    return null;
  }

  render() {
    const { children, render } = this.props;
    return render
      ? render(this.getArgs())
      : typeof children === 'function'
        ? children(this.getArgs())
        : children || null;
  }
}

export default Component;
