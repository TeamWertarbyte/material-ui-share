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
  /** Sets title for content to share. */
  title: PropTypes.string,
  /** Sets text for content to share. */
  text: PropTypes.string,
  /** Sets url for content to share. */
  url: PropTypes.string,
  /** Fired when share action returns an error. */
  onFailure: PropTypes.func,
  /** Fired when share action succeeded. */
  onSuccess: PropTypes.func,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object
}
