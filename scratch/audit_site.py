import os
import re

def check_images():
    missing = []
    print("Checking images...")
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    matches = re.findall(r'src=[\'\"\`]?(/[^ \'\"]+\.(png|jpe?g|webp|svg|ico))', content)
                    for m in matches:
                        img_path = m[0].split('?')[0]
                        pub_path = os.path.join('public', img_path.lstrip('/'))
                        if not os.path.exists(pub_path):
                            missing.append(f"{path}: {img_path}")
    
    # Check images defined in articles.ts
    with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
        content = f.read()
        matches = re.findall(r'featuredImage:\s*[\'\"\`](/[^ \'\"]+\.(png|jpe?g|webp|svg|ico))', content)
        for m in matches:
            img_path = m[0].split('?')[0]
            pub_path = os.path.join('public', img_path.lstrip('/'))
            if not os.path.exists(pub_path):
                missing.append(f"articles.ts (featuredImage): {img_path}")
                
    if missing:
        for m in set(missing):
            print("MISSING:", m)
    else:
        print("No missing images found in src= tags.")

def check_broken_links():
    print("Checking broken links...")
    # First gather all valid routes
    routes = set(['/', '/articles', '/calculators', '/about-us', '/contact-us', '/write-for-us', '/terms-and-conditions', '/privacy-policy'])
    # From pageSeo.json
    import json
    try:
        with open('src/data/pageSeo.json', 'r', encoding='utf-8') as f:
            seo_data = json.load(f)
            for k in seo_data.keys():
                routes.add(k if k.startswith('/') else '/' + k)
    except:
        pass
        
    broken = []
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    # simplistic check for internal hrefs
                    matches = re.findall(r'href=[\'\"](/[^\'\"]+)[\'\"]', content)
                    for m in matches:
                        link = m.split('#')[0]
                        if link and link not in routes and not link.startswith('/article-images') and link != '/404':
                            broken.append(f"{path}: {link}")
    
    if broken:
        for m in set(broken):
            print("POSSIBLY BROKEN LINK:", m)
    else:
        print("No obviously broken links found.")

if __name__ == '__main__':
    check_images()
    check_broken_links()
