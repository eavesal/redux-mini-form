
import React from 'react';
import _ from 'lodash';
import cx from 'classnames';

type Props = {
  onSubmit: (event: Event) => void,
  formId: string,
  isWidget?: boolean,
  stopSubmitPropagation?: boolean,
  disabled?: boolean,
  className?: string,
  children?: Node
};

export default class Form extends React.Component<Props> {
  static defaultProps = {
    disabled: false,
    stopSubmitPropagation: false,
    isWidget: false
  }

  constructor(props: Props) {
    super(props);

    this._debouncedOnSubmit = _.debounce((...args) => this._onSubmit(...args), 1000, {
      leading: true,
      trailing: false
    });
  }

  _debouncedOnSubmit: (*) => void;

  _onSubmit = (event: Event) => {
    const {stopSubmitPropagation, onSubmit} = this.props;
    event && event.preventDefault();
    stopSubmitPropagation && event && event.stopPropagation();
    this._hiddenKeyboard();
    onSubmit(event);
  }

  _hiddenKeyboard() {
    document.activeElement && document.activeElement.blur();
    // This fixes fixed position elements on iOS < 7.1 (e.g. spinner): http://stackoverflow.com/a/24670746
    setTimeout(function() {
      document.body && window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
    }, 0);
  }

  render() {
    const {className, isWidget, disabled, children, formId, ...restProps} = this.props;

    return (
      <form
        name={formId}
        onSubmit={this._debouncedOnSubmit}
        className={cx(className, {form: true, widget: isWidget})}
        noValidate
        {..._.omit(restProps, 'stopSubmitPropagation', 'onSubmit')}
        >
        <fieldset disabled={disabled}>
          {children}
        </fieldset>
      </form>
    );
  }
}