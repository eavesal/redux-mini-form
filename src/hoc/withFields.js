// @flow

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import type {ComponentType} from 'react';

type Props = {
  names: string[]
};

const withFields = (Component: ComponentType<*>) => {
  class WithFields extends React.Component<Props> {
    static contextTypes = {
      form: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        unregister: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        formData: PropTypes.object.isRequired
      })
    }

    _onChange = (name: string, ...args: *) => {
      const {names} = this.props;
      const {onChange} = this.context.form;
      if (_.includes(names, name)) {
        onChange(name, ...args);
      }
    }

    render() {
      const {names, ...restProps} = this.props;
      const {formData} = this.context.form;

      return (
        <Component
          formData={_.pick(formData, names)}
          onChange={this._onChange}
          {...restProps}
          />
      );
    }
  }
  return WithFields;
};

export default withFields;