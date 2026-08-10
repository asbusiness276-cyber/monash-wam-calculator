import os
import re

src_dir = 'src'
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = re.sub(r'import ContextualAmazonAffiliateCard.*?\n', '', content)
            new_content = re.sub(r'<ContextualAmazonAffiliateCard[^>]*/>', '', new_content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
