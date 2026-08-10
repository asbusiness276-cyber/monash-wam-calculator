import os
import re

components_dir = 'src/components'
for root, dirs, files in os.walk(components_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            content = re.sub(r'import { triggerSmartAmazonRedirect } from \'../utils/amazonRedirect\';\n', '', content)
            content = re.sub(r'triggerSmartAmazonRedirect\(.*?\);\n', '', content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
