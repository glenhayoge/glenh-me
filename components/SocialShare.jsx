import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

function SocialShare({ title, url }) {
  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
        Facebook
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        Twitter
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        LinkedIn
      </LinkedinShareButton>
    </div>
  );
}

export default SocialShare;
