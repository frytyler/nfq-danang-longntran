import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

class PreviewMedia extends React.PureComponent {
  renderImage = mediaUrl => <Image thumbnail src={mediaUrl} />;

  renderVideo = mediaUrl => (
    <video controls style={{ width: '100%' }}>
      <source src={mediaUrl} type="video/mp4" />
      <track kind="captions" />
    </video>
  );

  render() {
    const { mediaUrl } = this.props;
    return (
      <div className="job__thumb">
        {mediaUrl && mediaUrl.endsWith('.mp4')
          ? this.renderVideo(mediaUrl)
          : this.renderImage(mediaUrl)
        }
      </div>
    );
  }
}

PreviewMedia.propTypes = {
  mediaUrl: PropTypes.string.isRequired,
};

export default PreviewMedia;
