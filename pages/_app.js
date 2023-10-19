import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
              description="Get Free High-Quality YouTube Thumbnail Images! Our simple application allows you to download thumbnail images of varying quality. Simply enter the thumbnail URL of the video below and click 'Get Thumbnail Image.' Begin now to easily access your desired thumbnails!"
              canonical="https://www.youtubethambledownload.com/"
        openGraph={{
            url: "https://www.youtubethambledownload.com/",
          title: "Youtube Thumbnail Downloader",
            description: "Get Free High-Quality YouTube Thumbnail Images! Our simple application allows you to download thumbnail images of varying quality. Simply enter the thumbnail URL of the video below and click 'Get Thumbnail Image.' Begin now to easily access your desired thumbnails!",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
