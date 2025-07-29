import 'nextra-theme-docs/style.css';
import '@/styles/app.css';

import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import Image from 'next/image';
import Logo from '@/assets/tuwaLogo.svg';

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

function svgXmlToBase64(svgXmlString) {
  // Encode the string for URI components to handle special characters
  const encodedSvg = encodeURIComponent(svgXmlString);

  // Convert the encoded string to Base64
  const base64 = btoa(encodedSvg);

  // Return the Base64 data URI
  return `data:image/svg+xml;base64,${base64}`;
}

const navbar = (
  <Navbar
    logo={<Image width={50} height={50} src={Logo} alt="Logo" />}
    // ... Your additional navbar options
  />
);
const footer = <Footer>Apache License {new Date().getFullYear()} © TUWA.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
