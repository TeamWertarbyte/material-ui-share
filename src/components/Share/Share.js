import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'material-ui'
import { SocialShare } from 'material-ui/svg-icons'

/**
 * Material design share
 * @see [Share](https://developers.google.com/web/updates/2016/09/navigator-share)
 */
export default class Share extends Component {
  handleClick (title, text, url, onFailure, onSuccess) {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      })
        .then(() => onSuccess())
        .catch((error) => onFailure(error))
    }
  }

  render () {
    const {
      title,
      text,
      url,
      onFailure,
      onSuccess,
      ...iconButtonProps
    } = this.props

    return (
      <IconButton
        onTouchTap={() => this.handleClick(title, text, url, onFailure, onSuccess)}
        {...iconButtonProps}
      >
        <SocialShare />
      </IconButton>
    )
  }
}

Share.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  onFailure: PropTypes.func,
  onSuccess: PropTypes.func,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object
}
