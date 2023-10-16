// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-us">
                <Head>
                    {/* Add your meta tags, stylesheets, and scripts here */}
                    {/* ... */}

                    {/* Add Google AdSense script */}
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-5342472284328375",  // Your AdSense client ID
                  enable_page_level_ads: true
                });
              `,
                        }}
                    />
                </Head>
                <body>
                    <nav className="nav">
                        {/* ... */}
                    </nav>
                    <Main />
                    <NextScript />
                    <footer>
                        <span>{/* ... */}</span>
                    </footer>

                    {/* Your provided content */}
                    <div>
                        <p>
                            Use YouTubeThumbleDownload.com to quickly and easily download YouTube thumbnails. Save thumbnails of YouTube videos Get excellent thumbnail photos in Full HD (1080), HD (720), SD, and tiny sizes from any YouTube video. YouTube videos (HD, HQ, 1080p, and 4K) are supported formats.
                        </p>
                        <p>
                            Why use YouTubeThambleDownload.com's YouTube Thumbnail Downloader? Use this YouTube thumbnail downloader to take screenshots from YouTube videos and use them for animations, presentations, and other projects.
                        </p>
                        <p>
                            How Do I Use the Downloader for YouTube Thumbnails? To use this YouTube downloader step-by-step, refer to the screenshots that are provided. Copying the YouTube video link of the desired thumbnail to download is an easy operation. You may also download YouTube covers with ease.
                        </p>
                        {/* Add the rest of your content */}
                        <p>
                            Is it permissible to download YouTube thumbnails? Yes, downloading thumbnails from YouTube videos is entirely legal. Please be aware, nevertheless, that movies and thumbnails are copyrighted goods. Before reusing an author's work, be sure you have their permission.
                        </p>
                        {/* Add the rest of your content */}
                        <p>
                            Improve Your Thumbnails to Gain SEO Advantages
                        </p>
                        {/* Add the rest of your content */}
                        <p>
                            Visit youtubethambledownload.com to easily explore the potential of YouTube thumbnails. Download YouTube video thumbnails with ease to improve your presentations, elevate your content, and establish your online presence.
                        </p>
                        <p>
                            Download YouTube Video Thumbnails Visit YouTubeThumbnailDownloader.com - Copyright 2023
                        </p>
                    </div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
