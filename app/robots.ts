import { MetadataRoute } from 'next'

export default function robots({ params }: { params: { locale: string } }): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/*', '/admin/*'],
        },
        // update domain after production release
        sitemap: `https://www.meec-web.vercel.app/${params.locale}/sitemap.xml`,
    }
}