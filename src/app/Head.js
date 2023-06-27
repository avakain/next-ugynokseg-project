import Head from 'next/head';

function HeadComponent() {
  return (
    <Head>
      {/* Use the icon file convention instead of hardcoding the link tags */}
      <link rel="icon" href="/favicon.ico" />
      {/* Use the metadata file convention to set the title and description */}
      <title>Az Ügynökség - Influencer Marketing a Sikerért</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel." key="desc" />
      {/* Use the og file convention to set the open graph tags */}
      <meta property="og:title" content="Az Ügynökség - Influencer Marketing a Sikerért" />
      <meta property="og:description" content="Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel." />
    </Head>
  );
}

export default HeadComponent;