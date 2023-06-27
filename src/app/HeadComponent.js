import Head from 'next/head';


function HeadComponent() {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Az Ügynökség - Influencer Marketing a Sikerért</title>
        <meta name="description" content="Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel." key="desc" />
        <meta property="og:title" content="Az Ügynökség - Influencer Marketing a Sikerért" />
        <meta property="og:description" content="Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel." />
        <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
      </Head>
    </div>
  );
}

export default HeadComponent;