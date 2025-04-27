import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/*', '/admin/*'],
        },
        // update domain after production release
        sitemap: `https://meec-web.vercel.app/sitemap.xml`,
    }
}