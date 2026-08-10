import os
import re

pages_dir = 'src/pages'
for root, dirs, files in os.walk(pages_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            content = re.sub(r'import ContextualAmazonAffiliateCard.*?\n', '', content)
            content = re.sub(r'<ContextualAmazonAffiliateCard[^>]*/>', '', content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
