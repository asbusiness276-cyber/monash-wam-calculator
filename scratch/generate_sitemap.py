import json
import re

ORIGIN = "https://mycalculatorhub.pro"

def generate_sitemap():
    routes = [
        '/',
        '/calculators',
        '/articles',
        '/about-us',
        '/about-author',
        '/contact-us',
        '/write-for-us',
        '/privacy-policy',
        '/terms-and-conditions',
        '/disclaimer'
    ]
    
    # Read tools
    with open('src/data/pageSeo.json', 'r', encoding='utf-8') as f:
        tools = json.load(f)
        for path in tools.keys():
            if not path.startswith('/'):
                path = '/' + path
            routes.append(path)
            
    # Read articles
    with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
        c = f.read()
        slugs = re.findall(r'slug:\s*[\'\"\`]+([^\'\"\`]+)', c)
        for s in slugs:
            routes.append(f"/articles/{s}")
            
    # Remove duplicates and maintain order
    unique_routes = []
    seen = set()
    for r in routes:
        if r not in seen:
            unique_routes.append(r)
            seen.add(r)
            
    # Generate XML
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]
    
    for route in unique_routes:
        xml_lines.append('  <url>')
        xml_lines.append(f'    <loc>{ORIGIN}{route}</loc>')
        xml_lines.append('    <changefreq>weekly</changefreq>')
        xml_lines.append('    <priority>0.8</priority>')
        xml_lines.append('  </url>')
        
    xml_lines.append('</urlset>')
    
    with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
        f.write('\n'.join(xml_lines))
        
    print(f"Generated sitemap with {len(unique_routes)} routes.")

if __name__ == '__main__':
    generate_sitemap()
