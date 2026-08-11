import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageTitle(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Description
    const defaultDesc = "Nahayo SvetsTeknik ab i Gällivare – certifierad licenssvetsning, industrisvetsning och svetsteknik med högsta precision.";
    const activeDesc = description || defaultDesc;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', activeDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', activeDesc);
      document.head.appendChild(metaDescription);
    }

    // 3. Update Open Graph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', activeDesc);

    // 4. Update Twitter Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', activeDesc);

    // 5. Update Canonical Link
    const absoluteUrl = `${window.location.origin}${pathname === '/' ? '' : pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', absoluteUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', absoluteUrl);
      document.head.appendChild(canonical);
    }

    // 6. Update Open Graph URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', absoluteUrl);

    // 7. Update OG & Twitter Image to default logo
    const logoUrl = `${window.location.origin}/logo-transparent.png`;
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', logoUrl);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', logoUrl);
      document.head.appendChild(ogImage);
    }

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', logoUrl);
    } else {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      twitterImage.setAttribute('content', logoUrl);
      document.head.appendChild(twitterImage);
    }

  }, [title, description, pathname]);
}

