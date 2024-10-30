'use client';
import React, { useEffect } from 'react';

function DisqusComments({ slug, title }) {
  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = slug;
          this.page.title = title;
          this.page.url = window.location.href;
        },
      });
    } else {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://https-ozzysg-web-blogger-vercel-app.disqus.com/embed.js'; // Ganti dengan shortname Disqus Anda
      s.setAttribute('data-timestamp', +new Date());
      d.body.appendChild(s);
    }
  }, [slug, title]);

  return (
    <div className="disqus-comments">
      <div id="disqus_thread"></div>
    </div>
  );
}

export default DisqusComments;
