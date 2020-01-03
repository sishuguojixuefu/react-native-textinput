/**
 * fix react-native bug: [Android] Using TextInput inside ViewPagerAndroid causes context menu (copy/paste) in some cases to not display - https://github.com/facebook/react-native/issues/20887
 */
import React from 'react'
import { TextInput as RNTextInput, TextInputProps } from 'react-native'

export default class TextInput extends React.Component<TextInputProps, any> {
  static defaultProps = {
    editable: true,
  }

  constructor(props) {
    super(props)
    this.state = {
      editable: !props.editable,
    }
  }

  componentDidMount() {
    if (this.props.editable) {
      setTimeout(() => {
        this.setState({ editable: true })
      }, 100)
    }
  }

  render() {
    return <RNTextInput { ...this.props } editable = { this.state.editable} />
  }
}
