import os
import re

components_dir = 'src/components'
for root, dirs, files in os.walk(components_dir):
    for file in files:
        if file.endswith('ToolCore.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove imports
            content = re.sub(r'import AmazonResultPopUpModal.*?\n', '', content)
            content = re.sub(r'import AmazonCalculatorResultWidget.*?\n', '', content)
            
            # Remove usages
            content = re.sub(r'<AmazonCalculatorResultWidget[^>]*/>', '', content)
            content = re.sub(r'<AmazonResultPopUpModal[^>]*/>', '', content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
