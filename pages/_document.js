// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-us">
                <Head>
                    {/* Add your meta tags, stylesheets, and scripts here */}
                    {/* ... */}

                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5342472284328375"
                        crossorigin="anonymous"></script>
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
                        After that, copy and paste the URL into the input box. The website will then automatically create thumbnails for you in various sizes. Once you click the thumbnail download button, your system will quickly save it. Please save the photos if you use an Android device and follow the proper steps if you use an iPhone.
                        <p>
                            Is it permissible to download YouTube thumbnails? Yes, downloading thumbnails from YouTube videos is entirely legal. Please be aware, nevertheless, that movies and thumbnails are copyrighted goods. Before reusing an author's work, be sure you have their permission.
                        </p>
                        This YouTube Thumbnail Grabber Website's Compatibility Everything is compatible with our YouTube thumbnail downloader, with the exception of iPhones, which have limitations on saving images. It won't cause any problems if your iPhone is jailbroken. It runs flawlessly on a variety of Android smartphones, computers, and desktop systems.
                        Thumbnail Copyright Considerations on YouTube You are not able to remove the copyright from any YouTube screenshot that you download. Before using someone in your work, always get their permission, especially if you want to use them again on YouTube. However, there are usually no copyright restrictions when using them outside of YouTube, as in Photoshop or for website logos.
                        Are old YouTube thumbnails optimally designed? It is not SEO-friendly to reuse YouTube thumbnails. Google indexes the majority of YouTube thumbnails, which makes them easily distinguishable as duplicates. But you can use programs like Photoshop to improve the thumbnail's originality, which will return its SEO-friendliness.
                        Is it permissible to download YouTube thumbnails?
                        Of course! You can legally download YouTube video thumbnails for your creative endeavors with our YouTube thumbnail downloader. But it's crucial to respect copyright and, if required, obtain the appropriate licenses.

                        <p>
                            Improve Your Thumbnails to Gain SEO Advantages
                        </p>
                        Even though repeating YouTube thumbnails might not be SEO-friendly by nature because of possible duplicate content problems, you can make them more unique by utilizing Photoshop or other image editing software to add effects. These improvements have the ability to boost the SEO effectiveness of your thumbnails and make them stand out.
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
