# redux-mini-form

[![Build Status](https://travis-ci.org/eavesal/redux-mini-form.svg?branch=master)](https://travis-ci.org/eavesal/redux-mini-form)

`redux-mini-form` is a minimal form solution that supply basic form operations and works with `React` and `Redux`.

## Examples

* [Simple Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/simple)
* [Submit Validation Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/submit-validation)
* [Sync Validation Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/sync-validation)
* [Wizard Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/wizard-form)

## Overview

The basic concept for `redux-mini-form` is simple. We use a HOC `withForm` to do CURD operations to redux store and supply some CURD method in React context. And also we use `withField` to consume the context and supply necessary method to field component.

## Quick Start

### Installation

```bash
$ npm install --save redux-mini-form
```

or

```bash
$ yarn add redux-mini-form
```

### Usage Example

Suppose we want to build a simple form with a field named username. And we want use `redux-mini-form` to track the changes in redux store and log the value when user submited this form.

First, we bring the form reducer to our global store.

```jsx
import {Provider, connect} from 'react-redux'
import {formReducer} from 'redux-mini-form'

const reducer = combineReducers({
  form: formReducer, // Currently, we only support the `formReducer` to be a child of root reducer and named `form`.
})
const store = createStore(reducer)
```

Second, we can create our own field component or use the build-in field.

```jsx
import {InputField} from 'redux-mini-form'

// Use the build-in InputField
const UsernameInputField = (...props) =>
	<InputField name='username' {...props} />

// Build your own InputField
const CustomizedInputField = ({onChange, value}) =>
	<input onChange={onChange} name='username' value={value} />
const UsernameInputField = withField({
  parse: (e) => e.target.value,
})(CustomizedInputField)
```

Third, we can create our own `UsernameInputField` in a form.

```jsx
import {
  withForm,
  Form
} from 'redux-mini-form'

const SimpleForm = ({onSubmit, formId, onReset}) => (
  <Form onSubmit={onSubmit} formId={formId}> // The `Form` component comes from redux-mini-form is not necessary, you can build your own Form component.
    <UsernameInputField/>
  </Form>
)

export default withForm()(SimpleForm)
```

Now, we can use our `SimpleForm` in our app like this.

```jsx
// onSubmit have all field values as a parameter.
<SimpleForm formId='SIMPLE_FORM' onSubmit={() => null} />
```

## Documentation

In progress.

## Building examples from sources

```bash
$ git clone git@github.com:eavesal/redux-mini-form.git
$ cd redux-mini-form/examples/simple-form # or other exaples from examples folder
$ npm install
$ npm run ci
```

