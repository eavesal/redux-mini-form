# redux-mini-form

[![Build Status](https://travis-ci.org/eavesal/redux-mini-form.svg?branch=master)](https://travis-ci.org/eavesal/redux-mini-form)

`redux-mini-form` is a minimal form solution that supply basic form operations and works with `React` and `Redux`.

### Installation

```bash
npm install --save redux-mini-form
```

## Examples

* [Simple Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/simple)
* [Submit Validation Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/submit-validation)
* [Sync Validation Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/sync-validation)
* [Wizard Form](https://github.com/eavesal/redux-mini-form/tree/master/examples/wizard-form)

## Overview

The basic concept for `redux-mini-form` is simple. We use a HOC `withForm` to do CURD operations to redux store and supply some CURD method in React context. And also we use `withField` to consume the context and supply necessary method to field component.

#### Data Flow When Display

```mermaid
graph TD
  A(default data from withForm) -->|overwrite previous| B[view data from store]
  B -->|overwrite previous| C[model data from store]
  C -->|defaultValues, view data, model data| D[Form Component Wrapped with withForm]
  D -->|form data| E[Component wrapped with withField]
  E -->|field value after format| F[Customized Field Component]
```

#### Data Flow When Update View Values

```mermaid
graph TD
  A(Customized Field Component) -->|update value after parse| B[Component wrapped with withField]
  B -->|onChange| C[Form Component Wrapped with withForm]
  C -->|update view value| D[Store]
```

#### Data Flow When Update View Values

```mermaid
graph TD
  A(Form Component Wrapped with withForm) -->|onSubmit| B{validation errors}
  B -->|yes, update model data| C(Store)
  B -->|no, pass errors to| D(Component wrapped with withField)
```