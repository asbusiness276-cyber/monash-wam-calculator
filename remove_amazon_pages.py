import os
import re

pages_dir = 'src/pages'
for root, dirs, files in os.walk(pages_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove imports
            content = re.sub(r'import AmazonStudentDeals.*?\n', '', content)
            
            # Remove usages
            content = re.sub(r'<AmazonStudentDeals[^>]*/>', '', content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
