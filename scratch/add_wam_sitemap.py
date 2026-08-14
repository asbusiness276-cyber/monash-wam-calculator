import re

with open('public/sitemap.xml', 'r', encoding='utf-8') as f:
    content = f.read()

if '/wam-calculator</loc>' not in content:
    new_loc = '    <loc>https://mycalculatorhub.pro/wam-calculator</loc>\n'
    content = content.replace('</urlset>', f'{new_loc}</urlset>')
    with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Added /wam-calculator to sitemap.xml")
else:
    print("Already in sitemap.xml")
